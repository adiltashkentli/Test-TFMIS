const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class AccrualsAndDeductions {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.AdministrationSubmenu.submenu);
        await this.page.click(Locators.AccrualsAndDeductions.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Начисление и удержание');
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Название' },
            { locator: 'row2', text: 'ЭБК' },
            { locator: 'row3', text: 'План счетов' },
            { locator: 'row4', text: 'Тип' },
            { locator: 'row5', text: 'Процесс' },
            { locator: 'row6', text: 'Операции' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.PayersBudgetOrg[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async addModalFunc() {
        await this.page.getByText('Добавить').click();
        await this.page.getByRole('textbox', { name: 'Название' }).fill('Row Tech');
        await this.page.getByRole('textbox', { name: 'ЭБК' }).fill('IT Services');
        await this.page.getByRole('textbox', { name: 'План счетов' }).fill('Individual');
        await this.page.getByRole('combobox', { name: 'Тип ​' }).click();
        await this.page.getByRole('option', { name: 'Начисления' }).click();
        await this.page.getByRole('combobox', { name: 'Процесс ​' }).click();
        await this.page.getByRole('option', { name: 'Хароҷотҳо барои ҳайати кормандон(Музди меҳнати асосӣ) - (Хароҷотҳо барои ҳайати ' }).click();
        await this.page.getByRole('button', { name: 'Сохранить' }).click();
        
    }
    async editData() {
        await this.page.waitForTimeout(5000);        
        await this.page.locator('//*[@id="root"]//div[2]/div[2]/div/div[1]/div[7]/div/div[1]').click();
        await this.page.getByRole('textbox', { name: 'ЭБК' }).fill('');
        await this.page.getByRole('textbox', { name: 'ЭБК' }).type('Row Tech');
        await this.page.getByRole('textbox', { name: 'План счетов' }).fill('5.10.100.01');
        await this.page.locator("(//div[@id='type'])[1]").click();
        await this.page.getByRole('option', { name: 'Перечисления' }).click();
        await this.page.getByLabel('Хароҷотҳо барои ҳайати кормандон(Музди меҳнати асосӣ) - (Хароҷотҳо барои ҳайати ').click();
        await this.page.getByRole('option', { name: 'Хароҷотҳо барои ҳайати кормандон(Музди меҳнати асосӣ) - (Хароҷотҳо барои ҳайати ' }).click();
        await this.page.getByRole('button', { name: 'Сохранить' }).click();
        const succsessfulAlert = this.page.getByText('Заявка успешно добавлена');
        await expect(succsessfulAlert).toHaveText('Заявка успешно добавлена');
    }
    
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = AccrualsAndDeductions;