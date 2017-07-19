# Contributing Guidelines
Thank you for checking out Twitch Stocks!

We're very much in the early planning phase and are still looking for people of all experience levels to work with.

As such, these guidelines may change drastically.

## Submitting Changes

Follow these steps to contribute:

* Fork the repo
* Create a new branch (git checkout -b improve-feature)
* Make the appropriate changes in the files
* Add changes to reflect the changes made
* Run TSLint
* Commit your changes (git commit -am 'Improve feature')
* Push to the branch (git push origin improve-feature)
* Create a Pull Request


#### Note: Commits should follow [this](https://github.com/agis/git-style-guide#commits) convention.


#### As it says in that link, remember to keep each commit to one change. Also, make sure the commit message is written in the imperative present tense with the first letter capitalized.


An example from the link:
```
# good - imperative present tense, capitalized, fewer than 50 characters
Mark huge records as obsolete when clearing hinting faults

# bad
fixed ActiveModel::Errors deprecation messages failing when AR was used outside of Rails.
```

## Coding Conventions
We use TSLint and Prettier to keep code consistent. Please run the following in your command line:
```
npm run tslint
```
This will check for lint errors and yell at you if it finds any. Please fix any errors found before creating a pull request.
