it("deve exibir o nome da tecnoologia ao passar o mouse", function () {
  cy.visit("/hovers")

  cy.get("img[src*=nodejs]")
  .realHover('mouse')

  cy.get(".tag-nodejs")
  .should("be.visible")
  .should("have.text", "Node.js")
});


//So funciona com plugin de mouserOver para instalar == npm add cypress-real-events -D
