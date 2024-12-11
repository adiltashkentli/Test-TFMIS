const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class AccountPlan {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.AccountPlan.categoryMenu);
    }

    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('План счетов');
    }
    async selectDataToRelativeList() {
        await this.page.locator('div').filter({ hasText: /^102-План счетов бухгалтерского учета$/ }).locator('path').nth(1).click();
        await this.page.getByText('102.01').click();
        await this.page.waitForTimeout(5000);
//handle to get INTEGER from element
        const value1 = await this.page.getByLabel('Код').getAttribute('value');
        expect(parseFloat(value1)).toBe(102.01);
//handle to get STRING from element
        const nameValue = this.page.locator('div').filter({ hasText: /^Наименование$/ }).locator('#outlined-basic');
        const value2 = await nameValue.inputValue();
        const valueAsText2 = String(value2);
        expect(valueAsText2).toBe('Вложения во внеоборотные активы');
//handle to get STRING from element
        const description = this.page.getByLabel('Описание');
        const value3 = await description.inputValue();
        const valueAsText3 = String(value3);
        expect(valueAsText3).toMatch('1. Приобретение земельных участков');       
    }
    async headerButtonsAssertion() {
        const copyLastYearBut = await this.page.locator('div').filter({ hasText: /^Скопировать предыдущий год$/ }).getByRole('img').hover();
        const copyLastYear = await this.page.locator(Locators.AccountPlan.text1);
        expect(copyLastYear).toContainText('Скопировать предыдущий год');

        const exportFromSystemBut = await this.page.locator('div').filter({ hasText: /^Экспорт из системы$/ }).getByRole('img').hover();
        const exportFromSystem = await this.page.locator(Locators.AccountPlan.text2);
        expect (exportFromSystem).toContainText('Экспорт из системы');
        
        const importfromfileBut = await this.page.locator('div').filter({ hasText: /^Импорт из файла$/ }).locator('path').hover();
        const importfromfile = await this.page.locator(Locators.AccountPlan.text3);
        expect (importfromfile).toContainText('Импорт из файла');        
    }
    async saveButtonFunc(){
        await this.page.locator('div').filter({ hasText: /^102-План счетов бухгалтерского учета$/ }).locator('path').nth(1).click();
        await this.page.locator('div').filter({ hasText: /^102\.05-string1$/ }).locator('div svg').click();
        // 2 problematic input areas
        await this.page.getByLabel('Код').clear();
        await this.page.getByLabel('Код').type('102.04');
        
        await this.page.locator('div').filter({ hasText: /^Наименование$/ }).locator('#outlined-basic').clear();
        await this.page.locator('div').filter({ hasText: /^Наименование$/ }).locator('#outlined-basic').type('Общие положения');
        await this.page.getByLabel('Описание').fill('');
        await this.page.getByLabel('Описание').type('Синтетические счета бухгалтерского учета в Плане счетов расположены в порядке уменьшения ликвидности.');

        await this.page.click(Locators.PayersBudgetOrg.saveButton);
        const alert = this.page.locator(Locators.AccountPlan.alert);
        await expect(alert).toContainText('Классификация успешно сохранена!');
    }   
    async header2ButtonsAssertion() {
        const report = this.page.locator(Locators.AccountPlan.reportButton);
        await expect(report).toBeEnabled();

        const deleteButton = this.page.locator(Locators.AccountPlan.deleteButton);
        await expect(deleteButton).toBeEnabled();
    }
}
module.exports = AccountPlan;