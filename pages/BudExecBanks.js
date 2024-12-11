const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Banks {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.Banks.categoryMenu);
    }
    async noDataFromBackend(){
        await this.page.waitForTimeout(2000);
        const alert2 = this.page.locator(Locators.Banks.alert2);
        await expect(alert2).toHaveText("Invalid object name 'row-tfmis-tje.TJKBank'.");
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Банки');
    }
    async inputDataToRelativeList() {
        await this.page.getByRole('textbox', { name: 'Имя банка' }).fill('Амонатбонк');        
        await this.page.getByRole('textbox', { name: 'БИК банка' }).fill('666555444');        
        await this.page.getByLabel('Город').click();
        await this.page.getByRole('listbox', { name: 'Город' }).click();
        const listButton = await this.page.getByText('Список');
        await expect(listButton).toBeEnabled();
        const addButton = await this.page.getByText('Добавить');
        await expect(addButton).toBeEnabled();
        
        
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Тип банка' },
            { locator: 'row2', text: 'Имя банка' },
            { locator: 'row3', text: 'БИК банка' },
            { locator: 'row4', text: 'Корсчет банка' },
            { locator: 'row5', text: 'SWIFT банка(1)' },
            { locator: 'row6', text: 'SWIFT банка(2)' },
            { locator: 'row7', text: 'Адрес банка' },
            { locator: 'row8', text: 'Операции' }            
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.Salary[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }    
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = Banks;