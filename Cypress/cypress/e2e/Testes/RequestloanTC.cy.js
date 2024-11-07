import LoginAction from "../Actions/LoginAction";
import logoutAction from "../Actions/LogoutAction";
import RegistrationAction from "../Actions/RegistrationAction";
import requestLoanAction from "../Actions/requestLoanAction";
describe('Request Loan', () => {
    const registerUserAction = new RegistrationAction();
    before(() => {
        registerUserAction.do_Registration();

    })
    it("Verify that a user can successfully request a loan after rigestration .", () => {
        const loane = new requestLoanAction();
        loane.Request_Loan();
    })

    after(() => {
        const out = new logoutAction();
        out.logOut();

    })



})