#!/bin/bash

echo "🔧 Quick Fix untuk Deployment Vercel - Swaragama Training Center"
echo "================================================================"

# Step 1: Clean everything
echo "🧹 Cleaning previous builds..."
rm -rf dist build node_modules/.vite

# Step 2: Fresh install
echo "📦 Fresh install dependencies..."
npm install

# Step 3: Test build locally
echo "🏗️ Testing build locally..."
npm run build

# Step 4: Verify output
echo "✅ Verifying output directory..."
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
  echo "✅ SUCCESS: dist directory created with index.html"
  echo "📊 Build stats:"
  ls -la dist/
  if [ -d "dist/assets" ]; then
    echo "📦 Assets:"
    ls -la dist/assets/
  fi
else
  echo "❌ FAILED: dist directory not found"
  echo "🔍 Current directory contents:"
  ls -la
  if [ -d "build" ]; then
    echo "⚠️  Found 'build' directory instead of 'dist'"
    ls -la build/
  fi
  exit 1
fi

echo ""
echo "🎉 Fix completed! Ready to deploy to Vercel"
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Fix Vercel deployment configuration'"
echo "3. git push origin main"
echo "4. vercel --prod"