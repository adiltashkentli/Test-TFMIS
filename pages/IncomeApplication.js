const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class IncomeApplication {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.IncomeCeiling.menuRevenue);
        await this.page.click(Locators.IncomeApplication.menuIncomeApplication);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.IncomeApplication.tabHeader);
        await expect(tabHeader).toContainText('Доходная заявка');
    }

    async selectElementsToList() {
        await this.page.getByLabel('Год').click();
        await this.page.getByRole('option', { name: '2024' }).click();
        await this.page.getByLabel('Шаг').click();
        await this.page.getByRole('option', { name: 'Потолки кураторов секторов МФ РТ' }).click();
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.getByText('101.01.001').click();
        await this.page.locator('#rc_select_2').click();
        await this.page.locator('div').filter({ hasText: /^04-Шаҳри Душанбе$/ }).locator('svg').first().click();
        await this.page.getByText('0401-Шаҳри Душанбе').click();
        const issue = await this.page.locator('#rc_select_3');
        const keysToPress = ['ArrowDown', 'ArrowRight', 'ArrowDown', 'ArrowRight', 'Enter'];
        for (let i=0; i<keysToPress.length; i++){
            await issue.press(keysToPress[i]);
        }
        await this.page.getByText('Список').click();
    }

    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.IncomeApplication.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'Администратор',
            'Наименование администратора',
            'Терр.код',
            'Наименование территории',
            'ИФ',
            'Операции',
            'Наименование ИФ',];

        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async reportButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeCeiling.reportButton)).toBeVisible();
    }
    async saveButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeCeiling.saveButton)).toBeVisible();
    }

}
module.exports = IncomeApplication;