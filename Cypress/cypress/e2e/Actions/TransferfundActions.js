import TransferPage from '../Pages/TransferFundPage';


class transferActions {

    transfer = new TransferPage();
    DoTransfer(fromAccount, toAccount, amount) {




        this.transfer.transferoption().click();
        cy.wait(1500);
        if (fromAccount) {
            this.transfer.from_Account().select(fromAccount);
        } else {
            cy.log('fromAccount is undefined');
        }

        // Check if toAccount is defined
        if (toAccount) {
            this.transfer.to_Account().select(toAccount);
        } else {
            cy.log('toAccount is undefined');
        }

        // Enter the amount
        this.transfer.amount().type(amount);

        // Submit the transfer
        this.transfer.trans_Submit().click();
        this.transfer.ValidateMassageTrans().should('have.text', 'Transfer Complete!');
    }




}
export default transferActions;