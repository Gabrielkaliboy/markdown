#!/bin/bash
echo "update to Github"
hexo generate
cp -R public/* .deploy/GabrielKaliboy.github.io
cd .deploy/GabrielKaliboy.github.io
git add .
git commit -m ¡°update¡±
git push origin master