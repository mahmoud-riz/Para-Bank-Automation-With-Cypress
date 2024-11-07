import BalanceValuePage from "../Pages/CheckBalacePage";

class BalanceAction {

    check = new BalanceValuePage();

    check_on_Balance() {
        let totalBalance = 0;

        cy.get('a').contains('Accounts Overview').click();

        this.check.getTable().find('tr').each(($row, index, $list) => {
            // Skip the last row which contains the total
            if (index === $list.length - 1) {
                return;
            }

            const balanceText = $row.find('td').eq(1).text().trim();
            const balanceValue = parseFloat(balanceText.replace(/[$,]/g, ''));

            // Add the balance value to the total balance
            totalBalance += balanceValue;
        }).then(() => {
            // Get the total amount from the last row
            this.check.getTable().find('tr').last().find('td').eq(1).invoke('text').then((totalAmountText) => {
                const totalAmount = parseFloat(totalAmountText.replace(/[$,]/g, ''));

                // Log the total balance and total amount
                cy.log('Calculated Total Balance:', totalBalance);
                cy.log('Displayed Total Amount:', totalAmount);
                console.log('Calculated Total Balance:', totalBalance);
                console.log('Displayed Total Amount:', totalAmount);

                // Assert that the calculated total balance equals the displayed total amount
                expect(totalBalance).to.equal(totalAmount);
            });
        });
    }


}
export default BalanceAction;