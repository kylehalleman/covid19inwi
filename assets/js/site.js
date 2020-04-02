(function() {
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

  addLabelToToc();
  wrapToc();
})();
