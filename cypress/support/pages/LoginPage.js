 class LoginPage {
  // selectors
  usernameField = '[data-test="username"]';
  passwordField = '[data-test="password"]';
  loginButton   = '[data-test="login-button"]';
  errorMessage  = '[data-test="error"]';
  titleHeader   = '.title';

  // actions
  visit() {
    cy.visit('/');
  }

  typeUsername(username) {
    cy.get(this.usernameField).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordField).type(password, { log: false });
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  assertOnProductsPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.titleHeader).should('contain.text', 'Products');
  }

  assertErrorMessage(text) {
    cy.get(this.errorMessage).should('be.visible').and('contain.text', text);
  }
}

// 👇 export so tests can use it
export default new LoginPage();
