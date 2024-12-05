const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');
const { log } = require('console');

class TransferAppReg {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.TransferAppReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр заявок на перевод');
    }
    async chooseRelativeDataToList() {
        await this.page.click("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[1]");
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.click("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'])[2]");
        await this.page.click("(//button[normalize-space()='31'])[1]");
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.getByTitle('101.01.001').click();
        await this.page.getByRole('combobox', { name: 'Статус ​' }).click();
        await this.page.getByRole('option', { name: 'StateReadyForApproval' }).click();
        await this.page.getByRole('spinbutton', { name: 'Сумма' }).click();
        await this.page.getByRole('spinbutton', { name: 'Сумма' }).fill('2500000');
        await this.page.getByText('Список').click();
    }
    async checkSpreadsheetHeaders() {
        const expectedHeaders = [
            '№',
            'Назначение',
            'ПБС',
            'Поставщик',
            'Дата',
            'Сумма',
            'Тип платежа',
            'Статус',
            'Операции'
        ];
    
        for (const header of expectedHeaders) {
            await this.page.getByText(header);
        }
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async headerButtonsAssertion() {
        const takeToExecButton = await this.page.locator(Locators.TransferAppReg.takeToExecButton);
        await expect(takeToExecButton).toBeTruthy();
        const acceptButton = await this.page.locator(Locators.TransferAppReg.acceptButton);
        await expect(acceptButton).toBeTruthy();
    }

}
module.exports = TransferAppReg;