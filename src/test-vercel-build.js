#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Testing Vercel Build Configuration\n');

try {
  console.log('📋 Current Configuration:');
  
  // Check vite.config.ts
  const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
  if (fs.existsSync(viteConfigPath)) {
    const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
    const outDirMatch = viteConfig.match(/outDir:\s*['"]([^'"]+)['"]/);
    console.log(`   Vite outDir: ${outDirMatch ? outDirMatch[1] : 'NOT FOUND'}`);
  }
  
  // Check vercel.json
  const vercelConfigPath = path.join(process.cwd(), 'vercel.json');
  if (fs.existsSync(vercelConfigPath)) {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf8'));
    console.log(`   Vercel outputDirectory: ${vercelConfig.outputDirectory || 'NOT SET'}`);
  }
  
  // Check package.json
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log(`   Package name: ${packageJson.name}`);
    console.log(`   Build script: ${packageJson.scripts.build || 'NOT FOUND'}`);
  }
  
  console.log('\n🧹 Cleaning previous builds...');
  ['dist', 'build', '.vercel'].forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`   Removed: ${dir}/`);
    }
  });
  
  console.log('\n🏗️ Testing build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n📊 Build Results:');
  const currentDir = fs.readdirSync(process.cwd());
  const buildDirs = currentDir.filter(item => 
    ['dist', 'build'].includes(item) && fs.statSync(item).isDirectory()
  );
  
  if (buildDirs.length === 0) {
    console.log('❌ No build directory found!');
    console.log('📁 Current directory contents:');
    currentDir.forEach(item => {
      const stats = fs.statSync(item);
      if (stats.isDirectory()) {
        console.log(`   📁 ${item}/`);
      }
    });
    process.exit(1);
  }
  
  buildDirs.forEach(dir => {
    console.log(`\n📁 Found build directory: ${dir}/`);
    const dirContents = fs.readdirSync(dir);
    dirContents.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isFile()) {
        const sizeKB = (stats.size / 1024).toFixed(2);
        console.log(`   📄 ${file} (${sizeKB} KB)`);
      } else {
        console.log(`   📁 ${file}/`);
      }
    });
    
    // Check for index.html
    const indexPath = path.join(dir, 'index.html');
    if (fs.existsSync(indexPath)) {
      console.log(`   ✅ index.html found in ${dir}/`);
    } else {
      console.log(`   ❌ index.html NOT found in ${dir}/`);
    }
  });
  
  console.log('\n🎯 Recommendations:');
  if (buildDirs.includes('dist')) {
    console.log('✅ dist/ directory found - configuration looks correct');
    console.log('✅ Ready for Vercel deployment');
  } else if (buildDirs.includes('build')) {
    console.log('⚠️  build/ directory found instead of dist/');
    console.log('🔧 Update vercel.json: "outputDirectory": "build"');
    console.log('   OR');
    console.log('🔧 Check vite.config.ts: ensure outDir is set to "dist"');
  }
  
  console.log('\n🚀 Next steps:');
  console.log('1. Commit changes: git add . && git commit -m "Fix build config"');
  console.log('2. Deploy: vercel --prod');

} catch (error) {
  console.error('\n❌ Test failed:', error.message);
  process.exit(1);
}