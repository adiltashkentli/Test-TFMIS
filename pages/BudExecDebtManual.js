const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class DebtManual {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.DebtManual.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText(' Задолженность ГУП');
    }
    async getRelativeList() {        
            await this.page.locator(Locators.DepartmentalClassification.codeArea).type('RowTech');
            await this.page.click(Locators.GoodsandServices.searchButton);            
    }
    async historyButtonAssert() {        
        const historyButton = await this.page.locator(Locators.DebtManual.historyButton);
        await expect(historyButton).toBeEnabled();
    }
    async addModalFunctionality(){
        await this.page.click(Locators.Salary.addButton);
        await this.page.fill(Locators.DebtManual.modalLoginArea1,'RowTech');
        await this.page.click(Locators.BindingOfCurators.selector);
        await this.page.click(Locators.DebtManual.element2);
        await this.page.click(Locators.DebtManual.selectorBZ);
        await this.page.click(Locators.DebtManual.element3);
        await this.page.fill(Locators.DebtManual.yearInput, '2024');
        await this.page.fill(Locators.DebtManual.quantity, '15');
        await this.page.fill(Locators.DebtManual.modalLoginArea2, 'Maxim');
        await this.page.click(Locators.Recipients.modalAddButton);
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: '-' },
            { locator: 'row2', text: 'Логин' },
            { locator: 'row3', text: 'Имя' },
            { locator: 'row4', text: 'Фамилия' },
            { locator: 'row5', text: 'Код организации' },
            { locator: 'row6', text: 'Наименование организации' },
            { locator: 'row7', text: 'БЗ' },
            { locator: 'row8', text: 'ИНН' },
            { locator: 'row9', text: 'Сумма' },
            { locator: 'row10', text: 'Год' },
            { locator: 'row11', text: 'Операции' },
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.DebtManual[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async footerArea() {
        await this.page.type(Locators.DepartmentalClassification.nameArea, '4500');
        await this.page.type(Locators.DebtManual.footer2Area, '5000');
    }
}
module.exports = DebtManual;