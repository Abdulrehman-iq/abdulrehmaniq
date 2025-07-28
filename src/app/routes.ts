// src/lib/routes.ts
export interface Route {
  id: string;
  label: string;
}

export const routes: Route[] = [
  { id: 'home', label: 'Home' },               // Hero Component
  { id: 'about', label: 'About' },             // Introduction Component
  { id: 'experience', label: 'Experience' },   // Experience Component
  { id: 'services', label: 'services' } // WhyChooseAriqSystems Component
];
