// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress ***REMOVED***
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> ***REMOVED***
    login(email: string, password: string): void;
  ***REMOVED***
***REMOVED***
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => ***REMOVED***
  console.log('Custom command example: Login', email, password);
***REMOVED***);
//
// -- This is a child command --
// Cypress.Commands.add("drag", ***REMOVED*** prevSubject: 'element'***REMOVED***, (subject, options) => ***REMOVED*** ... ***REMOVED***)
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", ***REMOVED*** prevSubject: 'optional'***REMOVED***, (subject, options) => ***REMOVED*** ... ***REMOVED***)
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => ***REMOVED*** ... ***REMOVED***)
