class logoutPage {
    getLogoutButton() {
        return cy.get('a').contains('Log Out');
    }
}

export default logoutPage;