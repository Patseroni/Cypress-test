describe('Homepage', () => {
  it('finds element that contain a word', () => {
    cy.visit('/');

    cy.get('h1').should('contain', 'Escape');


  })
})