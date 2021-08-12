#!/bin/env bash

yarn build
git checkout x-ui-home
cd dist/
mv -f * ../
git add .
git commit -m "update"
git push
git checkout -