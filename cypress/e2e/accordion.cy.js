/// <reference types="cypress" />

context('Component accordion', () => {
    beforeEach(() => {
        cy.visit('../../components/accordion.html');
    })

    it('shows then hides first lesson on click', () => {
        // Show content
        cy.contains('first').click()

        cy.get('.first-lesson-content').should('be.visible')
        cy.get('.first-lesson-arrow').should('have.class', 'rotate-90')

        // Hide content
        cy.contains('first-lesson')
            .click()

        cy.get('.first-lesson-content').should('not.visible')
        cy.get('.first-lesson-arrow').should('not.have.class', 'rotate-90')
    })
})
