import { Router } from 'express';
import { getMentors } from '../controllers/mentorController';

const router = Router();

router.get('/', getMentors);

export default router;
