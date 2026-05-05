const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              Master Algorithms<br />
              <span className="text-primary">Elite Coding Platform</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Master data structures and competitive programming with structured learning, real-time contests, and expert mentorship designed for ambitious software engineers.
            </p>
            <a href="#course" className="inline-block px-8 py-3 bg-primary text-white font-heading font-semibold rounded-md hover:bg-blue-600 transition">
              Start Free Trial
            </a>
          </div>
          <div className="relative">
            <img src="https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-3a1c32c1" alt="Hero" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
