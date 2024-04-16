// Login-AL.cy.js
Cypress.Commands.add('loginCommand', () => {
    // Visit alongay and login
    // Thay đổi môi trường test
    cy.visit('https://alongay.dev.localhost.com/', { failOnStatusCode: false });
  
    cy.get('.alongay-login-btn').first().click();
  
    // Thay đổi tài khoản để test
    cy.get('input#alongay-login-email').type('thao.dp+c1@vlance.vn');
    cy.get('input#alongay-login-password').type('Ngunhubo11?');
    cy.get('.alongay-signup-button').eq(1).click();
  
    // Thay đổi môi trường test
    cy.visit('https://alongay.dev.localhost.com/', { failOnStatusCode: false });
    cy.url().should('include', 'dashboard');
    cy.wait(3000);
  });
  