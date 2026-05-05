import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is AlgoMonkx free to use?',
      answer: 'Yes, we offer a free tier with access to basic problems. Premium features require a subscription.',
    },
    {
      question: 'How often are new problems added?',
      answer: 'We add new curated problems every week to keep our collection fresh and up-to-date.',
    },
    {
      question: 'Can I practice for specific company interviews?',
      answer: 'Absolutely! We have curated tracks for top tech companies including FAANG and more.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-heading font-semibold text-gray-800">{faq.question}</span>
                <span className="text-primary text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
