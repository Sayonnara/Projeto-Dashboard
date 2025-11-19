// Verifica se existe token salvo (se não existir → volta pro login)
const token = localStorage.getItem('token');

if (!token) {
    window.location.href = "/login.html";
}

// Função para carregar os dados do usuário logado
async function carregarUsuario() {
    try {
        const res = await fetch('/me', {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const data = await res.json();

        if (!res.ok) {
            alert("Sessão expirada. Faça login novamente.");
            localStorage.removeItem("token");
            window.location.href = "/login.html";
            return;
        }

        // Exibe o nome do usuário na dashboard
        document.getElementById("username").textContent = data.username;

    } catch (error) {
        alert("Erro ao conectar ao servidor.");
    }
}

carregarUsuario();

// Botão de logout
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
});
