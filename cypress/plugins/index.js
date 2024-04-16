module.exports = (on, config) => {
    on('task', {
      setCookie(cookie) {
        return cy.setCookie(cookie.name, cookie.value);
      },
      getCookie() {
        return cy.getCookie('yourCookieName');
      }
    });
  };