// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  })

  it('checks links', () => {
    cy.get('[data-cy=links]').children().should('have.length', 2);
  })

  it('Visits the app root url', () => {
    cy.contains('h3', 'Create Student')
  })

  it('should contain user input', () => {
    cy.contains('label', 'Name').siblings('input').type('Admin')
  })

  it('should contain user input', () => {
    cy.contains('label', 'Email').siblings('input').type('Admin')
  })

  it('should contain user input', () => {
    cy.contains('label', 'Phone').siblings('input').type('Admin')
  })

  it('should create alert for name', () => {
    cy.contains('button', 'Create').click();
  })

  it('should create alert for correct email', () => {
    cy.contains('label', 'Name').siblings('input').type('admin@admin')
    cy.contains('button', 'Create').click();
  })

  it('should create alert for phone', () => {
    cy.contains('label', 'Name').siblings('input').type('Admin')
    cy.contains('label', 'Email').siblings('input').type('admin@admin')
    cy.contains('button', 'Create').click();
  })


  it('should submit created student', () => {
    cy.contains('label', 'Name').siblings('input').type('Admin')
    cy.contains('label', 'Email').siblings('input').type('admin@admin')
    cy.contains('label', 'Phone').siblings('input').type('01234')

    cy.contains('button', 'Create').click();
  })

});
