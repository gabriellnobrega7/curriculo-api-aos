
import { z } from 'zod';

const tarefaSchema = z.object({
  descricao: z.string()
    .trim()
    .min(1, 'A descrição é obrigatória.'),

  concluida: z.boolean().optional()
});

const validarCriacao = (req, res, next) => {
  const resultado = tarefaSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      erro: 'Dados inválidos.',
      detalhes: resultado.error.issues
    });
  }

  req.body = resultado.data;
  next();
};

const validarAtualizacao = (req, res, next) => {
  const atualizacaoSchema = tarefaSchema.partial();
  const resultado = atualizacaoSchema.safeParse(req.body);

  if (!resultado.success || Object.keys(resultado.data ?? {}).length === 0) {
    return res.status(400).json({
      erro: 'Dados inválidos ou nenhuma informação enviada.',
      detalhes: resultado.success ? [] : resultado.error.issues
    });
  }

  req.body = resultado.data;
  next();
};

export {
  validarCriacao,
  validarAtualizacao
};
