const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Curators {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.Curators.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Кураторы');
    }
    async getRelativeList() {
        await this.page.locator(Locators.Curators.loginArea).type('RowTech');        
        await this.page.click(Locators.Salary.listButton);
        const listButton = this.page.locator(Locators.Salary.listButton);        
        await expect(listButton).toBeVisible();
    }    
    async addModalFunctionality(){
        await this.page.click(Locators.Salary.addButton);
        await this.page.locator(Locators.Curators.modalLoginArea).type('RowTech');
        await this.page.locator(Locators.Curators.modalNameArea).type('Maxim');
        await this.page.locator(Locators.Curators.modalFirstNameArea).type('Shosafoev');
        await this.page.click(Locators.Recipients.modalAddButton);
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Код' },
            { locator: 'row2', text: 'Логин' },
            { locator: 'row3', text: 'Имя' },
            { locator: 'row4', text: 'Фамилия' },
            { locator: 'row5', text: 'Операции' },
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.Curators[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = Curators;