import { Quote, Lightbulb } from 'lucide-react';

const Quotes = () => {
  const quotes = [
    { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
    { text: 'Programming isn\'t about what you know; it\'s about what you can figure out.', author: 'Chris Pine' },
  ];

  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Inspirational Quotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-700 italic mb-4">"{quote.text}"</p>
              <p className="text-sm font-semibold text-gray-800">— {quote.author}</p>
            </div>
          ))}
        </div>
        <div className="bg-primary p-8 rounded-xl shadow-md text-center text-white max-w-2xl mx-auto">
          <Lightbulb className="w-12 h-12 mx-auto mb-4" />
          <p className="text-xl font-semibold">
            "Every expert was once a beginner. Keep coding, keep learning!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
