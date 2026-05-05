import { useFetch } from '../../hooks/useFetch';
import { mentorService } from '../../services/api';
import type { Mentor } from '../../types';

const Mentors = () => {
  const { data, loading, error } = useFetch(() => mentorService.getAll());

  if (loading) return <div className="text-center py-20">Loading mentors...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load mentors</div>;

  const mentors: Mentor[] = data?.mentors || [];

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Meet Our Mentors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-xl shadow-md overflow-hidden text-center hover:shadow-lg transition-shadow">
              <img src={mentor.image} alt={mentor.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">{mentor.name}</h3>
                <p className="text-gray-600">{mentor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
