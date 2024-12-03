const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExpenseObjects {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.ExpenseObjects.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр Объектов(Титульный лист)');
    }
    async chooseRelativeDataToList() {
        // Date selection
        const dateSelections = [
            { label: /^От$/, month: 'декабрь', day: '1' },
            { label: /^До$/, month: 'декабрь', day: '31', nth: 1 }
        ];
    
        for (const { label, month, day, nth } of dateSelections) {
            await this.page.locator('div').filter({ hasText: label }).getByLabel('Choose date').click();
            const dayLocator = this.page.getByLabel(month).getByRole('gridcell', { name: day, exact: true });
            nth ? await dayLocator.nth(nth).click() : await dayLocator.click();
        }
    
        // Organization selection
        const organizations = [
            { index: 0, option: 'Ten' },
            { index: 1, option: 'Thirty' }
        ];
    
        for (const { index, option } of organizations) {
            const orgField = this.page.getByLabel('Организации').nth(index);
            await orgField.click();
            await this.page.getByRole('option', { name: option }).click();
        }
    
        // Fill numeric fields
        const numericFields = [
            { label: 'Количество', value: '50' },
            { label: 'Итого', value: '200' }
        ];
    
        for (const { label, value } of numericFields) {
            const field = this.page.getByLabel(label).first();
            await field.fill(value);
        }
    
        // Final step: click on 'Список'
        await this.page.getByText('Список').click();
    }
    
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.ExpensesWithoutBudg.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'Назначение',
            'Объект code',
            'Объект',
            'Сумма',
            'Статус.',
            'Операции',
        ];
        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }    
}
module.exports = ExpenseObjects;