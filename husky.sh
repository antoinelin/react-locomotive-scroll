#!/usr/bin/env sh
npx husky add .husky/pre-commit "yarn pre-commit"
npx husky add .husky/prepare-commit-msg "yarn prepare-commit-msg"