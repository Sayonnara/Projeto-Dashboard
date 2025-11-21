## Projeto Dashboard — Sistema com Login JWT + Dashboard Responsiva

### Descrição Geral

Este projeto é um sistema completo de autenticação e dashboard, desenvolvido para estudo e prática profissional.
Ele inclui:

- Cadastro de usuários

- Login com JWT (token seguro)

- Proteção de rotas

- Dashboard moderna e responsiva

- Leitura dos dados do usuário logado

- Logout funcional

- Backend em Node.js/Express

- Frontend HTML, CSS e JS puros


✔️ Autenticação

✔️ APIs REST

✔️ Consumo de API no front-end

✔️ Proteção de rotas

✔️ Estruturação de pastas

✔️ Criação e organização de projeto real

✔️ Deploy no GitHub e Vercel

🖥️ Tecnologias Utilizadas Backend

Node.js

Express

JWT (jsonwebtoken)

Bcryptjs

dotenv

Frontend

HTML5

CSS3

JavaScript puro

Dashboard 

📂 Estrutura de Pastas
Projeto-Dashboard/
│
├── public/

│   ├── css/

│   │   ├── dashboard.css

│   │   ├── home.css

│   │   └── styles.css

│   ├── js/

│   │   ├── login.js

│   │   ├── signup.js

│   │   └── dashboard.js

│   ├── login.html

│   ├── signup.html

│   ├── dashboard.html

│   └── home.html

│
├── server.js

├── package.json

├── package-lock.json

└── .env   (não enviar para o GitHub)


🔐 Fluxo de Autenticação

Usuário cria conta

Senha é criptografada com bcrypt

No login, o sistema valida email/senha

Se estiver correto → gera JWT

O frontend salva o token no localStorage

Todas as páginas protegidas consultam /me

O usuário só acessa a dashboard com token válido

🚀 Como rodar localmente
1️⃣ Instalar dependências

npm install

2️⃣ Criar arquivo 
.env

JWT_SECRET=uma_chave_super_secreta
PORT=3000

3️⃣ Rodar servidor
npm start

4️⃣ Acessar no navegador

http://localhost:3000/login.html

📸 Demonstração do Projeto **Em Breve**



🌎 Deploy



## 🎯 Objetivo do Projeto

### Este projeto foi criado com foco em para meus  estudos conhecimento e melhoria de  habilidades

✔️ Prática real de autenticação

✔️ Entender comunicação entre frontend e backend

✔️ Construir uma dashboard moderna

✔️ Criar portfólio sólido para entrevistas de desenvolvedora júnior
