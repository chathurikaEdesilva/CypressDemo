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


describe('Test all inclusive', () => {

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

describe.only('Test explorer pass', () => {
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

    it.only('Click on all links in explorer page', () => {
        homePage.clickExclusivePassLink()
        cy.get('.read-more-button > .lc-font__regular').click()
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


})

require('cypress-xpath')