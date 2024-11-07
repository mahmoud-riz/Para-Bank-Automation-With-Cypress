//require('cypress-xpath');

class AddAccountPage {
    customerName() {
        return cy.contains('a', 'Open New Account');
    }

    OpenNewAcount_Button() {
        cy.wait(3000);
        return cy.get("#openAccountForm input");
    }


    SuccessMessage() {
        return cy.get('#openAccountResult p').eq(0);
    }

    AccountNumber() {
        return cy.get('#openAccountResult p a');
    }






}
export default AddAccountPage;