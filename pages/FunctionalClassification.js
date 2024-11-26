const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class FunctionalClassification {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.Classifiers.menuClassifiers);
        await this.page.click(Locators.FunctionalClassification.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.FunctionalClassification.tabHeader);
        await expect(tabHeader).toContainText('Функциональная классификация');
    }
    async selectElementsToList() {        
        const actions = {
            organization: {
                locator: 'div',
                filter: /^01-Бахши ҳокимияти давлатӣ ва идоракунӣ$/,
                action: 'div svg'
            },
            subOrganization: {
                locator: 'div',
                filter: /^011-Мақомоти иҷроия ва қонунгузорӣ, сиёсати молиявӣ ва андози буҷетӣ, фаъолияти сиёсати берунӣ ба истиснои кӯмаки иқтисодӣ ба давлатҳои хориҷӣ $/,
                action: 'div svg'
            },
            department: {
                locator: null,
                filter: null,
                action: '01101-Мақомоти иҷроия ва қонунгузорӣ'
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
        await expect(code).toHaveValue('01.1.01');
        const name = await this.page.locator(Locators.DepartmentalClassification.nameArea);
        await expect(name).toHaveValue('Мақомоти иҷроия ва қонунгузорӣ');
    }    
    async checkCategoryHeader() {        
        const categoryHeader = await this.page.$$(Locators.DepartmentalClassification.categoryHeader);
        const expectedTexts = [
            '2024',
            '-',            
            'Функциональная классификация'];

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
module.exports = FunctionalClassification;