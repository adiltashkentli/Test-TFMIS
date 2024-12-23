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
        await this.page.click(Locators.Processes.categoryMenu);
    }
    async getRelativeList() {
        await this.page.getByLabel('Код', '00057');
        await this.page.click(Locators.RegistryOfCostsRequests.listButton);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Процессы');
    }
    async spreadsheetListAssertion() {
        const headers = [
            { locator: 'row1', text: 'Код' },
            { locator: 'row2', text: 'Название' },
            { locator: 'row3', text: 'ЭБК' },
            { locator: 'row4', text: 'Тип оплаты' },
            { locator: 'row5', text: 'Операции' }
        ];
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.Processes[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }

    async addModalFunc() {
        await this.page.getByText('Добавить').click();
        await this.page.getByRole('spinbutton', { name: 'Код', exact: true }).click();
        await this.page.getByRole('spinbutton', { name: 'Код', exact: true }).fill('000057');        
        await this.page.getByLabel('Наименование (таджикский)').fill('13 маош');
        await this.page.getByLabel('Наименование (таджикский)').press('ControlOrMeta+ArrowLeft');
        await this.page.getByLabel('Наименование (таджикский)').press('Shift+ArrowLeft');
        await this.page.getByLabel('Наименование (таджикский)').fill('13-маош');
        await this.page.getByLabel('Наименование (русский)').fill('13-я зарплата');        
        await this.page.getByLabel('Наименование (английский)').fill('13-salary');        
        await this.page.getByRole('textbox', { name: 'ЭБК' }).fill('Харажотхо аз ширкат');
        await this.page.getByLabel('Код типа оплаты').fill('456875214');        
        await this.page.getByLabel('Процесс без тендера').check();
        await this.page.getByLabel('Приобретение услуг').check();
        await this.page.getByLabel('Приобретение товаров').check();
        await this.page.getByLabel('Строительство').check();
        await this.page.getByRole('button', { name: 'Сохранить' }).click();        
        //await this.page.getByRole('button', { name: 'Отмена' }).click();
    }

    async editData() {
        await this.page.waitForTimeout(2000);
        await this.page.locator('//*[@id="root"]//div[2]/div[2]/div/div[1]/div[6]/div/div[1]').click();
        await this.page.getByRole('spinbutton', { name: 'Код', exact: true }).fill('4587');
        
        const data1 = this.page.getByLabel('Наименование (таджикский)');
        await expect(data1).toHaveValue('Хариди молҳо ва хизматрасониҳо');
        
        const data2 = this.page.getByLabel('Наименование (русский)');
        await expect(data2).toHaveValue('Приобретение товаров и услуг');
        
        const data3 = this.page.getByLabel('Наименование (английский)');
        await expect(data3).toHaveValue('Acquisition of goods and services');
        
        await this.page.getByRole('textbox', { name: 'ЭБК' }).fill('852963741');        
        await this.page.getByLabel('Код типа оплаты').fill('951357852');
        await this.page.getByLabel('Приобретение услуг').check();
        await this.page.getByRole('button', { name: 'Сохранить' }).click();
        const succsessfulAlert = this.page.getByText('Данни успешно изменени');
        await expect(succsessfulAlert).toHaveText('Данни успешно изменени');
    }
    async deleteData(){
        await this.page.click('//*[@id="root"]//div[6]/div[6]/div/div[2]');
        const alert = this.page.locator('//div[2]/div/div[2]//div/div[2]/div/p');
        await expect(alert).toHaveText('Вы действительно хотите удалить?');
        await this.page.click("(//span[contains(text(),'Удалить')])[1]");
        const succsessfulAlert = this.page.getByText('Данные успешно удалини');
        await expect(succsessfulAlert).toHaveText('Данные успешно удалини');
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
}
module.exports = AccrualsAndDeductions;