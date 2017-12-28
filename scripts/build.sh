#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SRC_ROOT=$(dirname $DIR)

echo "[$SRC_ROOT]"

(cd $SRC_ROOT && \
  docker build -t xkey-tool-build . && \
  docker create --name xkey xkey-tool-build && \
  rm -fr ./dist/ && \
  docker cp xkey:/app ./dist/ && \
  docker rm xkey && \
  (cd dist/ && rm -fr .git/ .gitignore node_modules/ scripts/ \
                      .travis.yml README.md Dockerfile package.json package-lock.json) && \
  echo "Ok. Site built in ${SRC_ROOT}/dist"
)
