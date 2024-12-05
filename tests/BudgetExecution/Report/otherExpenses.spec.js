// @ts-check
const { test, expect } = require('@playwright/test');
const OtherExpenses = require('../../../pages/BudExecOtherExpenses');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Прочие расходы', () => {
    let otherExpenses;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        otherExpenses = new OtherExpenses(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await otherExpenses.navigateToPage();
    });
    test('Check tab header', async () => {
        await otherExpenses.checkTabHeader();
    });
    test('Get relative list', async () => {
        await otherExpenses.chooseRelativeDataToList();
    });
    test('Assert print excel button', async()=>{
        await otherExpenses.printExcelButtonAssert();
    })
})