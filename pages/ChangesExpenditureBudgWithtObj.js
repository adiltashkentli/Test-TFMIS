const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ChangesExpenditureBudgWithtObj {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.CeilingsBySector.budgetPreparationMenu);
        await this.page.click(Locators.ChangesMenu.submenuChanges);
        await this.page.click(Locators.ChangesExpenditureBudgWithtObj.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.ChangesExpenditureBudgWithtObj.tabHeader);
        await expect(tabHeader).toHaveText('Изменение расходного бюджета без объекта');
    }
    async selectElementsToList() {
        const steps = {
            step1: async () => {
                await this.page.getByLabel('2024').click();
                await this.page.getByRole('option', { name: '2022' }).click();
            },
            step2: async () => {
                await this.page.getByLabel('№ Документа').click();
                await this.page.getByLabel('№ Документа').fill('45/87-52');
            },
            step3: async () => {
                await this.page.getByLabel('Choose date').click();
                await this.page.getByRole('gridcell', { name: '5', exact: true }).click();
            },
            step4: async () => {
                await this.page.getByLabel('Тип операции').click();
                await this.page.getByRole('option', { name: 'Изменение бюджета' }).click();
            },
            step5: async () => {
                await this.page.getByLabel('Назначение').click();
                await this.page.getByLabel('Назначение').fill(
                    'Расходы - это затраты, которые предприятия несут при ведении своей деятельности. Расходы включают заработную плату, техническое обслуживание, аренду и амортизацию. Расходы вычитаются из выручки для получения прибыли. Предприятиям разрешается вычитать определенные расходы из налогов, чтобы облегчить налоговое бремя и увеличить прибыль.'
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
        await this.page.click(Locators.ChangesExpenditureBudgWithtObj.addLinebutton);

        const modalHeader = await this.page.locator(Locators.ChangesExpenditureBudgWithtObj.modalHeader);
        await expect(modalHeader).toHaveText('Выберите доходную заявку');
        const steps = [
            {
                selector: '#rc_select_1',
                actions: [
                    {
                        filterText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        filterText: /^101.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        title: '101.01.001',
                        action: async (locator) => await this.page.getByTitle(locator).click(),
                    },
                ],
            },
            {
                selector: '#rc_select_2',
                actions: [
                    {
                        filterText: /^Маориф$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        filterText: /^Таҳсилоти умумӣ $/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        text: 'Таҳсилоти ибтидоӣ',
                        action: async (locator) => await this.page.getByText(locator).click(),
                    },
                ],
            },
            {
                selector: '#rc_select_3',
                actions: [
                    {
                        xpath: '//div[5]//div[3]//div[3]/span[2]/span',
                        action: async (locator) => await this.page.locator(locator).click(),
                    },
                    {
                        filterText: /^Пардохти музди меҳнати кормандон ва маблағҷудокуниҳои андозӣ$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        filterText: /^Пардохти музди меҳнати кормандон$/,
                        action: async (locator) => await locator.locator('svg').first().click(),
                    },
                    {
                        text: 'Музди меҳнат',
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
        await this.page.getByText('Список').click();

        const validateHeadings = await this.page.$$(Locators.ChangesExpenditureBudgWithtObj.resultListInSpradsheet);
        const expectedTexts = [
            '№ БЗ',
            'ПБС',
            'Наименование БЗ',
            'Функция',
            'ИФ',
            'Программа',
        ];
        for (let i = 0; i < validateHeadings.length; i++) {
            const headersText = await validateHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
        const tableHeadings1 = await this.page.$$(Locators.ChangesExpenditureBudgWithtObj.firstLineData);
        const expectedTexts1 = [
            '101.01.001',
            'Барномаи рушди фаъолияти китобдори дар ?ум?урии То?икистон барои сол?ои 2005 2015',
            '04.2.01',
            '1.2.1',
            '002',
        ];
        for (let i = 0; i < tableHeadings1.length; i++) {
            const headersText1 = await tableHeadings1[i].textContent();
            console.log(headersText);

            expect(headersText1.trim()).toBe(expectedTexts1[i]);
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
                await this.page.getByRole('radio', { name: '2022' }).click();
            },
            step2: async () => {
                // 2-До
                await this.page.getByLabel('История изменений').getByLabel('Choose date', { exact: true }).click();
                await this.page.getByRole('gridcell', { name: '20' }).nth(1).click();
            },
            step3: async () => {
                // 3-Тип операции
                await this.page.getByLabel('История изменений').getByRole('combobox', { name: 'Тип операции ​' }).click();
                await this.page.getByRole('option', { name: 'Изменение бюджета' }).click();
            },
            step4: async () => {
                // 4-Операции
                await this.page.locator('#rc_select_1').click();
                await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
                await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
                await this.page.getByTitle('101.01.002').click();
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
    }
    
    async listOfSpreadsheet() {
        const tableHeadings = await this.page.$$(Locators.ChangesExpenditureBudgWithtObj.spreadsheetHeaders);
        const expectedTexts = [
            'Год',
            '№БЗ',
            'ЭБК',
            'ПБС',
            'I',
            'II',
            'III',
            'IV',
            'Кв. 4',
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
    async footerInputAreas(){
    const inputFields = await this.page.$$(Locators.ChangesExpenditureBudgWithtObj.footer5InputAreas);
    for (const inputField of inputFields) {
        await expect(inputField).not.toBeEditable(); 
    }
}
}
module.exports = ChangesExpenditureBudgWithtObj;