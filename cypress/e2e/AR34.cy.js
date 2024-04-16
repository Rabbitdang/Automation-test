describe('Alongay login', () => {
    before(() => {
        require('./Login-AL.cy');
        cy.loginCommand();
      });
    it('Visit alongay and login', () => {
      cy.contains('p', 'Quản lý các loại xe').parent().click();

      for (let i = 1; i <= 3; i++) {
        const buttonSelector = `#button-remove${i}`;
      
        // Check if the element exists before clicking
        cy.get(buttonSelector).should('exist').click({ multiple: true });
      }

      cy.wait(1000);

      cy.get('button.add-car').click();
      cy.get('div.col-lg-6.car-name input[name="carName1"]').type('test');
      cy.get('input.car-price-input[name="carPrice2"]').type('0');
      cy.wait(500);


      //Thêm xe 1
      cy.get('button.add-car').click();
      cy.get('div.col-lg-6.car-name input[name="carName2"]').type('toyota');
      cy.get('input.car-price-input[name="carPrice2"]').type('600000000');
      cy.wait(500);

      //Thêm xe 2
      cy.get('button.add-car').click();
      cy.get('div.col-lg-6.car-name input[name="carName3"]').type('Mazda');
      cy.get('input.car-price-input[name="carPrice3"]').type('900000000');
      cy.get('.sf-toolbarreset.clear-fix').invoke('css', 'display', 'none');

      cy.get('#save-button', { force: true }).click();
    });
  });
  describe('Alongay login', () => {
    it('Check web cài alongay', () => {
      cy.visit('https://slimweb.vn/domains/maixepphuthanhdat.com/', { failOnStatusCode: false });
      //Thay đổi web để test

      // cy.get('h4').should('have.text', 'Dự tính chi phí lăn bánh');
      cy.get('#select-city').select('1');
      cy.get('#select-car option[value="600000000"]').first().invoke('val').as('selectedValue');
      cy.get('.car-price-input').invoke('val').should('eq', '600.000.000');
    });
});