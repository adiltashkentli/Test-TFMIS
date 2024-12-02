const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExpenseRequestReg {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.ExpenseRequestReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр расходных заявок');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '31' }).nth(1).click();
        await this.page.getByLabel('Организации').first().fill('Сохтмони шахр');        
        await this.page.click("(//div[@id='demo-simple-select'])[1]");
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByRole('textbox', { name: 'Сумма' }).click();
        await this.page.getByRole('textbox', { name: 'Сумма' }).fill('02122024');
        await this.page.getByLabel('Количество').click();
        await this.page.getByLabel('Количество').fill('150');
        await this.page.getByLabel('Количество').press('Tab');
        await this.page.getByLabel('Итого').fill('330');
        await this.page.getByText('Список').click();
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.InvoicesRegistry.spreadsheetHeaders);
        const expectedTexts = [
            '№',            
            'Назначение',
            'ПБС',
            'Фирма',
            'Дата',
            'Сумма',
            'Договора',
            'Статус',
            'Операции'
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
    async headerButtonsAssert() {
        const headerButtons = await this.page.$$(Locators.TenderAppReg.header2Buttons);
        for (let i = 0; i < headerButtons.length; i++) {
            expect(headerButtons).toBeEnabled();
        }
    }
}
module.exports = ExpenseRequestReg;