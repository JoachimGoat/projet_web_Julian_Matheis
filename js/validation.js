document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;

            // Récupération des champs
            const nom = document.getElementById("nom");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            // Reset des erreurs
            document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

            // Validation Nom
            if (nom.value.trim().length < 2) {
                document.getElementById("error-nom").textContent = "Ton blaze est trop court (min 2 chars).";
                isValid = false;
            }

            // Validation Email (Regex simple)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                document.getElementById("error-email").textContent = "Email invalide. Tu trolles ?";
                isValid = false;
            }

            // Validation Message
            if (message.value.trim() === "") {
                document.getElementById("error-message").textContent = "Écris quelque chose, ne sois pas NPC.";
                isValid = false;
            }

            // Si invalide, on empêche l'envoi
            if (!isValid) {
                event.preventDefault();
            } else {
                alert("Message envoyé au CEO de l'Ohio !");
            }
        });
    }
});