# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Table of contents
- 🚩 [Getting Started](#getting-started)
- 🔧 [Development server](#development-server)
- ⚙️ [Code scaffolding](#code-scaffolding)
- 👷 [Building](#building)
  - 🏗️ [Building for Github pages](#building-for-github-pages)
  - 🚀 [Deploying towards Github pages](#deploying-towards-github-pages)
- 🏃‍ [Running unit tests](#running-unit-tests)

## Getting started
- An IDE from programming (Webstorm, Visual Studio Code etc.)
- Node version manager ([Mac/Linux](https://github.com/nvm-sh/nvm) or [Windows](https://github.com/coreybutler/nvm-windows))
  - `nvm install v14.17.0`
  - Mac: `nvm alias default v14.17.0`
  - Windows: `nvm use 14.17.0`
- Yarn ([Installation guide](https://classic.yarnpkg.com/en/docs/install))

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Building

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Building for Github pages

Run `yarn buildGit` to build the project. The build artifacts will be stored in the `dist/` directory.

### Deploying towards Github pages

Run `yarn deployGit` to deploy the project towards Github pages. The build artifacts will be picked up from the `dist/` directory.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).
