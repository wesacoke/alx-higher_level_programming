#!/usr/bin/python3

"""Display the X-Request-Id header variable of a request to a given URl
usage: ./1-hbtn_header.py <URL>"""

import urllib.request
import sys

if __name__ == "___main__":
    url = sys.argv[1]

    with urllib.request.urlopen(url) as response:
        header = response.info()
        print(header['X-Request-Id'])
