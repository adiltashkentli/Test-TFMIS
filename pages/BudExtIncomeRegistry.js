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
    async offsetOfOverpaymentModal() {
        const page = this.page;
        const actions = [
            { method: 'getByText', args: ['Зачёт переплаты'], action: 'click' },
            { method: 'getByRole', args: ['combobox', { name: 'Администратор ​' }], action: 'click' },
            { method: 'getByRole', args: ['option', { name: 'год' }], action: 'click', extra: 'first' },
            { method: 'locator', args: ['div'], action: 'click', filter: { hasText: /^От$/ }, label: 'Choose date' },
            { method: 'getByRole', args: ['gridcell', { name: '7', exact: true }], action: 'click' },
            { method: 'getByLabel', args: ['Choose date', { exact: true }], action: 'click' },
            { method: 'locator', args: ["(//button[normalize-space()='18'])[1]"], action: 'click' },
            { method: 'getByRole', args: ['combobox', { name: 'Плательщик ​' }], action: 'click' },
            { method: 'getByRole', args: ['option', { name: 'год' }], action: 'click', extra: 'first' },
            { method: 'getByLabel', args: ['Статья дохода'], action: 'click' },
            { method: 'getByRole', args: ['option', { name: 'год' }], action: 'click', extra: 'first' },
            { method: 'getByText', args: ['Добавить строку'], action: 'click' },
            { method: 'getByRole', args: ['textbox', { name: 'Плательщик' }], action: 'fill', value: 'Row Tech' },
            { method: 'getByLabel', args: ['Сумма дебет'], action: 'fill', value: '5000' },
            { method: 'getByLabel', args: ['Сумма дебет'], action: 'press', value: 'Tab' },
            { method: 'getByLabel', args: ['Сумма кредит'], action: 'fill', value: '3000' },
            { method: 'getByText', args: ['Провети документ'], action: 'click' },
            { method: 'getByLabel', args: ['Корректировка (расшифровка) дохода'], action: 'click', extra: 'getByTestId', testId: 'CloseIcon' }
        ];
        for (const { method, args, action, extra, value, filter, label, testId } of actions) {
            let locator = page[method](...args);
            if (filter) locator = locator.filter(filter);
            if (label) locator = locator.getByLabel(label);
            if (extra) locator = locator[extra](testId || undefined);
            if (value) {
                await locator[action](value);
            } else {
                await locator[action]();
            }
        }
        const spreadsheet1stHeaders = await this.page.$$(Locators.IncomeRegistry.modal1stSprshHdrs);
        const expectedTexts = [
            '-',
            '№',
            'Терр. код',
            'Территория',
            'ИФ',
            'Наименование ИФ',
            'Описание',
            '-',
        ];
        for (let i = 0; i < spreadsheet1stHeaders.length; i++) {
            const headersText = await spreadsheet1stHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
        const spreadsheet2ndHeaders = await this.page.$$(Locators.IncomeRegistry.modal1stSprshHdrs);
        const expectedTexts1 = [
            'Администратор',
            'ИФ',
            '№',
            'Плательщик',
            'Код дохода',
            'Наименование дохода',
            'Дебет',
            'Кредит',
        ];
        for (let i = 0; i < spreadsheet2ndHeaders.length; i++) {
            const headersText = await spreadsheet2ndHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts1[i]);
        }
    }
    async returnToProcessingModal() {
        await this.page.getByText('Вернуть на обработку').click();        

        await this.page.fill('(//*[@id="name"])[1]', 'TJ24/61-73');
        await this.page.getByLabel('Назначение', { exact: true }).fill('Обновить имеющийся документы и приложить недостающие копии сертификатов.');         
        
        const locators = [];
        for (let i = 2; i <= 15; i++) {
            locators.push(this.page.locator(`(//*[@id="name"])[${i}]`));
        }
        for (const locator of locators) {
            await expect(locator).toHaveValue('TJ24/61-73');
        }
        const modalHeading1 = await this.page.locator(Locators.IncomeRegistry.modalHeader);
        await expect(modalHeading1).toContainText('Вернуть доход на обработку');

        const modalHeading2 = await this.page.locator(Locators.IncomeRegistry.modalHeader2);
        await expect(modalHeading2).toContainText('Плательщик');
        
        const modalHeading3 = await this.page.locator(Locators.IncomeRegistry.modalHeader3);
        await expect(modalHeading3).toContainText('Получатель');
    }

    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }

    async assert3Buttons() {
        const buttons = [
            Locators.IncomeRegistry.adjustingSpreedButton,
            Locators.IncomeRegistry.changesButton,
            Locators.IncomeRegistry.clearFilterButton
        ];    
        for (const button of buttons) {
            await expect(this.page.locator(button)).toBeEnabled();
        }
    }    
}
module.exports = IncomeRegistry;