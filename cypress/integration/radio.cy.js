
it('deve marcar thor ragnarok', function () {

    cy.visit('/radios')

    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    movies.forEach(function (m) {
        cy.get(`input[value=${m}]`)
            .click()
            .should('be.checked')
    })
})