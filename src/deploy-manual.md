# Manual Deployment Guide untuk Swaragama Training Center

## 🚀 Langkah-langkah Manual Deployment

### 1. Pre-deployment Check
```bash
# Test build lokal terlebih dahulu
npm run clean
npm install
npm run build

# Verifikasi output
ls -la dist/
```

### 2. Deploy ke Vercel (Method 1 - CLI)
```bash
# Install Vercel CLI jika belum ada
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

### 3. Deploy ke Vercel (Method 2 - Git Integration)
1. Push code ke GitHub repository
2. Login ke [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Konfigurasi otomatis akan terbaca dari `vercel.json`

### 4. Troubleshooting Build Issues

#### Masalah: "No Output Directory named 'dist' found"
**Solusi:**
```bash
# Pastikan build berhasil secara lokal
npm run build

# Cek apakah folder dist terbuat
ls -la dist/

# Jika tidak ada, coba clean install
npm run clean
npm install
npm run build
```

#### Masalah: "Chunk size warning"
**Solusi:** Sudah dioptimasi di `vite.config.ts` dengan:
- Manual chunk splitting
- Increased warning limit
- Aggressive code compression

### 5. Environment Variables (jika diperlukan)
```bash
# Di Vercel Dashboard → Settings → Environment Variables
NODE_ENV=production
```

### 6. Custom Domain Setup (opsional)
```bash
# Via Vercel CLI
vercel domains add yourdomain.com

# Atau via Vercel Dashboard → Settings → Domains
```

### 7. Post-deployment Verification
1. ✅ Website loading correctly
2. ✅ Dark/Light mode toggle works
3. ✅ All animations smooth
4. ✅ Navigation working
5. ✅ STC Corner admin panel accessible
6. ✅ Mobile responsive
7. ✅ Performance score good (check via Lighthouse)

### 8. Monitoring
- Vercel Analytics (otomatis aktif)
- Vercel Speed Insights
- Error logging di Vercel Dashboard

## 🛠️ Quick Fix Commands

```bash
# Reset complete
git clean -fdx
npm install
npm run build

# Force rebuild
rm -rf node_modules dist
npm install
npm run build

# Vercel redeploy
vercel --prod --force
```

## 📊 Expected Performance Metrics
- **Build Time:** < 2 minutes
- **Bundle Size:** < 1MB total
- **Lighthouse Score:** 90+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s

## 🔗 Useful Links
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Docs](https://vercel.com/docs)
- [Performance Monitoring](https://vercel.com/docs/concepts/analytics)