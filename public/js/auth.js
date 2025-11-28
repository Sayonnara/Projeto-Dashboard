// URL base da API hospedada no Render
const API_URL = "https://projeto-dashboard-c5qc.onrender.com";

// Verifica se existe token salvo (se não existir → volta pro login)
const token = localStorage.getItem('token');

if (!token) {
  window.location.href = "/login.html";
}

// Função para carregar os dados do usuário logado
async function carregarUsuario() {
  try {
    const res = await fetch(`${API_URL}/me`, {
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
    const el = document.getElementById("username");
    if (el) el.textContent = data.username;

  } catch (error) {
    console.error("Erro ao conectar ao servidor:", error);
    alert("Erro ao conectar ao servidor.");
  }
}

carregarUsuario();

// Botão de logout
const btnLogout = document.getElementById("logout");
if (btnLogout) {
  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  });
}
