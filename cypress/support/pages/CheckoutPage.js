 class CheckoutPage {
  // selectors
  firstNameField   = '[data-test="firstName"]';
  lastNameField    = '[data-test="lastName"]';
  postalCodeField  = '[data-test="postalCode"]';
  continueButton   = '[data-test="continue"]';
  finishButton     = '[data-test="finish"]';
  completeHeader   = '.complete-header';

  // actions
  assertOnCheckoutStepOne() {
    cy.url().should('include', '/checkout-step-one.html');
  }

  fillCustomerInfo(firstName, lastName, zip) {
    cy.get(this.firstNameField).type(firstName);
    cy.get(this.lastNameField).type(lastName);
    cy.get(this.postalCodeField).type(zip);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  assertOrderComplete() {
    cy.url().should('include', '/checkout-complete.html');
    cy.get(this.completeHeader).should('contain.text', 'Thank you for your order!');
  }
}

export default new CheckoutPage();
