it('Deve arrastar o cypress para a caixinha do Node', function (){

    cy.visit('/drag_and_drop')

    const dataTransfer = new DataTransfer ()

    cy.get('img[alt=Cypress]').trigger('dragstart', {dataTransfer})


    cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})

    
})

it('Deve arrastar o Robot para a caixinha do Phyton', function (){

    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

    const dataTransfer = new DataTransfer ()

    cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})


    cy.get('.python figure[draggable="true"]').trigger('drop', {dataTransfer})
})

