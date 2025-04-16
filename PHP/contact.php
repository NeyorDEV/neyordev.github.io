<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'] ?? '';
    $email = $_POST['email'] ?? '';
    $tel = $_POST['tel'] ?? '';
    $motif = $_POST['motif'] ?? '';
    $creneau = $_POST['creneau'] ?? '';
    $premiere_demande = $_POST['premiere_demande'] ?? '';
    $message = $_POST['message'] ?? '';
    $errors = array();
    if(empty($nom)) {
        $errors[] = "Le nom est requis.";
    } elseif(!preg_match("/^[a-zA-Z ]+$/", $nom)) {
        $errors[] = "Le nom doit contenir uniquement des lettres.";
    }
    if(empty($email)) {
        $errors[] = "L'adresse email est requise.";
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Format d'email invalide.";
    }
    if(!empty($tel) && !preg_match("/^[0-9]{10}$/", $tel)) {
        $errors[] = "Format de numéro de téléphone invalide.";
    }
    if(empty($message)) {
        $errors[] = "Le message est requis.";
    }
    if(empty($errors)) {
        $contenu = "Nom: $nom\n";
        $contenu .= "Email: $email\n";
        $contenu .= "Téléphone: $tel\n";
        $contenu .= "Motif: $motif\n";
        $contenu .= "Créneau: $creneau\n";
        $contenu .= "Première demande: $premiere_demande\n";
        $contenu .= "Message: $message\n";
        echo "Votre message a été envoyé avec succès.";
    } else {
        foreach($errors as $error) {
            echo $error . "<br>";
        }
    }
} else {
    echo "Accès non autorisé.";
}
?>