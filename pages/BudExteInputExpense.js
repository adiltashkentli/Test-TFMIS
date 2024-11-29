const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class InputExpenses {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.InputExpenses.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Ввод расхода');
    }
    async inputExpenses() {
        // Select from dropdowns
        await this.page.locator('#rc_select_1').click();
        const dropdown1Options = [
            '101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон',
            '101.03-Иттифоқи нависандагони Тоҷикистон'
        ];
        for (const option of dropdown1Options) {
            await this.page.locator('div').filter({ hasText: new RegExp(`^${option}$`) }).locator('svg').first().click();
        }
        await this.page.getByTitle('101.03.002').click();

        await this.page.locator('#rc_select_2').click();
        await this.page.locator('div').filter({ hasText: /^Специализированные операции БО$/ }).locator('svg').first().click();
        await this.page.getByText('Специализированные операции БО(Субвенции)').click();

        // Fill expense details
        await this.page.getByLabel('Название расхода').fill('Фьючерс');
        await this.page.getByLabel('Детали').fill(
            'Договор, в котором одна сторона обязуется купить, а другая продать определённое количество актива (например, нефти, зерна или валюты) по заранее оговоренной цене в установленную дату в будущем. Фьючерсы используются как для спекуляции на изменении цен, так и для хеджирования рисков, связанных с колебаниями рыночной стоимости активов.'
        );
        await this.page.getByLabel('Многолетний процесс?').check();

        // Click process buttons
        await this.page.getByRole('button', { name: 'Запуск процесса' }).click();
        await this.page.getByRole('button', { name: 'Да', exact: true }).click();
        await this.page.getByRole('button', { name: 'Выборка бюджетные заявки' }).click();

        // Handle third dropdown
        await this.page.locator('#rc_select_3').click();
        await this.page.locator('div').filter({ hasText: /^Маориф$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^Таълиму тарбияи томактабӣ$/ }).locator('svg').first().click();
        await this.page.getByText('Таълиму тарбияи томактабӣ').nth(1).click();

        // Handle fourth dropdown
        await this.page.locator('#rc_select_4').click();
        const dropdown4Options = ['1-Буҷети мунтахаби давлатӣ', '12-Буҷетҳои маҳаллӣ'];
        for (const option of dropdown4Options) {
            await this.page.locator('div').filter({ hasText: new RegExp(`^${option}$`) }).locator('svg').first().click();
        }
        await this.page.getByText('122').click();

        // Select quarter and close modal
        await this.page.getByLabel('Кв.', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Кв.4' }).click();
        await this.page.getByText('Список').click();
        await this.page.getByLabel('Выборка бюджетные заявки').getByTestId('CloseIcon').click();

        // Process actions for numbers
        const processActions = [
            { number: '85', button: 'Сохранить изменения' },
            { number: '12', button: 'Отменить' }
        ];
        for (const action of processActions) {
            await this.page.getByLabel('№').fill(action.number);
            await this.page.locator('div').filter({ hasText: /^Год2024ГодОперационный деньОперационный день№№$/ }).getByRole('button').click();
            await this.page.getByText(action.button).click();
        }

        // Final clicks
        await this.page.getByText('Процесс завершен').click();
        await this.page.getByText('Новый процесс').click();
    }

    async searchDocuments() {
        const actions = [
            { method: 'click', selector: this.page.getByRole('button', { name: 'Поиск документов' }) },
            { method: 'click', selector: this.page.getByText('Печать списка') },
            { method: 'click', selector: this.page.getByLabel('Статус') },
            { method: 'click', selector: this.page.getByRole('option', { name: 'Ten' }) },
            { method: 'click', selector: this.page.locator('#rc_select_3') },
            { method: 'click', selector: this.page.locator('div').filter({ hasText: /^102-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first() },
            { method: 'click', selector: this.page.locator('div').filter({ hasText: /^102\.01-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first() },
            { method: 'click', selector: this.page.getByText('102.01.004') },
            { method: 'click', selector: this.page.locator('#rc_select_4') },
            { method: 'click', selector: this.page.locator('div').filter({ hasText: /^Расходы на персонал$/ }).locator('svg').first() },
            { method: 'click', selector: this.page.getByText('Расходы на персонал(Заработная плата ПГИ)') },
            { method: 'click', selector: this.page.getByRole('textbox', { name: 'Титул процесса' }) },
            { method: 'fill', selector: this.page.getByRole('textbox', { name: 'Титул процесса' }), value: 'Priority' },
            { method: 'click', selector: this.page.getByLabel('Имя шаг процесса') },
            { method: 'fill', selector: this.page.getByLabel('Имя шаг процесса'), value: 'Основной' },
            { method: 'click', selector: this.page.getByLabel('Номер процесса >') },
            { method: 'fill', selector: this.page.getByLabel('Номер процесса >'), value: '01/11/2024' },
            { method: 'click', selector: this.page.getByLabel('Номер процесса <') },
            { method: 'fill', selector: this.page.getByLabel('Номер процесса <'), value: '30/11/2024' },
            { method: 'click', selector: this.page.locator('div').filter({ hasText: /^История процесса \(нач\)$/ }).getByLabel('Choose date') },
            { method: 'click', selector: this.page.getByRole('gridcell', { name: '1' }).first() },
            { method: 'click', selector: this.page.locator('div').filter({ hasText: /^История процесса \(кон\)$/ }).getByLabel('Choose date') },
            { method: 'click', selector: this.page.getByRole('gridcell', { name: '30' }).nth(1) },
            { method: 'click', selector: this.page.locator('#rc_select_5') },
            { method: 'click', selector: this.page.locator('div').filter({ hasText: /^1-Буҷети мунтахаби давлатӣ$/ }).locator('svg').first() },
            { method: 'click', selector: this.page.locator('div').filter({ hasText: /^11-Буҷети ҷумҳуриявӣ$/ }).locator('svg').first() },
            { method: 'click', selector: this.page.getByText('115-Дигар сарчашмаҳо') },
            { method: 'click', selector: this.page.getByText('Список', { exact: true }) },
            { method: 'click', selector: this.page.getByText('Список операций') }
        ];
    
        for (const action of actions) {
            if (action.method === 'click') {
                await action.selector.click();
            } else if (action.method === 'fill') {
                await action.selector.fill(action.value);
            }
        }
        const spreadsheetHeaders = await this.page.$$(Locators.InputExpenses.spreadsheetHeaders);
        const expectedTexts = [
            '',
            '-',
            'Процесс №',            
            'Год',
            'ИФ',
            'ПБС',
            'Дата начала',
            'Титул процесса',
            'Наименование процесса',
            '',
            ''
        ];

        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async checkCategoryHeader() {        
        
    }

    async headerButtonsAssertion() {
        const headerButtons = await this.page.$$(Locators.DepartmentalClassification.header6Buttons);
        for (let i = 0; i < headerButtons.length; i++) {
            expect(headerButtons).toBeEnabled();
        }
    }
}
module.exports = InputExpenses;