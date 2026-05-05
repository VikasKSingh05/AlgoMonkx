import { Request, Response } from 'express';
import { Mentor } from '../types';

const mentors: Mentor[] = [
  { id: 1, name: 'Arjun Mehta', role: 'Lead Instructor', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-143b2d1c' },
  { id: 2, name: 'Priya Sharma', role: 'Technical Mentor', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-62b6f277' },
  { id: 3, name: 'Rohan Gupta', role: 'Competitive Programmer', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-6d754146' },
  { id: 4, name: 'Sanya Iyer', role: 'Algorithm Researcher', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-b93232df' },
  { id: 5, name: 'Jafaris Long', role: 'Math', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-143b2d1c' },
  { id: 6, name: 'Nerte Gronw', role: 'Physics', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-62b6f277' },
  { id: 7, name: 'Bernarr Dominik', role: 'Chemistry', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-6d754146' },
  { id: 8, name: 'Karlien Nijhuis', role: 'Informatics', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-b93232df' },
];

export const getMentors = (_req: Request, res: Response): void => {
  res.json({ mentors });
};
