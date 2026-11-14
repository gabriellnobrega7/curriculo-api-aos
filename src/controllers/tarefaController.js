
import tarefaService from '../services/tarefaService.js';

const criar = async (req, res) => {
  try {
    const tarefa = await tarefaService.criar(req.body);
    return res.status(201).json(tarefa);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao criar tarefa.' });
  }
};

const listar = async (req, res) => {
  try {
    const tarefas = await tarefaService.listar();
    return res.status(200).json(tarefas);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao listar tarefas.' });
  }
};

const buscarPorId = async (req, res) => {
  try {
    const tarefa = await tarefaService.buscarPorId(req.params.objectId);

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }

    return res.status(200).json(tarefa);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar tarefa.' });
  }
};

const atualizar = async (req, res) => {
  try {
    const tarefa = await tarefaService.atualizar(
      req.params.objectId,
      req.body
    );

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }

    return res.status(200).json(tarefa);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao atualizar tarefa.' });
  }
};

const remover = async (req, res) => {
  try {
    const tarefa = await tarefaService.remover(req.params.objectId);

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada.' });
    }

    return res.status(200).json({ mensagem: 'Tarefa removida com sucesso.' });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao remover tarefa.' });
  }
};

export default {
  criar,
  listar,
  buscarPorId,
  atualizar,
  remover
};
