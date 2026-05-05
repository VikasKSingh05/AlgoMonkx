import { useFetch } from '../../hooks/useFetch';
import { statsService } from '../../services/api';
import type { Stat } from '../../types';

const Mission = () => {
  const { data, loading, error } = useFetch(() => statsService.getAll());

  if (loading) return <div className="text-center py-20">Loading stats...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load stats</div>;

  const stats: Stat[] = data?.stats || [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            To empower developers worldwide with the skills and knowledge needed to excel in technical interviews and build successful careers in tech.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
