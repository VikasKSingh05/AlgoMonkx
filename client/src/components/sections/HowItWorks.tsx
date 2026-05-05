const HowItWorks = () => {
  const steps = [
    {
      title: 'Choose Path',
      description: 'Select your learning track based on your goals and experience level.',
    },
    {
      title: 'Practice Daily',
      description: 'Solve curated problems daily with our structured learning paths.',
    },
    {
      title: 'Compete Live',
      description: 'Participate in real-time coding contests and climb the leaderboard.',
    },
  ];

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {index + 1}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
