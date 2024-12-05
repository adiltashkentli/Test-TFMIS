const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class EnteringBObalanceFunds {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.EnteringBObalanceFunds.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Ввод остатков БО по фондам');
    }
    async chooseRelativeDataToList() {
        const options = ['Ten', 'Twenty', 'Thirty'];
    
        for (let i = 0; i < options.length; i++) {
            await this.page.getByLabel('Год').nth(i).click();
            await this.page.getByRole('option', { name: options[i] }).click();
        }
        await this.page.getByText('Список').click();
    }
    async checkSpreadsheetHeaders() {
        const headers = [
            { locator: 'row', text: 'Год' },
            { locator: 'row1', text: 'ПБС' },
            { locator: 'row2', text: 'БЗ' },
            { locator: 'row3', text: 'Бюджет' },
            { locator: 'row4', text: 'Остаток фонда' },
            { locator: 'row5', text: 'Бюджет %' },
            { locator: 'row6', text: 'Остаток %' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.SomoniPaymentsReg[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }    
    async addButtonFunctionality() {
        // Click the main "Добавить" button
        await this.page.getByText('Добавить').click();
    
        // Select options in the modal dropdowns
        const dropdownSelectors = [
            { selector: '.ant-modal-body > div > div > .MuiInputBase-root > #demo-simple-select', value: 'Ten' },
            { selector: '.ant-modal-body > div > div:nth-child(2) > .MuiInputBase-root > #demo-simple-select', value: 'Twenty' },
            { selector: '.ant-modal-body > div > div:nth-child(3) > .MuiInputBase-root > #demo-simple-select', value: 'Thirty' },
            { selector: '.ant-modal-body > div:nth-child(2) > div > .MuiInputBase-root > #demo-simple-select', value: 'Ten' },
            { selector: '.ant-modal-body > div:nth-child(2) > div:nth-child(2) > .MuiInputBase-root > #demo-simple-select', value: 'Twenty' },
            { selector: 'div:nth-child(3) > div > .MuiInputBase-root > #demo-simple-select', value: 'Thirty' },
            { selector: 'div:nth-child(3) > div:nth-child(2) > .MuiInputBase-root > #demo-simple-select', value: 'Thirty' },
        ];
    
        for (const { selector, value } of dropdownSelectors) {
            await this.selectDropdownOption(selector, value);
        }
    
        // Click the "Добавить" button in the modal
        await this.page.getByRole('button', { name: 'Добавить' }).click();
    
        // Click the "Добавить остаток" button
        await this.page.click("//*[name()='path' and contains(@d,'M17.5406 8')]");
    }    
    async selectDropdownOption(selector, option) {
        const dropdown = this.page.locator(selector).first();
        await dropdown.click();
        await this.page.getByRole('option', { name: option }).click();
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = EnteringBObalanceFunds;