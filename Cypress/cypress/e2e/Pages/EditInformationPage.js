class updateContactInformationPage {

  Update_contactButton() {
    return cy.get('a').contains('Update Contact Info');
  }


  first_Name() {
    return cy.get("input[name='customer.firstName']");
  }

  last_Name() {
    return cy.get("input[name='customer.lastName']");

  }

  address() {
    return cy.get("input[name='customer.address.street']");
  }

  city() {

    return cy.get('input[name="customer.address.city"]');

  }

  state() {

    return cy.get('input[name="customer.address.state"]');

  }

  zip_Code() {

    return cy.get("input[name='customer.address.zipCode']");

  }

  phone() {


    return cy.get('input[name="customer.phoneNumber"]');

  }

  update_Button() {
    return cy.get('input[value="Update Profile"]');
  }

  verify_Message() {
    return cy.get('#updateProfileResult p');
  }

}



export default updateContactInformationPage;