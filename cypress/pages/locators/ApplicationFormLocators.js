class ApplicationFormLocators {
    constructor() {
        this.iframe = '#gnewtonIframe'
        this.getPosition = (position) => `[ns-qa="${position}"]`
        this.applyButton = '[ns-qa="applyBtn"]'
        this.submitButton = '#gnewton-submit'
        this.ethnicity = {
            declineToIndentify: "#race-8"
        }
        this.gender = {
            unknownGender: '#genderUnknown'
        }
        this.protectedVeteranStatus = {
            doNotWishToIdentify: "#not-identify-identify"
        }
        this.disability = {
            doNotWishToAnswer: "#declined_disability"
        }
        this.yourNameInput = '#your-name'
        this.todayDate = '#today-date'
        this.firstNameInput = '#firstName'
        this.lastNameInput = '#lastName'
        this.submitTextButton = '#submitText'
        this.emailInput = '#email'
    }
}

export default new ApplicationFormLocators;