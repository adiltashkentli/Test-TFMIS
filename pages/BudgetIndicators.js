const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BudgetIndicators {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.Classifiers.menuClassifiers);
        await this.page.click(Locators.BudgetIndicators.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.EconomicalClassification.tabHeader);
        await expect(tabHeader).toContainText('Бюджетные показатели');
    }
    async selectElementsToList() {        
        const actions = [
            async () => await this.page.locator('div').filter({ hasText: /^01-Маҷмӯи маҳсулоти дохила \(ММД\)$/ }).locator('path').nth(1).click(),
            async () => await this.page.getByText('0101-Афзоиши номиналӣ ММД ').click(),
          ];          
          for (const action of actions) {
            await action();
          }
        // Assertion
        const code = await this.page.locator(Locators.DepartmentalClassification.codeArea);
        await expect(code).toHaveValue('01.01');
        const name = await this.page.locator(Locators.DepartmentalClassification.nameArea);
        await expect(name).toHaveValue('Афзоиши номиналӣ ММД ');
    }
    async checkCategoryHeader() {        
        const categoryHeader = await this.page.$$(Locators.DepartmentalClassification.categoryHeader);
        const expectedTexts = [
            '2024',
            '-',            
            'Бюджетные показатели'];

        for (let i = 0; i < categoryHeader.length; i++) {
            const headersText = await categoryHeader[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async headerButtonsAssertion() {        
        const headerButtons = await this.page.$$(Locators.DepartmentalClassification.header6Buttons);        
        for (let i = 0; i < headerButtons.length; i++) {            
            expect(headerButtons).toBeEnabled();
        }
    }    
}
module.exports = BudgetIndicators;