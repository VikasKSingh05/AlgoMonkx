const features = [
  '1000+ Curated DSA Problems',
  'Mock Interviews',
  'Pattern Learning',
  'Real-time Contest Leaderboards'
];

const Features = () => {
  return (
    <section id="course" className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Powerful Tools</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Core Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AlgoMonkx provides a comprehensive ecosystem featuring pattern-based learning, real-time coding contests, and AI-driven performance analytics to accelerate your technical growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {features.map((feature, index) => (
            <span key={index} className="px-6 py-3 bg-white rounded-full text-dark font-medium shadow-sm">{feature}</span>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-block px-8 py-3 bg-primary text-white font-heading font-semibold rounded-md hover:bg-blue-600 transition">
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
