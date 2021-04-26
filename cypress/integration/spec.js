/// <reference types="cypress" />

describe('page', () => {
  it('works', () => {
    cy.intercept('GET', 'https://www.cypress.io/').as('cypress');
    cy.visit('https://www.cypress.io/');
    cy.wait('@cypress');
  });

  it('doesn\'t work', () => {
    cy.getCypress();
  });

  it('doesn\'t work too', () => {
    cy.intercept('GET', 'https://www.cypress.io/').as('cypress');
    cy.wait(100);
    cy.request('https://www.cypress.io/', { headers: {
      'content-type': 'application/json; charset=utf-8',
      'accept': '*/*'
    }});
    cy.wait(100);
    cy.wait('@cypress');
  })
})
