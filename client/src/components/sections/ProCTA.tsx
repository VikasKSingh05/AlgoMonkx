const ProCTA = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Upgrade to Pro Today
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Unlock premium features, exclusive content, and personalized mentorship with our Pro plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Upgrade to Pro
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProCTA;
