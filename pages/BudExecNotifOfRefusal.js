const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class NotificationOfRefusal {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.NotificationOfRefusal.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Уведомление об отказе');
    }
    async inputDataToRelativeList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).first().click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByRole('gridcell', { name: '29' }).nth(1).click();
        await this.page.getByLabel('Организации').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Ten').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();        
        await this.page.getByRole('textbox', { name: 'Код процесса' }).fill('55-88/43');        
        await this.page.getByLabel('Номер').fill('11/12');
        await this.page.getByLabel('Ten').nth(2).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByText('Список').click();
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Организации' },
            { locator: 'row2', text: 'Код БЗ' },
            { locator: 'row3', text: 'Код процесса' },
            { locator: 'row4', text: 'Документ' },
            { locator: 'row5', text: 'Дата док.' },
            { locator: 'row6', text: 'Имя отказавшего' },
            { locator: 'row7', text: 'Текст отказа' },
            { locator: 'row8', text: 'Статус' },
            { locator: 'row9', text: 'Операции' },
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.NotificationOfRefusal[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = NotificationOfRefusal;