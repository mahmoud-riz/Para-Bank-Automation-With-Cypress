class TransferPage {

    transferoption() {
        return cy.get('a').contains('Transfer Funds');
    }

    from_Account() {
        return cy.get('#fromAccountId');

    }

    to_Account() {
        return cy.get('#toAccountId');


    }


    amount() {

        return cy.get('#amount');


    }

    trans_Submit() {
        return cy.get('input[type="submit"]');
    }

    ValidateMassageTrans() {
        return cy.get('#showResult h1');
    }


}
export default TransferPage;