"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Année dynamique Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Animation dynamique Titre (Bonus JS)
    const title = document.querySelector("h1");
    if (title) {
        title.addEventListener("mouseover", () => title.style.transform = "scale(1.05)");
        title.addEventListener("mouseout", () => title.style.transform = "scale(1)");
    }
});