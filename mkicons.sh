#!/bin/bash

cd icons

SIZES="128 167 180 152 64 48 32 16"

for SIZE in $SIZES ; do
    convert favicon-256.png -interpolate Nearest -filter point -resize ${SIZE}x${SIZE} favicon-${SIZE}.png
done

