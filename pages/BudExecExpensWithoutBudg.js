const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExpensesWithoutBudg {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.ExpensesWithoutBudg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Прочие расходы без бюджета');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '31' }).nth(1).click();
        await this.page.getByLabel('Организации').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByText('Список').click();
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.ExpensesWithoutBudg.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'Дата',
            'Поставщик',
            'Основания',
            'Сумма',
            '№ опер.',
            'Наим. опер',
            'Статус',

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
    async addModalFunc() {
        await this.page.getByText('Добавить').click();        
        await this.page.getByRole('textbox', { name: '№' }).fill('0312/2024');
        await this.page.getByLabel('Новая заявка на перевод средств без бюджета').getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '3', exact: true }).click();        
        await this.page.locator('div').filter({ hasText: /^Тип платежа$/ }).locator('#demo-simple-select').fill('Перевод');        
        await this.page.getByRole('textbox', { name: 'Сумма' }).fill('500000');        
        await this.page.getByLabel('Плательщик', { exact: true }).fill('Row Tech');
        await this.page.getByLabel('Организации').nth(1).click();        
        await this.page.getByRole('option', { name: 'Twenty' }).click();        
        await this.page.getByLabel('Утвержден (ФИО)').fill('Шосафо Ш.');        
        await this.page.getByRole('textbox', { name: 'Основания' }).fill('Ободрение проекта');
        await this.page.getByRole('button', { name: 'Выбрать получателя' }).click();
        await this.page.getByLabel('Получатель').click();
        await this.page.getByLabel('Получатель').fill('МинФин');
        await this.page.getByLabel('Банк').fill('Ориёнбонк');
        await this.page.getByLabel('Счет').fill('555444999887755');
        await this.page.getByLabel('Организации').nth(2).click();
        await this.page.getByRole('option', { name: 'Thirty' }).click();
        await this.page.getByLabel('Организации').nth(3).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Организации').nth(4).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();        

        const spreadsheetHeaders = await this.page.$$(Locators.AccountingCertificate.modalSheetHeaders);
        const expectedTexts = [
            '',
            'Дебет',
            'Кредит',
            'Сумма',
            'Админ(доход)',
            'Доходная заявка',
            'Категория',
            'Код ЭБК(дохода)',
            'БО/К/(2/1/3)',
            'Искл. кт.',
            'Примечания'
        ];
        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
        await this.page.locator("(//*[name()='path'])[100]").click();
    }

}
module.exports = ExpensesWithoutBudg;