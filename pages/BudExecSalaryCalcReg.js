const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class SalaryCalcReg {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.SalaryCalcReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр расчетов зарплат');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='1'])[1]").click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='31'])[1]").click();
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('path').first().click();
        await this.page.getByText('101.01.001').click();
        await this.page.click("(//div[@id='demo-simple-select'])[1]");
        await this.page.getByText('Ten').click();
        await this.page.getByLabel('Сумма').first().fill('02122024');
        await this.page.getByText('Список').click();
        const footerArea = await this.page.getByLabel('Количество');
        await expect(footerArea).toBeDisabled();
        await this.page.getByLabel('Сумма').first().fill('220');
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.SalaryCalcReg.spreadsheetHeaders);
        const expectedTexts = [            
            '№',
            'Месяц',
            'Назначение',
            'ПБС',
            'Дата',            
            'Сумма',                       
            'Аванес',
            'Статус',
            'Примечание'
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
    async headerButtonsAssert(){
        const headerButtons = await this.page.$$(Locators.TenderAppReg.header2Buttons);
        for (let i = 0; i < headerButtons.length; i++) {
            expect(headerButtons).toBeEnabled();
        }
    }
}
module.exports = SalaryCalcReg;