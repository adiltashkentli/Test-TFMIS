const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class OperationalDay {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.GoodsandServices.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Товары и услуги');
    }
    async searchFunctionality() {
        await this.page.locator(Locators.GoodsandServices.inputArea).fill('кроме акций');        

        const result = this.page.locator(Locators.GoodsandServices.resultItem);
        await expect(result).toContainText('кроме акций');
    }
    async chooseDate() {
        const currentDay = await this.page.locator(Locators.OperationalDay.currentDay);
        await expect(currentDay).toHaveText('01-12-2024');

        await this.page.click(Locators.OperationalDay.dateSelector);
        await this.page.click(Locators.OperationalDay.date);
        await this.page.click(Locators.OperationalDay.saveButton);

        const alert = await this.page.locator(Locators.OperationalDay.alert);
        await expect(alert).toHaveText('Операционная дата обновлена!');

        const changedDate = await this.page.locator(Locators.OperationalDay.currentDay);
        await expect(changedDate).toHaveText('10-12-2024');
    }
    
    async closeButtonFunc() {
        const closeButton = this.page.locator(Locators.OperationalDay.closeButton);
        await expect(closeButton).toBeVisible();
        await expect(closeButton).toBeEnabled();
    }
        
}
module.exports = OperationalDay;