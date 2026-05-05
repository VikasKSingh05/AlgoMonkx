import { CheckCircle } from 'lucide-react';

const features = [
  'Real-time Leaderboards',
  'Watch rankings update instantly as you submit code.',
  'Global Reach',
  'Compete against thousands of developers from everywhere.',
];

const CodeEditor = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Advanced Code Editor</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Code Like Pro</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Experience a seamless coding environment with our integrated Monaco Editor, featuring multi-language support and instant execution feedback.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="https://assets-v2.codedesign.ai/storage/v1/object/public/playground_3d72d32c/photo-1776521796613-564c9f7d02e7.jpeg" alt="Code Editor" className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;
