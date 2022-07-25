/// <reference types="cypress" />

it('Deve exibir a home page', function () {

    cy.visit('/')

    cy.title()
        .should('eq', 'Training Wheels | QAninja')
        
    cy.get('ul[class=menu-list]')
        .should('be.visible')

})