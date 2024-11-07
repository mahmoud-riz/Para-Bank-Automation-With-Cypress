class RegistrationPage {

    First_Name() {

        return cy.get("input[name='customer.firstName']");

    }

    Last_Name() {

        return cy.get("input[name='customer.lastName']");

    }



    Address() {

        return cy.get("input[name='customer.address.street']");


    }


    City() {

        return cy.get('input[name="customer.address.city"]');


    }


    State() {

        return cy.get('input[name="customer.address.state"]');


    }



    Zip_Code() {

        return cy.get("input[name='customer.address.zipCode']");


    }



    phone() {

        return cy.get('input[name="customer.phoneNumber"]');


    }



    SNN() {

        return cy.get('input[name="customer.ssn"]');


    }


    R_Username() {

        return cy.get('input[id="customer.username"]');


    }


    R_Password() {

        return cy.get('input[name="customer.password"]');


    }

    Confirm() {

        return cy.get('input[name="repeatedPassword"]');


    }


    Refister_Button() {

        return cy.get('input[value="Register"]');


    }
    SuccessMessage() {
        return cy.get('#rightPanel p');
    }
}





export default RegistrationPage