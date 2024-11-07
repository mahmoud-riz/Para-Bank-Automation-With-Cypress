import transferActions from "../Actions/TransferfundActions";
import LoginAction from "../Actions/LoginAction";
import AddAccountAction from "../Actions/AddAccountAction";
import logoutAction from "../Actions/logoutAction";
import RegistrationAction from "../Actions/RegistrationAction";
var Account_Number;
describe('Transfer Money ', () => {
    const registerUserAction = new RegistrationAction();
    before(() => {
        registerUserAction.do_Registration();
        const add = new AddAccountAction();
        add.Open_account();
        Account_Number = add.getAccountNumber();
        console.log('Account Number:', Account_Number);
    })
    it("Verify that a user can successfully transfer money between accounts after rigestration ", () => {
        const trans = new transferActions();
        trans.DoTransfer(Account_Number, Account_Number, 1000);
    })

    after(() => {
        const out = new logoutAction();
        out.logOut();

    })



})