describe('vlance-login', () => {
  it('Visit vlance and login', () => {
    cy.visit('http://vlance.dev.localhost.com/', { failOnStatusCode: false });

    // Close the popup
    cy.get('#close-popup').should('be.visible').click();

    // Click Login button
    cy.get('#btn-login').should('be.visible').click();
    cy.get('.login-box').should('be.visible').and('have.css', 'display', 'block');

    //Insert error gmail information
    cy.get('input#login_username_header').type('thao123');
    cy.get('input#login_password_header').type('Ngunhubo11?');
    cy.get('button#btn-submit-login-header').click();
    cy.get('label[for="login_username_header"]').eq(1).should('have.text', 'Please enter a valid email address.');

    //Insert incorrect password
    cy.get('input#login_username_header').clear().type('thao.dp+c1@vlance.vn');
    cy.get('input#login_password_header').clear().type('Matkhausai');
    cy.get('button#btn-submit-login-header').click();
    cy.get('label.error.log').eq(1).should('have.text', 'Email hoặc mật khẩu không đúng');


    // Insert correct account
    cy.get('input#login_username_header').clear().type('thao.dp+c1@vlance.vn');
    cy.get('input#login_password_header').clear().type('Ngunhubo11?');

    // Click login 
    cy.get('button#btn-submit-login-header').click();

    // Wait 3 seconds
    cy.wait(3000);

    // Check if login successfully by class
    cy.get('.pull-right.nav-account.sec-account-menu.ver2').should('exist');
  });
});
