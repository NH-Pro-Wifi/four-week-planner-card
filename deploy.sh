#!/bin/bash

VERSION=`npm version patch`
npm update
npm run all
git commit -am $VERSION
git tag -sm $VERSION $VERSION
git push --follow-tags