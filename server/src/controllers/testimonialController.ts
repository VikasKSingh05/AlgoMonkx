import { Request, Response } from 'express';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 1, name: 'Amit Chen', role: 'Software Engineer', text: 'AlgoMonkx transformed my coding skills; the pattern-based approach made complex graph problems finally click for me.', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-143b2d1c' },
  { id: 2, name: 'Kevin Zhang', role: 'Full Stack Developer', text: 'I love the clean UI and the Monaco editor integration. It feels like a professional development environment.', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-24515789' },
  { id: 3, name: 'Siddharth Rao', role: 'FAANG Engineer', text: 'The real-time contests and detailed analytics helped me track my progress and land a FAANG offer.', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-0980461e' },
];

export const getTestimonials = (_req: Request, res: Response): void => {
  res.json({ testimonials });
};
