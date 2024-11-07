import RegistrationPage from '../Pages/RegistrationPage';
import { data } from '../Resourses/data';

class RegistrationAction {
  Rig = new RegistrationPage();
  userData = data.registration;
  userName = `user${Math.floor(Math.random() * 10000)}`;

  do_Registration() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');

    this.Rig.First_Name().type(this.userData.First_Name);
    this.Rig.Last_Name().type(this.userData.Last_Name);
    this.Rig.Address().type(this.userData.Address);
    this.Rig.City().type(this.userData.City);
    this.Rig.State().type(this.userData.State);
    this.Rig.Zip_Code().type(this.userData.Zip_Code);
    this.Rig.phone().type(this.userData.phone);
    this.Rig.SNN().type(this.userData.SNN);
    this.Rig.R_Username().type(this.userName);
    this.Rig.R_Password().type(this.userData.password);
    this.Rig.Confirm().type(this.userData.password);
    this.Rig.Refister_Button().click();
  }





  Validate_Registration() {
    this.Rig.SuccessMessage().should('have.text', 'Your account was created successfully. You are now logged in.');
  }



}
export default RegistrationAction