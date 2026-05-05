const Features = () => {
  const features = [
    '1000+ Curated DSA Problems',
    'Mock Interviews',
    'Pattern Learning',
    'Real-time Contest Leaderboards',
  ];

  return (
    <section id="course" className="bg-light-bg py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-lg font-semibold text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
