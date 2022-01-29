import ***REMOVED*** getGreeting ***REMOVED*** from '../support/app.po';

describe('site', () => ***REMOVED***
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => ***REMOVED***
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome site');
  ***REMOVED***);
***REMOVED***);
