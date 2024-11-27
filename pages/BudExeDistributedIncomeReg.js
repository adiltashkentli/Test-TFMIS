const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class DistributedIncomeReg {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.SubmenuIncomes.submenuIncomes);
        await this.page.click(Locators.DistributedIncomeReg.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.IncomeTransfersReg.tabHeading);
        await expect(tabHeader).toContainText('Реестр распределённых доходов');
    }
    async selectElementsToList() {
        const actions = [
            async () => await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click(),
            async () => await this.page.getByRole('gridcell', { name: '5', exact: true }).click(),
            async () => await this.page.getByLabel('Choose date', { exact: true }).click(),
            async () => await this.page.locator("(//button[normalize-space()='29'])[1]").click(),
            async () => await this.page.getByLabel('Выберите отчет').click(),            
            async () => await this.page.getByRole('option', { name: 'Ten' }).click(),
            async () => await this.page.getByLabel('Фильтр(Сумма,(%)Назначения)').fill('350'),
            async () => await this.page.getByLabel('Кол-во доходов').fill('20'),
            async () => await this.page.getByLabel('Сумма доходов').fill('1800'),
            async () => await this.page.getByLabel('Сумма в РБ').fill('500'),
            async () => await this.page.getByLabel('Сумма в МБ').fill('1850'),
            async () => await this.page.getByText('Список').click(),
          ];
        for (const action of actions) {
            await action();
        }      
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.DistributedIncomeReg.spreadsheetHeaders);
        const expectedTexts = [
            'DocID',
            '№',
            'Дата',
            'ИНН плательщика',
            'Плательщики',
            'БИК',
            'БАнк',
            'Счет плательщика',
            'ИНН получателя',
            'Поставщик',
            'Счет получателя',
            'Сумма',
            'Описание',
            'РБ_Сумма',
            'МБ_ИНН',
            'МБ_Пол',
            'МБ_Счет',
            'МБ_Сумма',
            'Payment date',
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
    async exportButtonAssertion() {
        await expect(this.page.locator(Locators.DistributedIncomeReg.exportButton)).toBeEnabled();        
    }
}
module.exports = DistributedIncomeReg;