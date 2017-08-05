# Twitch 
[![Build Status](https://travis-ci.org/ChrisALee/twitch-stocks.svg?branch=master)](https://travis-ci.org/ChrisALee/twitch-stocks)
[![Coverage Status](https://coveralls.io/repos/github/ChrisALee/twitch-stocks/badge.svg?branch=coveralls)](https://coveralls.io/github/ChrisALee/twitch-stocks?branch=coveralls)

# Development

## Getting Started

Firstly, check out the project's [Roadmap](https://github.com/ChrisALee/twitch-stocks/wiki/Roadmap) and [issues](https://github.com/ChrisALee/twitch-stocks/issues).

1. Install [Node.js](https://nodejs.org/en/ "Node.js").

I recommend using Node Version Manager: [Linux/macOS](https://github.com/creationix/nvm)  [Windows](https://github.com/coreybutler/nvm-windows)

2. Fork the repo.

3. Clone the project.

```
git clone https://github.com/ChrisALee/twitch-stocks.git
```

4. Navigate to the directory (twitch-stocks by default).

```
cd twitch-stocks/twitch
```

5. Run NPM install. This will give you all the dependencies needed to locally run the project.

```
npm install
```

6. Add your .env file.

This is a small file of the form:

```
DB_USER=...
DB_PASSWORD=...
DB_HOST=...
...
```

Fill it in with the relevent data before you run the server, or it will be unable to connect to a mongodb instance

7. Run the project.

```
npm run twitch 
```

## Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue here by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue here. Please include sample queries and their corresponding results.
