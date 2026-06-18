#!/usr/bin/env bash
# Produce a versioned source ZIP of the operator toolkit (excludes node_modules/dist).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
SLUG="travel-rescue-operator-toolkit"
VERSION="$(node -p "require('./package.json').version" 2>/dev/null || echo 0.1.0)"
OUT_DIR="$ROOT/releases"
OUT="$OUT_DIR/${SLUG}-v${VERSION}.zip"
mkdir -p "$OUT_DIR"
rm -f "$OUT"
zip -r -q "$OUT" . \
  -x '*/node_modules/*' 'node_modules/*' -x '*/dist/*' 'dist/*' -x '*/.git/*' '.git/*' -x 'releases/*' -x '*.log'
echo "Created $OUT ($(du -h "$OUT" | cut -f1))"
