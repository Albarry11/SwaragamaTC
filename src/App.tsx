import React, { memo } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Trainers } from './components/Trainers';
import { Clients } from './components/Clients';
import { Articles } from './components/Articles';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

// Memoized main website components for better performance
const MainWebsite = memo(() => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Clients />
      <Articles />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <Toaster />
  </div>
));

MainWebsite.displayName = 'MainWebsite';

export default function App() {
  // Main website with optimized theme provider
  return (
    <ThemeProvider defaultTheme="light" storageKey="swaragama-theme">
      <MainWebsite />
    </ThemeProvider>
  );
}