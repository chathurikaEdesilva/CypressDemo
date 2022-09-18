//This class contains objects on the Home page
export class HomePage{
    elements = {
        exclusive_pass_link: () => cy.get('[data-testid="menu-main-pass_product-exp"]')
    }

    clickExclusivePassLink(){
        this.elements.exclusive_pass_link().click()
    }
}