const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class TreasureDepartment {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.TreasureDepartment.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Отделы казначейства');
    }
    async selectDataToRelativeList() {
        const actions = [
            { role: 'combobox', name: 'Год ​', action: 'click' },
            { role: 'option', name: 'one', action: 'click' },
            { label: 'Отделы казначейства', action: 'click' },
            { role: 'option', name: 'two', action: 'click' },
            { text: 'Список', action: 'click' }
        ];
    
        for (const { role, label, text, name, action } of actions) {
            const element = role
                ? this.page.getByRole(role, { name })
                : label
                ? this.page.getByLabel(label)
                : this.page.getByText(text);
    
            await element[action]();
        }
    }    
    async addNewDepartment() {
        const actions = [
            { method: 'getByText', args: ['Добавить новый отдел'], action: 'click' },
            { method: 'getByLabel', args: ['Номи шуъбаи нав'], action: 'click' },
            { method: 'getByLabel', args: ['Номи шуъбаи нав'], action: 'fill', value: 'Row Tech' },
            { method: 'getByLabel', args: ['Название нового отдела'], action: 'fill', value: 'IT solution' },
            { method: 'getByLabel', args: ['Name of the new department'], action: 'fill', value: 'Quality Assurance' },
            { method: 'getByRole', args: ['button', { name: 'Добавить' }], action: 'click' },
            { method: 'getByRole', args: ['button', { name: 'Отмена' }], action: 'click' }
        ];    
        for (const { method, args, action, value } of actions) {
            const element = this.page[method](...args);
            if (action === 'fill') {
                await element[action](value);
            } else {
                await element[action]();
            }
        }
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'ID' },
            { locator: 'row2', text: 'Год' },
            { locator: 'row3', text: 'Код казн-ва' },
            { locator: 'row4', text: 'Коды отд-в в казн-ва' },
            { locator: 'row5', text: 'Номгӯи шӯъбаҳо' },
            { locator: 'row6', text: 'Назание отделов' },
            { locator: 'row7', text: 'Departament names' },
            { locator: 'row8', text: 'Операции' },            
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.TreasureDepartment[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = TreasureDepartment;