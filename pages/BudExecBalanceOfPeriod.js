const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BalanceOfPeriod {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.BalanceOfPeriod.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Баланс за период');
    }
    async chooseRelativeDataToList() {
        const actions = [
            { action: () => this.page.locator("(//div[@id='demo-simple-select'])[1]").click() },
            { action: () => this.page.getByRole('option', { name: 'Ten' }).first().click() },
            { action: () => this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click() },
            { action: () => this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click() },
            { action: () => this.page.getByLabel('Choose date', { exact: true }).click() },
            { action: () => this.page.getByLabel('декабрь').getByRole('gridcell', { name: '31' }).nth(1).click() },
            { action: () => this.page.locator("(//div[@id='demo-simple-select'])[2]").click() },            
            { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() },
        ];    
        for (const { action } of actions) {
            await action();
        }
    }
    
    
   
}
module.exports = BalanceOfPeriod;