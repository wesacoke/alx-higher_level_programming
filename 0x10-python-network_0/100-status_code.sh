#!/bin/bash
#send a request to the URL passed as an argument and display the status code
curl -so /dev/null -w "%{http_code}" "$1"
