import { UserRound, FileText, Video } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: UserRound, title: '1-on-1 Mentorship', description: 'Get personalized guidance from industry experts.' },
    { icon: FileText, title: 'Study Resources', description: 'Access comprehensive study materials and notes.' },
    { icon: Video, title: 'Video Tutorials', description: 'Learn through high-quality video explanations.' },
  ];

  return (
    <section id="service" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="font-heading text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
