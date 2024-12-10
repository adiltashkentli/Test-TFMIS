const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Payers {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.PayersBudgetOrg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Плательщики (Бюдж. Орг.)');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.getByText('101.01.001').click();
        await this.page.getByText('Список').click();

        await this.page.getByRole('row', { name: '93 93' }).getByLabel('Выбрать').click();
        await this.page.getByLabel('Просмотр').click();
        
        const buttons = [
            Locators.PayersBudgetOrg.addINNbutton,
            Locators.PayersBudgetOrg.saveButton,
            Locators.PayersBudgetOrg.addAccountButton
          ];
          
          for (const button of buttons) {
            await expect(this.page.locator(button)).toBeEnabled();
          }
        await this.page.getByLabel('10').first().click();                  
        await this.page.getByRole('option', { name: '10' }).click();
        await this.page.getByLabel('10').nth(1).click();
        await this.page.getByRole('option', { name: '20' }).click();
        await this.page.click(Locators.PayersBudgetOrg.paginationSelector);
        await this.page.getByRole('option', { name: '30' }).click();

    }

    async checkSpreadsheetHeaders() {
        const headers = [
            { locator: 'row1', text: '-' },
            { locator: 'row2', text: 'Наименование БЗ' },
            { locator: 'row3', text: 'Функция' },
            { locator: 'row4', text: 'Источник' },
            { locator: 'row5', text: '-' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.PayersBudgetOrg[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    
}
module.exports = Payers;