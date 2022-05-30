#!/bin/sh

nvm use system
npm run build

mkdir -p ./docs
cp -r ./dist/* ./docs
rm ./dist -r

read -p "commit message: " commit_message

git add .
git commit -m "$commit_message"
git push origin master