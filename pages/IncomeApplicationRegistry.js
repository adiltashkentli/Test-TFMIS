const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');
const exp = require('constants');

class IncomeApplicationRegistry {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.IncomeCeiling.menuRevenue);
        await this.page.click(Locators.IncomeApplicationRegistry.menuIncomeApplicationRegistry);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.IncomeApplicationRegistry.tabHeader);
        await expect(tabHeader).toContainText('Реестр доходных заявок');
    }

    async selectElementsToList() {
        await this.page.getByLabel('Год').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Год').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByLabel('Год').nth(2).click();
        await this.page.getByRole('option', { name: 'Thirty' }).click();
        await this.page.getByLabel('Год').nth(3).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Год').nth(4).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByText('Список').click();
    }

    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.IncomeApplicationRegistry.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'Администратор',
            'Наименование администратора',
            'Терр.код',
            'Наименование территории',
            'ИФ',            
            'Наименование ИФ',
            'Статус',
            'Операции',
        ];

        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async ckeckAllBoxesRadioButton(){
        //check and assert
        const checkAllBoxes = this.page.locator(Locators.IncomeApplicationRegistry.checkAllBoxesRadioButton);
        await checkAllBoxes.click();
        const assertion = this.page.locator(Locators.IncomeApplicationRegistry.assertionCheckedBoxes);
        await expect(assertion).toBeChecked();
        await this.page.waitForTimeout(3000);
        //uncheck and assert
        const uncheckAllBox =  this.page.locator(Locators.IncomeApplicationRegistry.assertionCheckedBoxes);
        await uncheckAllBox.click();
        await expect(uncheckAllBox).not.toBeChecked();
    }
    async checkOneLineBox(){
        const checkOneBox = this.page.locator(Locators.IncomeApplicationRegistry.checkOneBox);
        await checkOneBox.click();
        const assertion1 = this.page.locator(Locators.IncomeApplicationRegistry.assertionOneBox);
        await expect(assertion1).toBeChecked();        
        const uncheckOneBox = this.page.locator(Locators.IncomeApplicationRegistry.checkOneBox);
        await uncheckOneBox.click();
        await expect(assertion1).not.toBeChecked();
    }
    async allowSignButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.allowSignButton)).toBeVisible();
    }
    async approveButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.approveButton)).toBeVisible();
    }
    async endorseButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.endorseButton)).toBeVisible();
    }
    async agreedButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.agreedButton)).toBeVisible();
    }
    async refuseApproveButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.refuseToApproveButton)).toBeVisible();
    }
    async denyToApproveButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.denyToApproveButton)).toBeVisible();
    }
    async refuseToReconcileButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.refuseToReconcileButton)).toBeVisible();
    }
}
module.exports = IncomeApplicationRegistry;