const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ContractObligationSelfPaymReg {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.ContractObligationSelfPaymReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр договорных обязательство (самооплата)');
    }
    async chooseRelativeDataToList() {
        
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByRole('gridcell', { name: '26' }).nth(1).click();
        await this.page.getByLabel('Организации').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();        
        await this.page.locator('div').filter({ hasText: /^БЗБЗ$/ }).locator('#demo-simple-select').fill('Государственный');        
        await this.page.locator('#menu- div').first().click();
        await this.page.getByLabel('Ten').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();        
        await this.page.getByLabel('Количество').fill('85');        
        await this.page.getByLabel('Итого').fill('6500');
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
module.exports = ContractObligationSelfPaymReg;