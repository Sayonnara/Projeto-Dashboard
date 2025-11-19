document.getElementById("formSignup").addEventListener("submit", async (e) => { 
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    const response = await fetch("/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Usuário criado com sucesso!");
        window.location.href = "login.html";
    } else {
        alert(data.erro || "Erro ao registrar");
    }
});
