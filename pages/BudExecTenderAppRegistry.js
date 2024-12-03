const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class TenderAppReg {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.TenderAppReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.TenderAppReg.tabHeader);
        await expect(tabHeader).toContainText('Реестр Тендерных Заявок');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='1'])[1]").click();

        // Select the second date
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='30'])[1]").click();



        // Select the dropdown and click options
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('path').first().click();
        await this.page.getByText('101.01.001').click();

        // Choose 'БЗ' and select the option
        await this.page.getByLabel('БЗ').first().click();
        await this.page.getByRole('option', { name: '93' }).click();
        await this.page.getByLabel('93').nth(1).click();
        await this.page.getByRole('option', { name: '-Сохтмони толори мачлисгох' }).click();

        // Handle 'Сумма' spinbutton
        await this.page.getByRole('spinbutton', { name: 'Сумма' }).click();
        await this.page.getByRole('spinbutton', { name: 'Сумма' }).fill('50000');

        // Final actions
        await this.page.getByText('Список').click();
        await this.page.getByText('Принять к исполнению').click();
        await this.page.getByText('Согласовать').click();
    }

    async checkSpreadsheetHeadings() {
        const spreadsheetHeaders = await this.page.$$(Locators.TenderAppReg.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'Дата',
            'ПБС',
            'Коды: БЗ-Объект',
            'Вид тендера',
            'Сумма',
            'Утверждения(ФИО) АПЗ-БО',
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
    async footerAreas() {
        const footerArea1 = await this.page.locator(Locators.TenderAppReg.footerInpArea);
        await expect(footerArea1).toBeDisabled();
        const footerArea2 = await this.page.locator(Locators.TenderAppReg.footerInpArea2);
        await expect(footerArea2).toBeEnabled();
        await expect(footerArea2).toHaveValue('0');
    }
    async headerButtonsAssert() {
        const headerButtons = await this.page.$$(Locators.TenderAppReg.header2Buttons);
        for (let i = 0; i < headerButtons.length; i++) {
            expect(headerButtons).toBeEnabled();
        }
    }
}
module.exports = TenderAppReg;