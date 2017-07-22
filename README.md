# Twitch Stocks
[![Build Status](https://travis-ci.org/ChrisALee/twitch-stocks.svg?branch=master)](https://travis-ci.org/ChrisALee/twitch-stocks)


Twitch Stocks allows you to invest in Twitch streamers using virtual points. (No money involved)

Say your favorite streamer averages 20,000 viewers one week and you invest in them.
The next week they managed to bump their average viewer count to 22,000. You just profited!
Maybe you're feeling risky and want to invest in a low-viewer streamer in the hopes that they blow up in viewership.

### Everything, such as using viewer count as value, is tentative at this point.

# Live Site
Come check out the live site: https://twitch-stocks.now.sh/

---

# Development

### Getting Started

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
cd twitch-stocks
```

5. Run NPM install. This will give you all the dependencies needed to locally run the project.

```
npm install
```

6. Run the project.

```
npm run dev
```

7. Go to http://localhost:3000 to view the project.

**Note to those on Windows:**

The build scripts require the use of linux console emulators such as [cmder](http://cmder.net/), [cygwin](https://www.cygwin.com/) or Bash on Ubuntu on Windows. Simply install one of the above then run `npm run dev` as usual in the console emulators instead of cmd or powershell.

Any contributions are appreciated.

For details on how to contribute (code style and more) please visit our [contributing guidelines](CONTRIBUTING.md).

Check out the [issues](https://github.com/ChrisALee/twitch-stocks/issues) tab for our project's TODO's, bugs, and questions.


The same information can also be found on the [project](https://github.com/ChrisALee/twitch-stocks/projects/1) page.

### Learning Resources

#### Next.js: 
* [Learn Next.js](https://learnnextjs.com/ "Learn Nextjs") - I'd suggest to start here.
* [Next.js examples](https://github.com/zeit/next.js/tree/v3-beta/examples "Next.js examples") - Treat this as a reference for figuring out how to do certain tasks or integrate other tools with Next.js.

#### React:
* [Eric Douglas' curated list of React resources](https://github.com/ericdouglas/react-learning) - I'd look at React, ES2015+, Redux, and Bundlers. Just be aware that we're using Next.js, so some stuff like routing is abstracted away. If you went through Learn Next.js, you might be able to spot the differences.

#### Node.js/Express:
* [Build a RESTful API Using Node and Express](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4) - This tutorial is from 2014, so be aware that some things might possibly be outdated.

#### MongoDB:
* [Node.js MongoDB Tutorial](https://www.guru99.com/node-js-mongodb.html)
* [Mongoose](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)

#### TypeScript:
* [Learn TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - Follow along but be aware that the parts on installing and compiling Typescript won't apply since it's already installed in our project. You might just have to set it up so it works with your IDE/text-editor.
* [TypeScript Playground](https://www.typescriptlang.org/play/index.html)
* [Learn Typescript with React](https://www.typescriptlang.org/docs/handbook/jsx.html) - I'd recommend knowing the basics of React from previous resources before trying to understand this.
* [TypeScript React examples](https://github.com/Lemoncode/react-typescript-samples) - Folder structure in these examples will differ from ours. I'd look at how the specific components are written rather than any outer index/app files.
* [Microsoft TypeScript Tic-Tac-Toe example](https://github.com/Microsoft/TypeScript-React-Conversion-Guide/blob/master/TicTacToe_TS/src/board.tsx) - This is a great reference for what the code for our classes will look like. Main difference, however, will be that each class will be in its own file.

#### Testing Frameworks:
* Unit Tests- Testing of individual functions or classes by mocking input and making sure the output is as expected.
* Integration Tests- Testing several modules to ensure they work together as expected.
* Functional Tests- Testing a scenario on the product itself (on the browser, for example) regardless the internal structure to ensure expected behavior.
by Vitalik Zaidman ([Article here](https://medium.com/powtoon-engineering/a-complete-guide-to-testing-javascript-in-2017-a217b4cd5a2a))

##### Jest:
* [Facebook's Official Introduction and Guides](https://facebook.github.io/jest/docs/getting-started.html#content)
* [Keon's Api Testing with Jest](https://hackernoon.com/api-testing-with-jest-d1ab74005c0a)

##### Enzyme:
* [Artem's Testing React Components with Jest and Enzyme](https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f)

##### SuperTest:
* [Albert's How to test Express.js with Jest and Supertest](http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)

Join us on Discord [#twitch-stocks](https://discord.gg/TWtSNdQ "#twitch-stocks")!

Please be sure to ask any questions if you get stuck on anything related to the project or languages used.
We're all learning here, and teaching is a great way to reinforce concepts.

## Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue here by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue here. Please include sample queries and their corresponding results.

---

# Built With

* React ([Next.js](https://github.com/zeit/next.js "Next.js"))
* Node.js


# Contributors

Thank you to:

* FalseHonesty
* Cowtongue (Chris Lee)
* kbaek11 (Kyung)
* Gging
* jamiro24
* Rubiks_cube
* ReformedPacifist
* notjason
* christoabrown


We are definitely open to having anyone help and contribute.


Check out [this spreadsheet](https://docs.google.com/spreadsheets/d/1bagEOztm2Xc8Jy4QuxvFzflC8ZwQ6hvCaJcULJ9OEAU/edit#gid=0<Paste>) and add your name!


And, once again, come chat with us on Discord [#twitch-stocks](https://discord.gg/TWtSNdQ "#twitch-stocks")!

