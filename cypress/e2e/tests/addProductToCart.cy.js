import { loginPageElements } from '../../support/pages/loginPage';
import { homePageElements } from '../../support/pages/homePage';
import { cartPageElements } from '../../support/pages/cartPage';
import { checkoutPageElements } from '../../support/pages/checkoutPage';
import testData from '../../support/testData/local.json';

describe('Bank Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(loginPageElements.userName).type(testData.validUser.username);
        cy.get(loginPageElements.password).type(testData.validUser.password);
        cy.get(loginPageElements.loginButton).click();
        cy.get(loginPageElements.title).should('contain.text', 'Products');
    });

    it('Add product in Cart', () => {
        cy.get(homePageElements.item4link).should('contain.text', 'Sauce Labs Backpack');
        cy.get(homePageElements.addToCartBackPackBtn).should('contain.text', 'Add to cart');
        cy.get(homePageElements.addToCartBackPackBtn).click();
        cy.get(homePageElements.item0link).should('contain.text', 'Sauce Labs Bike Light');
        cy.get(homePageElements.addToCartBikeLightBtn).should('contain.text', 'Add to cart');
        cy.get(homePageElements.addToCartBikeLightBtn).click();
        cy.get(homePageElements.shoppingCartLink).should('be.visible');
        cy.get(homePageElements.shoppingCartLink).click();
        cy.get(cartPageElements.cartPageTitle).should('contain.text', 'Your Cart');
    });

    it('Check product in Cart and complete the order', () => {
        cy.get(homePageElements.item4link).should('contain.text', 'Sauce Labs Backpack');
        cy.get(homePageElements.addToCartBackPackBtn).should('contain.text', 'Add to cart');
        cy.get(homePageElements.addToCartBackPackBtn).click();
        cy.get(homePageElements.item0link).should('contain.text', 'Sauce Labs Bike Light');
        cy.get(homePageElements.addToCartBikeLightBtn).should('contain.text', 'Add to cart');
        cy.get(homePageElements.addToCartBikeLightBtn).click();
        cy.get(homePageElements.shoppingCartLink).should('be.visible');
        cy.get(homePageElements.shoppingCartLink).click();
        cy.get(cartPageElements.cartPageTitle).should('contain.text', 'Your Cart');
        cy.get(cartPageElements.checkOutBtn).should('contain.text', 'Checkout');
        cy.get(cartPageElements.checkOutBtn).click();
        cy.get(checkoutPageElements.firstName).type('John');
        cy.get(checkoutPageElements.lastName).type('Smith');
        cy.get(checkoutPageElements.postalCode).type('0001');
        cy.get(checkoutPageElements.continueBtn).click();
        cy.get(checkoutPageElements.finishBtn).click();
        cy.get(checkoutPageElements.checkoutCompleteTitle).should('contain.text', 'Thank you for your order!');  
    });
    
});