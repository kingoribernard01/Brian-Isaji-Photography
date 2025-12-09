export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large';
}

export interface NavItem {
  label: string;
  href: string;
}