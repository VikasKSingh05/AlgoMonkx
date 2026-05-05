import { Trophy, Globe, AlertTriangle, Star } from 'lucide-react';

const contestFeatures = [
  { icon: Trophy, title: 'Real-time Leaderboards', description: 'Watch rankings update instantly as you submit code.' },
  { icon: Globe, title: 'Global Reach', description: 'Compete against thousands of developers from everywhere.' },
  { icon: AlertTriangle, title: 'Penalty System', description: 'Fair competition with time and error-based penalties.' },
  { icon: Star, title: 'Elo Ratings', description: 'Track your progress with a professional rating system.' },
];

const ContestFeatures = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Live Contests</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Compete and Rank</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our robust contest system features real-time leaderboards, Elo-based rating updates, and a strict penalty system to simulate real-world competitive programming environments perfectly.
            </p>
            <a href="#" className="inline-block px-6 py-2.5 bg-primary text-white font-heading font-semibold rounded-md hover:bg-blue-600 transition">
              Join Next Contest
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {contestFeatures.map(feature => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-md">
                <feature.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-heading font-semibold text-dark mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestFeatures;
