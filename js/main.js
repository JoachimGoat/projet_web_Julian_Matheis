// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
    console.log("Brainrot Engine Loaded... Skibidi bop yes yes.");

    // 1. Mise à jour automatique de l'année dans le footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Animation simple sur le titre (Bonus Créativité [cite: 2321])
    const title = document.querySelector("h1");
    if (title) {
        title.addEventListener("mouseover", () => {
            title.style.color = "#00ff9d";
        });
        title.addEventListener("mouseout", () => {
            title.style.color = "initial";
        });
    }
});