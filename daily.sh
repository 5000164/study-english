#!/usr/bin/env bash

mkdir -p src/pages/$(date "+%Y/%-m/%-d")
echo -e "---\ntitle: \"daily study "$(date "+%Y/%-m/%-d")"\"\ndate: \""$(date --iso-8601=seconds)"\"\n---" > src/pages/$(date "+%Y/%-m/%-d")/daily.md
