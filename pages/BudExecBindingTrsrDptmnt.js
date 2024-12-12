const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BindingTreasureDepartment {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.BidndingTreasureDprt.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Привязка отделов казначейства с БЗ');
    }
    async selectDataToRelativeList() {
        const selections = [
            { role: 'combobox', name: 'Год ​', option: '1' },
            { role: 'combobox', name: 'Организации ​', option: '2' },
            { role: 'combobox', name: 'ID отдела ​', option: '3' }
        ];
    
        for (const { role, name, option } of selections) {
            await this.page.getByRole(role, { name }).click();
            await this.page.getByRole('option', { name: option }).click();
        }
    
        await this.page.getByText('Список').click();
    }
    
    async changesLog() {
        await this.page.getByText('Журнал изменений').click();
        const headers = [
            { locator: 'modalspsh1', text: 'Год' },
            { locator: 'modalspsh2', text: 'ID отдела' },
            { locator: 'modalspsh3', text: 'Код куратора' },
            { locator: 'modalspsh4', text: 'БЗ' },
            { locator: 'modalspsh5', text: 'Логин' },
            { locator: 'modalspsh6', text: 'Статус пользователя' },
            { locator: 'modalspsh7', text: 'Тип бюджета' }            
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.BidndingTreasureDprt[locator]);
                await expect(row).toHaveText(text);
            })
        );
        await this.page.locator('.MuiDataGrid-cell > .MuiButtonBase-root').first().click();
        await this.page.locator('[id="\\:r3g\\:"] > div > div > .MuiButtonBase-root').click();
        
    }
    async addModalFunc() {
        await this.page.click(Locators.Recipients.add1button);
        await this.page.getByRole('combobox', { name: 'Год ​', exact: true }).nth(1).click();
        await this.page.getByRole('option', { name: '1' }).click();
        await this.page.getByRole('combobox', { name: 'Организации ​', exact: true }).nth(1).click();
        await this.page.getByRole('option', { name: '2' }).click();
        await this.page.getByRole('combobox', { name: 'Ист. Фин ​' }).click();
        await this.page.getByRole('option', { name: '3' }).click();
        await this.page.getByRole('combobox', { name: 'Бюджетная заявка ​' }).click();
        await this.page.getByRole('option', { name: '1' }).click();
        await this.page.getByRole('combobox', { name: 'Тип бюджета ​' }).click();
        await this.page.getByRole('option', { name: '2' }).click();
        await this.page.getByRole('combobox', { name: 'Единица учета ​' }).click();
        await this.page.getByRole('option', { name: '3' }).click();
        await this.page.getByRole('combobox', { name: 'ID отдела ​', exact: true }).nth(1).click();
        await this.page.getByRole('option', { name: '1' }).click();        
        await this.page.getByRole('textbox', { name: 'Логин' }).fill('admin');        
        await this.page.getByRole('textbox', { name: 'Код куратора' }).fill('123');
        await this.page.getByRole('button', { name: 'Добавить' }).click();        
        await this.page.getByRole('button', { name: 'Отмена' }).click();
    }
    
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Год' },
            { locator: 'row2', text: 'Организации' },
            { locator: 'row3', text: 'Единица учета' },
            { locator: 'row4', text: 'ID отдела' },
            { locator: 'row5', text: 'Код куратора' },
            { locator: 'row6', text: 'Бюджетная заявка' },
            { locator: 'row7', text: 'Логин' },
            { locator: 'row8', text: 'Статус пользователя' },
            { locator: 'row9', text: 'Тип бюджета' },
            { locator: 'row10', text: 'Ист. Фин' },
            { locator: 'row11', text: 'Операции' },
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.BidndingTreasureDprt[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = BindingTreasureDepartment;