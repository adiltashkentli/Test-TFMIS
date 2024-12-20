const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class DepartmentalClassification {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.Classifiers.menuClassifiers);
        await this.page.click(Locators.DepartmentalClassification.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.DepartmentalClassification.tabHeader);
        await expect(tabHeader).toContainText('Ведомственная классификация');
    }
    async selectElementsToList() {        
        const actions = {
            organization: {
                locator: 'div',
                filter: /^253-Мақомоти маҳаллии ҳокимияти давлатии ноҳияи Ҷаббор Расулов$/,
                action: 'div svg'
            },
            subOrganization: {
                locator: 'div',
                filter: /^253.01-Мақомоти иҷроияи ҳокимияти давлатии ноҳияи Ҷаббор Расулов $/,
                action: 'div svg'
            },
            department: {
                locator: null,
                filter: null,
                action: '-Раёсати кишоварзӣ'
            }
        };    
        for (const key in actions) {
            const { locator, filter, action } = actions[key];
            if (locator && filter) {
                await this.page.locator(locator).filter({ hasText: filter }).locator(action).click();
            } else if (action) {
                await this.page.getByText(action).click();
            }
        }    
        // Assertion
        const code = await this.page.locator(Locators.DepartmentalClassification.codeArea);
        await expect(code).toHaveValue('253.01.002');
        const name = await this.page.locator(Locators.DepartmentalClassification.nameArea);
        await expect(name).toHaveValue('Раёсати кишоварзӣ');
    }    
    async checkCategoryHeader() {        
        const categoryHeader = await this.page.$$(Locators.DepartmentalClassification.categoryHeader);
        const expectedTexts = [
            '2024',
            '-',            
            'Ведомственная классификация'];

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
module.exports = DepartmentalClassification;