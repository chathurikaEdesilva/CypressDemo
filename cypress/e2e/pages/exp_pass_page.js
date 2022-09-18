export class ExpPassPage{

    elements = {
        page_title_explorer_pass: () =>  cy.get('.product-title'),
        exp_item_list: () => cy.xpath("//div[@data-testid='attraction-aggregator-list']/ul/li")
       
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
}

require ('cypress-xpath')