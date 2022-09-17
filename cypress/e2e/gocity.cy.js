import { AllInclusivePage } from "./pages/all_inclusive_page"
import { PricingPage } from "./pages/pricing_page"


const allInclusivePage = new AllInclusivePage()
const pricingPage = new PricingPage()


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
    })

    it('Select one day pass', () => {
        allInclusivePage.clickBuyButton()
        cy.wait(5000)
        allInclusivePage.selectOneDayPass()
    })

    it.only('Checkout one day pass', () => {
        allInclusivePage.clickBuyButton()
        cy.wait(5000)
        allInclusivePage.selectOneDayPass()
        cy.wait(5000)
        pricingPage.checkOutOneDayPass()
        cy.wait(10000)
        cy.get('.lc-cart__pass-product-name').should('have.text', '1 day pass Adult All-Inclusive ') 
            
    })
})
