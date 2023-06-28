import HomePageLocators from "./locators/HomePageLocators";

const { careerMenu, companyMenu, menu } = HomePageLocators;

class HomePage {
    visit() {
        cy.visit("/")
    }

    openJobListing() {
        cy.get(menu).click();
        cy.get(companyMenu)
            .click()
            .get(careerMenu)

            // Prevent from opening on the new tab
            .invoke('removeAttr', 'target')
            .click()
    }
}

export default HomePage;