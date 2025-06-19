import fs from 'fs';
import path from 'path';

const reservasPath = path.join(process.cwd(), 'data', 'reservations.json');

// Função para garantir que o arquivo existe (com mesas vazias se precisar)
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

export const listarReservas = (req, res) => {
  try {
    const mesas = carregarReservas();
    res.json(mesas);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao carregar reservas' });
  }
};

// Futuramente aqui vão funções para criar/editar/excluir reservas, separando a lógica do filesystem
