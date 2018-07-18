var navButton = document.querySelector("aside button"),
    disciplineMenu = document.getElementById("secondary-navigation");

if (navButton) {
    navButton.addEventListener("click", function () {
        var expanded = this.getAttribute("aria-expanded") === "true" || false;
        this.setAttribute("aria-expanded", !expanded);
        var visible = disciplineMenu.getAttribute("data-hidden") === "true" || false;
        disciplineMenu.setAttribute("data-hidden", !visible);
        navButton.classList.toggle("active");
    });
}

objectFitImages();