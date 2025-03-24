// Simuler une base de données (à remplacer par un backend réel)
const utilisateurs = {
    "123456": { password: "nutrea123", ventes: 1000, paiements: [100, 50, 75] },
    "654321": { password: "revendeur456", ventes: 2000, paiements: [200, 100] }
};

// Gestion de la connexion
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const id = document.getElementById("idRevendeur").value;
    const password = document.getElementById("password").value;
    
    if (utilisateurs[id] && utilisateurs[id].password === password) {
        localStorage.setItem("revendeurId", id);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").innerText = "Identifiants incorrects.";
    }
});

// Affichage des données sur le dashboard
if (window.location.pathname.includes("dashboard.html")) {
    const id = localStorage.getItem("revendeurId");
    if (!id || !utilisateurs[id]) {
        window.location.href = "index.html";
    } else {
        document.getElementById("totalVentes").innerText = utilisateurs[id].ventes + " €";
        document.getElementById("bonus").innerText = (utilisateurs[id].ventes * 0.10) + " €";
        
        let historiqueList = document.getElementById("historique-paiements");
        utilisateurs[id].paiements.forEach(montant => {
            let li = document.createElement("li");
            li.innerText = montant + " €";
            historiqueList.appendChild(li);
        });
    }
}

// Déconnexion
function logout() {
    localStorage.removeItem("revendeurId");
    window.location.href = "index.html";
}
