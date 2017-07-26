#!/bin/sh

checkout_branch() {
  if ["${TRAVIS_PULL_REQUEST_BRANCH}" = ""]
  then
    git checkout $TRAVIS_BRANCH
  else
    git checkout $TRAVIS_PULL_REQUEST_BRANCH
  fi
}

checkout_branch
