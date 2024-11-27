const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BudgetRequests {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.CeilingsBySector.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
        await this.page.click(Locators.BudgetRequests.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.BudgetRequests.tabHeader);
        await expect(tabHeader).toHaveText('Бюджетные заявки ПБС');
    }

    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async selectElementsToList() {
        // Define the list of steps with locators and actions
        const steps = [
            { action: 'click', locator: () => this.page.getByLabel('Год') },
            { action: 'click', locator: () => this.page.getByRole('option', { name: '2025' }) },
            { action: 'click', locator: () => this.page.getByLabel('Шаг') },
            { action: 'click', locator: () => this.page.getByRole('option', { name: 'Вариант МФ РТ' }) },
            { action: 'click', locator: () => this.page.locator('#rc_select_1') },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^102-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^102\.01-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.getByText('102.01.001') },
            { action: 'click', locator: () => this.page.locator('#rc_select_2') },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^Маориф$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^Таълиму тарбияи томактабӣ$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.getByText('Таълиму тарбияи томактабӣ').nth(1) },
            { action: 'click', locator: () => this.page.locator('#rc_select_3') },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^1-Буҷети мунтахаби давлатӣ$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^12-Буҷетҳои маҳаллӣ$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.getByText('-Грантҳои буҷетҳои маҳаллӣ') },
            { action: 'click', locator: () => this.page.locator('#rc_select_4') },
            { action: 'click', locator: () => this.page.getByText('Барномаи та?силот барои кудакони синни томактаб?') },
            { action: 'click', locator: () => this.page.locator('#rc_select_5') },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^04-Шаҳри Душанбе$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.getByText('0404') },
            { action: 'click', locator: () => this.page.locator('#rc_select_6') },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^02-Расходы на Государственнные программы$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.locator('div').filter({ hasText: /^0201-Правительственные программы$/ }).locator('svg').first() },
            { action: 'click', locator: () => this.page.getByText('0201004-(TJK)') },
            { action: 'click', locator: () => this.page.locator('#rc_select_7') },
            { action: 'click', locator: () => this.page.getByText('Хароҷотҳои ҷорӣ') },
            { action: 'click', locator: () => this.page.locator('#rc_select_8') },
            { action: 'waitForTimeout', value: 10000 },
            { action: 'click', locator: () => this.page.getByText('Инвеститсияҳои Ҳукуматӣ', { exact: true }).nth(1) },
            { action: 'click', locator: () => this.page.getByText('Список') }
        ];

        // Execute each step in sequence
        for (const step of steps) {
            if (step.action === 'click') {
                await step.locator().click();
            } else if (step.action === 'waitForTimeout') {
                await this.page.waitForTimeout(step.value);
            }
        }
    }

    async listOfSpreadsheet() {
        // Get all headers of spreadsheet
        const tableHeadings = await this.page.$$(Locators.BudgetRequests.spreadsheetHeaders);
        const expectedTexts = [
            '№',
            'ПБС',
            'Наименование организации',
            'Код БЗ',
            'Наименование БЗ',
            'Функция',
            'ИФ',
            'Наименование территории',
            'Программа',
            'Код вида расходов',
            'Операции'
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async reportButtonAssertion() {
        await expect(this.page.locator(Locators.BudgetRequests.reportButton)).toBeVisible();
    }
    async addModalFunctionality() {
        await this.page.click(Locators.BudgetRequests.addButton);
    
        const addModalHeader = await this.page.locator(Locators.BudgetRequests.addModalHeader);
        await expect(addModalHeader).toHaveText('Добавление бюджетной заявки');
            
        const dropdownSteps = [
            // 1-ПБС
            { selector: '#rc_select_9', selections: [
                { filterText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/, action: 'expand' },
                { filterText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/, action: 'expand' },
                { text: '101.01.001' }
            ] },
            // 2-Функция
            { selector: '#rc_select_10', selections: [
                { filterText: /^Маориф$/, action: 'expand' },
                { filterText: /^Таҳсилоти умумӣ $/, action: 'expand' },
                { text: 'Таҳсилоти ибтидоӣ' }
            ] },
            // 3-Источник
            { selector: '#rc_select_11', selections: [
                { filterText: /^1-Буҷети мунтахаби давлатӣ$/, action: 'expand' },
                { filterText: /^12-Буҷетҳои маҳаллӣ$/, action: 'expand' },
                { text: '121-Буҷетҳои маҳаллӣ' }
            ] },
            // 4-Программа
            { selector: '#rc_select_12', selections: [
                { text: 'Илм', exact: true }
            ] },
            // 5-Терр код
            { selector: '#rc_select_13', selections: [
                { filterText: /^04-Шаҳри Душанбе$/, action: 'expand' },
                { text: '0404' }
            ] },
            // 6-Тип БЗ
            { selector: '#rc_select_14', selections: [
                { filterText: /^02-Расходы на Государственнные программы$/, action: 'expand' },
                { filterText: /^0201-Правительственные программы$/, action: 'expand' },
                { text: '0201003' }
            ] },
            // 7-Тип расхода
            { selector: '#rc_select_15', selections: [
                { text: 'Инвеститсияҳои Ҳукуматӣ' }
            ] }
        ];            
        for (const { selector, selections } of dropdownSteps) {
            await this.page.locator(selector).click();
            for (const selection of selections) {
                if (selection.filterText) {
                    const filterLocator = this.page.locator('div').filter({ hasText: selection.filterText });
                    if (selection.action === 'expand') {
                        await filterLocator.locator('svg, path').first().click();
                    }
                } else if (selection.text) {
                    const optionsLocator = selection.exact
                        ? this.page.getByTitle(selection.text, { exact: true })
                        : this.page.getByText(selection.text);
                    await optionsLocator.click();
                }
            }
        }    
        // 8-Описание
        const descriptionText = "Моро биҳишт суҳбати ёрони ҳамдам аст, Дидори ёри номутаносиб ҷаҳаннам аст. Ҳар дам, ки дар ҳузури азизе бароварӣ, Дарёб, к-аз ҳаёти ҷаҳон ҳосил он дам аст. Гар хуни тоза меравад аз решҳои дил, Дидори дӯстон, ки бубинанд, марҳам аст.";
        await this.page.locator('#description').fill(descriptionText);
    
        // 9-Кнопка Сохранить
        await this.page.click(Locators.BudgetRequests.saveButton);
    }
    
}
module.exports = BudgetRequests;