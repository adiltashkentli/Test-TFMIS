const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Recipients {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.Recipients.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Получатели (Поставщики)');
    }
    async inputDataToRelativeList() {
        await this.page.locator('#rc_select_1').click();
        await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.getByText('101.01.001').click();
        //await this.page.fill(Locators.Recipients.inputArea, '951357852')
        await this.page.click(Locators.Recipients.searchAndAdd);
        await this.page.click(Locators.Recipients.dataAdd);

        const rows = [
            { locator: Locators.Recipients.row1, text: 'БИК' },
            { locator: Locators.Recipients.row2, text: 'Банк' },
            { locator: Locators.Recipients.row3, text: 'Номер счета' },
            { locator: Locators.Recipients.row4, text: '-' }
        ];    
        await Promise.all(rows.map(({ locator, text }) =>
            expect(this.page.locator(locator)).toHaveText(text)
        ));

        const actions = [
            () => this.page.click(Locators.Recipients.add2button),
            () => this.page.dblclick(Locators.Recipients.bankID),
            () => this.page.click(Locators.Recipients.accNum),
            () => this.page.fill(Locators.Recipients.comment, 'No data from backend yet!'),
            () => this.page.click(Locators.Recipients.addButton),
            () => this.page.click(Locators.Recipients.cancel),
            () => this.page.reload()
        ];
        
        for (const action of actions) {
            await action();
        }
    }
    async spreadsheetListAssertion() {
        const rows = [
            { locator: Locators.Recipients.spsheet1, text: 'ИНН' },
            { locator: Locators.Recipients.spsheet2, text: 'Oрг. ' },
            { locator: Locators.Recipients.spsheet3, text: 'Короткое название' }            
        ];    
        await Promise.all(rows.map(({ locator, text }) =>
            expect(this.page.locator(locator)).toHaveText(text)
        ));
    }
    
    async addButton(){
        await this.page.click(Locators.Recipients.add1button);
        await this.page.fill(Locators.Recipients.inn, '555222999');
        await this.page.fill(Locators.Recipients.description, 'Row Tech');
        await this.page.click(Locators.Recipients.BZname);
        await this.page.locator('div').filter({ hasText: /^101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.locator('div').filter({ hasText: /^101\.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон$/ }).locator('svg').first().click();
        await this.page.getByText('101.01.001').click();
        await this.page.fill(Locators.Recipients.receipFunc, 'No data from backend yet, bro!');
        await this.page.click(Locators.Recipients.modalAddButton);
        const backendBug = this.page.locator(Locators.Recipients.alert);
        await expect(backendBug).toHaveText('Ошибка при добавлении заявки!')
        await this.page.click(Locators.Recipients.cancelBut);
        await this.page.reload();
    }
    async deleteButtonAssert(){
        const button = this.page.locator(Locators.Recipients.deleteButton);
        await expect(button).toBeEnabled();
    }
    async pagination() {
        await this.page.locator("(//div[@id=':r17:'])[1]").click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = Recipients;