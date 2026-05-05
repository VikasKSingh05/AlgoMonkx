import { Request, Response } from 'express';
import { Course } from '../types';

const courses: Course[] = [
  { id: 1, title: 'DSA Foundation', subtitle: 'Complete Data Structures Basics', author: 'Vikas Singh', price: 49, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/playground_3d72d32c/photo-1565120130276-dfbd9a7a3ad7.jpeg' },
  { id: 2, title: 'Dynamic Programming Mastery', subtitle: 'Master Complex Dynamic Programming', author: 'Ohta Kin', price: 18, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-fd2f5c7f' },
  { id: 3, title: 'Graph Theory Pro', subtitle: 'Advanced Graph Algorithms and Applications', author: 'Alicia Puma', price: 14, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-fbd89520' },
  { id: 4, title: 'System Design', subtitle: 'Scalable System Architecture', author: 'Francisco Maia', price: 28, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-a3e42ca0' },
  { id: 5, title: 'Sliding Window Mastery', subtitle: 'Competitive Programming Strategy Guide', author: 'Yolanda Barrueco', price: 32, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-c96fa13e' },
  { id: 6, title: 'Trie and Segment Trees', subtitle: 'Bit Manipulation and Math', author: 'Edward Lindgren', price: 26, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-c47cca11' },
  { id: 7, title: 'Dynamic Programming Advanced', subtitle: 'Recursion and Backtracking Deep-Dive', author: 'Joslin Rodgers', price: 28, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-054e039c' },
];

export const getCourses = (_req: Request, res: Response): void => {
  res.json({ courses });
};
