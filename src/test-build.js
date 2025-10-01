#!/usr/bin/env node

// Test Build Script for Swaragama Training Center
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Testing Swaragama Training Center build...\n');

try {
  // Step 1: Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  console.log('✅ Cleaned successfully\n');

  // Step 2: Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed\n');

  // Step 3: Type check
  console.log('🔍 Type checking...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ Type check passed\n');

  // Step 4: Build
  console.log('🏗️ Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed\n');

  // Step 5: Verify output
  console.log('🔍 Verifying build output...');
  
  const distPath = path.join(process.cwd(), 'dist');
  const indexPath = path.join(distPath, 'index.html');
  const assetsPath = path.join(distPath, 'assets');

  if (!fs.existsSync(distPath)) {
    throw new Error('❌ dist directory not found!');
  }

  if (!fs.existsSync(indexPath)) {
    throw new Error('❌ index.html not found in dist!');
  }

  if (!fs.existsSync(assetsPath)) {
    throw new Error('❌ assets directory not found in dist!');
  }

  // Check file sizes
  const stats = fs.statSync(indexPath);
  console.log(`📄 index.html size: ${(stats.size / 1024).toFixed(2)} KB`);

  const assetFiles = fs.readdirSync(assetsPath);
  console.log(`📦 Asset files: ${assetFiles.length} files`);
  
  assetFiles.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const fileStats = fs.statSync(filePath);
    const sizeKB = (fileStats.size / 1024).toFixed(2);
    console.log(`   📁 ${file}: ${sizeKB} KB`);
  });

  console.log('\n🎉 Build test completed successfully!');
  console.log('✅ Ready for deployment to Vercel');

} catch (error) {
  console.error('\n❌ Build test failed:', error.message);
  process.exit(1);
}