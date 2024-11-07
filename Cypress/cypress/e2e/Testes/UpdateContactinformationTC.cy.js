import updateContactInformationAction from "../Actions/UpdateContactInformationAction";
import logoutAction from "../Actions/logoutAction";
import RegistrationAction from "../Actions/RegistrationAction";

describe('Transfer Money ', () => {
    const registerUserAction = new RegistrationAction();
    before(() => {
        registerUserAction.do_Registration();
        
    })
    it("Update ", () => {
        const Update = new updateContactInformationAction();
        Update.update_Information();
    })

    after(() => {
       const out = new logoutAction();
       out.logOut();

    })



})