#!/bin/bash

#This script takes in a URL, sends a request to the URL and display size of the body response in bytes
curl -s "$1" | wc -c
