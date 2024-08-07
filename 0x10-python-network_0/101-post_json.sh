#!/bin/bash
# Checks if number of argument is eqaul to 2
curl -s -H "Content-Type: application/json" -d "$(cat "$2")" "$1"
