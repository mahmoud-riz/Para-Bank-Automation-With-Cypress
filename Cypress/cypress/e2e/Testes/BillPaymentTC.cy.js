import LoginAction from "../Actions/LoginAction";
import logoutAction from "../Actions/logoutAction";
import BillPaymentAction from "../Actions/BillPaymentAction";
import RegistrationAction from "../Actions/RegistrationAction";
describe('Pill Payment ', () => {
    const registerUserAction = new RegistrationAction();
    before(() => {
        registerUserAction.do_Registration();
    })
    it("Verify that a user can successfully make a bill payment after registration >>> login", () => {
        const pay = new BillPaymentAction();
        pay.DoPayment();
    })
    
    after(() => {
        const out = new logoutAction();
        out.logOut();
    })



})