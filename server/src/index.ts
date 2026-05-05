import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/courses', (_req, res) => {
  res.json({
    courses: [
      { id: 1, title: 'DSA Foundation', subtitle: 'Complete Data Structures Basics', author: 'Vikas Singh', price: 49, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/playground_3d72d32c/photo-1565120130276-dfbd9a7a3ad7.jpeg' },
      { id: 2, title: 'Dynamic Programming Mastery', subtitle: 'Master Complex Dynamic Programming', author: 'Ohta Kin', price: 18, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-fd2f5c7f' },
      { id: 3, title: 'Graph Theory Pro', subtitle: 'Advanced Graph Algorithms and Applications', author: 'Alicia Puma', price: 14, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-fbd89520' },
      { id: 4, title: 'System Design', subtitle: 'Scalable System Architecture', author: 'Francisco Maia', price: 28, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-a3e42ca0' },
      { id: 5, title: 'Sliding Window Mastery', subtitle: 'Competitive Programming Strategy Guide', author: 'Yolanda Barrueco', price: 32, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-c96fa13e' },
      { id: 6, title: 'Trie and Segment Trees', subtitle: 'Bit Manipulation and Math', author: 'Edward Lindgren', price: 26, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-c47cca11' },
      { id: 7, title: 'Dynamic Programming Advanced', subtitle: 'Recursion and Backtracking Deep-Dive', author: 'Joslin Rodgers', price: 28, image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-054e039c' },
    ]
  });
});

app.get('/api/mentors', (_req, res) => {
  res.json({
    mentors: [
      { id: 1, name: 'Arjun Mehta', role: 'Lead Instructor', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-143b2d1c' },
      { id: 2, name: 'Priya Sharma', role: 'Technical Mentor', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-62b6f277' },
      { id: 3, name: 'Rohan Gupta', role: 'Competitive Programmer', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-6d754146' },
      { id: 4, name: 'Sanya Iyer', role: 'Algorithm Researcher', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-b93232df' },
      { id: 5, name: 'Jafaris Long', role: 'Math', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-143b2d1c' },
      { id: 6, name: 'Nerte Gronw', role: 'Physics', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-62b6f277' },
      { id: 7, name: 'Bernarr Dominik', role: 'Chemistry', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-6d754146' },
      { id: 8, name: 'Karlien Nijhuis', role: 'Informatics', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-b93232df' },
    ]
  });
});

app.get('/api/testimonials', (_req, res) => {
  res.json({
    testimonials: [
      { id: 1, name: 'Amit Chen', role: 'Software Engineer', text: 'AlgoMonkx transformed my coding skills; the pattern-based approach made complex graph problems finally click for me.', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-143b2d1c' },
      { id: 2, name: 'Kevin Zhang', role: 'Full Stack Developer', text: 'I love the clean UI and the Monaco editor integration. It feels like a professional development environment.', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-24515789' },
      { id: 3, name: 'Siddharth Rao', role: 'FAANG Engineer', text: 'The real-time contests and detailed analytics helped me track my progress and land a FAANG offer.', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-0980461e' },
    ]
  });
});

app.get('/api/blog-posts', (_req, res) => {
  res.json({
    posts: [
      { id: 1, title: 'Mastering DSA Patterns for Top Interviews', excerpt: 'Learn why mastering patterns is more effective than memorizing individual solutions for technical coding interviews.', date: '20 Mar, 2024' },
      { id: 2, title: 'How to Improve Your Contest Rating', excerpt: 'Strategies and tips to climb the leaderboard and improve your competitive programming skills effectively.', date: '15 Mar, 2024' },
      { id: 3, title: 'The Future of AI in Coding', excerpt: 'Exploring how artificial intelligence is transforming the way we learn and practice programming.', date: '12 Mar, 2024' },
    ]
  });
});

app.get('/api/stats', (_req, res) => {
  res.json({
    stats: [
      { value: '10k+', label: 'Active Coding Monks', description: 'Global community members.' },
      { value: '1M+', label: 'DSA Problems Solved', description: 'Successful submissions.' },
      { value: '500+', label: 'Live Coding Contests', description: 'Hosted every year.' },
    ]
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
