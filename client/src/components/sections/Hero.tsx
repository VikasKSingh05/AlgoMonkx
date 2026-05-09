const Hero = () => {
  return (
    <section className="bg-white py-35">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Master Algorithms
          </h1>

          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
            Elite Coding Platform
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Elevate your coding skills with our curated collection of data
            structures and algorithms. Prepare for technical interviews at top
            tech companies.
          </p>

          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Start Free Trial
          </button>
        </div>

        <div className="flex-1">
          <img
            src="https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-3a1c32c1"
            alt="Hero Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;