const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExpensesRegistry {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
        await this.page.click(Locators.ExpensesRegistry.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр расходов (расходы по банку)');
    }
    async getRelativeList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '25' }).nth(1).click();
        await this.page.getByLabel('?').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Статус').click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByText('Список').click();
    }
    async checkHeader4Buttons() {
        await Promise.all(
          [1, 2, 3, 4].map(i => 
            expect(this.page.locator(Locators.ExpensesRegistry[`headerBut${i}`])).toBeEnabled()
          )
        );
      }
      async checkRowsAssertion(){
        await this.page.locator(Locators.CurExpensesNBT.checkAllRows).check();
        const firstCheckedRow = this.page.locator(Locators.CurExpensesNBT.firstCheckedRow);
        await expect(firstCheckedRow).toBeChecked();
        const fifthCheckedRow = this.page.locator(Locators.CurExpensesNBT.fifthCheckedRow);
        await expect(fifthCheckedRow).toBeChecked();
    }
    async checkSpreadsheetList() {        
    const rows = [
        { locator: Locators.ExpensesRegistry.row1, expectedText: '-' },
        { locator: Locators.ExpensesRegistry.row2, expectedText: '№' },
        { locator: Locators.ExpensesRegistry.row3, expectedText: 'Номер' },
        { locator: Locators.ExpensesRegistry.row4, expectedText: 'Дата' },
        { locator: Locators.ExpensesRegistry.row5, expectedText: 'Тип' },
        { locator: Locators.ExpensesRegistry.row6, expectedText: 'ИНН плательщика' },
        { locator: Locators.ExpensesRegistry.row7, expectedText: 'Плательщик' },
        { locator: Locators.ExpensesRegistry.row8, expectedText: 'Банк плательщика' },
        { locator: Locators.ExpensesRegistry.row9, expectedText: 'БИК Плательщика' },
        { locator: Locators.ExpensesRegistry.row10, expectedText: 'Счет плательщика' },
        { locator: Locators.ExpensesRegistry.row11, expectedText: 'ИНН получателя' },
        { action: async () => {
            await this.page.click(Locators.RevenueBank.row11);
            await this.page.locator(Locators.RevenueBank.row11).press('ArrowRight');
        }},
        //{ locator: Locators.ExpensesRegistry.row12, expectedText: 'Получатель' },
        //{ locator: Locators.ExpensesRegistry.row13, expectedText: 'Банк получателя' }        
    ];
    for (const { locator, expectedText, action } of rows) {
        if (locator) {
            const row = this.page.locator(locator);
            await expect(row).toHaveText(expectedText);
        }
        if (action) {
            await action();
        }
    }
}
    async pagination() {
    await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
    await this.page.getByRole('option', { name: '30' }).click();
}
    async checkFooter() {
    const footers = [
        Locators.BankExpenses.footer1,
        Locators.BankExpenses.footer2,
        Locators.BankExpenses.footer3,
        Locators.BankExpenses.footer4
    ];

    for (const footerLocator of footers) {
        const footer = this.page.locator(footerLocator);
        await expect(footer).toBeEditable();
    }
}

}

module.exports = ExpensesRegistry;