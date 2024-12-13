const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BindingBZmentor {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.BindingBZmentor.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Привязка БЗ (куратор)');
    }
    async getRelativeList() {
        await this.page.locator(Locators.BindingBZmentor.budgetApp).type('Локальное требование грантов');
        await this.page.locator(Locators.BindingBZmentor.mentor).fill('Рахим Хамро Саидзода');
        const listButton = this.page.locator(Locators.Salary.listButton);
        const addButton = this.page.locator(Locators.Salary.addButton);
        await expect(listButton).toBeVisible();
        await expect(addButton).toBeVisible();        
    }    
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Бюджетная заявка' },
            { locator: 'row2', text: 'Куратор' },
            { locator: 'row3', text: 'Операции' },
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.BindingBZmentor[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = BindingBZmentor;