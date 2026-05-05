import { useEffect, useState } from 'react';
import { Mentor } from '../types';

const Mentors = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    fetch('/api/mentors')
      .then(res => res.json())
      .then(data => setMentors(data.mentors));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">The Mentors</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2">Meet Our Experts</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mentors.map(mentor => (
            <div key={mentor.id} className="bg-white rounded-xl overflow-hidden shadow-md text-center p-6 hover:shadow-lg transition-all duration-300">
              <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover hover:scale-105 transition-transform duration-300" />
              <h4 className="font-heading font-semibold text-dark">{mentor.name}</h4>
              <p className="text-sm text-gray-500">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
