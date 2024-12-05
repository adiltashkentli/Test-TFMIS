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
        await this.page.click(Locators.AccountReport.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Бухгалтерские отчеты');
    }
    async chooseRelativeDataToList1() {
        const actions = [
            { action: () => this.page.getByText('Оборотно-сальдовая ведомость').click() },
            { action: () => this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click() },
            { action: () => this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click() },
            { action: () => this.page.getByLabel('Choose date', { exact: true }).click() },
            { action: () => this.page.getByLabel('декабрь').getByRole('gridcell', { name: '31' }).nth(1).click() },
            { action: () => this.page.getByLabel('', { exact: true }).first().click() },
            { action: () => this.page.getByRole('option', { name: 'Ten' }).click() },
            { action: () => this.page.getByLabel('Ten').nth(1).click() },
            { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() },
            { action: () => this.page.getByLabel('Ten').nth(2).click() },
            { action: () => this.page.getByRole('option', { name: 'Thirty' }).click() },
            { action: () => this.page.getByLabel('Ten').nth(3).click() },
            { action: () => this.page.getByRole('option', { name: 'Ten' }).click() },
            { action: () => this.page.getByText('Список').click() }
        ];    
        for (const { action } of actions) {
            await action();
        }
    }
    
    async chooseRelativeDataToList2() {
        const actions = [
            { action: () => this.page.getByText('Карточка счета').click() },
            { action: () => this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click() },
            { action: () => this.page.getByLabel('декабрь').getByRole('gridcell', { name: '2', exact: true }).click() },
            { action: () => this.page.getByLabel('Choose date', { exact: true }).click() },
            { action: () => this.page.getByRole('gridcell', { name: '30' }).nth(1).click() },
            { action: () => this.page.getByLabel('?').first().click() },
            { action: () => this.page.getByRole('option', { name: 'Ten' }).click() },
            { action: () => this.page.getByLabel('?').nth(1).click() },
            { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() },
            { action: () => this.page.getByLabel('?').nth(2).click() },
            { action: () => this.page.getByRole('option', { name: 'Thirty' }).click() },
            { action: () => this.page.getByLabel('?').nth(3).click() },
            { action: () => this.page.getByRole('option', { name: 'Twenty' }).click() },
            { action: () => this.page.getByText('Список').click() },
            { action: () => this.page.getByRole('textbox', { name: 'Карточка счета' }).click() },
            { action: () => this.page.getByRole('textbox', { name: 'Карточка счета' }).fill('05122024') }            
        ];
        for (const { action } of actions) {
            await action();
        }
    }
    
    async check1SpreadsheetHeaders() {
        const headers = [
            { locator: 'row', text: 'Пл. счет' },
            { locator: 'row1', text: 'Наименование счета' },
            { locator: 'row2', text: 'Сальдо на начало ДТ' },
            { locator: 'row3', text: 'Сальдо на начало КТ' },
            { locator: 'row4', text: 'Обороты за период ДТ' },
            { locator: 'row5', text: 'Обороты за период КТ' },
            { locator: 'row6', text: 'Сальдо на конец ДТ' },
            { locator: 'row7', text: 'Сальдо на конец КТ' },
            { locator: 'row8', text: 'Операции' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.SomoniPaymentsReg[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async check2SpreadsheetHeaders() {
        await this.page.getByText('Карточка счета').click();
        const headers = [
            { locator: 'row', text: 'Дата' },
            { locator: 'row1', text: 'Документ' },
            { locator: 'row2', text: 'Операции' },
            { locator: 'row3', text: 'Счет ДТ' },
            { locator: 'row4', text: 'Сумма ДТ' },
            { locator: 'row5', text: 'Счет КТ' },
            { locator: 'row6', text: 'Сумма КТ' },
            { locator: 'row7', text: 'Текущее сальдо ДТ' },
            { locator: 'row8', text: 'Текущее сальдо КТ' },
            { locator: 'row9', text: 'Номер процесса>' }
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
   
}
module.exports = BalanceSheet;