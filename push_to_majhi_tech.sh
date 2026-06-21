#!/bin/bash
# Push 9 new SEO pages to majhi.tech (manas648/Majhi-OS)
set -e

WORKSPACE="$HOME/Documents/Claude/Projects/Manas Majhi's website"
REPO_DIR="/tmp/majhi-os-push-$(date +%s)"

echo "→ Cloning manas648/Majhi-OS..."
git clone https://github.com/manas648/Majhi-OS.git "$REPO_DIR"
cd "$REPO_DIR"

echo "→ Copying 9 new pages + sitemap + index..."
for f in cto-search.html vp-marketing-hiring.html cfo-search.html \
          recruiting-kpis.html hiring-cost-reduction.html mandate-recovery.html \
          executive-hiring-process.html talent-acquisition-strategy.html \
          recruiting-operations.html sitemap.xml index.html; do
  cp "$WORKSPACE/$f" .
done

echo "→ Committing..."
git add .
git commit -m "Add 9 new SEO pages — majhi.tech now at 52 URLs

New pages: cto-search, vp-marketing-hiring, cfo-search, recruiting-kpis,
hiring-cost-reduction, mandate-recovery, executive-hiring-process,
talent-acquisition-strategy, recruiting-operations

+ Added 9 article cards to homepage resources grid
+ Updated sitemap.xml to 52 URLs"

echo "→ Pushing to GitHub..."
git push origin main

echo ""
echo "✓ Done! Vercel will deploy in ~30 seconds."
echo "  Check: https://majhi.tech/mandate-recovery"

# Cleanup
cd /tmp && rm -rf "$REPO_DIR"
