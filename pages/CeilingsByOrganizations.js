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
        await this.page.click(Locators.CeilingsByOrganizations.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.CeilingsByOrganizations.tabHeader);
        await expect(tabHeader).toHaveText('Потолки по ПБС');
    }
    async lockButton() {
        await expect(this.page.locator(Locators.CeilingsByOrganizations.lockButton)).toBeVisible();
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();        
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async selectReport() {                    
        await this.page.locator('#demo-simple-select').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByText('Отчёт').click();
    }
    async selectElementsToList(){                    
            const dropdownOptions = [
                { index: 1, value: 'Ten' },
                { index: 2, value: 'Twenty' },
                { index: 3, value: 'Thirty' },
                { index: 4, value: 'Ten' },
                { index: 5, value: 'Twenty' },
                { index: 6, value: 'Thirty' }
            ];
            for (const option of dropdownOptions) {
                const dropdownLocator = this.page.locator(
                    `.CeilingsBO_iconsBlok__P\\+3ot > div > div:nth-child(${option.index}) > .MuiInputBase-root > #demo-simple-select`
                );
                await dropdownLocator.click();
                await this.page.getByRole('option', { name: option.value }).click();
            }
            await this.page.getByText('Список').click();                
    }
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.CeilingsByOrganizations.spreadsheetHeaders);
        const expectedTexts = [
            'Наименование организации',
            'Сумма',
            'Сумма',            
            'Изменение',
            'Сумма',
            'Сумма',          
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);
            
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