const steps = [
  { number: '01', title: 'Choose Path', description: 'Select a structured learning path tailored to your current skill level and career goals today.' },
  { number: '02', title: 'Practice Daily', description: 'Solve pattern-based problems and watch video explanations to master complex data structures and algorithmic logic.' },
  { number: '03', title: 'Compete Live', description: 'Compete in live contests to test your speed and accuracy against the best coders globally.' },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">The Journey</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(step => (
            <div key={step.number} className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
