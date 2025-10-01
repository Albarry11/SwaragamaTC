import { ArrowRight, Play, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import trainingImage from "figma:asset/aec2f25396c7058c221e120c14dfff6ae4fe7a18.png";


export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden mobile-safe"
      style={{ minHeight: "100vh" }}
    >
      {/* Mobile-Responsive Background Image */}
      <div className="absolute inset-0">
        <img
          src={trainingImage}
          alt="Swaragama Training Session"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-center object-[75%_center]"
        />
        
        {/* Mobile-Optimized Overlay System */}
        {/* Desktop overlays */}
        <div className="hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent" />
        </div>
        
        {/* Mobile overlays - more uniform for readability */}
        <div className="block md:hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/8 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* Mobile-Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Desktop background elements */}
        <div className="hidden md:block">
          <div className="absolute rounded-full bg-primary/20 blur-xl w-60 h-60 top-20 left-10 opacity-30" />
          <div className="absolute rounded-full bg-primary/15 blur-xl w-80 h-80 bottom-20 right-20 opacity-20" />
          <div className="absolute rounded-full bg-primary/10 blur-xl w-40 h-40 top-1/2 left-1/3 opacity-25" />
        </div>
        
        {/* Mobile background elements - smaller and positioned better */}
        <div className="block md:hidden">
          <div className="absolute rounded-full bg-primary/15 blur-lg w-32 h-32 top-16 right-4 opacity-20" />
          <div className="absolute rounded-full bg-primary/10 blur-lg w-24 h-24 top-1/3 left-4 opacity-15" />
          <div className="absolute rounded-full bg-primary/12 blur-lg w-40 h-40 bottom-32 left-1/2 -translate-x-1/2 opacity-18" />
        </div>
      </div>

      <div className="relative z-10 w-full">
        {/* Mobile-First Responsive Layout */}
        <div className="grid lg:grid-cols-2 min-h-screen items-center">
          {/* Left Box - Content Area */}
          <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full max-w-[500px] text-left space-y-6 md:space-y-8"
            >
              {/* Main Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <motion.span
                    className="text-white drop-shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Your{" "}
                  </motion.span>
                  <motion.span
                    className="text-primary relative drop-shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    Communication Skills
                    <motion.div
                      className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-1.5 md:h-2 bg-primary/60 rounded-full blur-sm"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                    />
                  </motion.span>
                  <motion.span
                    className="text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    {" "}Solution
                  </motion.span>
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="space-y-4"
                >
                  <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-md">
                    <span className="text-primary font-semibold drop-shadow-sm">
                      Swaragama Training Center
                    </span>{" "}
                    hadir sebagai solusi tepat untuk meningkatkan kemampuan komunikasi dan soft skills guna mendukung kesuksesan pribadi maupun profesional.
                  </p>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed drop-shadow-md">
                    Dengan metode 40% teori – 60% praktik, kami menghadirkan pelatihan yang interaktif dan menyenangkan bersama trainer yang berpengalaman di bidangnya.
                  </p>
                </motion.div>
              </motion.div>

              {/* Mobile-Optimized CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row justify-start gap-3 md:gap-4 pt-2 md:pt-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 w-full sm:w-auto shadow-lg"
                  onClick={() => {
                    const servicesSection =
                      document.getElementById("services");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <Zap className="mr-2 w-4 md:w-5 h-4 md:h-5 group-hover:animate-pulse" />
                  <span className="text-sm md:text-base">Mulai Transformasi</span>
                  <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-2 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-md px-6 md:px-8 py-3 font-semibold group transition-all duration-300 hover:text-white w-full sm:w-auto shadow-lg"
                  onClick={() =>
                    window.open(
                      "https://youtu.be/cXoPnpt99Jw?si=Of77q05Y4wIKbcDZ",
                      "_blank",
                    )
                  }
                >
                  <Play className="mr-2 w-4 md:w-5 h-4 md:h-5 group-hover:scale-125 transition-transform fill-current" />
                  <span className="text-sm md:text-base">Demo</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Box - Visual/Decorative Space */}
          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="w-full h-full flex items-center justify-center"
            >
              {/* Decorative geometric shapes */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Klien Kami Section - OPTIMIZED WITH FULL WIDTH CAROUSEL */}

    </section>
  );
}