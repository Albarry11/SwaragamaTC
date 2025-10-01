import { useState, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { SwaragamaFullLogo } from './SwaragamaFullLogo';
import { TikTokIcon } from './TikTokIcon';

export function Footer() {
  const [clickCount, setClickCount] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastClickTime = useRef<number>(0);

  const handleLogoClick = () => {
    const now = Date.now();
    
    // Reset count if more than 2 seconds since last click
    if (now - lastClickTime.current > 2000) {
      setClickCount(1);
    } else {
      setClickCount(prev => prev + 1);
    }
    
    lastClickTime.current = now;
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout to reset count after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setClickCount(0);
    }, 2000);
    
    // Check if 7 clicks reached
    if (clickCount >= 6) { // 6 because we're checking before the state updates
      setClickCount(0);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Just reset the counter, no admin navigation
      console.log('Easter egg activated!');
    }
  };

  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Trainer", href: "#trainers" },
    { name: "Klien Kami", href: "#clients" },
    { name: "STC Corner", href: "#articles" },
    { name: "Testimonial", href: "#testimonials" },
    { name: "Kontak", href: "#contact" },
  ];

  const services = [
    { name: "Public Speaking", href: "#services" },
    { name: "Master of Ceremony", href: "#services" },
    { name: "Broadcaster Development", href: "#services" },
    { name: "Inhouse Training", href: "#services" },
    { name: "Kids Program", href: "#services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/173YfRNL5y/?mibextid=wwXIfr", label: "Facebook" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@swaragamatc?_t=zs-8zh6aqnpwt6&_r=1", label: "TikTok" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/swaragama-training-center/people/?facetNetwork=F", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/swaragamatc/", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#1A1A1A] dark:bg-[#0f0f0f] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <div 
                  onClick={handleLogoClick}
                  className="inline-block cursor-pointer transition-transform duration-200 hover:scale-105"
                  title="Swaragama Training Center"
                >
                  <SwaragamaFullLogo 
                    className="h-12 w-auto [&_path[fill='#F1BD18']]:fill-white [&_path[stroke='#F8DE8C']]:stroke-white"
                    showText={true}
                  />
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Lembaga pengembangan SDM pertama di Yogyakarta
                yang fokus pada pengembangan softskill terutama
                keterampilan komunikasi di bawah naungan
                Swaragama Group.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Kompleks Bulaksumur Blok G6, Yogyakarta 55281
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  (0274) 549513 | +62 856 2727 323
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  swaragamatrainingcenter@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFC107] transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-[#FFC107] transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">
              Follow Us
            </h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Connect with us on social media for updates and tips
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#FFC107] transition-all duration-300 hover:scale-110 group"
                    >
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-[#1A1A1A]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Swaragama Training Center. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC107] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC107] text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC107] text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}