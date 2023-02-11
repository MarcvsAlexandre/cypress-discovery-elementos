

it('Upload de Imagem', function () {

    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/captura.png'

    cy.get('input[name=file]').selectFile(imageFile, {force: true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/captura.png"]', {timeout : 7000})
    .should("be.visible")


})