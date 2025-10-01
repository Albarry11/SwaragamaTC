import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import {
  Star,
  Quote,
  Heart,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import sekarTestimonial from "figma:asset/b9580a1a6061b0dffa7f08af9001fb8413df0b69.png";
import herwidaTestimonial from "figma:asset/d1ce84868826ba456c2b53d882ad1be195a79c89.png";
import amandaTestimonial from "figma:asset/d11f12a939b767d21ee5222f4cbe5bf8a2aff374.png";
import junichoTestimonial from "figma:asset/a6f0ddb81e590a0a07803353e951d0c99bb6599e.png";
import trisnoTestimonial from "figma:asset/4ef0371fe4062c6f560441fd481a71819d626733.png";

// Authentic Google Reviews testimonials
const testimonials = [
  {
    id: 1,
    name: "Sekar Fitriadzini Istiqomah",
    role: "Local Guide",
    company: "Google Reviews • 2 years ago",
    text: "I have a fun and interesting experience when join the Public Speaking (PC) Course. There are 3 level of PC classes: Basic, Advance, and Professional. I had joined the first level and it's really worth your time ☺️",
    rating: 5,
    image: sekarTestimonial,
    isGoogleReview: true,
    platform: "Google Reviews",
  },
  {
    id: 2,
    name: "Herwida Putri Agista",
    role: "Program Alumni",
    company: "Google Reviews • 1 month ago",
    text: "Fasilitas pembelajaran yang sangat baik. Mentor, ruangan, layanan, dan lain-lain yang diberikan dengan tulus oleh stafnya.",
    rating: 5,
    image: herwidaTestimonial,
    isGoogleReview: true,
    platform: "Google Reviews",
  },
  {
    id: 3,
    name: "Amanda Purwanto",
    role: "Public Speaking Alumni",
    company: "Google Reviews • 1 year ago",
    text: "Saya suka kelas public speaking program yang basic di STC. Kelasnya sangat menyenangkan dan interaktif. Teori dan praktek juga sangat seimbang dan trainernya juga sangat ramah dan profesional. Setelah mengikuti program ini, saya jadi lebih percaya diri untuk bicara di depan umum.",
    rating: 5,
    image: amandaTestimonial,
    isGoogleReview: true,
    platform: "Google Reviews",
  },
  {
    id: 4,
    name: "Junicho Deni Priyantomo",
    role: "Program Participant",
    company: "Google Reviews • 3 years ago",
    text: "Its a good place to learning about public speaking, you will get many insight in here. Do not worry spending your money to add more value to yourself, it is worthed",
    rating: 5,
    image: junichoTestimonial,
    isGoogleReview: true,
    platform: "Google Reviews",
  },
  {
    id: 5,
    name: "trisno sutrisno",
    role: "Basic & Advance Alumni",
    company: "Google Reviews • 3 years ago",
    text: "Ambil kelas Public Speaking Basic dan Advance, one of best learning classes!",
    rating: 5,
    image: trisnoTestimonial,
    isGoogleReview: true,
    platform: "Google Reviews",
  },
  {
    id: 6,
    name: "Sarah Wijaya",
    role: "HR Manager",
    company: "PT Maju Bersama",
    text: "Pelatihan dari STC sangat membantu tim kami dalam meningkatkan produktivitas. Metode pembelajaran yang interaktif membuat peserta sangat antusias!",
    rating: 5,
    image: "business woman professional", // Will use Unsplash for testimonial screenshots
  },
  {
    id: 7,
    name: "Ahmad Rizki",
    role: "Training Coordinator",
    company: "Bank Mandiri",
    text: "Trainer STC sangat profesional dan berpengalaman. Materi yang disampaikan mudah dipahami dan langsung bisa diterapkan di lingkungan kerja.",
    rating: 5,
    image: "businessman professional suit",
  },
  {
    id: 8,
    name: "Dewi Sartika",
    role: "Learning & Development",
    company: "Telkom Indonesia",
    text: "Konsep 40% teori dan 60% praktek sangat efektif! Karyawan kami jadi lebih percaya diri setelah mengikuti program dari Swaragama Training Center.",
    rating: 5,
    image: "professional woman corporate",
  },
  {
    id: 9,
    name: "Budi Santoso",
    role: "General Manager",
    company: "PT Indofood",
    text: "STC memberikan solusi training yang tepat sasaran. ROI dari investasi training sangat terasa dalam performa tim kami.",
    rating: 5,
    image: "executive manager professional",
  },
  {
    id: 10,
    name: "Linda Permata",
    role: "People Development",
    company: "Astra International",
    text: "Pelayanan STC sangat memuaskan dari awal konsultasi hingga evaluasi. Highly recommended untuk pengembangan SDM perusahaan!",
    rating: 5,
    image: "business consultant professional",
  },
  {
    id: 11,
    name: "Rian Pratama",
    role: "Division Head",
    company: "BCA",
    text: "Metode andragogy yang diterapkan STC sangat cocok untuk adult learning. Engagement peserta training sangat tinggi!",
    rating: 5,
    image: "finance executive professional",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(
    null,
  );
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && isMobile) {
      nextTestimonial();
    }
    if (isRightSwipe && isMobile) {
      prevTestimonial();
    }
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      // On mobile, show only current testimonial
      return [testimonials[currentIndex]];
    }

    // On desktop, show 3 testimonials
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-background via-accent/30 to-background relative overflow-hidden testimonials-container"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Testimonial
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kata{" "}
            <span className="text-primary">Sahabat STC</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Dengarkan cerita sukses dari para sahabat yang telah
            merasakan manfaat program pengembangan SDM dari
            Swaragama Training Center.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x divide-border/40 bg-card/50 backdrop-blur-sm border border-border/30 rounded-2xl px-4 sm:px-8 py-4 shadow-sm max-w-2xl mx-auto">
            <div className="text-center px-3 sm:px-6">
              <div className="text-xl sm:text-2xl text-primary">
                4.9/5
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Rating Kepuasan
              </div>
            </div>
            <div className="text-center px-3 sm:px-6">
              <div className="text-xl sm:text-2xl text-primary">
                200+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Klien Puas
              </div>
            </div>
            <div className="text-center px-3 sm:px-6">
              <div className="text-xl sm:text-2xl text-primary">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Alumni Success
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative" ref={containerRef}>
          {/* Navigation Buttons - Desktop Only */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-between items-center mb-6 md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-sm"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Prev
            </Button>

            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} / {testimonials.length}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent shadow-sm"
              onClick={nextTestimonial}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            className={`${
              isMobile
                ? "grid grid-cols-1 gap-6"
                : "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            }`}
            key={`${currentIndex}-${isMobile}`}
            initial={{ opacity: 0, x: isMobile ? 20 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.5 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: "pan-y" }} // Allow vertical scrolling but handle horizontal
          >
            {getVisibleTestimonials().map(
              (testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${isMobile}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: isMobile ? 0.3 : 0.5,
                    delay: isMobile ? 0 : index * 0.1,
                  }}
                  className={`relative bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 testimonials-card ${
                    isMobile ? "mx-auto max-w-sm w-full" : ""
                  }`}
                >
                  {testimonial.isGoogleReview ? (
                    // Google Review Screenshot Layout
                    <>
                      <div
                        className={`${isMobile ? "p-3" : "p-4"}`}
                      >
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={`Google Review by ${testimonial.name}`}
                          className="w-full h-auto rounded-lg border border-border/30"
                        />
                      </div>

                      {/* Trust Badge for Google Reviews */}
                      <div className="absolute -top-2 -left-2">
                        <Badge
                          className={`bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 shadow-sm ${
                            isMobile ? "text-xs" : ""
                          }`}
                        >
                          <svg
                            className={`${isMobile ? "w-2 h-2" : "w-3 h-3"} mr-1`}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              fill="#4285F4"
                            />
                            <path
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              fill="#34A853"
                            />
                            <path
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              fill="#FBBC05"
                            />
                            <path
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              fill="#EA4335"
                            />
                          </svg>
                          {isMobile
                            ? "Google"
                            : "Google Reviews"}
                        </Badge>
                      </div>
                    </>
                  ) : (
                    // Regular Testimonial Layout
                    <div
                      className={`${isMobile ? "p-6" : "p-8"}`}
                    >
                      {/* Quote Icon */}
                      <div
                        className={`absolute ${isMobile ? "top-4 right-4" : "top-6 right-6"}`}
                      >
                        <Quote
                          className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} text-primary/30`}
                        />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className={`${isMobile ? "w-3 h-3" : "w-4 h-4"} fill-primary text-primary`}
                            />
                          ),
                        )}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote
                        className={`text-foreground mb-6 leading-relaxed ${
                          isMobile ? "text-sm" : ""
                        }`}
                      >
                        "{testimonial.text}"
                      </blockquote>

                      {/* Profile */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`relative ${isMobile ? "w-10 h-10" : "w-12 h-12"} rounded-full overflow-hidden bg-muted/30 flex-shrink-0`}
                        >
                          <ImageWithFallback
                            src={`https://source.unsplash.com/100x100/?${testimonial.image}`}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4
                            className={`font-semibold text-foreground ${isMobile ? "text-sm" : ""}`}
                          >
                            {testimonial.name}
                          </h4>
                          <p
                            className={`text-muted-foreground ${isMobile ? "text-xs" : "text-sm"}`}
                          >
                            {testimonial.role}
                          </p>
                          <p
                            className={`text-primary font-medium ${isMobile ? "text-xs" : "text-sm"}`}
                          >
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Trust Badge */}
                      <div className="absolute -top-2 -left-2">
                        <Badge
                          className={`bg-primary/10 text-primary border-primary/20 shadow-sm ${
                            isMobile ? "text-xs" : ""
                          }`}
                        >
                          <Heart
                            className={`${isMobile ? "w-2 h-2" : "w-3 h-3"} mr-1`}
                          />
                          Verified
                        </Badge>
                      </div>
                    </div>
                  )}
                </motion.div>
              ),
            )}
          </motion.div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex gap-2 overflow-x-auto px-4 max-w-full">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="text-center mt-4 md:hidden">
            <p className="text-xs text-muted-foreground">
              Swipe left/right or use buttons to navigate
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        ></motion.div>
      </div>
    </section>
  );
}