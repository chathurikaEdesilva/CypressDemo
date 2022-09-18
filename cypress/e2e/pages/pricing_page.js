//This class contains page objects for the Pricing page
export class PricingPage {

    elements = {
        one_day_pass: () => cy.xpath('//div[@data-index="0"]//div[text()="1 day pass"]/following-sibling :: button[text()="Select"]'),
        checkout_one_day_pass: () => cy.xpath('//a[text()="Checkout"]')
    }

    selectOneDayPass() {
        this.elements.one_day_pass().click()
    }

    checkOutOneDayPass(){
        this.elements.checkout_one_day_pass().click()
    }

    getCheckOutButton(){
        return this.elements.checkout_one_day_pass()
    }

}

require('cypress-xpath')