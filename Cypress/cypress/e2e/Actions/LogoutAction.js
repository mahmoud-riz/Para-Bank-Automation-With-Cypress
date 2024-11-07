import logoutPage from "../Pages/LogoutPage";

class logoutAction {
    out = new logoutPage();

    logOut() {
        this.out.getLogoutButton().click();
        cy.wait(1000);
        cy.url().should('include', 'https://parabank.parasoft.com/parabank/index.htm');

    }



}
export default logoutAction;