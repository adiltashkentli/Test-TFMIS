const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class FinancialReports {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.FinancialReports.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Финансовые отчеты');
    }
    async checkSubcategories() {
        await this.page.getByRole('menuitem', { name: 'Финансовые отчеты' }).click();
        await this.page.getByRole('button', { name: 'Финансовые отчеты left' }).click();
        await this.page.getByRole('button', { name: 'right' }).click();
        await this.page.getByRole('button', { name: 'Финансовые отчеты left' }).click();
        await this.page.getByRole('button', { name: 'right' }).click();
        const catHeader = await this.page.locator(Locators.BudgetExecutionReports.categoryHeader);
        await expect(catHeader).toContainText('Финансовые отчеты');

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
    async chooseRelativeDataToList() {
        // Define actions in an array for selection
        const yearSelections = [
            { labelIndex: 0, option: 'Ten' },
            { labelIndex: 1, option: 'Twenty' },            
        ];
    
        // Select "Год" options
        for (const { labelIndex, option } of yearSelections) {
            await this.page.getByLabel('Год').nth(labelIndex).click();
            await this.page.getByRole('option', { name: option }).click();
        }
    
    }
   
    async assert2buttons() {
        const buttons = [
            'Экспорт',
            'Печать Excel'            
        ];        
        for (const buttonText of buttons) {
            const button = await this.page.getByText(buttonText);
            await expect(button).toBeVisible();
            await expect(button).toBeEnabled();
        }
    }
    
}
module.exports = FinancialReports;