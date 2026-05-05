import type { CourseResponse, MentorResponse, TestimonialResponse, BlogPostResponse, StatResponse } from '../types';

const API_BASE = '/api';

export const courseService = {
  getAll: async (): Promise<CourseResponse> => {
    const res = await fetch(`${API_BASE}/courses`);
    return res.json();
  },
};

export const mentorService = {
  getAll: async (): Promise<MentorResponse> => {
    const res = await fetch(`${API_BASE}/mentors`);
    return res.json();
  },
};

export const testimonialService = {
  getAll: async (): Promise<TestimonialResponse> => {
    const res = await fetch(`${API_BASE}/testimonials`);
    return res.json();
  },
};

export const blogService = {
  getAll: async (): Promise<BlogPostResponse> => {
    const res = await fetch(`${API_BASE}/blog-posts`);
    return res.json();
  },
};

export const statsService = {
  getAll: async (): Promise<StatResponse> => {
    const res = await fetch(`${API_BASE}/stats`);
    return res.json();
  },
};
