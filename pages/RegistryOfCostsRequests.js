const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class RegistryOfCostsRequests {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.CeilingsBySector.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
        await this.page.click(Locators.RegistryOfCostsRequests.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.RegistryOfCostsRequests.tabHeader);
        await expect(tabHeader).toHaveText('Реестр расходных заявок');
    }
    async selectElementsToList() {        
        const steps = [
            {
                label: 'Год',
                action: async () => {
                    await this.page.getByLabel('Год').click();
                    await this.page.getByRole('option', { name: '2021' }).click();
                },
            },
            {
                label: 'Шаг',
                action: async () => {
                    await this.page.getByLabel('Шаг').click();
                    await this.page.getByRole('option', { name: 'Вариант МФ РТ' }).click();
                },
            },
            {
                label: 'Наименование организации',
                action: async () => {
                    await this.page.locator('#rc_select_1').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^103-Агентии назорати давлатии молиявӣ ва мубориза бо коррупсияи Ҷумҳурии Тоҷикистон$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^103.01-Дастгоҳи марказии Агентии назорати давлатии молиявӣ ва мубориза бо коррупсияи Ҷумҳурии Тоҷикистон$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page.getByText('103.01.001').click();
                },
            },
            {
                label: 'Функция',
                action: async () => {
                    await this.page.locator('#rc_select_2').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^Тандурустӣ$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^ Ҳифзи саломатии аҳолӣ $/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page.getByText(' Маркази хун ').click();
                },
            },
            {
                label: 'Источник',
                action: async () => {
                    await this.page.locator('#rc_select_3').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^Тандурустӣ$/ })
                        .locator('svg')
                        .nth(2)
                        .click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^Беморхонаҳо$/ })
                        .locator('svg')
                        .nth(2)
                        .click();
                    await this.page.getByRole('tree').getByText('Беморхонаҳои бисёрсоҳавӣ ').first().click();
                },
            },
            {
                label: 'Программа',
                action: async () => {
                    await this.page.locator('#rc_select_4').click();
                    await this.page.getByText('Харо?от барои ниго?дории ма?омоти идоракунии давлат?').click();
                },
            },
            {
                label: 'Наименование территории',
                action: async () => {
                    await this.page.locator('#rc_select_5').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^03-Вилояти Суғд$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page.getByText('-Шаҳри Истравшан').click();
                },
            },
            {
                label: 'Тип БЗ',
                action: async () => {
                    await this.page.locator('#rc_select_6').click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^04-Расходы для развития отрасли$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page
                        .locator('div')
                        .filter({ hasText: /^0401-Расходы для развития отрасли$/ })
                        .locator('svg')
                        .first()
                        .click();
                    await this.page.getByText('-(TJK)').click();
                },
            },
            {
                label: 'Тип расхода',
                action: async () => {
                    await this.page.locator('#rc_select_7').click();
                    await this.page.getByText('Сармоягузориҳои асосӣ', { exact: true }).click();
                },
            },
            {
                label: 'Пользователи',
                action: async () => {
                    await this.page.locator('#rc_select_8').click();
                    await this.page.getByText('Инвеститсияҳои Ҳукуматӣ', { exact: true }).nth(1).click();
                },
            },
        ];
        for (const step of steps) {
            console.log(`Executing step: ${step.label}`);
            await step.action();
        }
        await this.page.click(Locators.RegistryOfCostsRequests.listButton);
    }
    async listOfSpreadsheet() {        
        const tableHeadings = await this.page.$$(Locators.RegistryOfCostsRequests.spreadsheetHeaders);
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
            'Статус'
        ];
        for (let i = 0; i < tableHeadings.length; i++) {
            const headersText = await tableHeadings[i].textContent();
            console.log(headersText);

            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async allowSignButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.allowSignButton)).toBeVisible();
    }
    async approveButtonAssertion() {
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.approveButton)).toBeVisible();
    }
    async endorseButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.endorseButton)).toBeVisible();
    }
    async agreedButtonAssertion(){
        await expect(this.page.locator(Locators.IncomeApplicationRegistry.agreedButton)).toBeVisible();
    }
}
module.exports = RegistryOfCostsRequests;