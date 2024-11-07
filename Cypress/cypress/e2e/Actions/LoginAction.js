
import LoginPage from '../Pages/LoginPage';

class LoginAction {
    log = new LoginPage();


    do_Login({ username, password }) {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        
        this.log.username().type(username ?? 'mahmoud');
        this.log.password().type(password ?? '123456');
        this.log.Loin_Button().click();
    }
    validate_LoginUrl() {
        cy.url().should('include', '/parabank/overview.htm');
    }


}
export default LoginAction