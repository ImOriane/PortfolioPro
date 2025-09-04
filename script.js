function fadeBackground(pagePrecedente, pageActuel) {

    if (pagePrecedente.includes("index.html")) {
      if (pageActuel !== "index.html") {
          document.querySelector("#bg").classList.add("bgfadeOut");
      }
    } else {
      if (pageActuel == "index.html") {
          document.querySelector("#bg").classList.add("bgfadeIn");
      }
    }
  }
  