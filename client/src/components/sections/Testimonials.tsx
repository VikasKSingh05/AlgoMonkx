import { useFetch } from '../../hooks/useFetch';
import { testimonialService } from '../../services/api';
import type { Testimonial } from '../../types';

const Testimonials = () => {
  const { data, loading, error } = useFetch(() => testimonialService.getAll());

  if (loading) return <div className="text-center py-20">Loading testimonials...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load testimonials</div>;

  const testimonials: Testimonial[] = data?.testimonials || [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-heading font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
