import RegistrationAction from '../Actions/RegistrationAction';
it("Verify that a user can successfully register a new account.", () => {
    const reg = new RegistrationAction();
    reg.do_Registration();
    reg.Validate_Registration();
})