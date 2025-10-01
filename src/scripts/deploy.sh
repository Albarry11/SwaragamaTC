#!/bin/bash

# Swaragama Training Center - Production Deployment Script
# Pure Frontend Application

echo "🚀 Starting deployment process for Swaragama Training Center..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf node_modules/.vite/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type checking..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Type checking failed. Please fix the errors before deploying."
    exit 1
fi

# Build the application
echo "🏗️  Building application for production..."
npm run build:prod
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Check if build directory exists
if [ ! -d "dist" ]; then
    echo "❌ Build directory not found. Build may have failed."
    exit 1
fi

# Validate critical files exist
echo "✅ Validating build output..."
CRITICAL_FILES=("dist/index.html" "dist/assets")
for file in "${CRITICAL_FILES[@]}"; do
    if [ ! -e "$file" ]; then
        echo "❌ Critical file missing: $file"
        exit 1
    fi
done

# Display build size
echo "📊 Build size analysis:"
du -sh dist/

# Optional: Test the build locally
echo "🧪 Testing build locally..."
npm run preview &
PREVIEW_PID=$!
sleep 3

# Kill preview server
kill $PREVIEW_PID 2>/dev/null

echo "✅ Build completed successfully!"
echo "📁 Build output is ready in the 'dist' directory"
echo ""
echo "🌐 Deployment options:"
echo "   1. Vercel: Run 'vercel --prod' in project root"
echo "   2. Netlify: Drag 'dist' folder to netlify.com/drop"
echo "   3. GitHub Pages: Push to main branch (if configured)"
echo ""
echo "🎉 Swaragama Training Center is ready for deployment!"