const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class IncomeTransfersReg {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.SubmenuIncomes.submenuIncomes);
        await this.page.click(Locators.IncomeTransfersReg.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.IncomeTransfersReg.tabHeading);
        await expect(tabHeader).toContainText('Реестр поступления (перевод со счёта)');
    }
    async selectElementsToList() {
        const actions = [
            async () => await this.page.getByLabel('Наименование организации').first().click(),
            async () => await this.page.getByRole('option', { name: 'Ten' }).click(),
            async () => await this.page.getByLabel('Ten').nth(1).click(),
            async () => await this.page.getByRole('option', { name: 'Twenty' }).click(),
            async () => await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click(),
            async () => await this.page.getByRole('gridcell', { name: '1', exact: true }).click(),
            async () => await this.page.getByLabel('Choose date', { exact: true }).click(),
            async () => await this.page.locator("(//button[normalize-space()='29'])[1]").click(),
            async () => await this.page.getByText('Список').click(),
            async () => await this.page.getByLabel('Ten').nth(2).click(),
            async () => await this.page.getByRole('option', { name: 'Twenty' }).click(),
          ];
        for (const action of actions) {
            await action();
        }      
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.IncomeTransfersReg.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'Дата',
            'Тип',
            'Назначение платежа',
            'Сумма',
            'ИНН плательщика',
            'Плательщики',
            'Банк плательщика',
            'Счет плательщика',
            'Бик получателя',
            'Получатель',
            'ИНН получателя',
            'Дата валютирования',
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
    async formPPButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeTransfersReg.formPP)).toBeEnabled();        
    }
}
module.exports = IncomeTransfersReg;