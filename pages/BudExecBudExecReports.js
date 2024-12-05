const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BudgetExecutionReports {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
        await this.page.click(Locators.BudgetExecutionReports.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Отчет об исполнении бюджета');
    }
    async checkSubcategories() {
        await this.page.getByRole('menuitem', { name: 'Отчеты об исполнении бюджета' }).click();
        await this.page.getByRole('button', { name: 'Список отчетов left' }).click();
        await this.page.getByRole('button', { name: 'right' }).click();
        await this.page.getByRole('button', { name: 'Список отчетов left' }).click();
        await this.page.getByRole('button', { name: 'right' }).click();
        const catHeader = await this.page.locator(Locators.BudgetExecutionReports.categoryHeader);
        await expect(catHeader).toContainText('Список отчетов');

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
            { labelIndex: 2, option: 'Thirty' },
            { labelIndex: 3, option: 'Ten' },
            { labelIndex: 4, option: 'Twenty' },
        ];
    
        // Select "Год" options
        for (const { labelIndex, option } of yearSelections) {
            await this.page.getByLabel('Год').nth(labelIndex).click();
            await this.page.getByRole('option', { name: option }).click();
        }
    
        // Select date ranges
        const dateSelections = [
            { filterText: /^От$/, gridCell: '2' },
            { exactLabel: true, gridCell: '26', nth: 1 },
        ];
    
        for (const date of dateSelections) {
            if (date.filterText) {
                await this.page.locator('div').filter({ hasText: date.filterText }).getByLabel('Choose date').click();
            } else {
                await this.page.getByLabel('Choose date', { exact: date.exactLabel }).click();
            }
            const gridCellLocator = this.page.getByRole('gridcell', { name: date.gridCell, exact: true });
            if (date.nth !== undefined) {
                await gridCellLocator.nth(date.nth).click();
            } else {
                await gridCellLocator.click();
            }
        }
    }
    
    async assert3Buttons() {
        const buttonsAndTexts = [
            { button: Locators.BudgetExecutionReports.button1, text: Locators.BudgetExecutionReports.text1, expected: 'Выписка по БЗ' },
            { button: Locators.BudgetExecutionReports.button2, text: Locators.BudgetExecutionReports.text2, expected: 'Отчет по поставщикам и подрядчикам' },
            { button: Locators.BudgetExecutionReports.button3, text: Locators.BudgetExecutionReports.text3, expected: 'Прочие отчеты' },
        ];    
        for (const { button, text, expected } of buttonsAndTexts) {
            await this.page.locator(button).hover();
            const textLocator = this.page.locator(text);
            await expect(textLocator).toBeVisible();
            await expect(textLocator).toHaveText(expected);
        }
    }
    
    async frameToPIVOT() {
        await this.page.getByText('Формировать в PIVOT').click();
        await this.page.getByLabel('№', { exact: true }).fill('05122024');
        await this.page.getByLabel('Новая сальдовая ведомость').getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '5', exact: true }).click();
        await this.page.getByLabel('Новая сальдовая ведомость').getByLabel('Год').click();
        await this.page.getByRole('option', { name: 'Ten' }).click();
        //buttons
        const buttons = [
                'Добавить строку',
                'Удалить документ',
                'Сохранить',
                'Принять документ',                
                'Отменить'
            ];        
            for (const buttonText of buttons) {
                const button = await this.page.getByText(buttonText);
                await expect(button).toBeVisible();
                await expect(button).toBeEnabled();
            }
        //is input area editable
        for (let i = 1; i <= 15; i++) {
            await expect(this.page.locator(Locators.BudgetExecutionReports[`input${i}`])).toBeEditable();
        }
        //spreadsheet
        const categories = [
            { locator: 'row1', text: 'Счет №' },
            { locator: 'row2', text: 'Дебет'},
            { locator: 'row3', text: 'Кредит'},
            { locator: 'row4', text: 'Разница'}
        ];
        await Promise.all(
            categories.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.BudgetExecutionReports[locator]);
                await expect(row).toHaveText(text);
            })
        );     
    }        
    async assert2buttons() {
        const buttons = [
            'Печать (PDF)',
            'Печать Excel'            
        ];        
        for (const buttonText of buttons) {
            const button = await this.page.getByText(buttonText);
            await expect(button).toBeVisible();
            await expect(button).toBeEnabled();
        }
    }
    
}
module.exports = BudgetExecutionReports;