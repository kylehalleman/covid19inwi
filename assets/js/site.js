(function() {
  function addLabelToToc() {
    var toc = document.getElementById("markdown-toc");

    if (toc) {
      toc.setAttribute("aria-label", "Table of contents");
    }
  }

  addLabelToToc();
})();
