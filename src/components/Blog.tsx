import { useEffect, useState } from 'react';
import { BlogPost } from '../types';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blog-posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, []);

  return (
    <section id="blog" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Latest Insights</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2">AlgoMonkx Engineering Blog</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="p-6">
                <span className="text-sm text-gray-400">{post.date}</span>
                <h3 className="font-heading text-lg font-bold text-dark mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a href="#" className="text-primary font-medium text-sm">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
