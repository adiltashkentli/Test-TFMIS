const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class IncomeAdmins {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.IncomeCeiling.menuRevenue);
        await this.page.getByText(Locators.IncomeAdmins.menuIncomeAdmins).click();

    }

    async checkTabHeader() {
        const tabHeader = await this.page.getByText(Locators.IncomeAdmins.menuIncomeAdmins).nth(1);
        await expect(tabHeader).toContainText('Доходы по администраторам');
    }

    async lockButton() {
        await expect(this.page.locator(Locators.IncomeCeiling.lockButton)).toBeVisible();
    }
    async addCategory() {
        await this.page.getByRole('combobox', { name: 'Источник финансирования ​' }).click();
        await this.page.click(Locators.IncomeAdmins.firstItem);
        //await page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByRole('combobox', { name: 'Администратор ​' }).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByLabel('plus').locator('svg').click();
    }
    async selectElementsToList() {
        await this.page.getByLabel('Год').click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Шаг').click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByLabel('Область').click();
        await this.page.getByRole('option', { name: 'Thirty' }).click();
        await this.page.getByLabel('Район', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Код дохода').click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByText('Список').click();
    }

    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.IncomeAdmins.tableheaders);

        const expectedTexts = [
            'ИФ',
            'Источник финансирования',
            'Администратор',
            'Наименование администратора',
            '2022 Проект',
            '2023 Проект',
            '2023 Проект 6 месяцев',
            '2023 Проект 12месяцев исп-е',
            '2024 Проект',
            'Изменение',            
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
    async footerInpurAreas(){
        await this.page.fill(Locators.IncomeAdmins.totalToDistrictInput1, '500');
        await this.page.fill(Locators.IncomeAdmins.totalToDistrictInput2, '50');
        await this.page.fill(Locators.IncomeAdmins.totalToDistrictInput3, '450');
    }

}
module.exports = IncomeAdmins;