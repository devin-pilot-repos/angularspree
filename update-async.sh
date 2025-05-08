#!/bin/bash
find src -name "*.spec.ts" -type f -exec sed -i 's/import { async,/import { waitForAsync,/g' {} \;
find src -name "*.spec.ts" -type f -exec sed -i 's/beforeEach(async(/beforeEach(waitForAsync(/g' {} \;
