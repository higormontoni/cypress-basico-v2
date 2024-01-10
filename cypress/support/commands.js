Cypress.Commands.add('fillMandatoryFieldsandSubmit', function(){
    cy.get('#firstName').type('Higor')
    cy.get('#lastName').type('Montoni')
    cy.get('#email').type('hm@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})