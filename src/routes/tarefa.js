
import { Router } from 'express';
import tarefaController from '../controllers/tarefaController.js';
import {
  validarCriacao,
  validarAtualizacao
} from '../middlewares/validarTarefa.js';

const router = Router();

// Criar tarefa
router.post('/', validarCriacao, tarefaController.criar);

// Listar tarefas
router.get('/', tarefaController.listar);

// Buscar tarefa por UUID
router.get('/:objectId', tarefaController.buscarPorId);

// Atualizar tarefa
router.put('/:objectId', validarAtualizacao, tarefaController.atualizar);

// Excluir tarefa
router.delete('/:objectId', tarefaController.remover);

export default router;
