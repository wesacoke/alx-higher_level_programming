#!/bin/bash
# Send a GET request to the URL with the X-School-Id header and display the body of the response
curl -SH "X-School-user-Id: 9" "$1"
