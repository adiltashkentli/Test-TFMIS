const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExtractReports {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.ExcractReports.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Выписка');
    }
    async chooseRelativeDataToList() {
        const actions = [
            { action: () => this.page.getByLabel('Choose date').click() },
            { action: () => this.page.getByRole('gridcell', { name: '5', exact: true }).click() },
            { action: () => this.page.getByLabel('Р/счета').first().click() },
            { action: () => this.page.getByRole('option', { name: 'Ten' }).click() },
            { action: () => this.page.getByLabel('Ten').nth(1).click() },
            { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() },
            { action: () => this.page.getByLabel('Ten').nth(2).click() },
            { action: () => this.page.getByRole('option', { name: 'Thirty' }).click() },
            { action: () => this.page.getByLabel('Ten').nth(3).click() },
            { action: () => this.page.getByRole('option', { name: 'Ten' }).click() },
            { action: () => this.page.getByLabel('Ten').nth(4).click() },
            { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() }
        ];
        for (const { action } of actions) {
            await action();
        }
    }
    async assert3HeaderButtons() {
        const buttons = [
            'Выписка банка',
            'Выписка TFMIS(SGB.net)',
            'Выписка 2016'
        ];    
        for (const buttonText of buttons) {
            const button = await this.page.getByText(buttonText);
            await expect(button).toBeVisible();
            await expect(button).toBeEnabled();
        }
    }
    
}
module.exports = ExtractReports;