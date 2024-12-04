const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class TravelExpensesRegistry {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
        await this.page.click(Locators.TravelExpensesRegistry.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Реестр Командировочный расходов');
    }
    async chooseRelativeDataToList() {
        const actions = [
            { type: 'getByLabelClick', locator: 'div', filter: { hasText: /^От$/ }, label: 'Choose date' },
            { type: 'getByLabelGetByRoleClick', label: 'декабрь', role: 'gridcell', roleOptions: { name: '1', exact: true } },
            { type: 'getByLabelClick', label: 'Choose date', exact: true },
            { type: 'getByRoleClick', role: 'gridcell', roleOptions: { name: '26' }, nth: 1 },
            { type: 'getByLabelClick', label: 'Организации', first: true },
            { type: 'getByRoleClick', role: 'option', roleOptions: { name: 'Ten' } },
            { type: 'locatorClick', locator: '(//*[@id="demo-simple-select"])[2]' },
            { type: 'getByRoleClick', role: 'option', roleOptions: { name: 'Twenty' } },
            { type: 'getByLabelFill', label: 'Сумма', first: true, value: '340' },
            { type: 'getByLabelFill', label: 'Количество', value: '85' },
            { type: 'getByLabelFill', label: 'Итого', value: '6500' },
            { type: 'getByTextClick', text: 'Список' }
        ];
    
        for (let action of actions) {
            console.log('Executing action:', action);
    
            switch (action.type) {
                case 'getByLabelClick':
                    let labelLocator = this.page.locator(action.locator || 'div')
                        .filter(action.filter || {})
                        .getByLabel(action.label, { exact: action.exact || false });
                    if (action.first) {
                        labelLocator = labelLocator.first();
                    }
                    await labelLocator.click();
                    break;
    
                case 'getByLabelGetByRoleClick':
                    await this.page.getByLabel(action.label)
                        .getByRole(action.role, action.roleOptions)
                        .click();
                    break;
    
                case 'getByRoleClick':
                    let roleLocator = this.page.getByRole(action.role, action.roleOptions || {});
                    if (action.nth !== undefined) roleLocator = roleLocator.nth(action.nth);
                    await roleLocator.click();
                    break;
    
                case 'locatorClick':
                    await this.page.locator(action.locator).click();
                    break;
    
                case 'getByLabelFill':
                    let fillLocator = this.page.getByLabel(action.label);
                    if (action.first) {
                        fillLocator = fillLocator.first();
                    }
                    await fillLocator.fill(action.value);
                    break;
    
                case 'getByTextClick':
                    await this.page.getByText(action.text).click();
                    break;
    
                default:
                    throw new Error(`Unknown action type: ${action.type}`);
            }
        }
    }    
    async checkSpreadsheetHeaders() {
        const headers = [
            { locator: 'row1', text: '№' },
            { locator: 'row2', text: 'Назначение' },
            { locator: 'row3', text: 'ПБС' },
            { locator: 'row4', text: 'Дата' },
            { locator: 'row5', text: 'Сумма' },
            { locator: 'row6', text: 'Тип платежа' },
            { locator: 'row7', text: 'Чек' },
            { locator: 'row8', text: 'Статус' },
            { locator: 'row9', text: 'Операции' },
        ];    
        await Promise.all(
            headers.map(async ({ locator, text }) => {
                const row = await this.page.locator(Locators.TravelExpensesRegistry[locator]);
                await expect(row).toHaveText(text);
            })
        );
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    async header2buttonAssert() {
        const buttons = [
            Locators.TravelExpensesRegistry.acceptToExecButton,
            Locators.TravelExpensesRegistry.approveButton
        ];    
        await Promise.all(buttons.map(async button => {
            const locator = await this.page.locator(button);
            await expect(locator).toBeEnabled();
        }));
    }
    
}
module.exports = TravelExpensesRegistry;