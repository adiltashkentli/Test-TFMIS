const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class CitiesManual {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.CitiesManual.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Справочник городов');
    }
    async addModalFunc() {
        await this.page.getByText('Добавить').click();
        await this.page.getByRole('textbox', { name: 'Шахр' }).fill('Душанбе');        
        await this.page.getByRole('textbox', { name: 'Город' }).fill('Душанбе');        
        await this.page.getByRole('textbox', { name: 'City' }).fill('Dushanbe');
        await this.page.getByLabel('Республика Таджикистан?').click();
        await this.page.getByRole('option', { name: 'Да' }).click();
        await this.page.getByRole('button', { name: 'Добавить' }).click();
        await this.page.waitForTimeout(3000);
        const alert = this.page.locator(Locators.CitiesManual.alert);
        await expect(alert).toContainText("Cannot insert explicit value for identity column in table 'TJKCity' when IDENTITY_INSERT is set to OFF.")
        await this.page.getByRole('button', { name: 'Отмена' }).click();           
    }    
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'ID' },
            { locator: 'row2', text: 'Шахр' },
            { locator: 'row3', text: 'Город' },
            { locator: 'row4', text: 'City' },
            { locator: 'row5', text: 'РТ' },
            { locator: 'row6', text: 'Операции' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.CitiesManual[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async checkData() {
        const headers = [
            { locator: 'line1', text: '2' },
            { locator: 'line2', text: 'Кургон теппа' },
            { locator: 'line3', text: 'Кургон теппа' },
            { locator: 'line4', text: 'Kurgan tube' },
            { locator: 'line5', text: 'true' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.CitiesManual[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async editData(){
        await this.page.click(Locators.CitiesManual.edit);
        await this.page.getByRole('textbox', { name: 'Шахр' }).fill('');
        await this.page.getByRole('textbox', { name: 'Шахр' }).type('Душанбе');
        await this.page.getByRole('textbox', { name: 'Город' }).fill('');
        await this.page.getByRole('textbox', { name: 'Город' }).type('Душанбе');
        await this.page.getByRole('textbox', { name: 'City' }).fill('');
        await this.page.getByRole('textbox', { name: 'City' }).type('Dushanbe');
        await this.page.getByLabel('Республика Таджикистан?').click();
        await this.page.getByRole('option', { name: 'Да' }).click();
        await this.page.click(Locators.OperationalDay.saveButton);
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = CitiesManual;