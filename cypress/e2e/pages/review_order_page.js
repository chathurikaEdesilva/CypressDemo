/* This page contains the page objects for the Review Order Page
Please note that the objects only needed for this demonstration is present here
--Methods included
---clickGotoHomePageLink() - will redirect user to home page from review order page
*/
export class ReviewOrderPage{
    elements = {
        go_to_home_page_link: () => cy.get('.logo > img')
    }

    clickGotoHomePageLink(){
        this.elements.go_to_home_page_link().click()
    }
}