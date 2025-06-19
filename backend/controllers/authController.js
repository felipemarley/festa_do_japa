import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname, '../data/users.json');

export function register(req, res) {
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  let users = [];
  if (fs.existsSync(usersFilePath)) {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    users = JSON.parse(data);
  }

  const jaExiste = users.find(user => user.email === email);
  if (jaExiste) {
    return res.status(409).json({ mensagem: 'Usuário já cadastrado.' });
  }

  users.push({ nome, sobrenome, email, senha });
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.status(201).json({ mensagem: 'Usuário registrado com sucesso.' });
}

export function login(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  if (!fs.existsSync(usersFilePath)) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
  }

  const data = fs.readFileSync(usersFilePath, 'utf-8');
  const users = JSON.parse(data);

  const user = users.find(u => u.email === email && u.senha === senha);

  if (!user) {
    return res.status(401).json({ mensagem: 'Email ou senha inválidos.' });
  }

  res.status(200).json({ mensagem: 'Login realizado com sucesso.', nome: user.nome });
}
