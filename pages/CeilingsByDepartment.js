const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class CeilingsByDepartment {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.CeilingsBySector.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
        await this.page.click(Locators.CeilingsByDepartment.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.CeilingsByDepartment.tabHeader);
        await expect(tabHeader).toHaveText('Потолки по ГРБС');
    }
    async selectReport(){
        const oneElement = [
            Locators.CeilingsByDepartment.reportSelector,
            Locators.CeilingsByDepartment.firstElement,
            Locators.CeilingsByDepartment.reportButton
        ];
        for (const element of oneElement){
            await this.page.click(element);
        }
    }
    async selectElementsToList() {
        const elementsToSelect = [
            { selector: '#demo-simple-select', option: 'Ten' },
            { selector: 'div:nth-child(2) > .MuiInputBase-root > #demo-simple-select', option: 'Twenty' },
            { selector: 'div:nth-child(3) > .MuiInputBase-root > #demo-simple-select', option: 'Thirty' },
            { selector: 'div:nth-child(4) > .MuiInputBase-root > #demo-simple-select', option: 'Ten' },
            { selector: '.BudgetDepartment_inputBloks__mPTz1 > div > div > .MuiInputBase-root > #demo-simple-select', option: 'Ten' },
            { selector: '.BudgetDepartment_inputBloks__mPTz1 > div > div:nth-child(2) > .MuiInputBase-root > #demo-simple-select', option: 'Twenty' }
        ];        
        for (const element of elementsToSelect) {
            await this.page.locator(element.selector).first().click();
            await this.page.getByRole('option', { name: element.option }).click();
        }
        await this.page.getByText('Добавить').click();
        await this.page.getByTestId('AddIcon').locator('path').click();
    }
    
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.CeilingsByDepartment.spreadsheetHeaders);

        const expectedTexts = [
            '-',
            'Источник финансирования',
            '-',
            'ГРБС',
            'Изменение',            
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async fulfillFooterInputs() {
        // Refine the locator to select the correct element
        await this.page.getByTitle('budget_ceilings_by_department').click();
    
        const footerInputs = [
            { label: 'Итого по БП', value: '400' },
            { label: 'Распределено', value: '350' },
            { label: 'Остаток', value: '50' }
        ];
    
        for (const input of footerInputs) {
            await this.page.getByLabel(input.label).click();
            await this.page.getByLabel(input.label).fill(input.value);
            await this.page.getByLabel(input.label).press('Tab');
        }
    }
    
    async changesLogButtonAssertion() {
        await expect(this.page.locator(Locators.CeilingsBySector.changesLogButton)).toBeVisible();
    }   
    async saveButtonAssertion(){
        await expect(this.page.locator(Locators.CeilingsByDepartment.saveButton)).toBeVisible();
    }
}
module.exports = CeilingsByDepartment;