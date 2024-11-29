const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class IncomeRegistry {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.SubmenuIncomes.submenuIncomes);
        await this.page.click(Locators.IncomeRegistry.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.PeriodRegistry.tabHeader);
        await expect(tabHeader).toContainText('Реестр поступления');
    }
    async selectElementsToList() {
        const actions = [
            async () => await this.page.getByRole('row', { name: '03 0 0 0 0 0 0 0 0 0 0 0 0 0' }).getByRole('button').click(),
            async () => await this.page.getByLabel('Счет №').click(),
            async () => await this.page.getByRole('option', { name: '20204972111010100001' }).click(),
            async () => await this.page.getByLabel('Choose date, selected date is').click(),
            async () => await this.page.getByRole('gridcell', { name: '1', exact: true }).click(),
            async () => await this.page.getByLabel('Дата документа').press('Tab'),
            async () => await this.page.getByLabel('ИНН', { exact: true }).fill('987654321').press('Tab'),
            async () => await this.page.getByLabel('Статус').press('ArrowDown'),
            async () => await this.page.getByRole('option', { name: 'Коркардшуда' }).press('ArrowDown'),
            async () => await this.page.getByRole('option', { name: 'Ҳамчун даромад гузаронида шуд' }).press('Enter'),
            async () => await this.page.getByText('Список').click(),
        ];
        for (const action of actions) {
            await action();
        }
    }
    async checkButtonFunctionality() {
        const checkAllRows = await this.page.locator(Locators.IncomeRegistry.selectAllRows);
        const checkedMessage = await this.page.locator(Locators.IncomeRegistry.chekedMessage);
        checkAllRows.check();
        await expect(checkedMessage).toHaveText('1 row selected');        
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.PeriodRegistry.spreadsheetHeaders);
        const expectedTexts = [
            '-',
            '№',
            'Дата',
            'Сумма',
            'Тип',
            'Назначение платежа',
            'ИНН плательщика',
            'Плательщик',
            'Банк плательщика',
            'Счет плательщика',
            'Бик получателя',
            'Получатель',
            'ИНН получателя',
            'Дата валютирования',
            '+',
            'БК',
            'Администратор',
            'К. плательщика',
            'БЗ',
            'Форма оплаты',
            'EID',
            'Время',
            
        ];
        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async footer16fieldsetsAssertion() {        
        const locatorIds = [
            ':ru:', ':rv:', ':r10:', ':r11:', ':r12:', ':r13:', ':r14:',
            ':r15:', ':r16:', ':r17:', ':r18:', ':r19:', ':r1a:', ':r1b:',
            ':r1c:', ':r1d:'
        ];
        await Promise.all(
            locatorIds.map(id => 
                expect(this.page.locator(`//*[@id="${id}"]`)).toHaveValue('0')
            )
        );
    }
    //Эрта: Зачет переплаты - модалкадан давом этаман
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async printListButtonAssertion() {
        await expect(this.page.locator(Locators.PeriodRegistry.printListButton)).toBeEnabled();
    }
    async reportWithIncomesButtonAssertion() {
        await expect(this.page.locator(Locators.PeriodRegistry.reportWithIncomesButton)).toBeEnabled();
    }
}
module.exports = IncomeRegistry;