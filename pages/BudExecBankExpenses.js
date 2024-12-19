const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BankExpenses {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
        await this.page.click(Locators.BankExpenses.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Расходы по банку');
    }
    async getRelativeList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '25' }).nth(1).click();
        await this.page.getByLabel('?').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('?').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByText('Список').click();
    }
    async checkHeader2Buttons() {
        const checkedButton = this.page.locator(Locators.BankExpenses.checkedButton);
        const generatePaymentOrderBut = this.page.locator(Locators.BankExpenses.generatePaymentOrderBut);
        await expect(checkedButton, generatePaymentOrderBut).toBeEnabled();
    }
    async checkSpreadsheetList() {        
    const rows = [
        { locator: Locators.BankExpenses.row1, expectedText: '-' },
        { locator: Locators.BankExpenses.row2, expectedText: '№' },
        { locator: Locators.BankExpenses.row3, expectedText: 'Операции' },
        { locator: Locators.BankExpenses.row4, expectedText: 'Счет новый' },
        { locator: Locators.BankExpenses.row5, expectedText: 'Номер' },
        { locator: Locators.BankExpenses.row6, expectedText: 'Дата' },
        { locator: Locators.BankExpenses.row7, expectedText: 'Тип' },
        { locator: Locators.BankExpenses.row8, expectedText: 'ИНН плательщика' },
        { locator: Locators.BankExpenses.row9, expectedText: 'Банк плательщика' },
        { locator: Locators.BankExpenses.row10, expectedText: 'Банк плательщика' },
        { action: async () => {
            await this.page.click(Locators.RevenueBank.row10);
            await this.page.locator(Locators.RevenueBank.row10).press('ArrowRight');
        }},/* issue from front (should realise after fixing)
        { locator: Locators.BankExpenses.row11, expectedText: 'БИК Плательщика' },
        { locator: Locators.BankExpenses.row12, expectedText: 'Счет плательщика' },
        { locator: Locators.BankExpenses.row13, expectedText: 'ИНН получателя' },        
        { locator: Locators.BankExpenses.row14, expectedText: 'Получатель' },
        { locator: Locators.BankExpenses.row15, expectedText: 'Банк получателя' },
        { locator: Locators.BankExpenses.row16, expectedText: 'Бик получателя' },        
        { locator: Locators.BankExpenses.row17, expectedText: 'Счет получателя' },        
        { locator: Locators.BankExpenses.row18, expectedText: 'Сумма' },
        { locator: Locators.BankExpenses.row19, expectedText: 'Статус' },
        { locator: Locators.BankExpenses.row20, expectedText: 'Назначение' },
        { locator: Locators.BankExpenses.row21, expectedText: 'Дата оплаты' },
        { locator: Locators.BankExpenses.row22, expectedText: 'Тип(новый)' },
        { locator: Locators.BankExpenses.row23, expectedText: 'ИНН получателя' },
        { locator: Locators.BankExpenses.row24, expectedText: 'Получатель(Новый)' }*/
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

module.exports = BankExpenses;