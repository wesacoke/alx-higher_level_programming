#!/bin/bash
# send a POST request to the URL with specified parameters and display the body of the response
curl -s -X POST -d "email=tet@gmail.com&subject=I will always be here for PLD" "$1"
