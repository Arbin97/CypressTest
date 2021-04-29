describe('My Second Test', () => {

    // visiting the website
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    })

    // Finding the content
    it('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type')
      })

      // clicking the element 
      it('clicks the link "type"', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
      })

      // Making an assertion
      it('clicking "type" navigates to a new url', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()
    
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
      })


  })
