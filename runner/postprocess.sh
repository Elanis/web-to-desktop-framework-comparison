#!/usr/bin/env bash
set -euo pipefail

git pull

git add ../README.md
git add benchmarks.json

git commit -m "Automatic benchmark update - $(date)";

# We need that last one line to prevent accumulating artifacts and using tons of place on our computer 
git clean -xdf