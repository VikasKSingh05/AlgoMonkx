import { Quote, Lightbulb } from 'lucide-react';

const quotes = [
  { text: 'Education gives us a knowledge of the world around us and changes it into something better. It develops in us a perspective of looking at life.', author: 'Dina Glenn', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-143b2d1c' },
  { text: 'It develops in us a perspective of looking at life. It helps us build opinions and have points of view on things in life. People debate over the subject.', author: 'Clarke Gillebert', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-c47cca11' },
  { text: 'Build opinions and have points of view on things in life. People debate over the subject of whether education is the only thing that gives knowledge.', author: 'Miglena Tadic', image: 'https://assets-v2.codedesign.ai/storage/v1/object/public/codedesign-templates-assets/template-asset-054e039c' },
];

const Quotes = () => {
  return (
    <section className="py-16 md:py-24 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <Quote className="text-primary/30 w-8 h-8 mb-4" />
              <p className="text-gray-600 text-sm mb-4">{quote.text}</p>
              <div className="flex items-center gap-3">
                <img src={quote.image} alt={quote.author} className="w-10 h-10 rounded-full object-cover" />
                <span className="font-heading font-semibold text-dark text-sm">{quote.author}</span>
              </div>
            </div>
          ))}
          <div className="bg-primary rounded-xl shadow-md flex items-center justify-center p-6">
            <div className="text-center text-white">
              <Lightbulb className="w-12 h-12 mb-4 mx-auto" />
              <p className="font-heading font-semibold">"Learn. Code. Compete."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
