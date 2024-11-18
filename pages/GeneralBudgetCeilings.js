const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class GeneralBudgetCeilings {
    constructor(page) {
        this.page = page;

    }

    async navigateToPage() {
        await this.page.click(Locators.Outcomes.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
        await this.page.click(Locators.GeneralBudgetCeilings.categoryMenu);        
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.GeneralBudgetCeilings.tabHeader);
        await expect(tabHeader).toHaveText('Общие бюджетные потолки');
    }
        
    async selectElementsToList() {
        await this.page.click(Locators.GeneralBudgetCeilings.selectYear);
        await this.page.click(Locators.GeneralBudgetCeilings.selectRelativeYear);
        await this.page.click(Locators.GeneralBudgetCeilings.selectScenario);
        await this.page.click(Locators.GeneralBudgetCeilings.selctRelativeCategory);
        await this.page.click(Locators.GeneralBudgetCeilings.listButton);
    }

    async listSpreadsheet() {
        // Get all headers of spreadsheet
        const tabHeadings = await this.page.$$(Locators.GeneralBudgetCeilings.spreadsheetHeaders);
        
        const expectedTexts = [
            'Код',
            'Наименование',
            '2023',
            '2024',
            'Изменение',
            '2025',
            '2026',
            'Пояснение'
        ];

        for (let i = 0; i < tabHeadings.length; i++) {
            const headersText = await tabHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }    
}
module.exports = GeneralBudgetCeilings;
