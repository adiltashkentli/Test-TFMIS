const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExpensesBank {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
        await this.page.click(Locators.ExpensesBank.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Расходы (банк)');
    }
    async getRelativeList() {
        await this.page.locator('div').filter({ hasText: /^ОтОтУстановить дату$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByText('Установить дату').click();
        await this.page.getByLabel('Choose date').nth(1).click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '5', exact: true }).nth(1).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '30' }).nth(1).click();
        await this.page.getByLabel('?').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Счет', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByLabel('Куратор').click();
        await this.page.getByRole('option', { name: 'Thirty' }).click();
        await this.page.getByLabel('Организации').click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByRole('combobox', { name: '? ​', exact: true }).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByRole('textbox', { name: '?' }).click();
        await this.page.getByRole('textbox', { name: '?' }).fill('55/412');
        await this.page.getByText('Список').click();
    }

    async checkSpreadsheetHeadings() {
        const rows = [
            { locator: Locators.ExpensesBank.row1, data: 'Статус' },
            { locator: Locators.ExpensesBank.row2, data: 'ID' },
            { locator: Locators.ExpensesBank.row3, data: '№' },
            { locator: Locators.ExpensesBank.row4, data: 'Дата' },
            { locator: Locators.ExpensesBank.row5, data: 'Тип' },
            { locator: Locators.ExpensesBank.row6, data: 'БИК Плательщика' },
            { locator: Locators.ExpensesBank.row7, data: 'Банк плательщика' },
            { locator: Locators.ExpensesBank.row8, data: 'Счет плательщика' },
            { locator: Locators.ExpensesBank.row9, data: 'ИНН плательщика' },
            { locator: Locators.ExpensesBank.row10, data: 'Плательщик' },
            { locator: Locators.ExpensesBank.row11, data: 'Бик получателя', action: async (page) => {
                await page.click(Locators.ExpensesBank.row11);
                await page.locator(Locators.ExpensesBank.row11).press('ArrowRight');
            }},
        ];
        
        for (const { locator, data, action } of rows) {
            // Assert the text of each locator
            await expect(this.page.locator(locator)).toHaveText(data);
        
            // If an action is defined, execute it
            if (action) {
                await action(this.page);
            }
        }
    }        
    async checkHeader5buttons() {
        const buttons = [
            Locators.ExpensesBank.headerBut1,
            Locators.ExpensesBank.headerBut2,
            Locators.ExpensesBank.headerBut3,
            Locators.ExpensesBank.headerBut4,
            Locators.ExpensesBank.headerBut5,
        ];
    
        buttons.forEach(async (locator) => {
            await expect(this.page.locator(locator)).toBeEnabled();
        });
    }
    
    async checkFooter() {
        const footers = [
            Locators.ExpensesBank.footer1,
            Locators.ExpensesBank.footer2,
            Locators.ExpensesBank.footer3,
            Locators.ExpensesBank.footer4,
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

module.exports = ExpensesBank;