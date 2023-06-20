# /usr/bin/env bash

docker run --name web -d -p 8013:80 -it --rm -v ~/dev/holy-rollers/build/:/usr/share/nginx/html nginx
