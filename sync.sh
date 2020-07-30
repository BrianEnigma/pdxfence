#!/bin/bash

rm -rf upload
mkdir upload
cp -r *.md *.jpg *.html *.js *.css favicon.ico robots.txt lib icons upload/
cd upload
aws --profile=s3admin s3 sync . s3://fence.netninja.com

