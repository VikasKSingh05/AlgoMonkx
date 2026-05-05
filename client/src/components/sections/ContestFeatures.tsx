import { Trophy, Globe, AlertTriangle, Star } from 'lucide-react';

const ContestFeatures = () => {
  const features = [
    { icon: Trophy, title: 'Competitive Contests', description: 'Regular coding competitions with exciting prizes.' },
    { icon: Globe, title: 'Global Leaderboard', description: 'Compete with developers from around the world.' },
    { icon: AlertTriangle, title: 'Real-time Challenges', description: 'Face dynamic problems that test your skills.' },
    { icon: Star, title: 'Achievement Badges', description: 'Earn badges and showcase your accomplishments.' },
  ];

  return (
    <section id="events" className="bg-light-bg py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Contest Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContestFeatures;
