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

## Usage

The project will need to be available from a locally-hosted web server. You can use the Node.js [serve](https://www.npmjs.com/package/serve) package or, if you have Python installed, navigate to the project directory in a terminal window and enter the following command:

```bash
$ python -m SimpleHTTPServer 3000
```

You should now be able to navigate to [http://localhost:3000](http://localhost:3000) in your browser.

The page accepts two query parameters:

- `repository`: A GitHub repository, including the user or organization
- `path` (optional): A path from the the repository root in which perform the searches

Example: [http://localhost:3000/?repository=Automattic/github-explorer&path=js/src](http://localhost:3000/?repository=Automattic/github-explorer&path=js/src)

## License

Copyright (C) 2015 Automattic, Inc.

Made available under [GPLv2+](./LICENSE.txt).
