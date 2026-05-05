import { Request, Response } from 'express';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  { id: 1, title: 'Mastering DSA Patterns for Top Interviews', excerpt: 'Learn why mastering patterns is more effective than memorizing individual solutions for technical coding interviews.', date: '20 Mar, 2024' },
  { id: 2, title: 'How to Improve Your Contest Rating', excerpt: 'Strategies and tips to climb the leaderboard and improve your competitive programming skills effectively.', date: '15 Mar, 2024' },
  { id: 3, title: 'The Future of AI in Coding', excerpt: 'Exploring how artificial intelligence is transforming the way we learn and practice programming.', date: '12 Mar, 2024' },
];

export const getBlogPosts = (_req: Request, res: Response): void => {
  res.json({ posts });
};
