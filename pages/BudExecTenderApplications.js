const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');
const exp = require('constants');
const { exec } = require('child_process');


class TenderApplications {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.TenderApplications.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Тендерные заявки');
    }
    async chooseRelativeDataToList() {
        await this.page.locator('#rc_select_1').click();
        await this.page
            .locator('div')
            .filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ })
            .locator('svg')
            .first()
            .click();
        await this.page
            .locator('div')
            .filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ })
            .locator('svg')
            .first()
            .click();
        await this.page.getByText('101.01.001').click();
        await this.page.getByLabel('БЗ').first().click();
        await this.page.getByRole('option', { name: '132' }).click();
        await this.page.getByLabel('132').nth(1).click();
        await this.page.getByRole('option', { name: '-Сохтмони толори мачлисгох' }).click();
        await this.page.getByText('Список').click();
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(3000);
        //assertion list data (this execute after adding finc from back)
        /*const elementsToValidate = [
            { locator: this.page.locator(Locators.TenderApplications.dataID), expectedText: '88/56' },
            { locator: this.page.locator(Locators.TenderApplications.dataPBS), expectedText: '10101001-Асадулло Гуломов' },
            { locator: this.page.locator(Locators.TenderApplications.dataNameSur), expectedText: 'Асадулло Гуломов-Шириншох Шохтемур' },
        ];
        for (const { locator, expectedText } of elementsToValidate) {
            await expect(locator).toHaveText(expectedText);
        }*/

        await this.page.click("(//p[contains(text(),'Добавить новый документ')])[1]");
        await this.page.getByRole('checkbox').check();
        await this.page.getByText('Добавить строку').click();
        await this.page.getByTestId('SearchIcon').click();
        await this.page.locator('svg > path:nth-child(2)').first().click();
        await this.page.locator('div:nth-child(2) > .ant-tree-switcher > div > .anticon > svg').click();
        await this.page.locator('div:nth-child(3) > .ant-tree-switcher > div').click();
        await this.page
            .getByText('Заработная плата в натуральном выражении-2111-2-510200 - 2111 - 2 - 510200')
            .click();
        const typeInTextbox1 = async (locator, text) => {
            const textbox = this.page.locator(locator);
            await textbox.click();
            await this.page.keyboard.type(text);
        };

        await typeInTextbox1("(//span[@class='MuiChip-label MuiChip-labelMedium css-14vsv3w'][normalize-space()='1'])[2]", '25');
        await typeInTextbox1("(//span[@class='MuiChip-label MuiChip-labelMedium css-14vsv3w'][normalize-space()='0'])[1]", '500');

        await this.page.getByText('Добавить строку').click();
        await this.page
            .getByRole('row', { name: 'н/и 1 0 0' })
            .getByTestId('SearchIcon')
            .click();
        await this.page
            .locator('div:nth-child(3) > .ant-tree-switcher > div > .anticon > svg > path:nth-child(2)')
            .click();
        await this.page
            .locator('div:nth-child(4) > .ant-tree-switcher > div > .anticon > svg')
            .click();
        await this.page
            .locator("(//*[name()='svg'])[55]")
            .click();

        const typeInTextbox2 = async (locator, text) => {
            const textbox = this.page.locator(locator);
            await textbox.click();
            await this.page.keyboard.type(text);
        };

        await typeInTextbox2("//div[@class='MuiDataGrid-row MuiDataGrid-row--lastVisible']//span[@class='MuiChip-label MuiChip-labelMedium css-14vsv3w'][normalize-space()='1']", '10');
        await typeInTextbox2('//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/div/div[2]/div[7]/div/span', '250');
        //assertion        
        const pointerEventsValue = await this.page.getByRole('textbox', { name: 'Сумма' }).evaluate(el =>
            window.getComputedStyle(el).pointerEvents
        );
        expect(pointerEventsValue).toBe('auto');

        await this.page.getByRole('textbox', { name: 'Сумма' }).click();
        // Locating the elements        
        const value1Locator = this.page.locator(Locators.TenderApplications.value1);
        const value2Locator = this.page.locator(Locators.TenderApplications.value2);
        const resultLocator = this.page.getByRole('textbox', { name: 'Сумма' });

        const value1 = await value1Locator.textContent();
        const value2 = await value2Locator.textContent();
        if (value1 && value2) {

            const number1 = parseFloat(value1);
            const number2 = parseFloat(value2);
            const expectedResult = number1 + number2;
            const actualResultText = await resultLocator.inputValue();
            const actualResult = parseFloat(actualResultText);

            expect(actualResult).toBe(expectedResult);
        }
        await this.page.getByText('Сохранить список').click();
        const alert = this.page.locator(Locators.TenderApplications.alert);
        await expect(alert).toHaveText('Список сохранен!')

        await this.page.getByText('След').click();

        const nextPageHeader = await this.page.locator(Locators.TenderApplications.nextPageHeader);
        await expect(nextPageHeader).toHaveText('Организация, которая покупает');
        await this.page.locator('div').filter({ hasText: /^Дата утверждения$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).first().click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByRole('gridcell', { name: '5', exact: true }).nth(1).click();

        const inputs1 = [
            { locator: Locators.TenderApplications.prevInput1, value: 'Максим Шосафоев' },
            { locator: Locators.TenderApplications.prevInput2, value: 'Асадулло Гуломов' },
            { locator: Locators.TenderApplications.prevInput3, value: '88/56' },
            { locator: Locators.TenderApplications.prevInput4, value: 'Elit-Stroy-Servis' },
            { locator: Locators.TenderApplications.prevInput5, value: 'Шириншох Шохтемур' },
            { locator: Locators.TenderApplications.prevInput6, value: 'Локальный' },
            { locator: Locators.TenderApplications.prevInput7, value: 'ISO' },
            { locator: Locators.TenderApplications.prevInput8, value: 'Стандарт' },
            { locator: Locators.TenderApplications.prevInput9, value: 'Стандарт' },
            { locator: Locators.TenderApplications.prevInput10, value: 'Транспортный' },
            { locator: Locators.TenderApplications.prevInput11, value: 'г.Душанбе' },
            { locator: Locators.TenderApplications.prevInput12, value: '15' },
            { locator: Locators.TenderApplications.prevInput13, value: 'Госстрахование' },
            { locator: Locators.TenderApplications.prevInput14, value: '2 год' },     
          ];          
          for (const input of inputs1) {
            await this.page.fill(input.locator, input.value);
          }        
       
        await this.page.getByText('След').click();

        const inputs2 = [
            { locator: Locators.TenderApplications.lastPageInput1, value: '5000' },
            { locator: Locators.TenderApplications.lastPageInput2, value: 'Перевод' },
            { locator: Locators.TenderApplications.lastPageInput3, value: '15' },
            { locator: Locators.TenderApplications.lastPageInput4, value: '20' },
            { locator: Locators.TenderApplications.lastPageInput5, value: '5' },
            { locator: Locators.TenderApplications.lastPageInput6, value: 'Точики' },
            { locator: Locators.TenderApplications.lastPageInput7, value: '3 месяц' },
            { locator: Locators.TenderApplications.lastPageInput8, value: 'Мактуби кафолати' },
            { locator: Locators.TenderApplications.lastPageInput9, value: '1 месяц' }
          ];
          
          for (const input of inputs2) {
            await this.page.fill(input.locator, input.value);
          }
          
          
        await this.page.getByText('Сохранить').first().click();

    const actions = [
        {
            element: this.page.locator(Locators.TenderApplications.alert),
            method: 'toHaveText',
            value: 'Успешно сохранено!',
        },
        {
            element: this.page.getByText('Добавить строку'),
            method: 'toBeEnabled',
        },
        {
            element: this.page.getByText('Сохранить').nth(1),
            method: 'toBeEnabled',
        },
        {
            element: this.page.getByText('Готово к утверждению'),
            method: 'toBeEnabled',
        },
        {
            element: this.page.getByText('Печать'),
            method: 'toBeEnabled',
        },
    ];

    for (const { element, method, value } of actions) {
        await expect(element)[method](value);
    }

    }

    async spreadsheetListAssertion() {
        const rows = [
            { locator: Locators.SomoniPaymentsReg.row, text: '№' },
            { locator: Locators.SomoniPaymentsReg.row1, text: 'Дата' },
            { locator: Locators.SomoniPaymentsReg.row2, text: 'ПБС' },
            { locator: Locators.SomoniPaymentsReg.row3, text: 'Коды: БЗ-Объект' },
            { locator: Locators.SomoniPaymentsReg.row4, text: 'Вид тендера' },
            { locator: Locators.SomoniPaymentsReg.row5, text: 'Сумма' },
            { locator: Locators.SomoniPaymentsReg.row6, text: 'Утверждения(ФИО) АПЗ-БО' },
            { locator: Locators.SomoniPaymentsReg.row7, text: 'Статус' },
            { locator: Locators.SomoniPaymentsReg.row8, text: 'Операции' },
        ];
        await Promise.all(rows.map(({ locator, text }) =>
            expect(this.page.locator(locator)).toHaveText(text)
        ));
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = TenderApplications;