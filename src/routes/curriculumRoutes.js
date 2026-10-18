import { Router } from 'express';
import { getFullCurriculum, createUser } from '../controllers/curriculumController.js';

const router = Router();

router.get('/users/:id/full', getFullCurriculum);
router.post('/users', createUser);

export default router;