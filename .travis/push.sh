#!/bin/sh

commit_files() {
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER [skip ci]"
  git remote add origin-cleanup https://${GH_TOKEN}@github.com/ChrisALee/twitch-stocks.git > /dev/null 2>&1

  if ["${TRAVIS_PULL_REQUEST_BRANCH}" = ""]
  then
    git push --quiet --set-upstream origin-cleanup $TRAVIS_BRANCH
  else
    git push --quiet --set-upstream origin-cleanup $TRAVIS_PULL_REQUEST_BRANCH
  fi
}

commit_files
