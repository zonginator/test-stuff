#!/bin/sh

npm install -g grunt-cli
./gradlew -Pprod clean test bootRepackage
