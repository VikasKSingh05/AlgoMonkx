const CTABanner = () => {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(to right, #667eea, #764ba2)' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Code?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of developers who have accelerated their careers with AlgoMonkx.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
