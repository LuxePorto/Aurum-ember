import React from 'react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Drinks' | 'Dessert';
  isSpecial?: boolean;
  tags?: string[];
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Category {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TastingMenuItem {
  course: string;
  name: string;
  description: string;
  pairing: string;
}

export interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

export interface EventRoom {
  id: number;
  name: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
}