import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Trainers } from './components/Trainers';
import { ClientsAndBlogWrapper } from './components/ClientsAndBlogWrapper';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <ClientsAndBlogWrapper />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
