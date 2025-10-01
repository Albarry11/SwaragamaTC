#!/bin/bash

# Vercel Build Script for Swaragama Training Center
echo "🚀 Starting Swaragama Training Center build process..."

# Set NODE_ENV to production
export NODE_ENV=production

# Clear any existing build artifacts
echo "🧹 Cleaning previous build..."
rm -rf dist
rm -rf node_modules/.vite

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production --silent

# Type checking
echo "🔍 Type checking..."
npx tsc --noEmit

# Build the application
echo "🏗️ Building application..."
npx vite build

# Verify build output
echo "✅ Verifying build output..."
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
  echo "✅ Build successful! Output directory 'dist' created."
  echo "📊 Build stats:"
  ls -la dist/
  echo "📦 Asset sizes:"
  du -sh dist/assets/* 2>/dev/null || echo "No assets found"
else
  echo "❌ Build failed! Output directory 'dist' not found."
  exit 1
fi

echo "🎉 Build completed successfully!"