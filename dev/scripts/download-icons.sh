#!/bin/bash

# Script to download icons from Lucide repositories for development
# This creates a dev/icons/ folder with icons from lucide and lucide-lab repos

set -e  # Exit on any error

echo "🚀 Starting icon download from Lucide repositories..."

# Create dev/icons directory (relative to plugin root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

mkdir -p "$PLUGIN_ROOT/dev/icons"
cd "$PLUGIN_ROOT/dev/icons"

# Clean up any existing temp directories
rm -rf temp-lucide temp-lucide-lab

echo "📥 Downloading icons from lucide-icons/lucide..."

# Clone lucide repo with sparse checkout for icons/
git clone --depth 1 --filter=blob:none --sparse https://github.com/lucide-icons/lucide.git temp-lucide
cd temp-lucide
git sparse-checkout set icons/
git checkout
cd ..

echo "📥 Downloading icons from lucide-icons/lucide-lab..."

# Clone lucide-lab repo with sparse checkout for icons/
git clone --depth 1 --filter=blob:none --sparse https://github.com/lucide-icons/lucide-lab.git temp-lucide-lab
cd temp-lucide-lab
git sparse-checkout set icons/
git checkout
cd ..

echo "📋 Organizing icons..."

# Create subdirectories for each repo
mkdir -p lucide lucide-lab

# Copy icons from each repo
if [ -d "temp-lucide/icons" ]; then
    cp -r temp-lucide/icons/* lucide/ 2>/dev/null || true
    echo "✅ Copied $(find temp-lucide/icons -name "*.svg" | wc -l) icons from lucide"
else
    echo "⚠️  No icons directory found in lucide repo"
fi

if [ -d "temp-lucide-lab/icons" ]; then
    cp -r temp-lucide-lab/icons/* lucide-lab/ 2>/dev/null || true
    echo "✅ Copied $(find temp-lucide-lab/icons -name "*.svg" | wc -l) icons from lucide-lab"
else
    echo "⚠️  No icons directory found in lucide-lab repo"
fi

echo "🧹 Cleaning up temporary files..."

# Clean up temp directories
rm -rf temp-lucide temp-lucide-lab

echo ""
echo "🎉 Icon download complete!"
echo "📁 dev/icons/lucide/ - $(find lucide -name "*.svg" 2>/dev/null | wc -l || echo 0) icons"
echo "📁 dev/icons/lucide-lab/ - $(find lucide-lab -name "*.svg" 2>/dev/null | wc -l || echo 0) icons"
echo ""
echo "💡 These folders are git-ignored for development use only."
