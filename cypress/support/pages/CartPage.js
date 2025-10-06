 class CartPage {
  // selectors
  cartTitle      = '.title';
  cartItem       = '.cart_item';
  checkoutButton = '[data-test="checkout"]';

  // actions
  assertOnCartPage() {
    cy.url().should('include', '/cart.html');
    cy.get(this.cartTitle).should('contain.text', 'Your Cart');
  }

  assertItemInCart(itemName) {
    cy.get(this.cartItem).should('contain.text', itemName);
  }

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }
}

export default new CartPage();
