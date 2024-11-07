class request_lonePage {

    request_loneOption() {

        return cy.get('a').contains('Request Loan');

    }

    Loan_Amount() {
        return cy.get('#amount');
    }

    DownPayment() {
        return cy.get('#downPayment');
    }

    SubmitButton() {
        return cy.get('input[value="Apply Now"]');

    }

    ValidateMassage() {
        return cy.get('#loanRequestApproved p').eq(0);



    }
}
export default request_lonePage;