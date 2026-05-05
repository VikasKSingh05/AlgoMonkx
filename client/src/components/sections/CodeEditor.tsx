import { CheckCircle } from 'lucide-react';

const CodeEditor = () => {
  const features = [
    'Syntax highlighting for 40+ languages',
    'Real-time code execution and testing',
    'Integrated debugging tools',
    'Collaborative coding environment',
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="font-heading text-4xl font-bold text-primary mb-6">
            Powerful Code Editor
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Write, test, and debug your code with our advanced online code editor designed for competitive programming.
          </p>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-900 rounded-xl p-6 shadow-xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
{`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;
