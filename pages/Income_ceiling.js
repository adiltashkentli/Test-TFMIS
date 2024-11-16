const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Revenue_Celling {
    constructor(page) {
        this.page = page;

    }

    async navigateToPage() {        
        await this.page.getByText('Подготовка бюджета').click();        
        await expect (this.page.getByText('Доходы')).toBeVisible();
        await this.page.getByText('Доходы').click();        
        await this.page.waitForTimeout(5000);
        await expect (this.page.getByText('Потолки доходов')).toBeVisible();                
        await this.page.getByText('Потолки доходов').click();
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.IncomeCeiling.categoryTabName);
        await expect(tabHeader).toHaveText('Потолки доходов');
    }
    async lockButton(){
        await expect (this.page.locator(Locators.IncomeCeiling.lockButton)).toBeVisible();
    }    
    async selectElementsToList() {
        await this.page.click(Locators.IncomeCeiling.selectAge);
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Ten').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
    }

    async listSpreadsheet() {
        // Get all headers of spreadsheet
        const tabHeadings = await this.page.$$(Locators.IncomeCeiling.colunmHeadersContainer);
        
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
        await expect (this.page.locator(Locators.IncomeCeiling.reportButton)).toBeVisible();
    }
    async saveButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeCeiling.saveButton)).toBeVisible();
    }
    async pagination(){
        await this.page.click(Locators.IncomeCeiling.paginationButton);
        await this.page.click(Locators.IncomeCeiling.secondElement);
    }
}
module.exports = Revenue_Celling;
