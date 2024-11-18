const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class CeilingsBySector {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        //await this.page.getByText('Подготовка бюджета').click();
        await this.page.click(Locators.CeilingsBySector.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
        await this.page.click(Locators.CeilingsBySector.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.CeilingsBySector.tabHeader);
        await expect(tabHeader).toHaveText('Потолки по секторам');
    }
    async selectElementsToList() {
        const elements = [
            Locators.CeilingsBySector.selectYear,
            Locators.CeilingsBySector.selectFirstYear,
            Locators.CeilingsBySector.selectLabel,
            Locators.CeilingsBySector.selectSecondLabel,
            Locators.CeilingsBySector.selectParameter,
            Locators.CeilingsBySector.selectThirdParameter,
        ];
        for (const element of elements) {
            await this.page.click(element);
        }
    }
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.CeilingsBySector.spreadsheetHeaders);

        const expectedTexts = [
            'Код',
            'Сектор',
            '2023',
            '2024',
            'Изменение',
            '2025',
            '2026',
            'Пояснение',
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async fulfillFooterInputs() {
        // Define the input data for each section and year
        const inputs = [
            {
                section: 'Итого по БП:202320232024202420252025',
                data: { 2023: '150', 2024: '150', 2025: '200' }
            },
            {
                section: 'Распределено 202320232024202420252025',
                data: { 2023: '100', 2024: '175', 2025: '250' }
            },
            {
                section: 'Остаток: 202320232024202420252025',
                data: { 2023: '500', 2024: '600', 2025: '700' }
            }
        ];
    
        // Loop through sections and input values
        for (const { section, data } of inputs) {
            for (const [year, value] of Object.entries(data)) {
                const input = this.page.locator('div')
                    .filter({ hasText: new RegExp(`^${section}$`) })
                    .getByLabel(year);
    
                await input.click();
                await input.fill(value);
                await input.press('Tab');
            }
        }
    }
    async changesLogButtonAssertion() {
        await expect(this.page.locator(Locators.CeilingsBySector.changesLogButton)).toBeVisible();
    }
    async reportButtonAssertion(){
        await expect(this.page.locator(Locators.CeilingsBySector.reportButton)).toBeVisible();
    }
    async saveButtonAssertion(){
        await expect(this.page.locator(Locators.CeilingsBySector.saveButton)).toBeVisible();
    }
}
module.exports = CeilingsBySector;