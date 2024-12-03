const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class AccountingCertificate {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.AccountingCertificate.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Бухгалтерская справка');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '31' }).nth(1).click();
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^102-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^102\.01-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.getByText('102.01.005').click();
        await this.page.getByText('Список').click();
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.InvoicesRegistry.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'Каз.',
            'ПБС',
            'Ист. Фин',
            'БЗ',
            'Дата',
            'Сумма',
            'Тип',
            'Статус',
            'Основания',
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
    async addModalFunc() {
        await this.page.getByText('Добавить').click();
        const tabHeader = await this.page.locator("(//div[contains(text(),'Новая бухгалтерская справка')])[1]");
        await expect(tabHeader).toContainText('Новая бухгалтерская справка');
    // Verify and interact with 'Наименование организации'
    const orgField = this.page.getByLabel('Наименование организации');
    await expect(orgField.first()).toBeDisabled();
    await orgField.nth(1).click();
    await this.page.locator('#menu- div').first().click();
    // Fill other fields
    await this.page.getByRole('textbox', { name: '№' }).fill('03122024');
    await this.page.getByLabel('Новая бухгалтерская справка').getByLabel('Choose date').click();
    await this.page.getByRole('gridcell', { name: '3', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Основания' }).fill('Ожидается дата аиз бэкенда');
    // Select budget options
    const budgetOptions = [
        { text: /^1-Буҷети мунтахаби давлатӣ$/ },
        { text: /^11-Буҷети ҷумҳуриявӣ$/ },
        { text: '115-Дигар сарчашмаҳо' }
    ];
    for (const { text } of budgetOptions) {
        const option = this.page.locator('div').filter({ hasText: text }).locator('svg').first();
        if (await option.isVisible()) await option.click();
    }
        await this.page.getByLabel('Наименование организации').nth(2).click();
        await this.page.getByRole('option', { name: 'Ввод начальных остатков по БО' }).click();

        const spreadsheetHeaders = await this.page.$$(Locators.AccountingCertificate.modalSheetHeaders);
        const expectedTexts = [
            '',
            'Дебет',
            'Кредит',
            'Сумма',
            'БО/К(2/1/3)',
            'Искл.ДТ',
            'Искл.КТ',
            'Примечания',
            '',
            ''
        ];
        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }

}
module.exports = AccountingCertificate;