const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class CeilingsByDistributors {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.CeilingsBySector.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
        await this.page.click(Locators.CeilingsByDistributors.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.CeilingsByDistributors.tabHeader);
        await expect(tabHeader).toHaveText('Потолки по РБС');
    }
    async selectElementsToList() {                    
            await this.page.getByLabel('Выберите отчет').click();
            await this.page.getByRole('option', { name: 'Ten' }).click();
            await this.page.getByText('Отчет', { exact: true }).click();
                    
            await this.page.getByLabel('Год').first().click();
            await this.page.getByRole('option', { name: 'Ten' }).click();
            await this.page.getByLabel('Год').nth(1).click();
            await this.page.getByRole('option', { name: 'Ten' }).click();
         
            const inputFields = [
                { label: 'Шаг', value: '20' },
                { label: 'Бюджетный параметр', value: '30' },
                { label: 'ИФ', value: '40' },
                { label: 'ГРБС', value: '50' }
            ];
        for (const field of inputFields) {
                const locator = this.page.locator('div').filter({ hasText: new RegExp(`^${field.label}$`) }).locator('#demo-simple-select');
                await locator.click();
                await locator.fill(field.value);
            }
            await this.page.getByLabel('Всего для ведомства').fill('15');
            await this.page.getByLabel('Распределено').fill('10');
            
            await this.page.getByText('Список').click();
        }            
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.CeilingsByDistributors.spreadsheetHeaders);

        const expectedTexts = [
            'Наименование распределителя бюджетных средств',
            'Сумма',
            'Сумма',            
            'Изменение',
            'Сумма',
            'Сумма',
            'Сумма',
            'Сумма',
            'Сумма',
            'Сумма'
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    
    async changesLogButtonAssertion() {
        await expect(this.page.locator(Locators.CeilingsBySector.changesLogButton)).toBeVisible();
    }
    async reportButtonAssertion(){
        await expect(this.page.locator(Locators.CeilingsBySector.reportButton)).toBeVisible();
    }
    async saveButtonAssertion(){
        await expect(this.page.locator(Locators.CeilingsByDistributors.saveButton)).toBeVisible();
    }
}
module.exports = CeilingsByDistributors;