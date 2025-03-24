document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    const password = document.getElementById('password').value;

    // Vérification si le mot de passe contient "nut"
    if (password.includes('nut')) {
        // Si oui, redirection vers la page d'accueil
        window.location.href = "accueil.html"; // Remplace "accueil.html" par l'URL de ta page d'accueil
    } else {
        // Si non, afficher un message d'erreur
        document.getElementById('error-message').style.display = 'block';
    }
});
