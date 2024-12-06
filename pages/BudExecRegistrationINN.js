const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class RegistrationINN {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.RegistrationINN.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Регистрация ИНН');
    }
    async inputDataToRelativeList() {
        const inputs = [
            { role: 'textbox', name: 'Название', value: 'OOO Toj Memor' },
            { role: 'textbox', name: 'ИНН', value: '555888111' }
        ];    
        for (const input of inputs) {
            await this.page.getByRole(input.role, { name: input.name }).fill(input.value);
        }    
        await this.page.getByText('Поиск').click();
        await this.page.getByText('Список').click();
    }    
    async addINNbuttonFunc() {
        await this.page.getByText('Добавить ИНН').click();    
        // Fill text inputs with getByRole and nth to resolve multiple inputs
        const fields = [
            { label: 'ИНН', value: '444555666' },
            { label: 'Название', value: 'OOO Toj Memor' },
            { label: 'Руководитель', value: 'Равшан Ализода' },
            { label: 'Гл. бухгалтер', value: 'Парвиз Хожимирзоев' },
            { label: 'Адрес', value: 'ул.И.Сино' },
            { label: 'Телефон', value: '+992000555888' },
            { label: 'Серия', value: '54' },
            { label: 'Номер', value: '33322' }
        ];    
        for (const field of fields) {
            // Use getByRole with appropriate 'textbox' and nth index
            const input = await this.page.getByRole('textbox', { name: field.label }).first();
            await input.fill(field.value);        }    
        // Select city
        await this.page.getByLabel('Город').click();
        await this.page.getByRole('option', { name: 'Душанбе (Test)', exact: true }).nth(3).click();
        // Select date
        await this.page.getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();    
        // Select organization type
        await this.page.getByRole('combobox', { name: 'Тип ​' }).click();
        await this.page.getByRole('option', { name: 'Коммерческая организация' }).click();    
        // Submit
        await this.page.getByRole('button', { name: 'Добавить' }).click();
    }
    async spreadsheetListAssertion() {
        const rows = [
            { locator: Locators.RegistrationINN.row1, text: 'ИНН' },
            { locator: Locators.RegistrationINN.row2, text: 'Название' },
            { locator: Locators.RegistrationINN.row3, text: 'Тип' },
            { locator: Locators.RegistrationINN.row4, text: 'Операции' },
        ];    
        await Promise.all(rows.map(({ locator, text }) =>
            expect(this.page.locator(locator)).toHaveText(text)
        ));
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = RegistrationINN;