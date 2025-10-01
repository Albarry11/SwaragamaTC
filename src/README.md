# 🎯 Swaragama Training Center Website

Website resmi Swaragama Training Center - Lembaga pelatihan komunikasi terdepan di Yogyakarta yang dibangun sebagai **Pure Frontend Application** dengan teknologi modern.

## 🚀 Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS v4** 
- **Motion/React** untuk animasi
- **Vite** sebagai build tool
- **Lucide React** untuk icons
- **Recharts** untuk visualisasi data
- **Sonner** untuk toast notifications

## 🎨 Features

- ✅ **Pure Frontend Application** - Tanpa dependency backend
- ✅ **Dark/Light Mode** dengan persistensi localStorage
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Smooth Animations** dengan Motion/React
- ✅ **SEO Optimized** dengan meta tags lengkap
- ✅ **Performance Optimized** dengan lazy loading dan code splitting
- ✅ **PWA Ready** dengan service worker
- ✅ **STC Corner** dengan admin dashboard tersembunyi
- ✅ **CRUD Operations** untuk Articles, News, dan Gallery
- ✅ **LocalStorage** sebagai data persistence

## 🏗️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/swaragama/website.git
cd website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run build:prod   # Build with type checking
npm run preview      # Preview production build
npm run lint         # Type checking
npm run clean        # Clean build cache
npm run deploy       # Run deployment script
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Automatic Deployment via GitHub:**
   ```bash
   # Connect repository to Vercel
   # Push to main branch will auto-deploy
   git add .
   git commit -m "Deploy to production"
   git push origin main
   ```

2. **Manual Deployment:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   npm run build:prod
   vercel --prod
   ```

### Netlify

1. **Drag & Drop:**
   ```bash
   npm run build:prod
   # Drag 'dist' folder to netlify.com/drop
   ```

2. **Git Integration:**
   - Connect repository di Netlify dashboard
   - Build command: `npm run build:prod`
   - Publish directory: `dist`

### GitHub Pages

```bash
# Enable GitHub Pages di repository settings
# GitHub Actions akan auto-deploy dari main branch
git push origin main
```

## 📁 Project Structure

```
swaragama-training-center/
├── components/           # React components
│   ├── ui/              # Shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   └── ...              # Other sections
├── hooks/               # Custom React hooks
├── styles/              # Global CSS styles
├── utils/               # Utility functions
├── public/              # Static assets
├── .github/             # GitHub Actions
├── scripts/             # Deployment scripts
├── vercel.json          # Vercel configuration
├── netlify.toml         # Netlify configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Brand Guidelines

- **Primary Color:** #ffc107 (Swaragama Yellow)
- **Secondary Color:** #1a1a1a (Dark)
- **Background:** #ffffff (Light) / #1a1a1a (Dark)
- **Font:** System fonts dengan fallback

## 🔐 Admin Access

STC Corner memiliki admin dashboard tersembunyi:
- **Akses:** Klik logo STC di footer 7x dalam 2 detik
- **Username:** `adminstcstcadmin`  
- **Password:** `20111102`
- **Features:** CRUD untuk Tips & Tricks, Berita, dan Galeri

## 📊 Performance

- **Lighthouse Score:** 90+ untuk semua metrics
- **Core Web Vitals:** Optimized
- **Bundle Size:** < 500KB gzipped
- **First Paint:** < 1.5s

## 🛠️ Customization

### Mengubah Konten
1. Edit komponen di folder `components/`
2. Update data di localStorage untuk konten dinamis
3. Modify `styles/globals.css` untuk styling

### Menambah Section Baru
```tsx
// components/NewSection.tsx
export const NewSection = () => {
  return (
    <section id="new-section" className="py-20">
      {/* Section content */}
    </section>
  );
};

// App.tsx
import { NewSection } from './components/NewSection';
// Add to main component
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build:prod
```

### Deployment Issues
```bash
# Check build output
npm run build:prod
npm run preview

# Validate build
ls -la dist/
```

## 📱 Contact

- **Website**: [swaragamatrainingcenter.com](https://swaragamatrainingcenter.com)
- **Email**: swaragamatrainingcenter@gmail.com
- **WhatsApp**: +62 856 2727 323
- **Instagram**: [@swaragamatc](https://instagram.com/swaragamatc)

## 📄 License

© 2024 Swaragama Training Center. All rights reserved.