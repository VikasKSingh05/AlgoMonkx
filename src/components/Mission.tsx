import { useEffect, useState } from 'react';
import { Stat } from '../types';

const Mission = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data.stats));
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Our Mission</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">Empowering Future Software Engineers Globally</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AlgoMonkx was founded by Vikas Kumar Singh to bridge the gap between theoretical computer science and practical competitive programming excellence for students.
            </p>
            <a href="#" className="inline-block px-6 py-2.5 border border-primary text-primary font-heading font-semibold rounded-md hover:bg-primary hover:text-white transition">
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-white p-6 rounded-xl shadow-md text-center ${stats.length === 3 && index === 2 ? 'col-span-2' : ''}`}>
                <span className="text-4xl font-bold text-primary block mb-2">{stat.value}</span>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
