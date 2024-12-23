const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Documents {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.AdministrationSubmenu.submenu);
        await this.page.click(Locators.Documents.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Документы');
    }
    async getRelativeList() {
        await this.page.getByLabel('?', '00058');
        await this.page.click(Locators.RegistryOfCostsRequests.listButton);
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Код' },
            { locator: 'row2', text: 'Название' },
            { locator: 'row3', text: 'Название страниц' },
            { locator: 'row4', text: 'Высота' },
            { locator: 'row5', text: 'Ширина' },
            { locator: 'row6', text: 'Операции' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.PayersBudgetOrg[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async addModalFunc() {
        await this.page.getByText('Добавить').click();        
        await this.page.getByRole('spinbutton', { name: 'Код' }).fill('45852');        
        await this.page.getByLabel('Наименование (таджикский)').fill('Поошрение сотрудников');        
        await this.page.getByLabel('Наименование (русский)').fill('Поошрение сотрудников');
        await this.page.getByText('КодКодНаименование (таджикский)Наименование (таджикский)Наименование (русский)На').click();
        await this.page.getByLabel('Наименование (таджикский)').fill('Тақдироти кормандон');
        await this.page.getByLabel('Наименование (русский)').fill('Поошрение сотрудников');
        await this.page.getByLabel('Наименование (английский)').fill('Employee Incentives');        
        await this.page.getByRole('textbox', { name: 'Ширина Название страниц' }).fill('45');                
        await this.page.getByRole('spinbutton', { name: 'Высота' }).fill('52');
        await this.page.getByLabel('Добавить').locator('div').filter({ hasText: /^Название страниц$/ }).locator('#ebk').fill('50');
        await this.page.getByRole('button', { name: 'Сохранить' }).click();
        await this.page.getByRole('button', { name: 'Отмена' }).click();
    }

    async editData() {
        await this.page.waitForTimeout(2000);
        
        const element1 = this.page.locator(Locators.Documents.editData);
        await expect(element1).toBeEnabled();

        const element2 = this.page.locator(Locators.Documents.deleteData);
        await expect(element2).toBeEnabled();

    }
    
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = Documents;