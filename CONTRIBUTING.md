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
* Commit your changes (npm run cm) [0]
* Push to the branch (git push origin improve-feature)
* Create a Pull Request

[0] - It is recommended to use the built-in [Commitizen](https://github.com/commitizen/cz-cli) tool for commits.

### We follow [Angular's Git Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message).

An example from the link:
```
# good - imperative present tense and fewer than 100 characters
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

Below are the rules that we follow. They can also be found in the tslint.json file.

```json
We use AirBnB as a base and manually overwrite any matching rules with whats defined below:
"rules": {
    "class-name": true,
    "indent": [
        true,
        "spaces"
    ],
    "one-line": [
        true,
        "check-open-brace",
        "check-whitespace"
    ],
    "no-var-keyword": true,
    "quotemark": [
        true,
        "single",
        "avoid-escape",
        "jsx-double"
    ],
    "semicolon": [
        true,
        "always",
        "ignore-bound-class-methods"
    ],
    "whitespace": [
        true,
        "check-branch",
        "check-decl",
        "check-operator",
        "check-preblock",
        "check-module",
        "check-separator",
        "check-type"
    ],
    "typedef-whitespace": [
        true,
        {
            "call-signature": "nospace",
            "index-signature": "nospace",
            "parameter": "nospace",
            "property-declaration": "nospace",
            "variable-declaration": "nospace"
        },
        {
            "call-signature": "onespace",
            "index-signature": "onespace",
            "parameter": "onespace",
            "property-declaration": "onespace",
            "variable-declaration": "onespace"
        }
    ],
    "no-internal-module": true,
    "no-trailing-whitespace": true,
    "no-null-keyword": true,
    "jsdoc-format": true
}
We inject the Prettier rules at the end. These overwrite any matching rules from AirBnB.
These will be documented once we work out what they are.
```
