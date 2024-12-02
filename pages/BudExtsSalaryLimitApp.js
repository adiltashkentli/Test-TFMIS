const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class SalaryLimitApp {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.SalaryLimitApp.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Лимиты по заработной плате');
    }
    async chooseRelativeDataToList() {        
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='1'])[1]").click();        
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='31'])[1]").click();
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^102-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^102\.01-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.getByText('102.01.004').click();
        await this.page.getByText('Список').click();
        await this.page.getByText('Добавить').click();
    }

    async checkSpreadsheetHeadings(){
        const spreadsheetHeaders = await this.page.$$(Locators.SalaryLimitApp.spreadsheetHeaders);
        const expectedTexts = [
            '',
            'Наименование организации',
            'Наименование БЗ',            
            'Месяц',
            'Количество',
            'Загято',
            'Вакансии',
            'ОФЗП',
            'ФСЗН',
            'Компания',
            'Сумма',
            'Тип заявки',
            'Статус',
            'Операции'
        ];

        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();        
        await this.page.getByRole('option', { name: '30' }).click();
    }   
}
module.exports = SalaryLimitApp;