const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class OtherExpenses {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.OtherExpenses.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Прочие расходы');
    }
    async chooseRelativeDataToList() {
        const actions = [
            { action: () => this.page.locator("(//div[@id='demo-simple-select'])[1]").click() },
            { action: () => this.page.getByRole('option', { name: 'Ten' }).first().click() },
            { action: () => this.page.locator("(//div[@id='demo-simple-select'])[2]").click() },            
            { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() },
        ];    
        for (const { action } of actions) {
            await action();
        }
    }
    async printExcelButtonAssert(){
        const button = await this.page.locator(Locators.OtherExpenses.printButton);
        await expect(button).toBeEnabled();
    }
    
   
}
module.exports = OtherExpenses;