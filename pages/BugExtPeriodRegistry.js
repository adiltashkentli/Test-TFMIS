const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class PeriodRegistry {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.SubmenuIncomes.submenuIncomes);
        await this.page.click(Locators.PeriodRegistry.categoryMenu);

    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.PeriodRegistry.tabHeader);
        await expect(tabHeader).toContainText('Реестр поступления за период');
    }
    async selectElementsToList() {
        const actions = [
            async () => await this.page.getByLabel('Тип счета').first().click(),
            async () => await this.page.getByRole('option', { name: 'Ten' }).click(),
            async () => await this.page.getByLabel('Ten').nth(1).click(),
            async () => await this.page.getByRole('option', { name: 'Twenty' }).click(),
            async () => await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click(),            
            async () => await this.page.getByRole('gridcell', { name: '3', exact: true }).click(),
            async () => await this.page.getByLabel('Choose date', { exact: true }).click(),
            async () => await this.page.locator("(//button[normalize-space()='23'])[1]").click(),
            async () => await this.page.getByLabel('Фильтр(Сумма,(%)Назначения)').fill('15'),
            async () => await this.page.getByText('Список').click(),
          ];
        for (const action of actions) {
            await action();
        }      
    }
    async checkSpreadsheetHeaders() {
        const spreadsheetHeaders = await this.page.$$(Locators.PeriodRegistry.spreadsheetHeaders);
        const expectedTexts = [
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
            'Счет получателя',
            'Получатель',
            'ИНН получателя',
            'Дата валютирования',
            'Статус',
            'Операции'            
        ];
        for (let i = 0; i < spreadsheetHeaders.length; i++) {
            const headersText = await spreadsheetHeaders[i].textContent();
            console.log(headersText);
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
    async editModalFunctionality() {        
        const actions = {
            clickRowButton: async () => await this.page.getByRole('row', { name: '03 0 0 0 0 0 0 0 0 0 0 0 0 0' }).getByRole('button').click(),
            fillDetails: async () => {
                await this.page.getByLabel('Платежное поручение №').click();
                await this.page.getByLabel('Платежное поручение №').fill('12');
                await this.page.getByLabel('Платежное поручение №').press('Tab');
                await this.page.getByLabel('Дата документа').fill('28.11.2024');
                await this.page.getByLabel('Дата документа').press('Tab');
                await this.page.getByRole('textbox', { name: 'Дата валютирования' }).fill('28.11.2024');
                await this.page.getByRole('textbox', { name: 'Дата валютирования' }).press('Tab');
                await this.page.getByRole('textbox', { name: 'Сумма', exact: true }).fill('150');
                await this.page.getByRole('textbox', { name: 'Сумма', exact: true }).press('Tab');
                await this.page.getByLabel('Тип оплаты').fill('Перевод');
                await this.page.getByLabel('Тип оплаты').press('Tab');
                await this.page.getByRole('textbox', { name: 'Статус' }).fill('Активный');
                await this.page.getByRole('textbox', { name: 'Статус' }).press('Tab');
            },
            fillTaxDetails: async () => {
                await this.page.getByLabel('ИНН').nth(2).fill('123456');
                await this.page.getByLabel('ИНН').nth(2).press('ArrowLeft');
                await this.page.getByLabel('ИНН').nth(2).press('ArrowRight');
                await this.page.getByLabel('ИНН').nth(2).fill('123456789');
                await this.page.getByLabel('ИНН').nth(2).press('Tab');
            },
            fillPayerDetails: async () => {
                await this.page.getByLabel('Плательщик', { exact: true }).nth(1).fill('Мокс Фронт');
                await this.page.getByLabel('Плательщик', { exact: true }).nth(1).press('Tab');
                await this.page.getByLabel('БИК').nth(1).fill('987654321');
                await this.page.getByLabel('БИК').nth(1).press('Tab');
                await this.page.getByLabel('БИК').nth(2).fill('852963741');
                await this.page.getByLabel('БИК').nth(2).press('Tab');
            },
            fillBankDetails: async () => {
                await this.page.getByLabel('Банк плательщика').nth(1).fill('Амонатбонк');
                await this.page.getByLabel('Банк плательщика').nth(1).press('Tab');
                await this.page.getByLabel('Счет №').first().fill('20221326547898523654');
                await this.page.getByLabel('Счет №').first().press('Tab');
            },
            fillAdditionalDetails: async () => {
                await this.page.getByLabel('ИНН').nth(3).fill('741852963');
                await this.page.getByLabel('ИНН').nth(3).press('Tab');
                await this.page.getByLabel('Плательщик', { exact: true }).nth(2).fill('Саидзода Хуррам');
                await this.page.getByLabel('Плательщик', { exact: true }).nth(2).press('Tab');
                await this.page.getByLabel('БИК').nth(3).fill('654987321');
                await this.page.getByLabel('БИК').nth(3).press('Tab');
                await this.page.getByLabel('БИК').nth(4).fill('753951456');
                await this.page.getByLabel('БИК').nth(4).press('Tab');
            },
            fillFinalDetails: async () => {
                await this.page.getByLabel('Банк плательщика').nth(2).fill('Ориёнбонк');
                await this.page.getByLabel('Банк плательщика').nth(2).press('Tab');
                await this.page.getByLabel('Счет №').nth(1).fill('20247896541236547896');
                await this.page.getByLabel('Назначение', { exact: true }).click();
                await this.page.getByLabel('Назначение', { exact: true }).click();
                await this.page.getByLabel('Назначение', { exact: true }).fill('БА ТАВАҶҶУҲИ ФАРМОИШГАРОН, ЛОҲАКАШОН, ПУДРАТЧИЁН ВА ДИГАР СУБЪЕКТҲОИ ФАЪОЛИЯТИ ШАҲРСОЗӢ!!!Бо мақсади иҷрои супориши Асосгузори сулҳу ваҳдати миллӣ, Пешвои миллат, Президенти Ҷумҳурии Тоҷикистон муҳтарам Эмомалӣ Раҳмон, ки зимни суханронӣ ба муносибати Рӯзи дониш санаи 1 сентябри соли 2024 баён доштанд, аз ҷониби ташкилотҳои лоиҳакашии Кумита лоиҳаҳои намунавии муассисаҳои таълимии томактабӣ дар 13 намуна таҳия гардида, лоиҳаи кории онҳо аз ташхиси давлатӣ гузаронида шуд. Лоиҳаҳои намунавии мазкур ба субъектҳои фаъолияти шаҳрсозӣ ройгон пешниҳод мегардад.'); 
            },
            finalize: async () => {
                await this.page.getByText('Вернуть документ').click();
                await this.page.getByLabel('Вернуть доход назад на обработку').getByRole('button').click();
            },
        };
        
        for (const action in actions) {
            await actions[action]();
        }        
    }    
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
module.exports = PeriodRegistry;