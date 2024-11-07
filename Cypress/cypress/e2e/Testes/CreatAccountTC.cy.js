import AddAccountAction from "../Actions/AddAccountAction";
import RegistrationAction from "../Actions/RegistrationAction";

var Account_Number;
describe("Add new account ", () => {
    const registerUserAction = new RegistrationAction();
    const add = new AddAccountAction();
    before(() => {
        registerUserAction.do_Registration();
    })
    it("Verify that a user can successfully open a new account after logging in.", () => {
        add.Open_account();
        Account_Number = add.getAccountNumber();
    })
})

