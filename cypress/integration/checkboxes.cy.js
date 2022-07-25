

it('deve marcar os tops 1 filmes', function () {

    cy.visit('/checkboxes')

    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    movies.forEach(function (m) {
            cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')
    })
})