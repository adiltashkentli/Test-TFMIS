const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');
const { text } = require('stream/consumers');

class ChangesOfIncome {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.Outcomes.budgetPreparationMenu);
        await this.page.click(Locators.ChangesMenu.submenuChanges);
        await this.page.click(Locators.ChangesOfIncome.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.ChangesOfIncome.tabHeader);
        await expect(tabHeader).toHaveText('Изменение доходного бюджета');
    }
    async selectElementsToList() {
        const steps = {
            step1: async () => {
                await this.page.getByLabel('2024').click();
                await this.page.getByRole('option', { name: '2022' }).click();
            },
            step2: async () => {
                await this.page.getByLabel('№ Документа').click();
                await this.page.getByLabel('№ Документа').fill('25/11-24');
            },
            step3: async () => {
                await this.page.getByLabel('Choose date').click();
                await this.page.getByRole('gridcell', { name: '25', exact: true }).click();
            },
            step4: async () => {
                await this.page.getByLabel('Тип операции').click();
                await this.page.getByRole('option', { name: 'Увеличение бюджета' }).click();
            },
            step5: async () => {
                await this.page.getByLabel('Назначение').click();
                await this.page.getByLabel('Назначение').fill(
                    'Бюджеты формируются за счёт источников доходов, к которым относятся налоговые доходы, неналоговые доходы и безвозмездные поступления. К числу безвозмездных поступлений относятся прежде всего межбюджетные трансферты (дотации на выравнивание бюджетной обеспеченности, межбюджетные субсидии), предназначенные для финансирования публичных полномочий, переданных на другие уровни власти, а также добровольные пожертвования юридических лиц и граждан. '
                );
            },
        };          
        for (const step in steps) {
            if (typeof steps[step] === 'function') {
                await steps[step]();
            }
        }        // Waiting functionality or handling data from the backend can be added here
    }
    
    async newButtonAssertion() {
        await this.page.click(Locators.ChangesExpenditureBudgWithtObj.newButton);
    }
    async addNewLineModal() {
        await this.page.click(Locators.ChangesExpBudgetWithObject.addLine);

        const modalHeader = await this.page.locator(Locators.ChangesOfIncome.modalHeader);
        await expect(modalHeader).toHaveText('Выберите доходную заявку');
        const steps = [
            {
                selector: '#rc_select_1',
                actions: [
                    {
                        filterText: /^102-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        filterText: /^102.01-Агентии хизмати давлатии назди Президенти Ҷумҳурии Тоҷикистон$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        title: '102.01.004',
                        action: async (locator) => await this.page.getByTitle(locator).click(),
                    },
                ],
            },
           
            {
                selector: '#rc_select_2',
                actions: [
                    {
                        filterText: /^1-Буҷети мунтахаби давлатӣ$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        filterText: /^11-Буҷети ҷумҳуриявӣ$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        text: '112-Маблағҳои махсуси буҷети ҷумҳуриявӣ',
                        exact: true,
                        action: async (locator) =>
                        await this.page.getByText(locator, { exact: true }).click(),
                    },                    
                ],
            },
            {
                selector: '#rc_select_3',
                actions: [
                    {
                        filterText: /^04-Шаҳри Душанбе$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        text: '0405-Ноҳияи И.Сомонии шаҳри Душанбе',
                        exact: true,
                        action: async (locator) =>
                        await this.page.getByText(locator, { exact: true }).click(),
                    },                    
                ],
            },
            {
                selector: '#rc_select_4',
                actions: [
                    {
                        filterText: /^Даромаҳо$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        filterText: /^Воридоти андозӣ$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        filterText: /^Андоз аз даромад$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        text: 'Андоз аз даромади шахсони ҳуқуқӣ',
                        exact: true,
                        action: async (locator) =>
                        await this.page.getByText(locator, { exact: true }).click(),
                    },                    
                ],
            },
        ];
        for (const step of steps) {
            await this.page.locator(step.selector).click();

            for (const action of step.actions) {
                if (action.filterText) {
                    const locator = await this.page.locator('div').filter({ hasText: action.filterText });
                    await action.action(locator);
                } else if (action.title) {
                    await action.action(action.title);
                } else if (action.text) {
                    await action.action(action.text);
                } else if (action.xpath) {
                    await action.action(action.xpath);
                }
            }            
        }
        await this.page.click('//div[2]/div/div[2]//div[2]/div[1]/div/div[1]/p');
        await this.page.click('//div[2]//div[2]//div[2]/div[2]/div[2]/div[1]/p');
        //await this.page.getByText('Добавить объект').click();

        const tableHeadings1 = await this.page.$$(Locators.ChangesExpBudgetWithObject.modal1sheetHeaders);
        const expectedTexts = [
            '№ БЗ',
            'ПБС',
            'Территория',
            'Территория',
            'ИФ',
            'Наименование ИФ',
            'Наименование БЗ',
            '-',
        ];
        for (let i = 0; i < tableHeadings1.length; i++) {
            const headersText = await tableHeadings1[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
        const tableHeadings2 = await this.page.$$(Locators.ChangesExpBudgetWithObject.modal2sheetHeaders);
        const expectedTexts2 = [
            'Код',
            'Наименование дохода',
            'I',
            'II',
            'III',
            'IV',
            'V',
            'VI',
            'VII',
            'VIII',
            'IX',
            'X',
            'XI',
            'XII',
            'Сумма',
            'Операции',
        ];
        for (let i = 0; i < tableHeadings2.length; i++) {
            const headersText2 = await tableHeadings2[i].textContent();
            console.log(headersText2);

            expect(headersText2.trim()).toBe(expectedTexts2[i]);
        }
        const tableHeadings3 = await this.page.$$(Locators.ChangesExpBudgetWithObject.modal3sheetHeaders);
        const expectedTexts3 = [
            'Код',
            'Наименование дохода',
            'I',
            'II',
            'III',
            'IV',
            'V',
            'VI',
            'VII',
            'VIII',
            'IX',
            'X',
            'XI',
            'XII',
        ];
        for (let i = 0; i < tableHeadings3.length; i++) {
            const headersText3 = await tableHeadings3[i].textContent();
            console.log(headersText3);

            expect(headersText3.trim()).toBe(expectedTexts3[i]);
        }
    }
    async changesLogModal() {
        const steps = {
            step1: async () => {                
                await this.page.click(Locators.ChangesExpenditureBudgWithtObj.changesLogButton);
                //Asssert modal header
                const tabHeader = await this.page.locator(Locators.ChangesExpenditureBudgWithtObj.changesModalHeader);
                await expect(tabHeader).toHaveText('История изменений');
                // 1-От
                await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
                await this.page.getByText('ноябрь').click();
                await this.page.getByRole('radio', { name: '2023' }).click();
            },
            step2: async () => {
                // 2-До
                await this.page.getByLabel('История изменений').getByLabel('Choose date', { exact: true }).click();
                await this.page.getByRole('gridcell', { name: '13' }).nth(1).click();
            },
            step3: async () => {
                // 3-Тип операции
                await this.page.getByLabel('История изменений').getByRole('combobox', { name: 'Тип операции ​' }).click();
                await this.page.getByRole('option', { name: 'Уменьшение бюджета' }).click();
            },
            step4: async () => {
                // 4-Операции
                await this.page.locator('#rc_select_1').click();
                await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
                await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
                await this.page.getByTitle('101.01.003').click();
            },
            step5: async () => {
                // 5-Тип БЗ (кнопка)
                await this.page.getByRole('img', { name: 'tableFolderIcon' }).click();
            },
            step6: async () => {
                // 6-Список (кнопка)
                await this.page.getByText('Список').click();
            },
            step7: async () => {
                // 7-Отчет (кнопка)
                await this.page.getByLabel('История изменений').getByText('Отчет').click();
            },
        };
        for (const step in steps) {
            if (typeof steps[step] === 'function') {
                await steps[step]();
            }
        }
        const tableHeadings = await this.page.$$(Locators.ChangesExpenditureBudgWithtObj.changesLogModalSpshHeaders);
        const expectedTexts = [
            '',
            '№ Документа',
            'Дата документа',
            'Назначение',
            'Тип операции',            
            'Статус',
            'Куратор',
            '-',
            '',
            ''
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
        await this.page.getByLabel(Locators.ChangesOfIncome.pagination).click();
        await this.page.getByRole('option', { name: '25' }).click();
    }
    
    async listOfSpreadsheet() {
        const tableHeadings = await this.page.$$(Locators.ChangesOfIncome.listOfSpreadsheet);
        const expectedTexts = [
            'Год',
            '№БЗ',
            'Наименование дохода',
            'I',
            'II',
            'III',
            'IV',
            'IV',
            'IV',
            'IV',
            'IV',
            'IV',
            'IV',
            'IV',
            'IV',
            'Итого',
            'Статус'
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async reportButtonAssertion() {
        await expect(this.page.locator(Locators.ChangesExpenditureBudgWithtObj.reportButton)).toBeVisible();
    }
    async readyToApproveButtonAssertion() {
        await expect(this.page.locator(Locators.ChangesExpenditureBudgWithtObj.readyToApproveButton)).toBeVisible();
    }
    async canselReadyToApproveButtonAssertion() {
        await expect(this.page.locator(Locators.ChangesExpenditureBudgWithtObj.canselReadeToApproveButton)).toBeVisible();
    }
    async reconcileButtonAssertion() {
        await expect(this.page.locator(Locators.ChangesExpenditureBudgWithtObj.reconcileButton)).toBeVisible();
    }
    async removeDocButtonAssertion() {
        await expect(this.page.locator(Locators.ChangesExpenditureBudgWithtObj.removeDocButton)).toBeVisible();
    }
    async saveButtonAssertion() {
        await expect(this.page.locator(Locators.ChangesExpenditureBudgWithtObj.saveButton)).toBeVisible();
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = ChangesOfIncome;