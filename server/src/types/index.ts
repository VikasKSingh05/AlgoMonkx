export interface Course {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  price: number;
  image: string;
}

export interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}
