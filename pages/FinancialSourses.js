const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class FinancialSourses {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.Classifiers.menuClassifiers);
        await this.page.click(Locators.FinancialSourses.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.FinancialSourses.tabHeader);
        await expect(tabHeader).toContainText('Источники финансирования');
    }
    async selectElementsToList() {        
        const actions = [
            async () => await page.getByText('Источники финансирования').click(),
            async () => await page.getByLabel('plus').locator('path').nth(1).click(),
            async () => await page.locator('div').filter({ hasText: /^11-Буҷети ҷумҳуриявӣ$/ }).locator('div svg').click(),
            async () => await page.getByText('111-Буҷети ҷумҳуриявӣ').click(),
          ];
          
          for (const index in actions) {
            await actions[index]();
          }
          

        // Assertion
        const code = await this.page.locator(Locators.DepartmentalClassification.codeArea);
        await expect(code).toHaveValue('1.1.1');
        const name = await this.page.locator(Locators.DepartmentalClassification.nameArea);
        await expect(name).toHaveValue('Буҷети ҷумҳуриявӣ');
    }    
    async checkCategoryHeader() {        
        const categoryHeader = await this.page.$$(Locators.DepartmentalClassification.categoryHeader);
        const expectedTexts = [
            '2024',
            '-',            
            'Источники финансирования'];

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
module.exports = FinancialSourses;