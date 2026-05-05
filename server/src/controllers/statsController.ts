import { Request, Response } from 'express';
import { Stat } from '../types';

const stats: Stat[] = [
  { value: '10k+', label: 'Active Coding Monks', description: 'Global community members.' },
  { value: '1M+', label: 'DSA Problems Solved', description: 'Successful submissions.' },
  { value: '500+', label: 'Live Coding Contests', description: 'Hosted every year.' },
];

export const getStats = (_req: Request, res: Response): void => {
  res.json({ stats });
};
