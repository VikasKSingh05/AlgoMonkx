import { useFetch } from '../../hooks/useFetch';
import { courseService } from '../../services/api';
import type { Course } from '../../types';

const Courses = () => {
  const { data, loading, error } = useFetch(() => courseService.getAll());

  if (loading) return <div className="text-center py-20">Loading courses...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load courses</div>;

  const courses: Course[] = data?.courses || [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold text-center text-primary mb-12">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.subtitle}</p>
                <p className="text-sm text-gray-500 mb-4">By {course.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${course.price}</span>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
