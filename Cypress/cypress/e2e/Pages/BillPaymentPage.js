class BillPaymentPage {

  getPaymentButton() {
    return cy.get('a').contains('Bill Pay');
  }


  PayeeName() {
    return cy.get('input[name="payee.name"]');
  }

  Address() {
    return cy.get('input[name="payee.address.street"]');
  }

  City() {
    return cy.get('input[name="payee.address.city"]');
  }

  State() {
    return cy.get('input[name="payee.address.state"]');
  }

  ZipCode() {
    return cy.get('input[name="payee.address.zipCode"]');
  }

  PhoneNumber() {
    return cy.get('input[name="payee.phoneNumber"]');
  }

  AccountNumber() {
    return cy.get('input[name="payee.accountNumber"]');
  }

  VerifyAccountNumber() {
    return cy.get('input[name="verifyAccount"]');
  }

  Amount() {
    return cy.get('input[name="amount"]');
  }

  FromAccount() {
    return cy.get('select[name="fromAccountId"]');
  }

  ToAccount() {
    return cy.get('input[name="toAccountId"]');
  }

  SubmitButton() {

    return cy.get("input[value='Send Payment']");
  }

  VerifyPayment() {
    return cy.get('#billpayResult h1 ');
  }


}

export default BillPaymentPage;