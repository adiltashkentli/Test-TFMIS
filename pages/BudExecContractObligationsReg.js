const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ConractObligationsRegistry {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.ConractObligationsReg.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр обязательств БО');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='1'])[1]").click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='31'])[1]").click();
        await this.page.click("(//div[@id='demo-simple-select'])[1]");
        await this.page.getByText('Ten').click();
        await this.page.click("(//div[@id='demo-simple-select'])[2]");
        await this.page.getByText('Twenty').click();
        await this.page.click("(//div[@id='demo-simple-select'])[3]");
        await this.page.getByText('Thirty').click();
        await this.page.getByLabel('Сумма').first().fill('2024');
        await this.page.getByText('Список').click();
        await this.page.getByLabel('Количество').first().fill('150');
        await this.page.getByLabel('Сумма').first().fill('220');
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.ConractObligationsReg.spreadsheetHeaders);
        const expectedTexts = [            
            '-',
            '№ Процесс',
            'organization',
            'БЗ',
            'Сумма',            
            'Статус'
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
module.exports = ConractObligationsRegistry;