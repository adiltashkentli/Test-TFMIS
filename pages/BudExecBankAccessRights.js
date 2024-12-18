const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BankAccessRights {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
        await this.page.click(Locators.BankAccessRights.categoryMenu);
    }
    async loginAccess(){
        await this.page.type(Locators.BankAccessRights.inputLogin, '888555222');
        await this.page.click(Locators.RegistryOfCostsRequests.listButton);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Доступ и права (Банк)');
    }
    async checkSubCategoriesHeadings() {
        const headings = [
          'Список пользователей (Банк)',
          'Список кураторов',
          'Доп. доступ',
          'Кураторы выбранного пользователя',
          'Кураторы не имеющие доступов',
          'Спец доступ (Банк)'
        ];
      
        for (const heading of headings) {
          const element = await this.page.getByText(heading);
          await expect(element).toHaveText(heading);
        }
      }
    async checkSpreadsheetList() {
        const rows = [
            { locator: Locators.BankAccessRights.row1, expectedText: 'KeyKur' },
            { locator: Locators.BankAccessRights.row2, expectedText: 'Логин' },
            { locator: Locators.BankAccessRights.row3, expectedText: 'ФИО' },
            { locator: Locators.BankAccessRights.row4, expectedText: 'Территория' },
            { locator: Locators.BankAccessRights.row5, expectedText: 'Банк куратора' },
            { locator: Locators.BankAccessRights.row6, expectedText: 'Детали' },
            { locator: Locators.BankAccessRights.row7, expectedText: 'Описание' }
        ];    
        for (const { locator, expectedText } of rows) {
            if (locator) {
                const row = this.page.locator(locator);
                await expect(row).toHaveText(expectedText);
            }
        }
    }
}

module.exports = BankAccessRights;