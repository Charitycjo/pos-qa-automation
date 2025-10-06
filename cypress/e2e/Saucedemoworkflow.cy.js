import LoginPage from '../support/pages/LoginPage';
import ProductsPage from '../support/pages/ProductsPage';
import CartPage from '../support/pages/CartPage';
import CheckoutPage from '../support/pages/CheckoutPage';

describe('SauceDemo End-to-End Checkout Flow with POM + Custom Commands', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
  });

  it('Completes checkout for one item', () => {
    ProductsPage.addBackpackToCart();
    ProductsPage.assertCartBadgeCount(1);
    ProductsPage.openCart();

    CartPage.assertOnCartPage();
    CartPage.assertItemInCart('Sauce Labs Backpack');
    CartPage.clickCheckout();

    CheckoutPage.assertOnCheckoutStepOne();
    CheckoutPage.fillCustomerInfo('John', 'Doe', '12345');
    CheckoutPage.clickContinue();
    CheckoutPage.clickFinish();

    CheckoutPage.assertOrderComplete();
  });
});
