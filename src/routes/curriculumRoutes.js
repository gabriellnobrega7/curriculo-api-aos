import { Router } from 'express';
import {
  users,
  academics,
  professionals,
  projects,
  getFullCurriculum,
} from '../controllers/curriculumController.js';

const router = Router();

// Users
router.get('/users', users.list);
router.get('/users/:id/full', getFullCurriculum);
router.get('/users/:id', users.getOne);
router.post('/users', users.create);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.remove);

// Experiências acadêmicas
router.get('/academic', academics.list);
router.get('/academic/:id', academics.getOne);
router.post('/academic', academics.create);
router.put('/academic/:id', academics.update);
router.delete('/academic/:id', academics.remove);

// Experiências profissionais
router.get('/professional', professionals.list);
router.get('/professional/:id', professionals.getOne);
router.post('/professional', professionals.create);
router.put('/professional/:id', professionals.update);
router.delete('/professional/:id', professionals.remove);

// Projetos
router.get('/projects', projects.list);
router.get('/projects/:id', projects.getOne);
router.post('/projects', projects.create);
router.put('/projects/:id', projects.update);
router.delete('/projects/:id', projects.remove);

export default router;