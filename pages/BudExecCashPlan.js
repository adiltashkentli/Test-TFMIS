const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class CashPlan {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.CashPlan.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Кассовый план');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='1'])[1]").click();
        await this.page.locator('div').filter({ hasText: /^До$/ }).getByLabel('Choose date').click();
        await this.page.locator("(//button[normalize-space()='31'])[1]").click();
        await this.page.click("(//div[@id='demo-simple-select'])[1]");
        await this.page.getByText('Ten').click();
        await this.page.getByText('Список').click();
    }
    async addNewAppModal() {
        await this.page.click(Locators.CashPlan.addNewAppModalButton);
        const modalHeader = await this.page.getByText('Кассовый план за месяц').first();
        await expect(modalHeader).toContainText('Кассовый план за месяц');
        // Click and select options using for loop
        for (let i = 0; i < 5; i++) {
            await this.page.getByLabel('Кассовый план за месяц').getByLabel('', { exact: true }).nth(i).click();
            if (i % 2 === 0) {
                await this.page.getByRole('option', { name: 'Ten' }).click();
            } else {
                await this.page.getByRole('option', { name: 'Twenty' }).click();
            }
        }
        await this.page.getByRole('textbox', { name: '№' }).click();
        await this.page.getByRole('textbox', { name: '№' }).fill('61/45-2024');        
        await this.page.getByLabel('Кассовый план за месяц').getByLabel('Choose date').click();
        await this.page.getByLabel('декабрь').getByRole('gridcell', { name: '1', exact: true }).click();
        const locators = [
            '[id="\\:r3o\\:"]', '[id="\\:r3p\\:"]', '[id="\\:r3q\\:"]',
            '[id="\\:r3r\\:"]', '[id="\\:r3s\\:"]', '[id="\\:r3t\\:"]',
            '[id="\\:r3u\\:"]'
        ];
        const values = ['1', '2', '3', '4', '5', '6', '7'];
        for (let i = 0; i < locators.length; i++) {
            await this.page.locator(locators[i]).fill(values[i]);
            await this.page.locator(locators[i]).press('Tab');
        }
        const labels = ['100', '100']; 
        const options = ['50', '25'];

        for (let i = 0; i < labels.length; i++) {
            await this.page.getByLabel(labels[i]).first().click();
            await this.page.getByRole('option', { name: options[i] }).click();
        }
       
        const modalHeader2 = await this.page.getByText('Кассовый план за месяц').nth(1);
        await expect(modalHeader2).toContainText('Кассовый план за месяц');
        const spreadsheetHeaders = await this.page.$$(Locators.CashPlan.modalSpreadsheet);
        const expectedTexts = [
            '№',
            'Дата',
            'Сумма',
            'Тип заявки',
            'Тип',
            'Статус',
            'Операции',
        ];
        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
        const modalHeader3 = await this.page.getByText('details_of_ebc_on_request_for_a_month');
        await expect(modalHeader3).toContainText('details_of_ebc_on_request_for_a_month');
        const spreadsheetHeaders3 = await this.page.$$(Locators.CashPlan.modalHeader);
        const expectedTexts2 = [
            'Объект',
            'Лм',
            'ЭБК',
            'Уточ. год',
            'Уточ. период',
            'Утв. касс. план',
            'Ост. касс. план',
            'Св. ост. бюд. пер.',
            'Св. ост. бюд. год',
        ];

        for (let i = 0; i < spreadsheetHeaders3.length; i++) {
            const headersText = await spreadsheetHeaders3[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts2[i]);
        }
        const headerButtons = await this.page.$$(Locators.CashPlan.header5buttons);
        for (let i = 0; i < headerButtons.length; i++) {
            expect(headerButtons).toBeEnabled();
        }
    }

    async checkSpreadsheetHeadings() {
        
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    
}
module.exports = CashPlan;