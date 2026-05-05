const CTABanner = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Ready to Code?</h2>
        <p className="text-white/80 text-lg mb-8">
          Join thousands of developers mastering DSA and winning contests on the most advanced platform available today.
        </p>
        <a href="#" className="inline-block px-8 py-3 bg-white text-primary font-heading font-semibold rounded-md hover:bg-gray-100 transition">
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
