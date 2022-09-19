/* This class contains the objects on the Home page. 
Please note that the objects only needed for this demonstration is present here
--Methods included
--- clickExclusivePassLink() - will click on the exclusive pass link
*/
export class HomePage{
    elements = {
        exclusive_pass_link: () => cy.get('[data-testid="menu-main-pass_product-exp"]')
    }

    clickExclusivePassLink(){
        this.elements.exclusive_pass_link().click()
    }
}