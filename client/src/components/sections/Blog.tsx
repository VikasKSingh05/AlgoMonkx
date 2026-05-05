import { useFetch } from '../../hooks/useFetch';
import { blogService } from '../../services/api';
import type { BlogPost } from '../../types';

const Blog = () => {
  const { data, loading, error } = useFetch(() => blogService.getAll());

  if (loading) return <div className="text-center py-20">Loading posts...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load posts</div>;

  const posts: BlogPost[] = data?.posts || [];

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-primary font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
