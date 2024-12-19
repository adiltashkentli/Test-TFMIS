const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ReportsBank {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
        await this.page.click(Locators.Manual.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Справочник');
    }
    async checkSpreadsheetHeadings() {
        const rows = [
            { locator: Locators.NotificationOfRefusal.row1, data: '-' },
            { locator: Locators.NotificationOfRefusal.row2, data: 'Счет' },
            { locator: Locators.NotificationOfRefusal.row3, data: 'Год' },
            { locator: Locators.NotificationOfRefusal.row4, data: 'Код региона' },
            { locator: Locators.NotificationOfRefusal.row5, data: 'Детали' },
            { locator: Locators.NotificationOfRefusal.row6, data: 'Статус' }
        ];    
        for (const { locator, data } of rows) {
            await expect(this.page.locator(locator)).toHaveText(data);
        }
    }
    async checkFooter() {
        const footers = [
            Locators.BankExpenses.footer1,
            Locators.BankExpenses.footer2,            
        ];    
        for (const footerLocator of footers) {
            const footer = this.page.locator(footerLocator);
            await expect(footer).toBeEditable();
        }
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    
}

module.exports = ReportsBank;