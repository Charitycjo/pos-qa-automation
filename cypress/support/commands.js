 import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';

Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit();
  LoginPage.typeUsername(username);
  LoginPage.typePassword(password);
  LoginPage.clickLogin();
  ProductsPage.assertOnProductsPage();
});
