"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            let isValid = true;
            const nom = document.getElementById("nom");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

            if (nom.value.trim().length < 2) {
                document.getElementById("error-nom").textContent = "Blaze trop court (min 2).";
                isValid = false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById("error-email").textContent = "Email invalide NPC.";
                isValid = false;
            }
            if (message.value.trim() === "") {
                document.getElementById("error-message").textContent = "Écris un truc sigma.";
                isValid = false;
            }

            // Si JS détecte une erreur, il bloque l'envoi vers le PHP
            if (!isValid) event.preventDefault();
        });
    }
});