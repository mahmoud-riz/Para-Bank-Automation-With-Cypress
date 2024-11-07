
import LoginAction from '../Actions/LoginAction';
import RegistrationAction from '../Actions/RegistrationAction';
import logoutAction from '../Actions/logoutAction';


describe('Login', () => {
    const auth = new RegistrationAction();
    const out = new logoutAction();
    before(() => {
        auth.do_Registration()
        out.logOut();
        
    })
    it("Verify that a user can successfully log in and log out of the application.", () => {
        const log = new LoginAction();
        log.do_Login({ username: auth.userName, password: auth.userData.password });
        log.validate_LoginUrl();
        
    })
    after(() => {
        out.logOut();
    })
})