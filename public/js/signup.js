document.getElementById("formSignup").addEventListener("submit", async (e) => { 
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    // URL base da API hospedada no Render
const API_URL = "https://projeto-dashboard-c5qc.onrender.com";

    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Usuário criado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert(data.error || "Erro ao registrar");
    }
});
