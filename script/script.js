function urlPrevious(n, s) {
    n = n || 'url_prev';
    s = s || sessionStorage;
    var p = s.getItem(n);
    p = p ? p : '';
    s.setItem(n, location.href);
    return p;
}
function fadeBackground (pageActuel) {
    pagePrecedente=urlPrevious();
    if (pagePrecedente.includes("index.html")) {
      if (pageActuel !== "index.html") {
          document.querySelector("#bg").classList.add("bgfadeOut");
      }
    } else {
      if (pageActuel === "index.html") {
          document.querySelector("#bg").classList.add("bgfadeIn");
      }
    }
  }
  