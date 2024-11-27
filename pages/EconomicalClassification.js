const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class EconomicalClassification {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.Classifiers.menuClassifiers);
        await this.page.click(Locators.EconomicalClassification.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.EconomicalClassification.tabHeader);
        await expect(tabHeader).toContainText('Экономическая классификация');
    }
    async selectElementsToList() {        
        const actions = [
            async () => await this.page.locator('div').filter({ hasText: /^2-Хароҷотҳо$/ }).locator('div svg').click(),
            async () => await this.page.locator('div').filter({ hasText: /^22-Хароҷоти молҳо ва хизматрасониҳо$/ }).locator('div svg').click(),
            async () => await this.page.locator('div').filter({ hasText: /^223-Хароҷоти умумӣ \(пакети ягона\) дар доираи механизми маблағгузории сарикасӣ$/ }).locator('div svg').click(),
            async () => await this.page.getByText('2231').click(),
          ];          
          for (const action of actions) {
            await action();
          }
        // Assertion
        const code = await this.page.locator(Locators.DepartmentalClassification.codeArea);
        await expect(code).toHaveValue('2231');
        const name = await this.page.locator(Locators.DepartmentalClassification.nameArea);
        await expect(name).toHaveValue('Хароҷоти умумӣ (пакети ягона) ҷиҳати хариди мол ва хизматрасониҳо дар доираи механизми маблағгузории сарикасӣ');
    }    
    async checkCategoryHeader() {        
        const categoryHeader = await this.page.$$(Locators.DepartmentalClassification.categoryHeader);
        const expectedTexts = [
            '2024',
            '-',            
            'Экономическая классификация'];

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
module.exports = EconomicalClassification;