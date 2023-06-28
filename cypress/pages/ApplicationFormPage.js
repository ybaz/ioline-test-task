import ApplicationFormLocators from "./locators/ApplicationFormLocators";

const { iframe, applyButton, ethnicity, gender, getPosition, submitButton, protectedVeteranStatus, emailInput,
    disability, firstNameInput, lastNameInput, submitTextButton, yourNameInput, todayDate } = ApplicationFormLocators;

class ApplicationFormPage {

    choosePosition(position) {
        cy.iframe(iframe)
            .should('be.visible')
            .then(($iframe) => {
                cy.wrap($iframe)
                    .find(getPosition(position))
                    .click();
            })
    }

    clickApplyButton() {
        this.#clickSingleButtonToProceedToNextStep(applyButton)
    }

    clickSubmitButton() {
        this.#clickSingleButtonToProceedToNextStep(submitButton)
    }

    selectGenderAndEthnicity() {
        this.#waitUntilElementAppearsOnIframe(ethnicity.declineToIndentify)

        cy.iframe(iframe).within(() => {
            cy.get(gender.unknownGender).click();
            cy.get(ethnicity.declineToIndentify).click();
            cy.get(submitButton).click();
        })
    }

    selectProtectedVeteranStatus() {
        this.#waitUntilElementAppearsOnIframe(protectedVeteranStatus.doNotWishToIdentify)

        cy.iframe(iframe).within(() => {
            cy.get(protectedVeteranStatus.doNotWishToIdentify)
                .click();
            cy.get(submitButton).click();
        })
    }

    enterNameAndDate(name) {
        this.#waitUntilElementAppearsOnIframe(disability.doNotWishToAnswer)

        cy.iframe(iframe).within(() => {
            cy.get(disability.doNotWishToAnswer)
                .click();
            cy.get(yourNameInput).type(name);
            cy.get(todayDate).type(this.#getCurrentDate())
            cy.get(submitButton).click();
        })
    }

    enterFirstAndLastNamesAndSubmitForm(firstName, lastName) {
        this.#waitUntilElementAppearsOnIframe(firstNameInput)

        cy.iframe(iframe).within(() => {
            cy.get(firstNameInput).type(firstName)
            cy.get(lastNameInput).type(lastName)
            cy.get(submitTextButton).click()
        })
    }

    getEmailInput() {
        return cy.iframe(iframe)
            .then(($body) => {
                return $body.find(emailInput)
            })
    }

    #waitUntilElementAppearsOnIframe(element) {
        return cy.waitUntil(() => {
            return cy.iframe(iframe)
                .then(($body) => {
                    return $body.find(element).length > 0;
                })
        })
    }

    #clickSingleButtonToProceedToNextStep(button) {
        this.#waitUntilElementAppearsOnIframe(button)
            .then(() => {
                cy.iframe(iframe)
                    .find(button)
                    .click();
            })
    }

    #getCurrentDate() {
        const currentDate = new Date()
        return currentDate.toISOString().split('T')[0]
    }
}

export default ApplicationFormPage;