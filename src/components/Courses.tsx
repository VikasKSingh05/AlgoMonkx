import { useEffect, useState } from 'react';
import { Course } from '../types';

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data.courses));
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wide">Curated Paths</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-2">Our Top Courses</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase">{course.title}</span>
                <h3 className="font-heading text-xl font-bold text-dark mt-1 mb-2">{course.subtitle}</h3>
                <p className="text-sm text-gray-500 mb-4">{course.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${course.price}</span>
                  <button className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#about" className="inline-block px-8 py-3 bg-primary text-white font-heading font-semibold rounded-md hover:bg-blue-600 transition">
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
