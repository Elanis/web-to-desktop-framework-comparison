#!/usr/bin/env bash

npm i -g npm-check-updates

function updateDeps() {
	echo "$PWD"

	if [ -f "package.json" ] | [ -f "package-lock.json" ]; then
		echo "Detected npm files, checking dependencies ..."
		npm ci
		ncu -u
		npm i
		npm audit
		npm audit fix
		git add package.json
		git add package-lock.json
		git add yarn.lock
		git commit -m "[$benchmark] [$framework] Update npm dependencies"
	fi

	if [ -f "Cargo.toml" ] | [ -f "Cargo.lock" ]; then
		echo "Detected cargo files, checking dependencies ..."
		cargo update
		git add Cargo.toml
		git add Cargo.lock
		git commit -m "[$benchmark] [$framework] Update tauri dependencies"
	fi

	git clean -xdf
}

for benchmark in */; do
	(
		cd "$benchmark"
		echo "Scanning $benchmark subdirectories ..."
		for framework in */; do
			(
				echo "Updating $benchmark/$framework ..."
				cd "$framework"

				updateDeps

				ls $PWD/*/ >/dev/null 2>&1 ; 

				if [ $? == 0 ]; then
					for subFolder in */; do
						(
							cd "$subFolder"
							updateDeps
						)
					done
				fi
			)
		done
	)
done

git clean -xdf