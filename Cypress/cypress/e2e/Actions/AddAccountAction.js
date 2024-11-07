
import AddAccountPage from "../Pages/AddAccountPage";

class AddAccountAction {


    acc = new AddAccountPage();

    Open_account() {
        this.acc.customerName().click();
        this.acc.OpenNewAcount_Button().click();
        this.acc.SuccessMessage().should('have.text', 'Congratulations, your account is now open.');

    }
    getAccountNumber() {
        cy.wait(1500);
        let accountNumber;
        this.acc.AccountNumber().invoke('text').then((number) => {
            accountNumber = number;
            cy.log('Account Number:', accountNumber);
            console.log('Account Number:', accountNumber);
        });
        return accountNumber;
    }
}

export default AddAccountAction;