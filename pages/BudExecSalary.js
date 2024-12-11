const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Salary {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.Salary.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Заработная плата (Получатели)');
    }
    async inputDataToRelativeList() {
        await this.page.locator('#rc_select_1').click();
        const texts = [
            '101-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон',
            '101.01-Дастгоҳи иҷроияи Президенти Ҷумҳурии Тоҷикистон'
        ];        
        for (const text of texts) {
            await this.page.locator('div')
                .filter({ hasText: new RegExp(`^${text}$`) })
                .locator('svg')
                .first()
                .click();
        }        
        await this.page.getByText('101.01.001').click();
        await this.page.getByLabel('Бюджетная заявка').click();
        await this.page.getByRole('option', { name: '132' }).click();
        await this.page.click(Locators.Salary.listButton);
        await this.page.click(Locators.Salary.addButton);
        const modalHeader = this.page.locator(Locators.Salary.modalHeader);
        await expect(modalHeader).toHaveText('Добавить');
        await this.page.fill(Locators.Recipients.inn, '444666222');
        await this.page.fill(Locators.Recipients.description, 'Row Tech');
        await this.page.getByRole('combobox', { name: 'Вид удержания (Перечисление) ​' }).click();
        await this.page.click(Locators.Salary.staffSocialTax);
        await this.page.fill(Locators.Recipients.accNum, '55887744668822');
        await this.page.dblclick(Locators.Recipients.bankID);
        await this.page.click(Locators.Recipients.modalAddButton);
        await this.page.click(Locators.Recipients.cancelBut);
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'ID' },
            { locator: 'row2', text: 'ИНН' },
            { locator: 'row3', text: 'Организации' },
            { locator: 'row4', text: 'БЗ' },
            { locator: 'row5', text: 'Название' },
            { locator: 'row6', text: 'Вид удержания (Перечисление)' },
            { locator: 'row7', text: 'Номер счета' },
            { locator: 'row8', text: 'Банк' },
            { locator: 'row9', text: 'Операции' },
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
module.exports = Salary;