import updateContactInformationPage from '../Pages/EditInformationPage';


class updateContactInformationAction {

    contactinfo = new updateContactInformationPage();

    update_Information() {
        this.contactinfo.Update_contactButton().click();
        cy.wait(1000);
        this.contactinfo.first_Name().clear();
        this.contactinfo.first_Name().type('Sami');
        this.contactinfo.last_Name().clear();
        this.contactinfo.last_Name().type('Rizk');
        this.contactinfo.address().clear();
        this.contactinfo.address().type('123 Main St');
        this.contactinfo.city().clear();
        this.contactinfo.city().type('New York');
        this.contactinfo.state().clear();
        this.contactinfo.state().type('NY');
        this.contactinfo.zip_Code().clear();
        this.contactinfo.zip_Code().type('10001');
        this.contactinfo.phone().clear();
        this.contactinfo.phone().type('2125551234');
        this.contactinfo.update_Button().click();
        cy.wait(1000);
        this.contactinfo.verify_Message().should('have.text', 'Your updated address and phone number have been added to the system. ');




    }







}
export default  updateContactInformationAction;