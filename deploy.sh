#!/bin/bash
set -e

echo "🔨 Build..."
npm run build

echo "🚀 Déploiement sur VPS..."
rsync -az --delete dist/ root@178.105.139.106:/var/www/digitalpulse-agency/

echo "📦 Push GitHub..."
git add -A
git commit -m "${1:-update site}" || echo "Rien à committer"
git push

echo "✅ Déployé sur digitalpulse-agency.fr"
