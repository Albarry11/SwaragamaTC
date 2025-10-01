import React from "react";
import image_7aa43be9b8d671fdfcab74065b67e564f76ff20b from "figma:asset/7aa43be9b8d671fdfcab74065b67e564f76ff20b.png";
import image_4135c6bb1722e39f42edb3b5d10a20bdb9993bef from "figma:asset/4135c6bb1722e39f42edb3b5d10a20bdb9993bef.png";
import image_9e2c730d7c619041bfbd07abdd4f980098d337b3 from "figma:asset/9e2c730d7c619041bfbd07abdd4f980098d337b3.png";
import {
  Calendar,
  User,
  ArrowRight,
  Lightbulb,
  Newspaper,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { motion } from "motion/react";
import { useState, useCallback, useMemo, memo } from "react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: string;
  date: string;
  readTime: number;
}

export function Articles() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentTipsIndex, setCurrentTipsIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Static news articles data
  const newsArticles = useMemo(() => [
    {
      title: "Program Training Terbaru 2024",
      excerpt: "Swaragama Training Center membuka program training terbaru dengan kurikulum up-to-date",
      image: image_4135c6bb1722e39f42edb3b5d10a20bdb9993bef,
      author: "STC Team",
      date: "15 Des 2024",
      readTime: 3,
      tags: ["program", "training", "2024"]
    },
    {
      title: "Kerjasama dengan Perusahaan Ternama",
      excerpt: "STC menjalin kerjasama strategis dengan berbagai perusahaan untuk program magang",
      image: image_9e2c730d7c619041bfbd07abdd4f980098d337b3,
      author: "STC Team", 
      date: "10 Des 2024",
      readTime: 4,
      tags: ["kerjasama", "magang", "industri"]
    },
    {
      title: "Sertifikasi Internasional Tersedia",
      excerpt: "Dapatkan sertifikasi internasional yang diakui industri global",
      image: image_7aa43be9b8d671fdfcab74065b67e564f76ff20b,
      author: "STC Team",
      date: "5 Des 2024", 
      readTime: 5,
      tags: ["sertifikasi", "internasional", "global"]
    },
    {
      title: "Workshop Digital Marketing Gratis",
      excerpt: "Ikuti workshop digital marketing gratis untuk meningkatkan skill pemasaran online",
      image: image_4135c6bb1722e39f42edb3b5d10a20bdb9993bef,
      author: "STC Team",
      date: "1 Des 2024",
      readTime: 2,
      tags: ["workshop", "digital", "marketing"]
    },
    {
      title: "Alumni STC Raih Prestasi",
      excerpt: "Para alumni STC meraih prestasi gemilang di berbagai bidang industri",
      image: image_9e2c730d7c619041bfbd07abdd4f980098d337b3,
      author: "STC Team",
      date: "28 Nov 2024",
      readTime: 3,
      tags: ["alumni", "prestasi", "industri"]
    }
  ], []);

  // Static tips articles data
  const tipsArticles = useMemo(() => [
    {
      title: "Tips Sukses Mengikuti Training",
      excerpt: "Panduan lengkap untuk memaksimalkan hasil training dan pengembangan skill",
      image: image_7aa43be9b8d671fdfcab74065b67e564f76ff20b,
      author: "STC Team",
      date: "20 Des 2024",
      readTime: 5,
      tags: ["training", "tips", "sukses"]
    },
    {
      title: "Cara Efektif Networking di Industri",
      excerpt: "Strategi membangun jaringan profesional yang kuat untuk karir cemerlang",
      image: image_4135c6bb1722e39f42edb3b5d10a20bdb9993bef,
      author: "STC Team",
      date: "18 Des 2024", 
      readTime: 4,
      tags: ["networking", "karir", "profesional"]
    },
    {
      title: "Persiapan Interview Kerja",
      excerpt: "Tips dan trik menghadapi interview kerja dengan percaya diri",
      image: image_9e2c730d7c619041bfbd07abdd4f980098d337b3,
      author: "STC Team",
      date: "15 Des 2024",
      readTime: 6,
      tags: ["interview", "kerja", "tips"]
    },
    {
      title: "Skill yang Wajib Dimiliki di Era Digital",
      excerpt: "Daftar skill penting yang harus dikuasai untuk bersaing di era digital",
      image: image_7aa43be9b8d671fdfcab74065b67e564f76ff20b,
      author: "STC Team", 
      date: "12 Des 2024",
      readTime: 7,
      tags: ["skill", "digital", "teknologi"]
    },
    {
      title: "Work-Life Balance untuk Profesional Muda",
      excerpt: "Cara menjaga keseimbangan antara karir dan kehidupan pribadi",
      image: image_4135c6bb1722e39f42edb3b5d10a20bdb9993bef,
      author: "STC Team",
      date: "8 Des 2024",
      readTime: 5,
      tags: ["work-life", "balance", "profesional"]
    }
  ], []);

  // Navigation functions for News
  const nextNews = useCallback(() => {
    setCurrentNewsIndex((prev) => (prev + 1) % Math.ceil(newsArticles.length / 3));
  }, [newsArticles.length]);

  const prevNews = useCallback(() => {
    setCurrentNewsIndex((prev) => (prev - 1 + Math.ceil(newsArticles.length / 3)) % Math.ceil(newsArticles.length / 3));
  }, [newsArticles.length]);

  // Navigation functions for Tips
  const nextTips = useCallback(() => {
    setCurrentTipsIndex((prev) => (prev + 1) % Math.ceil(tipsArticles.length / 3));
  }, [tipsArticles.length]);

  const prevTips = useCallback(() => {
    setCurrentTipsIndex((prev) => (prev - 1 + Math.ceil(tipsArticles.length / 3)) % Math.ceil(tipsArticles.length / 3));
  }, [tipsArticles.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (section: 'news' | 'tips') => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (section === 'news') {
      if (isLeftSwipe) nextNews();
      if (isRightSwipe) prevNews();
    } else {
      if (isLeftSwipe) nextTips();
      if (isRightSwipe) prevTips();
    }
  };

  // Memoized article card component for performance
  const ArticleCard = memo(({ article, index }: { article: any; index: number }) => (
    <motion.div
      key={`${article.title}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 group cursor-pointer">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-3 left-3">
              {article.tags?.slice(0, 2).map((tag: string, tagIndex: number) => (
                <Badge 
                  key={tagIndex} 
                  variant="secondary" 
                  className="mr-1 bg-primary/90 text-primary-foreground text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
            </div>
            <span className="font-medium">{article.readTime} min</span>
          </div>
          <Button 
            variant="ghost" 
            className="w-full mt-4 group/btn hover:bg-primary hover:text-primary-foreground"
          >
            Baca Selengkapnya
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  ));

  ArticleCard.displayName = 'ArticleCard';

  return (
    <section id="stc-corner" className="py-20 bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">STC</span>{" "}
            <span className="text-foreground">Corner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Temukan tips, trik, dan berita terbaru seputar dunia training dan
            pengembangan karir dari Swaragama Training Center
          </p>
        </motion.div>

        {/* Article Tabs */}
        <Tabs defaultValue="news" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-12 bg-card border border-border">
              <TabsTrigger 
                value="news" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Newspaper className="w-4 h-4" />
                Berita Terbaru
              </TabsTrigger>
              <TabsTrigger 
                value="tips" 
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Lightbulb className="w-4 h-4" />
                Tips & Tricks
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* News Articles */}
          <TabsContent value="news" className="space-y-8">
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">Berita Terbaru</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevNews}
                    disabled={currentNewsIndex === 0}
                    className="border-border hover:border-primary"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextNews}
                    disabled={currentNewsIndex >= Math.ceil(newsArticles.length / 3) - 1}
                    className="border-border hover:border-primary"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div 
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd('news')}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out gap-6"
                  style={{ transform: `translateX(-${currentNewsIndex * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(newsArticles.length / 3) }, (_, pageIndex) => (
                    <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {newsArticles
                        .slice(pageIndex * 3, (pageIndex + 1) * 3)
                        .map((article, index) => (
                          <ArticleCard key={`news-${pageIndex}-${index}`} article={article} index={index} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tips Articles */}
          <TabsContent value="tips" className="space-y-8">
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">Tips & Tricks</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTips}
                    disabled={currentTipsIndex === 0}
                    className="border-border hover:border-primary"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTips}
                    disabled={currentTipsIndex >= Math.ceil(tipsArticles.length / 3) - 1}
                    className="border-border hover:border-primary"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div 
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd('tips')}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out gap-6"
                  style={{ transform: `translateX(-${currentTipsIndex * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(tipsArticles.length / 3) }, (_, pageIndex) => (
                    <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {tipsArticles
                        .slice(pageIndex * 3, (pageIndex + 1) * 3)
                        .map((article, index) => (
                          <ArticleCard key={`tips-${pageIndex}-${index}`} article={article} index={index} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}