const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ReportsofIncome {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.ReportsofIncome.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Отчеты по доходам');
    }
    
    async chooseRelativeDataToList() {
            const yearSelectors = [
                { nth: 0, option: 'Ten' },
                { nth: 1, option: 'Twenty' },
                { nth: 2, option: 'Thirty' }
            ];
        
            const dateSelectors = [
                { labelFilter: /^От$/, gridcell: '1', exact: true },
                { labelFilter: /^До$/, gridcell: '26', nth: 1 }
            ];
        
            // Select year options
            for (const selector of yearSelectors) {
                const yearDropdown = this.page.locator('div[role="combobox"]').nth(selector.nth);
                await yearDropdown.click();
                await this.page.getByRole('option', { name: selector.option }).click();
            }
        
            // Select dates
            for (const selector of dateSelectors) {
                const dateLabel = this.page.locator('div').filter({ hasText: selector.labelFilter }).getByLabel('Choose date');
                await dateLabel.click();
                if (selector.gridcell) {
                    await this.page.getByRole('gridcell', { name: selector.gridcell, exact: selector.exact || false }).nth(selector.nth || 0).click();
                }
            }
            await this.page.locator('p').filter({ hasText: /^Отчет$/ }).click();
        // assert subcategories        
        await this.page.click("//span[@aria-label='left']//*[name()='svg']");
        await this.page.click("//span[@aria-label='right']//*[name()='svg']");
        const catHeader = await this.page.locator(Locators.BudgetExecutionReports.categoryHeader);
        await expect(catHeader).toContainText(' Отчет (Доходы)');

        const categories = [
            { locator: 'cat1', text: 'Отчёт по ВК-БЗ_ЗБК' },
            { locator: 'cat2', text: 'СПГ101-Исполнительный аппарат Президента Республики Таджикистан' },
            { locator: 'cat3', text: 'СПГ101-Исполнительный аппарат Президента Республики Таджикистан' },
            { locator: 'cat4', text: 'СПГ101-Исполнительный аппарат Президента Республики Таджикистан' },
            { locator: 'cat5', text: 'СПГ101-Исполнительный аппарат Президента Республики Таджикистан' },
            { locator: 'cat6', text: 'СПГ101-Исполнительный аппарат Президента Республики Таджикистан' },
        ];
        await Promise.all(
            categories.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.BudgetExecutionReports[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
}
module.exports = ReportsofIncome;