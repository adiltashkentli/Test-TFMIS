const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Revenue_Celling {
    constructor(page) {
        this.page = page;

    }

    async navigateToPage() {
        await this.page.goto('/');
        await this.page.click(Locators.Revenue_ceiling.budPrepMenuBut);
        await this.page.click(Locators.Revenue_ceiling.revenueButton);
        await this.page.click(Locators.Revenue_ceiling.revCeilBut);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.Revenue_ceiling.categoryTabName);
        await expect(tabHeader).toHaveText('Потолки доходов');
    }
    async lockButton(){
        await this.page.locator(Locators.Revenue_ceiling.lockButton).toBeVisible();
    }    
    async selectElementsToList() {
        await this.page.click(Locators.Revenue_ceiling.selectAge);
        await this.page.click(Locators.Revenue_ceiling.firstElementToSelect);
        await this.page.click(Locators.Revenue_ceiling.selectScenario);
        await this.page.click(Locators.Revenue_ceiling.secondElementScenario);
        await this.page.ckick(Locators.Revenue_ceiling.listButton);
    }

    async listSpreadsheet() {
        // Get all headers of spreadsheet
        const tabHeadings = await this.page.$$(Locators.Revenue_ceiling.colunmHeadersContainer);
        
        const expectedTexts = [
            'Код дохода',
            'Наименование дохода',
            '2022 Проект',
            '2023 Проект',
            '2023 Проект 6 месяцев',
            '2023 Проект 12 месяцев исп-е',
            '2024 Проект ',
            'Изменение',
        ];

        for (let i = 0; i < tabHeadings.length; i++) {
            const headersText = await tabHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async reportButtonAssertion(){
        await this.page.locator(Locators.Revenue_ceiling.reportButton).toBeTruthy();
    }
    async saveButtonAssertion(){
        await this.page.locator(Locators.Revenue_ceiling.saveButton).toBeVisible();
    }
    async pagination(){
        await this.page.click(Locators.Revenue_ceiling.paginationButton);
        await this.page.click(Locators.Revenue_ceiling.thirdElement);
    }
}
module.exports = Revenue_Celling;
