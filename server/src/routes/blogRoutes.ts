import { Router } from 'express';
import { getBlogPosts } from '../controllers/blogController';

const router = Router();

router.get('/', getBlogPosts);

export default router;
