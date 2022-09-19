/*This class contains the objects for the All Inclusive Page
Please note that the objects only needed for this demonstration is present here
--Methods available
---goToHomePage() - will direct the user to home page from all inclusive page
---clickBuyButton() - will click on the buy button on all inclusive page
---selectOneDayPass() - will select a one day pass
 */
export class AllInclusivePage{

    elements ={
        link_home_page : () => cy.get('.logo > img'),
        button_buy : () => cy.get('.row > .react-component > .cart-icon > .pass-product-buy > .lc-font__regular'),
        one_day_pass : () => cy.xpath('//div[@data-index="0"]//div[text()="1 day pass"]/following-sibling :: button[text()="Select"]')
    }

    goToHomePage(){
        this.elements.link_home_page().click()
    }

    clickBuyButton(){
        this.elements.button_buy().click()
    }

    selectOneDayPass(){
        this.elements.one_day_pass().click()
    }
 
}

require('cypress-xpath')