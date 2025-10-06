 class ProductsPage {
  // selectors
  titleHeader = '.title';
  cartBadge   = '.shopping_cart_badge';
  backpackAddBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  bikeLightAddBtn = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  cartIcon    = '.shopping_cart_link';

  // actions
  assertOnProductsPage() {
    cy.get(this.titleHeader).should('contain.text', 'Products');
  }

  addBackpackToCart() {
    cy.get(this.backpackAddBtn).click();
  }

  addBikeLightToCart() {
    cy.get(this.bikeLightAddBtn).click();
  }

  openCart() {
    cy.get(this.cartIcon).click();
  }

  assertCartBadgeCount(count) {
    cy.get(this.cartBadge).should('have.text', count.toString());
  }
}

export default new ProductsPage();
