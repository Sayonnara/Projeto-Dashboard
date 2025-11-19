require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let USERS = [];

// ---------------------- REGISTER ----------------------
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
        return res.status(400).json({ error: 'Preencha todos os campos.' });

    const exists = USERS.find(u => u.email === email);
    if (exists)
        return res.status(400).json({ error: 'Email já cadastrado.' });

    const hash = await bcrypt.hash(password, 10);

    USERS.push({
        id: Date.now(),
        username,
        email,
        password: hash
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

// ---------------------- LOGIN ----------------------
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = USERS.find(u => u.email === email);
    if (!user)
        return res.status(401).json({ error: 'Credenciais inválidas' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok)
        return res.status(401).json({ error: 'Credenciais inválidas' });

    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
});

// ---------------------- ROTA PROTEGIDA /me ----------------------
app.get('/me', (req, res) => {
    const auth = req.headers.authorization;

    if (!auth)
        return res.status(401).json({ error: 'Token não fornecido' });

    const token = auth.split(' ')[1];

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const user = USERS.find(u => u.id === data.id);

        res.json({
            id: user.id,
            username: user.username,
            email: user.email
        });

    } catch {
        return res.status(401).json({ error: 'Token inválido' });
    }
});

// ---------------------- START ----------------------
app.listen(3000, () =>
    console.log("Servidor rodando em http://localhost:3000")
);
