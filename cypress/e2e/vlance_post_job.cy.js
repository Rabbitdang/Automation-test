describe('vlance-login', () => {
    it('Visit vlance and login', () => {
      cy.visit('http://vlance.dev.localhost.com/', { failOnStatusCode: false });
  
      //Login to start post job
      // Close the popup
      cy.get('#close-popup').should('be.visible').click();
  
      // Click Login button
      cy.get('#btn-login').should('be.visible').click();
      cy.get('.login-box').should('be.visible').and('have.css', 'display', 'block');
  
      // Insert correct account
      cy.get('input#login_username_header').clear().type('thao.dp+c1@vlance.vn');
      cy.get('input#login_password_header').clear().type('Ngunhubo11?');
  
      // Click login 
      cy.get('button#btn-submit-login-header').click();
  
      // Wait 3 seconds
      cy.wait(3000);
  
      // Check if login successfully by class
      cy.get('.pull-right.nav-account.sec-account-menu.ver2').should('exist');


      //Create a job
      cy.get('a.btn.btn-vl.btn-vl-green.btn-vl-medium').eq(0).should('be.visible').click();  

      //Chose category
      cy.get('#vlance_jobbundle_jobtype_category').select('2');
      cy.get('#vlance_jobbundle_jobtype_service').select('3');

      //Insert job information
      cy.get('#vlance_jobbundle_jobtype_title').clear().type('Group 1: Test post job automation');
      cy.get('#vlance_jobbundle_jobtype_description').type('Test post job automation optimizes the recruitment process, leveraging cutting-edge tools to enhance efficiency. By embracing automation, companies save time, ensure accuracy in job listings, and stay competitive in attracting top talent. Rigorous testing of automated systems under the test post job automation initiative fine-tunes processes, showcasing a commitment to innovation and strategic talent acquisition. In the dynamic landscape of hiring, this keyword encapsulates a forward-looking approach that revolutionizes job postings for maximum impact');
      cy.get('#vlance_jobbundle_jobtype_closeAt').clear().type('19/12/2023'); 
      cy.get('#vlance_jobbundle_jobtype_city').select('24');
      cy.get('#vlance_jobbundle_jobtype_budget').clear().type('500000');
      cy.get('#vlance_jobbundle_jobtype_budgetMax').clear().type('3000000');
      cy.get('#vlance_jobbundle_jobtype_service').select('3');

      //Click submit
      cy.get('#btn-submit-job').click();
      //If create job successfully, check the url contain keyword "viec-freelance"
      cy.url().should('include', 'viec-freelance');
    });
  });
  