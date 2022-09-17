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