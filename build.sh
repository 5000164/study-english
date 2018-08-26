#!/usr/bin/env bash

gatsby build --prefix-paths
rm -rf ./docs/
mv ./public/ ./docs/
