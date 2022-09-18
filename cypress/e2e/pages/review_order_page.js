export class ReviewOrderPage{
    elements = {
        go_to_home_page_link: () => cy.get('.logo > img')
    }

    clickGotoHomePageLink(){
        this.elements.go_to_home_page_link().click()
    }
}