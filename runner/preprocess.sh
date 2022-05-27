#!/usr/bin/env bash
set -euo pipefail

for app in "$(dirname $PWD/$0)/../benchmark"/*/; do
	for lib in "$app"*/; do
		echo -e "Pre-processing $lib"
		cd "$lib"

		if [ -f "$lib/package.json" ] | [ -f "$lib/package-lock.json" ]; then
			echo "Detected npm files, installing ..."
			npm ci
		fi
	done
done