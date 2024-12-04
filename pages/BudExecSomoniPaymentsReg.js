const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class SomoniPaymentsReg {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.SomoniPaymentsReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр платёжных поручений (Сомони)');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '26' }).nth(1).click();
    
        // Select organizations and options
        const organizations = ['Ten', 'Twenty', 'Thirty'];
        for (let org of organizations) {
            await this.page.getByLabel('Организации').first().click();
            await this.page.getByRole('option', { name: org }).click();
        }
    
        // Fill the "Сумма" field
        await this.page.getByRole('textbox', { name: 'Сумма', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'Сумма', exact: true }).fill('04122024');
    
        // Click the "Список" button
        await this.page.getByText('Список').first().click();
    
        // Click on the last required date
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '4', exact: true }).click();
    
        // Click the final paragraph
        await this.page.locator('div').filter({ hasText: /^Дата валютированияДата валютированияСписок$/ }).getByRole('paragraph').click();
    }
    
    
      
    async checkSpreadsheetHeaders() {
        const headers = [
            { locator: 'row1', text: '№' },
            { locator: 'row2', text: 'Название' },
            { locator: 'row3', text: 'Плательщик' },
            { locator: 'row4', text: 'ПлательщикБИК' },
            { locator: 'row5', text: 'Счет плательщика' },
            { locator: 'row6', text: 'Поставщик' },
            { locator: 'row7', text: 'Банк получателя' },
            { locator: 'row8', text: 'Сумма' },
            { locator: 'row9', text: 'Назначение' },
            { locator: 'row10', text: 'Дата' },
            { locator: 'row11', text: 'Статус' },
            { locator: 'row12', text: 'Банк' },
            { locator: 'row13', text: 'Ист. Фин' },
            { locator: 'row14', text: 'Тип платежа' },
            { locator: 'row15', text: 'Операции' },                        
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
    async reportlistbuttonAssertion() {
        const listReportButton = await this.page.locator(Locators.SomoniPaymentsReg.listReportButton);
        await expect(listReportButton).toBeTruthy();
    }

}
module.exports = SomoniPaymentsReg;