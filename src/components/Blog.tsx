import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  /**
   * Data artikel blog - Siap untuk sistem CRUD melalui dashboard admin
   * Struktur data yang konsisten memudahkan integrasi dengan backend/database
   * 
   * Field yang tersedia:
   * - id: Unique identifier (akan diganti dengan ID dari database)
   * - slug: URL-friendly identifier untuk SEO
   * - title: Judul artikel
   * - excerpt: Ringkasan artikel (ditampilkan di card)
   * - fullContent: Konten lengkap artikel
   * - image: URL gambar featured artikel
   * - author: Nama penulis artikel
   * - authorId: ID penulis (relasi ke tabel users)
   * - date: Tanggal publikasi
   * - category: Kategori artikel (Public Speaking, MC, Broadcasting, Tips, dll)
   * - tags: Array tag untuk filtering dan SEO
   * - status: Status artikel (published/draft/archived)
   * - featured: Apakah artikel ini ditampilkan di halaman utama
   * - order: Urutan tampilan di website
   * - createdAt: Timestamp pembuatan (akan diisi oleh backend)
   * - updatedAt: Timestamp update terakhir (akan diisi oleh backend)
   * - publishedAt: Timestamp publikasi
   */
  const blogPostsData = [
    {
      id: 1,
      slug: '5-tips-meningkatkan-kemampuan-public-speaking',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHRpcHN8ZW58MXx8fHwxNzYwMjAzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '15 Januari 2024',
      title: '5 Tips Meningkatkan Kemampuan Public Speaking',
      excerpt: 'Public speaking adalah keterampilan penting yang dapat dipelajari dan ditingkatkan. Berikut adalah 5 tips yang dapat membantu Anda menjadi pembicara yang lebih percaya diri.',
      author: 'Dwi Gayatri',
      authorId: 1,
      category: 'Public Speaking',
      tags: ['public speaking', 'tips', 'komunikasi', 'self improvement'],
      status: 'published',
      featured: true,
      order: 1,
      readTime: 5,
      fullContent: `Public speaking adalah keterampilan penting yang dapat dipelajari dan ditingkatkan. Berikut adalah 5 tips yang dapat membantu Anda menjadi pembicara yang lebih percaya diri.

1. **Persiapan yang Matang**
Persiapan adalah kunci utama dalam public speaking. Luangkan waktu untuk memahami topik Anda secara mendalam, kenali audiens Anda, dan susun materi presentasi dengan struktur yang jelas. Latih presentasi Anda berkali-kali hingga Anda merasa nyaman dengan materinya.

2. **Kenali Audiens Anda**
Sebelum berbicara, pelajari siapa audiens Anda. Apa latar belakang mereka? Apa yang mereka harapkan dari presentasi Anda? Dengan memahami audiens, Anda dapat menyesuaikan gaya bahasa dan konten agar lebih relevan dan menarik bagi mereka.

3. **Gunakan Bahasa Tubuh yang Positif**
Bahasa tubuh Anda berbicara lebih keras dari kata-kata. Pastikan postur tubuh Anda tegak, gunakan kontak mata dengan audiens, dan manfaatkan gerakan tangan yang natural untuk menekankan poin-poin penting. Hindari berdiri kaku atau terlalu banyak bergerak.

4. **Kelola Nervous dengan Teknik Pernapasan**
Wajar merasa gugup sebelum berbicara di depan umum. Gunakan teknik pernapasan dalam untuk menenangkan diri. Tarik napas dalam-dalam melalui hidung, tahan beberapa detik, lalu hembuskan perlahan melalui mulut. Lakukan ini beberapa kali sebelum naik ke panggung.

5. **Latihan, Latihan, dan Latihan**
Tidak ada jalan pintas untuk menjadi pembicara yang handal selain berlatih secara konsisten. Manfaatkan setiap kesempatan untuk berbicara di depan umum, mulai dari forum kecil hingga yang lebih besar. Semakin sering Anda berlatih, semakin percaya diri Anda akan menjadi.

Ingat, menjadi pembicara yang baik adalah proses yang membutuhkan waktu dan dedikasi. Jangan menyerah jika Anda merasa tidak sempurna di awal. Terus berlatih dan Anda akan melihat peningkatan yang signifikan!`
    },
    {
      id: 2,
      slug: 'menjadi-mc-profesional-panduan-lengkap',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3Bob25lJTIwbWMlMjBldmVudHxlbnwxfHx8fDE3NjAyMjA5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '20 Januari 2024',
      title: 'Menjadi MC Profesional: Panduan Lengkap',
      excerpt: 'Sebagai MC, Anda adalah jembatan antara acara dan audiens. Pelajari bagaimana menjadi MC yang profesional dan dapat diandalkan.',
      author: 'Gideon Surya',
      authorId: 2,
      category: 'MC',
      tags: ['mc', 'master of ceremony', 'event', 'panduan'],
      status: 'published',
      featured: true,
      order: 2,
      readTime: 7,
      fullContent: `Sebagai MC, Anda adalah jembatan antara acara dan audiens. Pelajari bagaimana menjadi MC yang profesional dan dapat diandalkan.

**Mengenal Peran MC**
MC (Master of Ceremony) bukan sekadar pembawa acara, tetapi adalah pemandu yang membuat acara berjalan lancar dan menyenangkan. Seorang MC yang baik harus bisa membaca suasana, berimprovisasi ketika diperlukan, dan menjaga energi audiens tetap tinggi sepanjang acara.

**Persiapan Sebelum Acara**
1. Pelajari rundown acara secara detail
2. Kenali profil pembicara atau tamu yang akan diperkenalkan
3. Pahami tema dan tujuan acara
4. Siapkan backup plan jika ada hal yang tidak sesuai rencana
5. Datang lebih awal untuk koordinasi dengan panitia

**Teknik MC yang Efektif**
- **Vokal yang Jelas**: Pastikan artikulasi Anda jelas dan volume suara cukup terdengar
- **Energi yang Tepat**: Sesuaikan energi Anda dengan jenis acara - formal atau kasual
- **Timing yang Baik**: Jangan terlalu banyak bicara, berikan waktu yang cukup untuk setiap sesi
- **Fleksibilitas**: Siap beradaptasi dengan perubahan mendadak
- **Humor yang Bijak**: Gunakan humor yang sesuai konteks dan tidak menyinggung

**Mengatasi Situasi Darurat**
Sebagai MC profesional, Anda harus siap menghadapi berbagai situasi tak terduga seperti pembicara yang terlambat, masalah teknis, atau perubahan mendadak dalam rundown. Tetap tenang, berkomunikasi dengan panitia, dan isi waktu dengan interaksi yang menarik dengan audiens.

**Kesimpulan**
Menjadi MC profesional membutuhkan kombinasi antara persiapan yang matang, kemampuan improvisasi, dan pengalaman. Terus berlatih dan evaluasi setiap penampilan Anda untuk terus berkembang.`
    },
    {
      id: 3,
      slug: 'rahasia-suara-emas-untuk-penyiar-radio',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMHN0dWRpbyUyMGJyb2FkY2FzdHxlbnwxfHx8fDE3NjAyMjA5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: '25 Januari 2024',
      title: 'Rahasia Suara Emas untuk Penyiar Radio',
      excerpt: 'Suara adalah aset utama seorang penyiar radio. Pelajari teknik olah vokal yang dapat membuat suara Anda lebih menarik dan profesional.',
      author: 'Dina Alia',
      authorId: 5,
      category: 'Broadcasting',
      tags: ['radio', 'broadcasting', 'vokal', 'teknik suara'],
      status: 'published',
      featured: false,
      order: 3,
      readTime: 8,
      fullContent: `Suara adalah aset utama seorang penyiar radio. Pelajari teknik olah vokal yang dapat membuat suara Anda lebih menarik dan profesional.

**Anatomi Suara**
Memahami bagaimana suara diproduksi adalah langkah pertama untuk mengoptimalkannya. Suara dihasilkan dari getaran pita suara yang kemudian diperkuat oleh rongga resonansi di tubuh kita. Dengan teknik yang tepat, Anda dapat mengontrol kualitas suara yang dihasilkan.

**Teknik Pernapasan Diafragma**
Pernapasan diafragma adalah fondasi dari suara yang baik. Berbeda dengan pernapasan dada yang dangkal, pernapasan diafragma menggunakan otot perut untuk menghasilkan napas yang lebih dalam dan stabil. Ini memberikan kontrol yang lebih baik atas volume dan durasi suara Anda.

Cara melatih:
- Berbaring telentang dengan tangan di perut
- Tarik napas dalam-dalam hingga perut mengembang
- Hembuskan napas perlahan sambil merasakan perut mengempis
- Lakukan latihan ini 10-15 menit setiap hari

**Perawatan Pita Suara**
1. Minum air putih yang cukup (minimal 8 gelas per hari)
2. Hindari makanan/minuman yang terlalu dingin atau panas
3. Istirahatkan suara secara teratur
4. Hindari berteriak atau berbicara terlalu keras
5. Jauhi rokok dan alkohol

**Teknik Artikulasi**
Artikulasi yang jelas membuat pesan Anda mudah dipahami. Latih otot-otot mulut dengan:
- Membaca tongue twister setiap hari
- Berlatih mengucapkan konsonan dengan jelas
- Merekam dan mendengarkan kembali latihan Anda

**Modulasi Suara**
Suara yang monoton membosankan. Gunakan variasi dalam:
- Pitch (tinggi rendah nada)
- Volume (keras lembut)
- Tempo (cepat lambat)
- Intonasi (nada naik turun)

**Tips Tambahan untuk Penyiar Radio**
- Warming up vokal sebelum siaran
- Jaga postur tubuh tetap tegak saat berbicara
- Tersenyum saat berbicara (ini membuat suara lebih ramah)
- Latih stamina vokal secara bertahap
- Konsultasi dengan voice coach jika diperlukan

Dengan latihan yang konsisten dan perawatan yang tepat, Anda dapat mengembangkan "suara emas" yang menjadi signature Anda sebagai penyiar radio profesional!`
    },
  ];

  // Filter hanya artikel yang published dan urutkan berdasarkan field 'order'
  // Ini akan berguna ketika terhubung dengan dashboard admin
  const publishedPosts = blogPostsData
    .filter(post => post.status === 'published')
    .sort((a, b) => a.order - b.order);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPost !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedPost(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const openModal = (index) => {
    setSelectedPost(index);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4"><span className="text-[#F9B800]">STC</span> Corner</h2>
          <div className="w-24 h-1 bg-[#F9B800] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Artikel dan tips seputar public speaking, MC, dan komunikasi
          </p>
        </div>

        {/* Render blog cards - Grid jika ≤3, Carousel jika >3 */}
        {publishedPosts.length <= 3 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button 
                    className="text-[#F9B800] hover:text-[#e0a800] inline-flex items-center transition-colors duration-200"
                    onClick={() => openModal(index)}
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {publishedPosts.map((post, index) => (
                  <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <Calendar size={16} className="mr-2" />
                          {post.date}
                        </div>
                        <h3 className="text-xl mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <button 
                          className="text-[#F9B800] hover:text-[#e0a800] inline-flex items-center transition-colors duration-200"
                          onClick={() => openModal(index)}
                        >
                          Baca Selengkapnya
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 bg-[#F9B800] hover:bg-[#e0a700] text-white border-none shadow-lg" />
              <CarouselNext className="-right-12 bg-[#F9B800] hover:bg-[#e0a700] text-white border-none shadow-lg" />
            </Carousel>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedPost !== null && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side - Image (30%) */}
            <div className="relative w-full md:w-[30%] h-48 md:h-auto overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={publishedPosts[selectedPost].image}
                alt={publishedPosts[selectedPost].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>
            </div>

            {/* Right Side - Content (70%) */}
            <div className="w-full md:w-[70%] flex flex-col relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
                aria-label="Close modal"
              >
                <X size={20} className="text-gray-800" />
              </button>

              {/* Header */}
              <div className="p-6 md:p-8 pb-4 border-b border-gray-200">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {publishedPosts[selectedPost].date}
                </div>
                <h2 className="text-2xl md:text-3xl pr-12">
                  {publishedPosts[selectedPost].title}
                </h2>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="prose prose-gray max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {publishedPosts[selectedPost].fullContent}
                  </div>
                </div>
                
                {/* Tags */}
                {publishedPosts[selectedPost].tags && publishedPosts[selectedPost].tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-sm mb-3 text-gray-600">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {publishedPosts[selectedPost].tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <button
                  onClick={closeModal}
                  className="w-full md:w-auto px-6 py-3 bg-[#F9B800] hover:bg-[#e0a700] text-black rounded-lg transition-colors duration-200"
                >
                  Tutup Artikel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
