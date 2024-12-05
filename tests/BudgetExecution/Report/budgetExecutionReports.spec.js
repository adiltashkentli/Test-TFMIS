// @ts-check
const { test, expect } = require('@playwright/test');
const BudgetExecutionReports = require('../../../pages/BudExecBudExecReports');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Отчет об исполнении бюджета', () => {
    let budgetExecutionReports;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        budgetExecutionReports = new BudgetExecutionReports(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await budgetExecutionReports.navigateToPage();
    });
    test('Check tab header', async () => {
        await budgetExecutionReports.checkTabHeader();
    });
    test('Check subcategories', async () => {
        await budgetExecutionReports.checkSubcategories();
    });
    test('Get relative data', async () => {
        await budgetExecutionReports.chooseRelativeDataToList();
    });
    test('Assert 3 buttons', async()=>{
        await budgetExecutionReports.assert3Buttons();
    });
    test('Frame to PIVOT button func', async()=>{
        await budgetExecutionReports.frameToPIVOT();
    });
    test('Assert 2 buttons', async()=>{
        await budgetExecutionReports.assert2buttons();
    });    
})