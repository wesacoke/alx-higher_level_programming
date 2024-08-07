#!/bin/bash
# Send a GET request to the URL with the X-School-Id header
curl - SH "X-School-user-Id: 98" "$1"
