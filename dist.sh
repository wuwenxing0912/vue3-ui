#!/bin/env bash

yarn build
git checkout x-ui-home
mv -f dist/* ./
git add .
git commit -m "update"
git push
git checkout -