const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class SalaryLimitApp {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.CeilingsBySector.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
        await this.page.click(Locators.SalaryLimitApp.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.SalaryLimitApp.tabHeader);
        await expect(tabHeader).toHaveText('Лимиты по заработной плате');
    }
    async selectElementsToList() {        
        const actions = [
            {
                description: "Select 'От' date",
                action: async () => {
                    await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
                    await this.page.getByRole('gridcell', { name: '4', exact: true }).click();
                },
            },
            {
                description: "Select 'До' date",
                action: async () => {
                    await this.page.getByLabel('Choose date', { exact: true }).click();
                    await this.page.getByRole('gridcell', { name: '20' }).nth(1).click();
                },
            },
            {
                description: "Select organization 104",
                action: async () => {
                    await this.page.locator('#rc_select_1').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^104-Агентии назорати маводи нашъаовари назди Президенти Ҷумҳурии Тоҷикистон$/ })
                        .locator('path')
                        .first()
                        .click();
                },
            },
            {
                description: "Select sub-organization 104.01",
                action: async () => {
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^104.01-Дастгоҳи марказии Агентии назорати маводи нашъаовари назди Президенти Ҷумҳурии Тоҷикистон$/ })
                        .locator('path')
                        .first()
                        .click();
                },
            },
            {
                description: "Select specific text 104.01.001",
                action: async () => {
                    await this.page.getByText('104.01.001').click();
                },
            },
            {
                description: "Click list button",
                action: async () => {
                    await this.page.click(Locators.RegistryOfCostsRequests.listButton);
                },
            },
        ];
    
        // Execute actions sequentially using forEach
        for (const step of actions) {
            console.log(`Executing: ${step.description}`);
            await step.action();
        }
    }
    
    async listOfSpreadsheet() {        
        const tableHeadings = await this.page.$$(Locators.RegistryOfCostsRequests.spreadsheetHeaders);
        const expectedTexts = [            
            'Наименование организации',            
            'Наименование БЗ',
            'Месяц',
            'Количество',
            'Занято',
            'Вакансии',
            'ОФЗП',
            'ФСЗН',
            'Компания',
            'Сумма',
            'Тип заработной платы',
            'Детали',
            'Тип заявки',
            'Статус',
            'Операции'
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async addModal(){
        await this.page.click(Locators.SalaryLimitApp.addButton);
        const tabHeader = await this.page.locator(Locators.SalaryLimitApp.modalHeader);
        await expect(tabHeader).toHaveText('Заявка на выделение лимита по заработной плате');
        //await this.page.keyboard.press('Escape');
        await this.page.click(Locators.SalaryLimitApp.closeModal);
    }
    async modalFunctionality() {
        let step = 0;
    
        do {
            switch (step) {
                case 0: // Add Button
                    await this.page.click(Locators.SalaryLimitApp.addButton);
                    break;
    
                case 1: // Выберите организацию
                    await this.page.locator('#rc_select_2').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^102-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^102\.01-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page.getByTitle('102.01.001').click();
                    break;
    
                case 2: // ИФ
                    await this.page.locator('#rc_select_3').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^1-Буҷети мунтахаби давлатӣ$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^11-Буҷети ҷумҳуриявӣ$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page.getByText('112').click();
                    break;
    
                case 3: // Бюджетная заявка
                    await this.page.getByLabel('Бюджетная заявка').nth(1).click();
                    await this.page.getByRole('option', { name: 'Основной персонал', exact: true }).click();
                    break;
    
                case 4: // Месяц
                    await this.page.getByLabel('Бюджетная заявка').nth(2).click();
                    await this.page.getByRole('option', { name: 'July' }).click();
                    break;
    
                case 5: // №
                    await this.page.getByRole('textbox', { name: '№' }).fill('50/40');
                    break;
    
                case 6: // Дата
                    await this.page
                        .getByLabel('Заявка на выделение лимита по заработной плате')
                        .getByLabel('Choose date')
                        .click();
                    await this.page.getByRole('gridcell', { name: '30' }).click();
                    await this.page
                        .getByLabel('Заявка на выделение лимита по заработной плате')
                        .getByText('Добавить')
                        .click();
                    break;
    
                default:
                    console.log('Completed all steps');
            }
            step++;
        } while (step < 7);
    }
    async modal1stHeader(){        
            await this.page.click(Locators.SalaryLimitApp.addButton);
            const tabHeader = await this.page.locator(Locators.SalaryLimitApp.modal1stTabHeader);
            await expect(tabHeader).toHaveText('Детализации свода заявок за месяц');
    }
    async modal1Spreadsheets() {        
        await this.page.click(Locators.SalaryLimitApp.addButton);
        const tableHeadings = await this.page.$$(Locators.SalaryLimitApp.modal1sheetHeaders);
        const expectedTexts = [
            '',
            '№',
            'Дата',
            'Сумма',
            'Загято',
            'Вакансии',
            'ОФЗП',
            'ФСЗН',            
            'Компания',
            'Итого',
            'Экон. ОФЗП',
            '',
            '',
            'Тип',            
            'Статус',
            'Примечания'
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async modal2ndHeader(){        
        await this.page.click(Locators.SalaryLimitApp.addButton);
        const tabHeader = await this.page.locator(Locators.SalaryLimitApp.modal2ndTabHeader);
        await expect(tabHeader).toHaveText('Детализации данной заявки');
}
    async modal2Spreadsheets() {        
        await this.page.click(Locators.SalaryLimitApp.addButton);
        const tableHeadings = await this.page.$$(Locators.SalaryLimitApp.modal2sheetHeaders);
        const expectedTexts = [
            '',
            'Категория работников',
            'Количество',
            'Загято',            
            'Вакансии',
            'ОФЗП',
            'ФСЗН',            
            'Компания',
            'Итого',            
            'Экон. ОФЗП',
            'Экон. ФСЗН',
            '',
            '',
            'Примечания',
            'Тип',            
            
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async modal3thHeader(){        
        await this.page.click(Locators.SalaryLimitApp.addButton);
        const tabHeader = await this.page.locator(Locators.SalaryLimitApp.modal3thTabHeader);
        await expect(tabHeader).toHaveText('Детализации ЭБК по заявке на месяц');
}
    async modal3Spreadsheets() {        
        await this.page.click(Locators.SalaryLimitApp.addButton);
        const tableHeadings = await this.page.$$(Locators.SalaryLimitApp.modal3sheetHeaders);
        const expectedTexts = [
            '',
            'Категория работников',
            'Тип ЭБК',
            'ЭБК',            
            'Уточ. год',
            'Уточ. период',
            'Остаток(смета)',
            'Утв. лимит',
            'Расх. лимит',
            'Возв. лимит',
            'Ост. лимит',
            '',
            '',
            'Допуст. остаток',
            'Request sum',
                        
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
}
module.exports = SalaryLimitApp;