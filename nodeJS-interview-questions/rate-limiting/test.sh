#!/bin/bash

for i in {1..51}
do
    curl http://18.209.160.76:80/health &
done