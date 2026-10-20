import db from '../models/index.js';

const { User, AcademicExperience, ProfessionalExperience, Project } = db;

// Trata erros de forma padronizada
const handleError = (res, error) => {
  console.error(error);
  if (
    error.name === 'SequelizeValidationError' ||
    error.name === 'SequelizeUniqueConstraintError' ||
    error.name === 'SequelizeForeignKeyConstraintError' ||
    error.name === 'SequelizeDatabaseError'
  ) {
    return res.status(400).json({ error: error.message });
  }
  return res.status(500).json({ error: 'Erro interno do servidor' });
};

// Gera as 5 operações de CRUD para qualquer model
const makeCrud = (Model, label) => ({
  list: async (req, res) => {
    try {
      const where = {};
      if (req.query.userId) where.UserId = req.query.userId;
      const items = await Model.findAll({ where, order: [['id', 'ASC']] });
      res.json(items);
    } catch (error) {
      handleError(res, error);
    }
  },

  getOne: async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: `${label} não encontrado(a)` });
      res.json(item);
    } catch (error) {
      handleError(res, error);
    }
  },

  create: async (req, res) => {
    try {
      const item = await Model.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      handleError(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: `${label} não encontrado(a)` });
      await item.update(req.body);
      res.json(item);
    } catch (error) {
      handleError(res, error);
    }
  },

  remove: async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: `${label} não encontrado(a)` });
      await item.destroy();
      res.json({ message: `${label} removido(a) com sucesso` });
    } catch (error) {
      handleError(res, error);
    }
  },
});

export const users = makeCrud(User, 'Usuário');
export const academics = makeCrud(AcademicExperience, 'Experiência acadêmica');
export const professionals = makeCrud(ProfessionalExperience, 'Experiência profissional');
export const projects = makeCrud(Project, 'Projeto');

// Currículo completo (usuário + relacionamentos)
export const getFullCurriculum = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [AcademicExperience, ProfessionalExperience, Project],
    });
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
  } catch (error) {
    handleError(res, error);
  }
};

// Mantido por compatibilidade com a rota antiga
export const createUser = users.create;