const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');
const { text } = require('stream/consumers');

class Administration {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.Outcomes.budgetPreparationMenu);
        await this.page.click(Locators.Administration.submenuAdministration);
        await this.page.click(Locators.Administration.categoryAdditObjOfBSlevel);
    }
    async checkSubmenuList() {
        const submenuList = await this.page.$$(Locators.Administration.categoriesOfSubmenu);

        const expectedSubmenuList = [
            'Объекты дополнительного уровня БЗ',
            'Администрирование типов бюджетных заявок'
        ];
        for (let i = 0; i < submenuList.length; i++) {
            const submenuText = await submenuList[i].textContent();
            console.log(submenuText);
            expect(submenuText.trim()).toBe(expectedSubmenuList[i]);
        }
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.Administration.tabHeader);
        await expect(tabHeader).toHaveText('Объекты дополнительного уровня БЗ');
    }
    async selectElementsToList() {
        // Define an array of steps with the actions as functions
        const steps = [
            async () => {
                // Step 1: Год
                await this.page.getByText('2024').click();
                await this.page.getByRole('option', { name: '2023' }).first().click();
            },
            async () => {
                // Step 2: Наименование организации
                await this.page.locator('#rc_select_1').click();
                await this.page.locator('div')
                    .filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ })
                    .locator('svg')
                    .first()
                    .click();
                await this.page.locator('div')
                    .filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ })
                    .locator('path')
                    .first()
                    .click();
                await this.page.getByText('101.01.003').click();
            },
            async () => {
                // Step 3: Наименование территории
                await this.page.locator('#rc_select_2').click();
                await this.page.locator('div')
                    .filter({ hasText: /^03-Вилояти Суғд$/ })
                    .locator('svg')
                    .first()
                    .click();
                await this.page.getByText('-Шаҳри Конибодом').click();
            },
            async () => {
                // Step 4: Тип проекта
                await this.page.getByLabel('Год').nth(1).click();
                await this.page.getByRole('option', { name: 'Строительный обьект' }).click();
                await this.page.getByText('Список').click();
            },
        ];
    
        // Initialize a counter
        let index = 0;
    
        // Execute steps using a while loop
        while (index < steps.length) {
            await steps[index](); // Execute the current step
            index++; // Move to the next step
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
module.exports = Administration;