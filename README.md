# Kraig Walker’s Digital Garden

[![CI](https://github.com/KraigWalker/digital-garden/actions/workflows/continuous-integration.yml/badge.svg?branch=main)](https://github.com/KraigWalker/digital-garden/actions/workflows/continuous-integration.yml)

This is the digital garden of Kraig Walker. It is a collection of tools and resources that I use to build and maintain my digital garden.

The garden is currently under construction.

I've currently managed to:

- Setup a Nx Monorepo with a Next.js app.
- Setup boilerplate babel and Jest config.
- Setting up a CI/CD pipeline for my site using GitHub Actions.

Some things I'm working on:

- Setting up a Storybook for my app to begin building UI components.
- Setting up Cypress to do End-to-End testing.

Some things I'm going to work on the future:

- Creating a blog for my digital garden.
- Creating an experimental content pre-delivery system using ServiceWorkers and Web Push.
- Designing a more "coffee-table" style layout for "serious" articles.

This project was generated using [Nx](https://nx.dev).

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@digital-garden/mylib`.

## Development server

Run `nx serve site` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test site` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e site` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand the workspace

Run `nx graph` to see a diagram of the dependencies of projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
