# 🚀 Panduan Deployment Swaragama Training Center

Panduan lengkap untuk deploy website Swaragama Training Center ke berbagai platform hosting.

## 📋 Pre-Deployment Checklist

- [ ] ✅ Dependencies sudah dibersihkan dari backend
- [ ] ✅ Build berhasil tanpa error
- [ ] ✅ Type checking passed
- [ ] ✅ Semua environment variables sudah dikonfigurasi
- [ ] ✅ Meta tags SEO sudah optimal
- [ ] ✅ Performance score > 90

## 🌐 Platform Deployment

### 1. Vercel (RECOMMENDED)

**Mengapa Vercel?**
- Zero-config deployment untuk React
- Automatic HTTPS dan CDN global
- Preview deployments untuk setiap commit
- Optimasi performa otomatis

**Setup:**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **First Time Setup**
   ```bash
   # Login ke Vercel
   vercel login
   
   # Setup project
   vercel
   # Pilih: Yes untuk setup
   # Project name: swaragama-training-center
   # Directory: ./ (current)
   # Build command: npm run build:prod
   # Output directory: dist
   ```

3. **Deploy ke Production**
   ```bash
   npm run build:prod
   vercel --prod
   ```

4. **Auto-Deploy dengan Git**
   - Push repository ke GitHub
   - Connect di Vercel dashboard
   - Setiap push ke main branch akan auto-deploy

**Konfigurasi Environment di Vercel:**
```bash
# Via Dashboard atau CLI
vercel env add VITE_APP_URL production
# Masukkan: https://your-domain.vercel.app
```

### 2. Netlify

**Setup:**

1. **Manual Deploy (Drag & Drop)**
   ```bash
   npm run build:prod
   # Drag folder 'dist' ke netlify.com/drop
   ```

2. **Git Integration**
   - Connect repository di Netlify
   - Build settings:
     - Build command: `npm run build:prod`
     - Publish directory: `dist`
     - Node version: `18`

3. **Custom Domain Setup**
   ```bash
   # Tambahkan CNAME record di DNS:
   # CNAME: www -> your-site.netlify.app
   # A: @ -> 75.2.60.5
   ```

### 3. GitHub Pages

**Setup:**

1. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: GitHub Actions

2. **Auto-Deploy**
   ```bash
   # GitHub Actions sudah dikonfigurasi
   git push origin main
   # Akan auto-deploy ke https://username.github.io/repository-name
   ```

3. **Custom Domain**
   ```bash
   # Tambahkan file CNAME di public/
   echo "swaragamatrainingcenter.com" > public/CNAME
   ```

### 4. Firebase Hosting

**Setup:**

1. **Install Firebase CLI**
   ```bash
   npm i -g firebase-tools
   firebase login
   ```

2. **Initialize Project**
   ```bash
   firebase init hosting
   # Public directory: dist
   # Single-page app: Yes
   # Automatic builds: No
   ```

3. **Deploy**
   ```bash
   npm run build:prod
   firebase deploy --only hosting
   ```

## 🔧 Advanced Configuration

### Custom Domain Setup

1. **DNS Configuration**
   ```
   # For Vercel
   CNAME: www → your-project.vercel.app
   A: @ → 76.76.19.61
   
   # For Netlify  
   CNAME: www → your-site.netlify.app
   A: @ → 75.2.60.5
   ```

2. **SSL Certificate**
   - Vercel/Netlify: Automatic
   - Manual: Let's Encrypt

### Performance Optimization

1. **CDN Configuration**
   ```json
   // vercel.json - sudah dikonfigurasi
   {
     "headers": [
       {
         "source": "/assets/(.*)",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "public, max-age=31536000, immutable"
           }
         ]
       }
     ]
   }
   ```

2. **Image Optimization**
   ```bash
   # Compress images before deployment
   npm install -g imagemin-cli
   imagemin public/images/* --out-dir=public/images/optimized
   ```

### Environment Variables

1. **Production Environment**
   ```bash
   # .env.production
   VITE_APP_URL=https://swaragamatrainingcenter.com
   VITE_APP_VERSION=1.0.0
   ```

2. **Platform-Specific Setup**
   ```bash
   # Vercel
   vercel env add VITE_APP_URL production
   
   # Netlify
   # Tambahkan di dashboard Environment Variables
   
   # GitHub Pages
   # Tambahkan di repository Secrets
   ```

## 🔄 CI/CD Pipeline

### GitHub Actions (Sudah dikonfigurasi)

```yaml
# .github/workflows/deploy.yml
name: Deploy Swaragama Training Center
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
    - run: npm ci
    - run: npm run build:prod
    - uses: amondnet/vercel-action@v25 # Auto-deploy ke Vercel
```

### Manual Deployment Script

```bash
# Run deployment script
npm run deploy
```

## 🌍 Domain & DNS

### Recommended DNS Setup

```
# Primary Domain
A     @     76.76.19.61 (Vercel)
CNAME www   swaragamatrainingcenter.vercel.app

# Subdomain for testing
CNAME staging staging-swaragama.vercel.app
```

### SSL & Security

- **HTTPS**: Automatic dengan Vercel/Netlify
- **Security Headers**: Configured in vercel.json
- **CSP**: Content Security Policy ready

## 📊 Monitoring & Analytics

### Performance Monitoring

1. **Lighthouse CI**
   ```bash
   npm install -g @lhci/cli
   lhci autorun
   ```

2. **Web Vitals**
   ```javascript
   // Sudah terintegrasi di aplikasi
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
   ```

### Error Tracking

1. **Sentry Integration** (Optional)
   ```bash
   npm install @sentry/react
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear cache
   npm run clean
   rm -rf node_modules package-lock.json
   npm install
   npm run build:prod
   ```

2. **Routing Issues (404)**
   ```json
   // vercel.json - sudah dikonfigurasi
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

3. **Environment Variables Not Working**
   ```bash
   # Pastikan prefix VITE_
   VITE_APP_URL=https://example.com
   
   # Restart dev server setelah change
   npm run dev
   ```

4. **Large Bundle Size**
   ```bash
   # Analyze bundle
   npm run analyze
   
   # Check for unused dependencies
   npx depcheck
   ```

### Platform-Specific Issues

**Vercel:**
- Function timeout: Use Edge Runtime
- Large assets: Optimize images/fonts

**Netlify:**
- Build timeout: Split builds
- Large repo: Use Git LFS

**GitHub Pages:**
- CNAME: Add to public/ folder
- 404 errors: Check base URL

## ✅ Post-Deployment Checklist

- [ ] ✅ Website accessible via HTTPS
- [ ] ✅ All pages load correctly
- [ ] ✅ Dark/Light mode toggle works
- [ ] ✅ Contact form submissions work
- [ ] ✅ Admin dashboard accessible
- [ ] ✅ Mobile responsiveness verified
- [ ] ✅ Performance score > 90
- [ ] ✅ SEO meta tags working
- [ ] ✅ Social media previews working
- [ ] ✅ Google Analytics tracking (if added)

## 🔗 Quick Deploy Commands

```bash
# Vercel
npm run build:prod && vercel --prod

# Netlify (CLI)
npm run build:prod && netlify deploy --prod --dir=dist

# Firebase
npm run build:prod && firebase deploy --only hosting

# GitHub Pages
git add . && git commit -m "Deploy" && git push origin main
```

## 📞 Support

Jika mengalami kendala deployment:
1. Check dokumentasi platform terkait
2. Review error logs di build console
3. Pastikan semua dependencies updated
4. Contact developer jika diperlukan

---

**🎉 Selamat! Website Swaragama Training Center siap go-live!**