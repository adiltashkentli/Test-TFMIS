const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Contracts {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.Contracts.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Договора');
    }
    async inputDataToRelativeList() {
        const headers = [
            Locators.Contracts.header1,
            Locators.Contracts.header2,
            Locators.Contracts.header3,
            Locators.Contracts.header4,
            Locators.Contracts.header5,
            Locators.Contracts.header6,
            
        ];
    
        for (const header of headers) {
            const locator = this.page.locator(header);
            await expect(locator).toBeEditable();
        }
        await this.page.click(Locators.Contracts.listButton);
    }
    async spreadsheetListAssertion() {
        const rows = [
            { locator: Locators.Contracts.row1, text: '№' },
            { locator: Locators.Contracts.row2, text: 'ID' },
            { locator: Locators.Contracts.row3, text: 'Контракт №' },
            { locator: Locators.Contracts.row4, text: 'Фирма' },
            { locator: Locators.Contracts.row5, text: 'Порядок оплаты' },
            { locator: Locators.Contracts.row6, text: 'Дата' },
            { locator: Locators.Contracts.row7, text: 'Сумма' },
            { locator: Locators.Contracts.row8, text: 'Статус' },
            { locator: Locators.Contracts.row9, text: 'Операции' },
        ];    
        await Promise.all(rows.map(({ locator, text }) =>
            expect(this.page.locator(locator)).toHaveText(text)
        ));
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async addNewContButton(){
        const addNewContract = this.page.locator(Locators.Contracts.addNewContractBetton);
        await expect(addNewContract).toBeEnabled();
    }
    async footerArea(){
        const footerArea = this.page.locator(Locators.Contracts.footerInput);
        await expect(footerArea).toBeEditable();
    }
}
module.exports = Contracts;