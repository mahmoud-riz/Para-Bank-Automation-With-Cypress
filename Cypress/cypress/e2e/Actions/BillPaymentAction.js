import BillPaymentPage from '../Pages/BillPaymentPage'

class BillPaymentAction 
{

    pay = new BillPaymentPage();

DoPayment()
{
 cy.wait(1500);
this.pay.getPaymentButton().click();

this.pay.PayeeName().type('Mahmoud');
this.pay.Address().type('Cairo');
this.pay.City().type('Giza');
this.pay.State().type('Egypt');
this.pay.ZipCode().type('12345');
this.pay.PhoneNumber().type('01011419638');

this.pay.AccountNumber().type('123456');
this.pay.VerifyAccountNumber().type('123456');
this.pay.Amount().type('100');

this.pay.SubmitButton().click();
cy.wait(500);
this.pay.VerifyPayment().should('have.text', 'Bill Payment Complete');

}








}
export default BillPaymentAction;