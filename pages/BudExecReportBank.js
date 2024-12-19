const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ReportsBank {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
        await this.page.click(Locators.ReportsBank.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Отчеты (банк)');
    }
    async getRelativeList() {
        await this.page.getByText('Отчёт ( Кор.счет)').click();
        await this.page.getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByText('Отчёт по счету', { exact: true }).click();
        await this.page.getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '2', exact: true }).click();
        await this.page.getByLabel('Счет', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByText('Отчёт (Сумма)').click();
        await this.page.getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '3', exact: true }).click();
        await this.page.getByLabel('Счет', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Thirty' }).click();
        await this.page.getByLabel('Сумма', { exact: true }).click();
        await this.page.getByLabel('Сумма', { exact: true }).fill('45000');
        await this.page.getByText('Отчёт (Период)').click();
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '4', exact: true }).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByRole('gridcell', { name: '31' }).nth(1).click();
        await this.page.getByLabel('Счет', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByText('Кор счет (Баланс за период)').click();
        await this.page.getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '5', exact: true }).click();
        await this.page.getByText('Отчёт по счету (Full)').click();
        await this.page.getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '6', exact: true }).click();
        await this.page.getByLabel('Счет', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        await this.page.getByLabel('Сумма', { exact: true }).click();
        await this.page.getByLabel('Сумма', { exact: true }).fill('20000');
        await this.page.getByText('Отчёт по доходам').click();
        await this.page.getByLabel('Счет', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Twenty' }).click();
        await this.page.getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '7', exact: true }).click();
        await this.page.getByLabel('Дата поступления').click();
        await this.page.getByRole('option', { name: 'Thirty' }).click();
        await this.page.getByText('Отчёт Кор счет (Период)').click();
        await this.page.getByText('Отчёт ( Кор.счет)').click();
    }

    async checkReportButtons() {
        await this.page.getByText('Отчёт по доходам').click();
        const headerButtons = [
            this.page.locator(Locators.ReportsBank.reportExcelButton),
            this.page.locator(Locators.ReportsBank.reportPDFbutton)
        ];
        for (const button of headerButtons) {
            await expect(button).toBeEnabled();
        }
    }
    
}

module.exports = ReportsBank;