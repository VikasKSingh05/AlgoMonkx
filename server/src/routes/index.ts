import { Router } from 'express';
import courseRoutes from './courseRoutes';
import mentorRoutes from './mentorRoutes';
import testimonialRoutes from './testimonialRoutes';
import blogRoutes from './blogRoutes';
import statsRoutes from './statsRoutes';

const router = Router();

router.use('/courses', courseRoutes);
router.use('/mentors', mentorRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/blog-posts', blogRoutes);
router.use('/stats', statsRoutes);

export default router;
