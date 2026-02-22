<?php
// On s'assure que le fichier est appelé via la soumission du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Sécurisation des données (pour éviter les failles XSS)
    $nom = htmlspecialchars(trim($_POST['user_name']));
    $email = filter_var(trim($_POST['user_email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['user_message']));
    $date = date('Y-m-d H:i:s');

    // 2. Formatage des données pour le stockage
    $ligne_a_sauvegarder = "[$date] Nom: $nom | Email: $email | Message: $message" . PHP_EOL;

    // 3. Stockage dans un fichier texte (se créera tout seul s'il n'existe pas)
    $fichier_stockage = "messages_reçus.txt";
    
    // FILE_APPEND permet d'ajouter à la suite sans écraser les anciens messages
    file_put_contents($fichier_stockage, $ligne_a_sauvegarder, FILE_APPEND | LOCK_EX);

    // 4. Affichage de la page de confirmation
    echo "<!DOCTYPE html>
    <html lang='fr'>
    <head>
        <meta charset='UTF-8'>
        <link rel='stylesheet' href='../css/style.css'>
        <title>Fax Envoyé</title>
    </head>
    <body>
        <header><h1>Message <span class='highlight'>Enregistré</span></h1></header>
        <main class='content-container' style='text-align:center; padding: 50px;'>
            <h2>C'est carré $nom ! 🗿</h2>
            <p>Ton message a bien été sauvegardé dans notre base de données secrète de l'Ohio.</p>
            <br>
            <a href='../index.html' class='btn-submit' style='text-decoration:none; display:inline-block;'>Retour au QG</a>
        </main>
    </body>
    </html>";
} else {
    // Si quelqu'un tape contact.php directement dans l'URL, on le renvoie
    header("Location: contact.html");
    exit();
}
?>