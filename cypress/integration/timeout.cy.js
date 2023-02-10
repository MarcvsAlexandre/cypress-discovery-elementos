it('Exemplo de Timeout', function(){
    cy.visit('/timeout')

    cy.contains('button', "Habilita").click()



    cy.get('#firstname')
    .should('be.visible')
    .type('Marcus', {timeout: 700000})
})