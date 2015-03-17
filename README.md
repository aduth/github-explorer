GitHub Explorer
===============

GitHub Explorer is a small single-page web application intended to be used standalone or in the context of an `<iframe>` element.

![Demo](https://cldup.com/3J4bQjK90G-1200x1200.png)

## Requirements

You must have [Node.js](https://nodejs.org/download/) installed on your computer.

## Installation

In a terminal window, clone the project to a directory on your computer. Next, navigate to the directory, install the required dependencies, and create your first build.

```bash
$ git clone https://github.com/Automattic/github-explorer.git
$ cd github-explorer
$ npm install
$ npm run build
```

To access private repositories, you can pass a `GITHUB_ACCESS_TOKEN` to the build command. You can create a personal access token [from the Applications page] in your account profile. __WARNING:__ Do not use a personal access token for anything other than development or testing. The access token will be available in the client-side source code, so it should never be hosted at a publicly-reachable URL.

```bash
$ GITHUB_ACCESS_TOKEN=your-personal-access-token npm run build
```

## License

Copyright (C) 2015 Automattic, Inc.

Made available under [GPLv2+](./LICENSE.txt).
