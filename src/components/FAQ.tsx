import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Is there a free version available?', answer: 'Yes, we offer a comprehensive free tier that includes access to our problem library and participation in most weekly contests.' },
  { question: 'Which programming languages are supported?', answer: 'We currently support C++, Java, and Python, with more languages being added to our secure Docker-based execution environment soon.' },
  { question: 'How does the mentorship work?', answer: 'Our mentorship program connects you with experts for 1-on-1 video sessions, code reviews, and personalized career roadmaps to success.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Common Questions</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="font-heading font-semibold text-dark">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
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
