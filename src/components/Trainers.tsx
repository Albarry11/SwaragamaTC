import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export const Trainers = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  /**
   * Data trainer - Siap untuk sistem CRUD melalui dashboard admin
   * Struktur data yang konsisten memudahkan integrasi dengan backend/database
   * 
   * Field yang tersedia:
   * - id: Unique identifier (akan diganti dengan ID dari database)
   * - firstName: Nama depan trainer
   * - lastName: Nama belakang trainer
   * - fullName: Nama lengkap (optional, bisa di-generate dari firstName + lastName)
   * - title: Jabatan/posisi trainer
   * - specialty: Keahlian khusus trainer (Public Speaking, MC, Broadcasting, dll)
   * - bio: Biografi singkat trainer (optional)
   * - image: URL foto trainer
   * - email: Email kontak (optional)
   * - phone: Nomor telepon (optional)
   * - socialMedia: Object berisi link media sosial (optional)
   * - certifications: Array sertifikasi yang dimiliki (optional)
   * - status: Status aktif/nonaktif trainer
   * - order: Urutan tampilan di website
   * - createdAt: Timestamp pembuatan (akan diisi oleh backend)
   * - updatedAt: Timestamp update terakhir (akan diisi oleh backend)
   */
  const trainersData = [
    {
      id: 1,
      firstName: 'Dwi',
      lastName: 'Gayatri',
      fullName: 'Dwi Gayatri',
      title: 'Professional Public Speaker & Trainer',
      specialty: 'Public Speaking',
      bio: 'Expert dalam public speaking dan corporate training dengan pengalaman lebih dari 10 tahun',
      image: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYwMjIwMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 10,
      status: 'active',
      order: 1,
      featured: true
    },
    {
      id: 2,
      firstName: 'Gideon',
      lastName: 'Surya',
      fullName: 'Gideon Surya',
      title: 'Professional Trainer & Speaker',
      specialty: 'Corporate Training',
      bio: 'Trainer profesional dengan spesialisasi leadership dan business presentation',
      image: 'https://images.unsplash.com/photo-1758875568932-0eefd3e60090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0cmFpbmVyfGVufDF8fHx8MTc2MDIyMDI5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 12,
      status: 'active',
      order: 2,
      featured: true
    },
    {
      id: 3,
      firstName: 'Ayu',
      lastName: 'Rizqia',
      fullName: 'Ayu Rizqia',
      title: 'HR Development & Professional Speaker',
      specialty: 'HR Development',
      bio: 'Ahli dalam pengembangan SDM dan komunikasi organisasi',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMjA0OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 8,
      status: 'active',
      order: 3,
      featured: true
    },
    {
      id: 4,
      firstName: 'Bara',
      lastName: 'Zulfa',
      fullName: 'Bara Zulfa',
      title: 'Professional MC, Presenter & Voice Over Talent',
      specialty: 'MC & Voice Over',
      bio: 'MC profesional dengan pengalaman handling berbagai event skala nasional',
      image: 'https://images.unsplash.com/photo-1552001524-c417c1e72080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcmVzZW50ZXIlMjBtYW58ZW58MXx8fHwxNzYwMjIwMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 7,
      status: 'active',
      order: 4,
      featured: true
    },
    {
      id: 5,
      firstName: 'Dina',
      lastName: 'Alia',
      fullName: 'Dina Alia',
      title: 'Professional Broadcaster & Voice Over Talent',
      specialty: 'Broadcasting',
      bio: 'Broadcaster profesional dengan suara khas dan teknik vokal yang excellent',
      image: 'https://images.unsplash.com/photo-1741835698663-c1860b7d1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9hZGNhc3RlciUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDIyMDMwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 9,
      status: 'active',
      order: 5,
      featured: true
    },
    {
      id: 6,
      firstName: 'Cici',
      lastName: 'Priskila',
      fullName: 'Cici Priskila',
      title: 'Professional Broadcaster & Voice Over Talent',
      specialty: 'Voice Over',
      bio: 'Voice over talent dengan berbagai pengalaman di iklan dan narasi profesional',
      image: 'https://images.unsplash.com/photo-1718664485487-5aad5f72dff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2b2ljZSUyMHRhbGVudHxlbnwxfHx8fDE3NjAyMjAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 6,
      status: 'active',
      order: 6,
      featured: false
    },
    {
      id: 7,
      firstName: 'Bertha',
      lastName: 'Virginia',
      fullName: 'Bertha Virginia',
      title: 'Professional MC & Voice Over Talent',
      specialty: 'MC',
      bio: 'MC dengan pengalaman di berbagai acara corporate dan entertainment',
      image: 'https://images.unsplash.com/photo-1741835698663-c1860b7d1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJyb2FkY2FzdGVyfGVufDF8fHx8MTc2MDIyMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 5,
      status: 'active',
      order: 7,
      featured: false
    },
    {
      id: 8,
      firstName: 'Nicky',
      lastName: 'Shaquilla',
      fullName: 'Nicky Shaquilla',
      title: 'Professional Broadcaster & MC',
      specialty: 'Broadcasting & MC',
      bio: 'Multi-talented broadcaster dan MC dengan energi yang dinamis',
      image: 'https://images.unsplash.com/photo-1754531976828-69e42ce4e0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGFzaWFufGVufDF8fHx8MTc2MDE1OTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 4,
      status: 'active',
      order: 8,
      featured: false
    },
    {
      id: 9,
      firstName: 'Kani',
      lastName: 'Raras',
      fullName: 'Kani Raras',
      title: 'Professional Broadcaster & MC',
      specialty: 'Broadcasting',
      bio: 'Broadcaster muda dengan gaya komunikasi yang fresh dan engaging',
      image: 'https://images.unsplash.com/photo-1759503407457-3683579f080b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwd29tYW58ZW58MXx8fHwxNzYwMjIwMzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 3,
      status: 'active',
      order: 9,
      featured: false
    },
    {
      id: 10,
      firstName: 'Arifah',
      lastName: 'Putri',
      fullName: 'Arifah Putri',
      title: 'Professional Public Speaker',
      specialty: 'Public Speaking',
      bio: 'Public speaker dengan fokus pada motivational speaking dan personal development',
      image: 'https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYwMjIwMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      yearsOfExperience: 5,
      status: 'active',
      order: 10,
      featured: false
    },
  ];

  // Filter hanya trainer yang aktif dan urutkan berdasarkan field 'order'
  // Ini akan berguna ketika terhubung dengan dashboard admin
  const activeTrainers = trainersData
    .filter(trainer => trainer.status === 'active')
    .sort((a, b) => a.order - b.order);

  return (
    <section id="trainers" className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28 bg-white relative overflow-hidden">
      {/* Smooth Multi-Layer Blend Transition to Clients Section */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-gray-50/20 via-gray-50/40 via-gray-50/70 to-gray-50/90"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50/80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-3 md:mb-4 lg:mb-6">Trainer Kami</h2>
          <div className="w-20 md:w-24 lg:w-32 h-1 bg-[#F9B800] mx-auto mb-3 md:mb-4 lg:mb-6"></div>
          <p className="text-gray-600 max-w-2xl lg:max-w-3xl mx-auto text-sm md:text-base lg:text-lg px-4 leading-relaxed">
            Belajar dari para ahli berpengalaman dengan sertifikasi internasional
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {activeTrainers.map((trainer) => (
              <CarouselItem key={trainer.id} className="pl-2 md:pl-4 lg:pl-6 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={trainer.image}
                      alt={trainer.fullName}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-2.5 sm:p-3 lg:p-4 pt-2 lg:pt-3 flex-grow flex flex-col justify-between min-h-[64px] sm:min-h-[72px] lg:min-h-[80px]">
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg mb-0.5 lg:mb-1 font-bold line-clamp-1">
                        {trainer.firstName} <span className="text-[#F9B800]">{trainer.lastName}</span>
                      </h3>
                      <p className="text-black text-[10px] sm:text-xs lg:text-sm line-clamp-2 leading-relaxed">{trainer.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-[#F9B800] hover:bg-[#e0a700] text-black border-none z-20" />
          <CarouselNext className="right-0 bg-[#F9B800] hover:bg-[#e0a700] text-black border-none z-20" />
        </Carousel>
      </div>
    </section>
  );
};
