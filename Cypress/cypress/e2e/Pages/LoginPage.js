class LoginPage {



    username() {

        return cy.get("input[name='username']");

    }

    password() {

        return cy.get("input[name='password']");

    }



    Loin_Button() {

        return cy.get('input[value="Log In"]');


    }

}
export default LoginPage