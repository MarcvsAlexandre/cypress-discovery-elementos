describe('Suite de testes', function () {

    before(function () {
        cy.log('Aqui temos algo que roda antes de todos os testes')
    })

    beforeEach(function () {

        cy.log('Aqui temos algo que roda antes de cada teste')

    })

    it('teste 1', function () {

        cy.log('testando teste 1')

    })

    it('teste 2', function () {

        cy.log('testando teste 2')

    })

    it('teste 3', function () {

        cy.log('testando teste 3')

    })

    afterEach(function(){
        cy.log('aqui temos algo que roda depois de todos os testes')
    })


    after(function(){
        cy.log('aqui temos algo que roda depois de todos os testes')
    })
})

