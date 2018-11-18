describe('Page Presence Test', function () {
  it('Visits the page on localhost', function () {
    cy.visit('/')
  })
})

describe('Clicking the first button we find', function () {
  it('Activates a looooong scroll-down', function () {
    cy.visit('/');

    cy.get('button > :nth-child(1) > div')
      .click();
  })

  it('Should now show the Arrays Challenge', function () {
    cy.get('#root > div > :nth-child(2)') // just trying to keep it "polymorphic", so it doesnt depend on the #id
      .should('be.visible');
  })
})
