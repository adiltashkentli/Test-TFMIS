const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class IncomeByDistricts {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.IncomeCeiling.menuRevenue);
        await this.page.click(Locators.IncomeByDistricts.menuDistrictRevenue);

    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.IncomeByDistricts.tabHeading);
        await expect(tabHeader).toContainText('Доходы по районам');
    }

    async lockButton() {
        await expect(this.page.locator(Locators.IncomeCeiling.lockButton)).toBeVisible();
    }
    async selectElementsToList() {
        await this.page.click(Locators.IncomeByDistricts.selectAge);
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Год').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByLabel('Год').nth(2).click();
        await this.page.getByRole('option', { name: 'Thirty' }).click();
        await this.page.getByLabel('Год').nth(3).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Год').nth(4).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();        
        await this.page.click(Locators.IncomeByDistricts.listButton);
        
    }

    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.IncomeByRegions.tableHeadings);

        const expectedTexts = [
            'Revenue code',
            'Revenue name',
            'Region',
            "Districts's total",
            'Balance',
            '2022 Project',
            '2023 Project',
            '2023 Project 6 months',
            '2023 Project 12 months estimate',
            '2024 Project',
            'Change',
        ];

        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async reportButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeCeiling.reportButton)).toBeVisible();
    }
    async saveButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeCeiling.saveButton)).toBeVisible();
    }
    
}
module.exports = IncomeByDistricts;