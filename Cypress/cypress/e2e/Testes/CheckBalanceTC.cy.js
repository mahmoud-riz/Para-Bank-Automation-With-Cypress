import BalanceAction from "../Actions/BalanceAction";
import logoutAction from "../Actions/logoutAction";
import RegistrationAction from "../Actions/RegistrationAction";
describe('Check Balance ', () => {
    const registerUserAction = new RegistrationAction();
    before(() => {
        registerUserAction.do_Registration();
    })
    it("Verify that a user can successfully check the account balance after registration .", () => {
        const bal = new BalanceAction();
        bal.check_on_Balance();
    })
    
    after(() => {
        const out = new logoutAction();
        out.logOut();
        
    })
})