const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BalanceSheet {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.BalanceSheet.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Сальдо за период');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '26' }).nth(1).click();

        const organizations = ['Ten', 'Twenty', 'Thirty'];
        for (let org of organizations) {
            await this.page.getByLabel('Организации').first().click();
            await this.page.getByRole('option', { name: org }).click();
        }
        await this.page.getByText('Список').first().click();
    }

    async checkSpreadsheetHeaders() {
        const headers = [
            { locator: 'row1', text: '№' },
            { locator: 'row2', text: 'ПБС' },
            { locator: 'row3', text: 'Дата' },
            { locator: 'row4', text: 'Статус' },
            { locator: 'row5', text: 'Основание' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.SomoniPaymentsReg[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async addButtonFunctionality() {        
            const actions = [
                { action: () => this.page.getByText('Добавить').click() },
                { action: () => this.page.getByRole('textbox', { name: '№' }).click() },
                { action: () => this.page.getByRole('textbox', { name: '№' }).fill('05122024') },
                { action: () => this.page.getByLabel('Новая сальдовая ведомость').getByLabel('Choose date').click() },
                { action: () => this.page.getByLabel('декабрь').getByRole('gridcell', { name: '5', exact: true }).click() },
                { action: () => this.page.getByLabel('Новая сальдовая ведомость').getByLabel('Организации').click() },
                { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() }
            ];
            for (const { action } of actions) {
                await action();
            }
        const elements = [
                { locator: this.page.getByLabel('ИТОГО по 1ХХХХХ - Активы') },
                { locator: this.page.getByLabel('ИТОГО по 1ХХХХХ - Активы') },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 1ХХХХХ - АктивыИТОГО по 1ХХХХХ - Активы123123123123$/ }).getByLabel('123').first() },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 1ХХХХХ - АктивыИТОГО по 1ХХХХХ - Активы123123123123$/ }).getByLabel('123').nth(1) },
                { locator: this.page.getByLabel('ИТОГО по 3ХХХХХ - Капитал') },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 3ХХХХХ - КапиталИТОГО по 3ХХХХХ - Капитал123123123123$/ }).getByLabel('123').first() },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 3ХХХХХ - КапиталИТОГО по 3ХХХХХ - Капитал123123123123$/ }).getByLabel('123').nth(1) },
                { locator: this.page.getByLabel('ИТОГО по 5ХХХХХ - Расходы') },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 5ХХХХХ - РасходыИТОГО по 5ХХХХХ - Расходы123123123123$/ }).getByLabel('123').first() },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 5ХХХХХ - РасходыИТОГО по 5ХХХХХ - Расходы123123123123$/ }).getByLabel('123').nth(1) },
                { locator: this.page.getByLabel('ИТОГО по 2ХХХХХ - Обязательсва') },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 2ХХХХХ - ОбязательсваИТОГО по 2ХХХХХ - Обязательсва123123123123$/ }).getByLabel('123').first() },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 2ХХХХХ - ОбязательсваИТОГО по 2ХХХХХ - Обязательсва123123123123$/ }).getByLabel('123').nth(1) },
                { locator: this.page.getByLabel('ИТОГО по 4ХХХХХ - Доходы') },
                { locator: this.page.locator('div').filter({ hasText: /^ИТОГО по 4ХХХХХ - ДоходыИТОГО по 4ХХХХХ - Доходы123123123123$/ }).getByLabel('123').first() }
            ];
        
            // Assert all elements are editable
            for (const { locator } of elements) {
                await expect(locator).toBeEditable();
            }
        }    
}
module.exports = BalanceSheet;