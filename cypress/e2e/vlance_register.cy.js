describe('Create an account', () => {
    it('Visit website and create an account', () => {
        cy.visit('http://vlance.dev.localhost.com/', { failOnStatusCode: false });

        // Close the popup
        cy.get('#close-popup').should('be.visible').click();

        //Case 1: Leave all information is empty and click submit
        cy.get('#btn-register').should('be.visible').click();
        cy.get('button#btn-submit-register-header').click();

        //Expect error information
        cy.get('label[for="reg-fullname-header"]').should('have.text', 'This field is required.');
        cy.get('label[for="reg-username-header"]').should('have.text', 'This field is required.');
        cy.get('label[for="reg-password-header"]').should('have.text', 'This field is required.');
        cy.get('label[for="reg-re-password-header"]').should('have.text', 'This field is required.');

        //Input to username only number [ERROR]
        cy.get('input#reg-fullname-header').clear().type('0223455466344');
        cy.get('label[for="reg-fullname-header"]').should('have.text', 'Tên người dùng không được chứa số');

        //Input a username contains information like "website" [ERROR]
        cy.get('input#reg-fullname-header').clear().type('website');
        cy.get('label[for="reg-fullname-header"]').should('have.text', 'Tên người dùng không được chứa các thông tin liên lạc cá nhân. ');

        //Input a valid username [OK]
        cy.get('input#reg-fullname-header').clear().type('Thao123');

        //Input an invalid email [ERROR]
        cy.get('input#reg-username-header').clear().type('thao123');
        cy.get('label[for="reg-username-header"]').should('have.text', 'Please enter a valid email address.');

        //Input a valid email [OK]
        const timestamp = new Date().getTime();
        const dynamicString = `thao${timestamp}@vlance.vn`;
        cy.get('input#reg-username-header').clear().type(dynamicString);

        //Insert 2 box of password is not the same [ERROR]
        cy.get('input#reg-password-header').clear().type('123456');
        cy.get('input#reg-re-password-header').clear().type('abcdefgh');
        cy.get('label[for="reg-re-password-header"]').should('have.text', 'Mật khẩu không trùng khớp');

        //Insert the correct password [OK]
        cy.get('input#reg-re-password-header').clear().type('123456');

        //Click to register
        cy.get('#btn-submit-register-header').click();
        cy.wait(3000);
        cy.url().should('include', 'dang-ky-thanh-cong');
    })
})
