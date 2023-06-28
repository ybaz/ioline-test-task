import HomePage from "../pages/HomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import { tenant } from "../setup"

describe('Iodine Website Automation Task', () => {
  const homePage = new HomePage()
  const applicationFormPage = new ApplicationFormPage()

  beforeEach(() => {
    homePage.visit()
    homePage.openJobListing()
  })

  it('Check warning pop up appears when email field is empty', () => {
    const popUpMessage = Cypress.env(tenant).validationMessage
    cy.log(`Expected pop-up message: '${popUpMessage}'`)

    const position = 'Software Development Engineer in Test - SDET'
    const firstName = 'Somename'
    const lastName = 'Somesurname'

    applicationFormPage.choosePosition(position)
    applicationFormPage.clickApplyButton()
    applicationFormPage.clickSubmitButton()

    applicationFormPage.selectGenderAndEthnicity()
    applicationFormPage.selectProtectedVeteranStatus()

    applicationFormPage.enterNameAndDate(firstName + " " + lastName)
    applicationFormPage.enterFirstAndLastNamesAndSubmitForm(firstName, lastName)

    applicationFormPage.getEmailInput()
      .then(($input) => {
        expect($input[0].validationMessage).to.eq(popUpMessage)
      })
  })
})