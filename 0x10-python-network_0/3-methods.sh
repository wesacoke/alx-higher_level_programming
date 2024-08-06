#!/bin/bash
# Sends OPTION request to the URL and display the allow header
curl -sI "$1" | grep "Allow:" | cut -d ' ' -f2-
