import { loginPageElements } from '../../support/pages/loginPage';
import testData from '../../support/testData/local.json';

describe('Bank Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        //cy.visit('https://www.saucedemo.com/');
        // cy.matchImageSnapshot('login-page');
    });

    it('User logged in with valid credentials', () => {
        cy.get(loginPageElements.userName).type(testData.validUser.username);
        cy.get(loginPageElements.password).type(testData.validUser.password);
        cy.get(loginPageElements.loginButton).click();
        cy.get(loginPageElements.title).should('contain.text', 'Products');
        cy.get(loginPageElements.dashboardBtn).should('be.visible');
        cy.get(loginPageElements.dashboardBtn).click();
        cy.get(loginPageElements.logoutBtn).click();
        cy.get(loginPageElements.userName).should('be.visible');
    });

    it('User log in with locked out credentials', () => {
        cy.get(loginPageElements.userName).type(testData.lockedUser.username);
        cy.get(loginPageElements.password).type(testData.lockedUser.password);
        cy.get(loginPageElements.loginButton).click();
        cy.get(loginPageElements.lockedOutError).should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
});