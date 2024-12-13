const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BindingOfCurators {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.BindingOfCurators.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Привязка куратор (Банк)');
    }
    async getRelativeList() {
        await this.page.click(Locators.BindingOfCurators.selector);
        await this.page.click(Locators.BindingOfCurators.element2);

        const element2 = this.page.locator(Locators.BindingOfCurators.element2);
        await expect(element2).toContainText('Twenty');
    }    
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Логин куратора' },
            { locator: 'row2', text: 'Имя куратора' },
            { locator: 'row3', text: 'Статус' },
            { locator: 'row4', text: 'БЗ' },
            { locator: 'row5', text: 'Наименование БЗ' },
            { locator: 'row6', text: 'Код орг-ии' },
            { locator: 'row7', text: 'Наименование ист. фин-я' },
            { locator: 'row8', text: 'Ист. Фин' },
            { locator: 'row9', text: 'Наименование ист. фин-я' },
            { locator: 'row10', text: 'Отд. каз.' },
            { locator: 'row11', text: 'Название отдела каз' },
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.BindingOfCurators[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = BindingOfCurators;