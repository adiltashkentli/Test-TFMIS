const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class CheckIssuanceReg {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.CheckIssuanceReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр платёжных для обналичивание');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByRole('gridcell', { name: '26' }).nth(1).click();
        await this.page.getByLabel('Организации').first().click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Ten').nth(1).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.locator('div').filter({ hasText: /^ОтОт-ДоДоОрганизацииTenОрганизацииСтатусTwentyСтатусСуммаСуммаСписок$/ }).getByLabel('Сумма').click();
        await this.page.locator('div').filter({ hasText: /^ОтОт-ДоДоОрганизацииTenОрганизацииСтатусTwentyСтатусСуммаСуммаСписок$/ }).getByLabel('Сумма').fill('04122024');
        await this.page.getByLabel('Количество').click();
        await this.page.getByLabel('Количество').fill('150');
        await this.page.getByLabel('Количество').press('Tab');
        await this.page.locator('div').filter({ hasText: /^КоличествоКоличествоСуммаСумма$/ }).getByLabel('Сумма').fill('5000');
        await this.page.getByText('Список').click();
    }
    async checkSpreadsheetHeaders() {
        const locators = this.page.locator(Locators.InvoicesRegistry.spreadsheetHeaders);
        await expect(locators).toHaveText([
            "",
            "",
            "№",
            "Название",
            "Плательщик",
            "ПлательщикБИК",
            "Счет плательщика",
            "Поставщик",
            "Банк получателя",
            "Счеи получателя",
            "Сумма",
            "Назначение",
            "Дата",
            "Статус",
            "Операции",
            "",
            "",
        ]);
    }

    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async headerButtonAssertion() {
        const listReportButton = await this.page.locator(Locators.CheckIssuanceReg.headerButton);
        await expect(listReportButton).toBeTruthy();
    }

}
module.exports = CheckIssuanceReg;