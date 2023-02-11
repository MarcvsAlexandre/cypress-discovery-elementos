const niceIFrame = function () {
  return cy
    .get('#weareqaninja', {timeout: 10000})
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
};
it("Deve validar o total de seguidores", function () {
  cy.visit("/nice_iframe");

  niceIFrame().find('.FollowerCountText')
  .should('have.text', '7,249 followers')

});

