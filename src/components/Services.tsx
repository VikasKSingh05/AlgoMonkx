import { UserRound, FileText, Video } from 'lucide-react';

const services = [
  { icon: UserRound, title: '1-on-1 Mentorship', description: 'Get direct guidance from top industry software engineers.', link: 'Find a Mentor', href: '#' },
  { icon: FileText, title: 'Resume Review', description: 'Optimize your profile for top-tier tech company recruiters.', link: 'Get Review', href: '#' },
  { icon: Video, title: 'Mock Interviews', description: 'Practice with realistic coding interviews and feedback.', link: 'Schedule Mock', href: '#' },
];

const Services = () => {
  return (
    <section id="service" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Expert Help</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">Our Premium Services</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond self-paced learning, we offer personalized mentorship and professional interview preparation to ensure you land your dream job.
            </p>
            <a href="#" className="inline-block px-6 py-2.5 bg-primary text-white font-heading font-semibold rounded-md hover:bg-blue-600 transition">
              Book a Session
            </a>
          </div>
          <div className="space-y-6">
            {services.map(service => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-dark mb-1">{service.title}</h4>
                  <p className="text-sm text-gray-500">{service.description}</p>
                  <a href={service.href} className="text-primary text-sm font-medium mt-2 inline-block">{service.link} &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#" className="inline-block px-8 py-3 border border-primary text-primary font-heading font-semibold rounded-md hover:bg-primary hover:text-white transition">
            See Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
