#!/bin/bash
# Double-click this file to push to GitHub
cd "$HOME/Documents/Claude/Projects/Manas Majhi's website"
echo "📁 Directory: $(pwd)"
echo ""
echo "🔄 Pushing to GitHub..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/manas648/manasmajhi-com.git
git push -u origin main
echo ""
echo "✅ Done! Now deploy at: https://vercel.com/new"
echo ""
read -p "Press Enter to close..."
