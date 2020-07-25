// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('button', 'JuniorSTOP');
    cy.contains('button', 'Zaloguj się').should('be.disabled');

    cy.contains('Załóż konto').click();

    cy.contains('button', 'Załóż konto').should('be.disabled');
    cy.contains('Imię').parent().type('username');
    cy.contains('Nazwisko').parent().type('lastname');
    cy.contains('Email').parent().type('email@gmail.com');
    cy.contains('Login').parent().type('login');
    cy.contains('Hasło').parent().type('xX*xxxxxxx1');
    cy.contains('Powtórz hasło').parent().type('xX*xxxxxxx1');

    cy.contains('button', 'Załóż konto').should('be.not.disabled');
    cy.contains('button', 'Załóż konto').click();
  });
});
