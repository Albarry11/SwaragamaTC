import React from 'react';

export const Clients = () => {
  // Baris 1 - Logo klien
  const clientLogosRow1 = [
    { name: 'Bank Negara Indonesia', logo: '/assets/clients/bni-logo.png' },
    { name: 'Bank Rakyat Indonesia', logo: '/assets/clients/bri-logo.png' },
    { name: 'SRM Corporate University', logo: '/assets/clients/srm-logo.png' },
    { name: 'Bank Nusamba', logo: '/assets/clients/nusamba-logo.png' },
    { name: 'BPR BDE Yogyakarta', logo: '/assets/clients/bpr-bde-logo.png' },
    { name: 'Globe', logo: '/assets/clients/globe-logo.png' },
    { name: 'Telkom Indonesia', logo: '/assets/clients/telkom-logo.png' },
    { name: 'Center for Digital Society', logo: '/assets/clients/cfds-logo.png' },
    { name: 'AMC IT Consulting', logo: '/assets/clients/amc-logo.png' },
    { name: 'Software Seni', logo: '/assets/clients/software-seni-logo.png' },
    { name: 'Matahari Department Store', logo: '/assets/clients/matahari-logo.png' },
    { name: 'Alfamidi', logo: '/assets/clients/alfamidi-logo.png' },
    { name: 'BJ Home Supermarket', logo: '/assets/clients/bj-home-logo.png' },
    { name: 'Waroeng Steak & Shake', logo: '/assets/clients/waroeng-logo.png' },
    { name: 'Yamic Panda', logo: '/assets/clients/yamic-panda-logo.png' },
    { name: 'Mutiara Joger Bakpia Pathok', logo: '/assets/clients/joger-logo.png' },
  ];

  // Baris 2 - Logo klien
  const clientLogosRow2 = [
    { name: 'Universitas Gadjah Mada', logo: '/assets/clients/ugm-logo.png' },
    { name: 'UIN Sunan Kalijaga Yogyakarta', logo: '/assets/clients/uin-logo.png' },
    { name: 'Universitas Terbuka', logo: '/assets/clients/ut-logo.png' },
    { name: 'Institut Seni Indonesia Yogyakarta', logo: '/assets/clients/isi-logo.png' },
    { name: 'Universitas Islam Indonesia', logo: '/assets/clients/uii-logo.png' },
    { name: 'Universitas Muhammadiyah Yogyakarta', logo: '/assets/clients/umy-logo.png' },
    { name: 'Universitas Sanata Dharma Yogyakarta', logo: '/assets/clients/usd-logo.png' },
    { name: 'Universitas Atma Jaya Jogjakarta', logo: '/assets/clients/uajy-logo.png' },
    { name: 'Universitas Kristen Duta Wacana', logo: '/assets/clients/ukdw-logo.png' },
    { name: 'STIE YKPN Yogyakarta', logo: '/assets/clients/ykpn-logo.png' },
    { name: 'FEB UGM', logo: '/assets/clients/feb-ugm-logo.png' },
    { name: 'Hubungan Internasional', logo: '/assets/clients/hi-logo.png' },
    { name: 'Magister Manajemen Universitas Sanata Dharma', logo: '/assets/clients/mm-usd-logo.png' },
    { name: 'Fakultas Psikologi Universitas Mercu Buana', logo: '/assets/clients/mercu-buana-logo.png' },
    { name: 'Mesin FT UGM', logo: '/assets/clients/ft-ugm-logo.png' },
    { name: 'FIKOMM', logo: '/assets/clients/fikomm-logo.png' },
  ];

  // Baris 3 - Logo klien
  const clientLogosRow3 = [
    { name: 'Kementerian Pertahanan Republik Indonesia', logo: '/assets/clients/kemhan-logo.png' },
    { name: 'Badan Meteorologi Klimatologi dan Geofisika', logo: '/assets/clients/bmkg-logo.png' },
    { name: 'Sagan Yogyakarta', logo: '/assets/clients/sagan-logo.png' },
    { name: 'SD Masjid Syuhada', logo: '/assets/clients/sd-syuhada-logo.png' },
    { name: 'SDN Purwodingratan', logo: '/assets/clients/sdn-logo.png' },
    { name: 'Pawitikra', logo: '/assets/clients/pawitikra-logo.png' },
    { name: 'Badan Narkotika Nasional', logo: '/assets/clients/bnn-logo.png' },
    { name: 'Otoritas Jasa Keuangan', logo: '/assets/clients/ojk-logo.png' },
    { name: 'Dinas Pariwisata Daerah Istimewa Yogyakarta', logo: '/assets/clients/dispar-diy-logo.png' },
    { name: 'Bea Cukai Yogyakarta', logo: '/assets/clients/bea-cukai-logo.png' },
    { name: 'RSM Dr. YAP Yogyakarta', logo: '/assets/clients/rsm-yap-logo.png' },
    { name: 'Kaltim Methanol Industri', logo: '/assets/clients/kaltim-logo.png' },
    { name: 'Paguyuban Dimas Diajeng Jogja', logo: '/assets/clients/dimas-diajeng-logo.png' },
    { name: 'Depot Loro AMM Yogyakarta', logo: '/assets/clients/depot-loro-logo.png' },
    { name: 'Nasi Uduk Palagan', logo: '/assets/clients/nasi-uduk-logo.png' },
    { name: 'Universitas Kristen Satya Wacana', logo: '/assets/clients/uksw-logo.png' },
  ];

  // Komponen untuk satu logo
  const LogoItem = ({ name, logo }: { name: string; logo: string }) => (
    <div className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md mx-2 flex items-center justify-center hover:shadow-xl transition-shadow duration-300 p-4">
      <img 
        src={logo} 
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );

  // Komponen untuk satu baris scrolling
  const ScrollingRow = ({ direction, logos }: { direction: 'left' | 'right'; logos: Array<{ name: string; logo: string }> }) => {
    if (logos.length === 0) return null;
    
    return (
      <div className="relative mb-6">
        <div className={`flex ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
          {/* Render logo 4x untuk seamless infinite scroll */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex">
              {logos.map((client, idx) => (
                <LogoItem key={`${index}-${idx}`} name={client.name} logo={client.logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="clients" className="py-16 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Klien Kami</h2>
          <div className="w-24 h-1 bg-[#F9B800] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia
          </p>
        </div>
      </div>

      {/* Baris 1 - Scroll ke kanan */}
      <div className="relative z-10">
        <ScrollingRow direction="right" logos={clientLogosRow1} />

      {/* Baris 2 - Scroll ke kiri */}
      <ScrollingRow direction="left" logos={clientLogosRow2} />

      {/* Baris 3 - Scroll ke kanan */}
        <ScrollingRow direction="right" logos={clientLogosRow3} />
      </div>

      {clientLogosRow1.length === 0 && clientLogosRow2.length === 0 && clientLogosRow3.length === 0 && (
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center py-12">
            <p className="text-gray-400 italic">
              Logo klien akan segera ditampilkan
            </p>
          </div>
        </div>
      )}
      
      {(clientLogosRow1.length > 0 || clientLogosRow2.length > 0 || clientLogosRow3.length > 0) && (
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              Dan masih banyak perusahaan lainnya yang telah mempercayai kami
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
