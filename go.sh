#!/bin/sh

npm install -g grunt-cli
npm install
./gradlew -Pprod clean test bootRepackage
