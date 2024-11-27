const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class AdminsOfIncomes {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.Classifiers.menuClassifiers);
        await this.page.click(Locators.AdminsOfIncomes.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.EconomicalClassification.tabHeader);
        await expect(tabHeader).toContainText('Администраторы доходов');
    }
    async selectElementsToList() {        
        await this.page.getByText('001-Кармада').click();
        // Assertion
        const code = await this.page.locator(Locators.DepartmentalClassification.codeArea);
        await expect(code).toHaveValue('001');
        const name = await this.page.locator(Locators.DepartmentalClassification.nameArea);
        await expect(name).toHaveValue('Кармада');
    }
    async checkCategoryHeader() {        
        const categoryHeader = await this.page.$$(Locators.DepartmentalClassification.categoryHeader);
        const expectedTexts = [
            '2024',
            '-',            
            'Администраторы доходов'];

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
module.exports = AdminsOfIncomes;