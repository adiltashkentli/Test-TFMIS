const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class LimitationsOfExpenses {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.AdministrationSubmenu.submenu);
        await this.page.click(Locators.LimitationsOfExpenses.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Ограничения расходов  по статьям ');
    }
    async getRelativeList() {
        await this.page.getByLabel('Статья для запрета').click();
        await this.page.getByRole('option', { name: 'one' }).first().click();
        await this.page.getByRole('combobox', { name: 'Наименование организации ​' }).click();
        await this.page.getByRole('option', { name: 'one' }).first().click();
        await this.page.getByLabel('Источник').click();
        await this.page.getByRole('option', { name: 'one' }).first().click();
        await this.page.getByRole('combobox', { name: 'Функция ​' }).click();
        await this.page.getByRole('option', { name: 'one' }).first().click();
        await this.page.getByRole('combobox', { name: 'Программа ​' }).click();
        await this.page.getByRole('option', { name: 'one' }).first().click();
        await this.page.getByText('Список').click();
        
    }
    async viewModalFunc() {
        await this.page.getByLabel('Select all rows').check();
        await this.page.getByRole('row', { name: 'Unselect row Snow' }).getByTestId('SearchIcon').click();
        await this.page.locator('//div[2]/div/div[2]/div/div/div[2]/div[1]/div[1]/div/div').click();
        await this.page.getByRole('option', { name: 'год' }).first().click();
        await this.page.locator('//div[2]/div/div[2]/div/div/div[2]/div[1]/div[2]/div/div').click();
        await this.page.getByRole('option', { name: 'год' }).first().click();
        await this.page.getByLabel('?').click();
        await this.page.getByRole('option', { name: 'год' }).nth(1).click();
        await this.page.getByRole('dialog').getByText('Список').click();
        const headers = [
            { locator: 'modal1sheetHeader1', text: '-' },
            { locator: 'modal1sheetHeader2', text: 'Наименование БЗ' },
            { locator: 'modal1sheetHeader3', text: 'Функция' },
            { locator: 'modal1sheetHeader4', text: 'ИФ' },
            { locator: 'modal1sheetHeader5', text: 'Территория' },            
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.LimitationsOfExpenses[locator]);
                await expect(row).toHaveText(text);
            })
        );
        const headers2 = [
            { locator: 'modal2sheetHeader1', text: 'Код объекта' },
            { locator: 'modal2sheetHeader2', text: 'ЭБК' },
            { locator: 'modal2sheetHeader3', text: 'Название' },
            { locator: 'modal2sheetHeader4', text: 'Год. бюджет' },
            { locator: 'modal2sheetHeader5', text: 'Год. уточ. бюджет' },
            { locator: 'modal2sheetHeader6', text: 'Кв. бюджет' },
            { locator: 'modal2sheetHeader7', text: 'Кв. уточ. бюджет' },
            { locator: 'modal2sheetHeader8', text: 'Обязательство' }            
        ];
        await Promise.all(
            headers2.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.LimitationsOfExpenses[locator]);
                await expect(row).toHaveText(text);
            })
        );
        await this.page.getByRole('dialog').getByTestId('CloseIcon').click();
    }
    async checkBoxAssertion(){
        const checkAllBoxes = this.page.locator(Locators.LimitationsOfExpenses.checkAllBoxes);
        await checkAllBoxes.check();
        await expect(checkAllBoxes).toBeChecked();
        const childBoxes = this.page.locator(Locators.LimitationsOfExpenses.childBoxes);
        await expect(childBoxes).toBeChecked();
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: '№' },
            { locator: 'row2', text: 'ПБС' },
            { locator: 'row3', text: 'Наименование организации' },
            { locator: 'row4', text: 'БЗ' },
            { locator: 'row5', text: 'Наименование БЗ' },
            { locator: 'row6', text: 'Функция' },
            { locator: 'row7', text: 'ИФ' },
            { locator: 'row8', text: 'Территория' },
            { locator: 'row9', text: 'Программа' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.ExpensesBank[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async header2buttonAssertion() {
        const buttons = [
            this.page.locator(Locators.LimitationsOfExpenses.prohibitButton),
            this.page.locator(Locators.LimitationsOfExpenses.cancelProhibitButton),
        ];
        for (const button of buttons) {
            await expect(button).toBeEnabled();
        }
    }
        async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = LimitationsOfExpenses;