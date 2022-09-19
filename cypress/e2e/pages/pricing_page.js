/* This page contains the page objects for the Pricing Page
Please note that the objects only needed for this demonstration is present here
--Methods included
---selectOneDayPass() - will select a one day pass from the options
---checkOutOneDayPass() - will checkout the selected pass
---getCheckOutButton() - will return the checkout button object
*/
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