import db from '../models/index.js';

const { User, AcademicExperience, ProfessionalExperience, Project } = db;

// Buscar currículo completo pelo ID do usuário
export const getFullCurriculum = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await User.findByPk(id, {
      include: [
        { model: AcademicExperience },
        { model: ProfessionalExperience },
        { model: Project }
      ]
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar currículo:', error);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

// Criar novo usuário/currículo
export const createUser = async (req, res) => {
  try {
    const { name, title, bio, email, phone } = req.body;
    const newUser = await User.create({ name, title, bio, email, phone });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Erro interno ao criar usuário.' });
  }
};