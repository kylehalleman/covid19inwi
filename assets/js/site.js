(function () {
  function addLabelToToc() {
    var toc = document.getElementById("markdown-toc");

    if (toc) {
      toc.setAttribute("aria-label", "Table of contents");
    }
  }

  function wrapToc() {
    var main = document.querySelector("main");
    var h1 = document.querySelector("h1");
    var toc = document.getElementById("markdown-toc");
    if (h1 && toc && main && Element.prototype.hasOwnProperty("prepend")) {
      var section = document.createElement("section");
      section.className = "table-of-contents";
      section.appendChild(h1);
      section.appendChild(toc);
      main.prepend(section);
    }
  }

  function findTarget(target, selector) {
    if (target && target !== document) {
      if (typeof target.matches === "function" && target.matches(selector)) {
        return target;
      } else {
        return findTarget(target.parentNode, selector);
      }
    } else {
      return null;
    }
  }

  function delegate(selector, handler) {
    return function (e) {
      var target = findTarget(e.target, selector);
      if (target) {
        handler.call(target, e);
      }
    };
  }

  function addSectionLinks() {
    var main = document.querySelector("main");
    main.addEventListener(
      "mouseover",
      delegate("h2, h3, h4, h5, h6", function (e) {
        var anchor = this.querySelector(".anchor");
        if (anchor) {
          anchor.hidden = false;
        }
      }),
      false
    );
    main.addEventListener(
      "mouseout",
      delegate("h2, h3, h4, h5, h6", function (e) {
        var anchor = this.querySelector(".anchor");
        if (anchor) {
          anchor.hidden = true;
        }
      }),
      false
    );
  }

  function addBackToTopLinks() {
    var main = document.querySelector("main");
    var headings = main.querySelectorAll("h2, h3, h4, h5, h6");
    var headingsArray = headings ? Array.prototype.slice.call(headings) : [];

    if (headingsArray.length) {
      headingsArray.forEach(function (el) {
        var anchor = document.createElement("a");
        anchor.className = "anchor";
        anchor.textContent = "🔗";
        anchor.href = "#" + el.id;
        anchor.hidden = true;
        anchor.setAttribute("aria-hidden", true);
        el.appendChild(anchor);

        var link = document.createElement("a");
        link.className = "back-to-top";
        link.textContent = "Back to top";
        link.setAttribute("aria-hidden", true);
        link.href = "#top";
        el.appendChild(link);
      });
    }
  }

  addLabelToToc();
  wrapToc();
  addSectionLinks();
  addBackToTopLinks();
})();
