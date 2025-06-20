import fs from 'fs';
import path from 'path';

const reservasPath = path.join(process.cwd(), 'data', 'reservations.json');

function garantirArquivoReservas() {
  if (!fs.existsSync(reservasPath)) {
    const mesasVazias = Array.from({ length: 21 }, (_, i) => ({
      id: i + 1,
      reservada: false,
      nome: '',
      sobrenome: ''
    }));
    fs.writeFileSync(reservasPath, JSON.stringify(mesasVazias, null, 2));
  }
}

function carregarReservas() {
  garantirArquivoReservas();
  const dados = fs.readFileSync(reservasPath, 'utf-8');
  return JSON.parse(dados);
}

function salvarReservas(dados) {
  fs.writeFileSync(reservasPath, JSON.stringify(dados, null, 2));
}

export const listarReservas = (req, res) => {
  try {
    const mesas = carregarReservas();
    res.json(mesas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao carregar reservas' });
  }
};

export const reservarMesa = (req, res) => {
  const { id, nome, sobrenome } = req.body;
  if (!id || !nome || !sobrenome) {
    return res.status(400).json({ erro: 'Dados incompletos.' });
  }

  const mesas = carregarReservas();
  const index = mesas.findIndex(m => m.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Mesa não encontrada' });
  if (mesas[index].reservada) return res.status(400).json({ erro: 'Mesa já reservada.' });

  mesas[index] = { id, reservada: true, nome, sobrenome };
  salvarReservas(mesas);
  res.json({ mensagem: 'Mesa reservada com sucesso', mesa: mesas[index] });
};

export const cancelarReserva = (req, res) => {
  const id = parseInt(req.params.id);
  const mesas = carregarReservas();
  const index = mesas.findIndex(m => m.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Mesa não encontrada' });

  mesas[index] = { id, reservada: false, nome: '', sobrenome: '' };
  salvarReservas(mesas);
  res.json({ mensagem: 'Reserva cancelada com sucesso' });
};