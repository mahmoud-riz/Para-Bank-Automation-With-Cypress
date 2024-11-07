import request_lonePage from '../Pages/request_lonePage.js';

class requestLoanAction 
{

loane = new request_lonePage();


Request_Loan(){
    this.loane.request_loneOption().click();
    cy.wait(1000);
    this.loane.Loan_Amount().type('1000');
    this.loane.DownPayment().type('1');
    this.loane.SubmitButton().click();
    cy.wait(500);
    this.loane.ValidateMassage().should('have.text', 'Congratulations, your loan has been approved.');
        

     

    }
    











}
export default requestLoanAction;