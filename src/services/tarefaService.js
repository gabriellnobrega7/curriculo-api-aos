import db from '../models/index.js';

const { Tarefa } = db;

const criar = async (dados) => {
  return await Tarefa.create(dados);
};

const listar = async () => {
  return await Tarefa.findAll();
};

const buscarPorId = async (id) => {
  return await Tarefa.findByPk(id);
};

const atualizar = async (id, dados) => {
  const tarefa = await buscarPorId(id);

  if (!tarefa) {
    return null;
  }

  return await tarefa.update(dados);
};

const remover = async (id) => {
  const tarefa = await buscarPorId(id);

  if (!tarefa) {
    return null;
  }

  await tarefa.destroy();
  return tarefa;
};

export default {
  criar,
  listar,
  buscarPorId,
  atualizar,
  remover
};
