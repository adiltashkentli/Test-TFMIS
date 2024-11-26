const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');
const { text } = require('stream/consumers');

class BudgetRequestTypes {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.Outcomes.budgetPreparationMenu);
        await this.page.click(Locators.Administration.submenuAdministration);
        await this.page.click(Locators.BudgetRequestTypes.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.BudgetRequestTypes.tabHeader);
        await expect(tabHeader).toHaveText('Администрирование типов бюджетных заявок');
    }
    async selectElementsToList() {
        //1-Год
        await this.page.getByText('2024').click();
        await this.page.getByRole('option', { name: '2023' }).first().click();
        await this.page.getByText('Список').click();
    }
    async listOfSpreadsheet() {
        const tableHeadings = await this.page.$$(Locators.BudgetRequestTypes.spreadsheetHeaders);
        const expectedTexts = [
            'БЗ',
            'Наименование (таджикский)',
            'Наименование (русский)',
            'Наименование (английский)',
            'Операции',
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
        const secLineData = await this.page.$$(Locators.BudgetRequestTypes.secondLineData);
        const expectedData = [
            '0101002',
            'Тайёр намудани кадр?о дар хори?а',
            '',
            'Расходы на содержание учреждения',
        ];
        for (let i = 0; i < secLineData.length; i++) {
            const lineData = await secLineData[i].textContent();
            console.log(lineData);
            expect(headersText.trim()).toBe(expectedData[i]);
        }       
    }
    async addButtonAssertion() {
        await expect(this.page.locator(Locators.BudgetRequestTypes.addButton)).toBeVisible();
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = BudgetRequestTypes;