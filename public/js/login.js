// captura o form 
const form = document.getElementById('loginForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // impede o envio padrão do form

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // validação simples no front-end
    if (!email || !password) {
        msg.textContent = 'Preencha todos os campos.';
        return;
    }

    try {
        // envia requisição para o servidor
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // CORRIGIDO
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            msg.textContent = data.error || 'Erro no login.';
            return;
        }

        // armazena o token
        localStorage.setItem('token', data.token);

        // redireciona após login bem-sucedido
        window.location.href = '/dashboard.html';

    } catch (error) {
        msg.textContent = 'Erro na conexão com o servidor.';
    }

});
