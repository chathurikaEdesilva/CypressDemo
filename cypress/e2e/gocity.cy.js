/* This is the test class that tests the following end to end scenarios
   Tests are written to be independent of each other

   --All inclusive test suite
    1. Navigating to the All Inclusive pass page
    2. Redirecting user to the home page when selecting the home link
    3. Redirect the user to the pricing page after clicking the ‘Buy’ button
    4. Select one day pass
    5. Choose for one person and click on the “Checkout” button
    6. Navigates to Home page from checkout page

   --Explorer pass test suite
    7. Navigates to ‘Explorer’ page
    8. Tests all the ‘Explorer’ page links
    9. Tests you can add an ‘Explorer’ pass to the cart
   10. Tests that you can remove an ‘Explorer’ pass from the cart
 */

import { AllInclusivePage } from "./pages/all_inclusive_page"
import { PricingPage } from "./pages/pricing_page"
import { ReviewOrderPage } from "./pages/review_order_page"
import { HomePage } from "./pages/home_page"
import { ExpPassPage } from "./pages/exp_pass_page"


const allInclusivePage = new AllInclusivePage()
const pricingPage = new PricingPage()
const reviewOrderPage = new ReviewOrderPage()
const homePage = new HomePage()
const expPage = new ExpPassPage()


describe('All inclusive package related tests', () => {

    beforeEach(() => {
        cy.visit('https://gocity.com/boston/en-us/products/all-inclusive')
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false
        });
    })

    it('Go to all inclusive page', () => {
        cy.url().should('eq', 'https://gocity.com/boston/en-us/products/all-inclusive')
    })

    it('Go to home page from all inclusive', () => {
        allInclusivePage.goToHomePage()
        cy.url().should('eq', 'https://gocity.com/boston/en-us')
    })

    it('Go to pricing page by clicking buy button', () => {
        cy.wait(5000)
        allInclusivePage.clickBuyButton()
        cy.url().should('eq', 'https://gocity.com/boston/en-us/products/all-inclusive/pricing')
    })

    it('Select one day pass', () => {
        allInclusivePage.clickBuyButton()
        cy.wait(5000)
        pricingPage.selectOneDayPass()
        pricingPage.getCheckOutButton().should('have.text', 'Checkout')

    })

    it('Checkout one day pass', () => {
        allInclusivePage.clickBuyButton()
        cy.wait(5000)
        pricingPage.selectOneDayPass()
        cy.wait(5000)
        pricingPage.checkOutOneDayPass()
        cy.wait(10000)
        cy.get('.lc-cart__pass-product-name').should('have.text', '1 day pass Adult All-Inclusive ')

    })

    it('Go to home page from review order page', () => {
        allInclusivePage.clickBuyButton()
        cy.wait(5000)
        pricingPage.selectOneDayPass()
        cy.wait(5000)
        pricingPage.checkOutOneDayPass()
        cy.wait(5000)
        reviewOrderPage.clickGotoHomePageLink()
        cy.url().should('eq', 'https://gocity.com/boston/en-us')

    })

})

describe('Explorer pass related tests', () => {
    beforeEach(() => {
        cy.visit('https://gocity.com/boston/en-us')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    })

    it('Go to explorer pass page', () => {
        homePage.clickExclusivePassLink()
        expPage.getExplorerPassTitle().should('have.text', '\n      Explorer Pass\n    ')

    })

    it('Click on all links in explorer page', () => {
        homePage.clickExclusivePassLink()
        expPage.clickReadMoreLink()
        cy.wait(5000)
        expPage.getExpItemList()
            .its('length')
            .then(n => {
                cy.log("No of elements" + n)
                for (let i = 1; i <= n; i++) {
                    expPage.clickXItemInList(i)
                    cy.get('.md-close > svg').click()
                }
            })
    })

    it('Add explorer pass to cart', () => {
        homePage.clickExclusivePassLink()
        expPage.clickAddAdult()
        cy.wait(2000)
        expPage.getCartIcon().should('be.visible')
    })

    it('Go to cart and remove item', () => {
        homePage.clickExclusivePassLink()
        expPage.clickAddAdult()
        cy.wait(2000)
        expPage.clickCartIcon()
        expPage.deleteItemFromCart()
        cy.wait(2000)
        expPage.getCartIcon().should('not.exist')
        
    })

})

