const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class RevenueBank {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
        await this.page.click(Locators.RevenueBank.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Доходы(Банк)');
    }
    async getRelativeList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '31' }).nth(1).click();
        await this.page.getByLabel('ПБС').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('ПБС').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByLabel('Кол-во(всего)').click();
        await this.page.getByLabel('Кол-во(всего)').fill('5');
        await this.page.getByText('Список').click();

    }
    async checkSpreadsheetList() {
        const rows = [
            { locator: Locators.RevenueBank.row1, expectedText: 'DocID' },
            { locator: Locators.RevenueBank.row2, expectedText: '№' },
            { locator: Locators.RevenueBank.row3, expectedText: 'Дата' },
            { locator: Locators.RevenueBank.row4, expectedText: 'Тип' },
            { locator: Locators.RevenueBank.row5, expectedText: 'ИНН плательщика' },
            { locator: Locators.RevenueBank.row6, expectedText: 'Плательщик' },
            { locator: Locators.RevenueBank.row7, expectedText: 'Банк плательщика' },
            { locator: Locators.RevenueBank.row8, expectedText: 'БИК Плательщика' },
            { locator: Locators.RevenueBank.row9, expectedText: 'Счет плательщика' },
            { locator: Locators.RevenueBank.row10, expectedText: 'ИНН получателя' },
            { locator: Locators.RevenueBank.row11, expectedText: 'Получатель' },
            { locator: Locators.RevenueBank.row12, expectedText: 'Банк получателя' },
            // Actions after row12
            { action: async () => {
                await this.page.click(Locators.RevenueBank.row12);
                await this.page.locator(Locators.RevenueBank.row12).press('ArrowRight');
            }},
            { locator: Locators.RevenueBank.row13, expectedText: 'Бик получателя' },
            { locator: Locators.RevenueBank.row14, expectedText: 'Счеи получателя' },
            { locator: Locators.RevenueBank.row15, expectedText: 'Сумма' },
            { locator: Locators.RevenueBank.row16, expectedText: 'Назначение' },
            { locator: Locators.RevenueBank.row17, expectedText: 'Дата оплаты' }
        ];
    
        // Iterate over rows and check text, performing actions where necessary
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
            Locators.RevenueBank.footer1,
            Locators.RevenueBank.footer2,
            Locators.RevenueBank.footer3,
            Locators.RevenueBank.footer4
        ];
    
        for (const footerLocator of footers) {
            const footer = this.page.locator(footerLocator);
            await expect(footer).toBeEditable();
        }
    }
    
}

module.exports = RevenueBank;