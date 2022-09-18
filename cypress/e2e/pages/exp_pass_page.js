//This page object class has objects that is in the Explorer Pass page
export class ExpPassPage{

    elements = {
        page_title_explorer_pass: () =>  cy.get('.product-title'),
        exp_item_list: () => cy.xpath("//div[@data-testid='attraction-aggregator-list']/ul/li"),
        readmore_link: () => cy.get('.read-more-button > .lc-font__regular'),
        add_adult_button: () => cy.get(':nth-child(3) > .lc-cart__item-amount-wrapper > .lc-cart__item-amount > [data-testid="cartItemIncrease"]'),
        cart_icon: () => cy.get('.row > .react-component > .cart-icon > .cart-icon__icon'),
        delete_item_button: () => cy.xpath("(//div[@class='lc-cart__items']/div/button[@class='lc-cart__item-delete'])[1]")
       
    }

    getExplorerPassTitle(){
        return this.elements.page_title_explorer_pass()
    }

    getExpItemList(){
        return this.elements.exp_item_list()
    }

    clickXItemInList(value){
        cy.get(':nth-child(' + value + ') > [data-testid="attraction-aggregator-list-item"] > .lpg-attractions-card__content > .lpg-attractions-card__details > .lpg-attractions-card__footer > [data-testid="attraction-aggregator-list-item-button"]').click()
    }

    clickReadMoreLink(){
        this.elements.readmore_link().click()
    }

    clickAddAdult(){
        this.elements.add_adult_button().click()
    }

    getCartIcon(){
        return this.elements.cart_icon()
    }

    clickCartIcon(){
        this.elements.cart_icon().click()
    }

    deleteItemFromCart(){
        this.elements.delete_item_button().click()
    }

}

require ('cypress-xpath')