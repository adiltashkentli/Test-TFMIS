// @ts-check
const { test, expect } = require('@playwright/test');
const FinancialReports = require('../../../pages/BudExecFinancialReports');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Финансовые отчеты', () => {
    let financialReports;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        financialReports = new FinancialReports(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await financialReports.navigateToPage();
    });
    test('Check tab header', async () => {
        await financialReports.checkTabHeader();
    });
    test('Check subcategories', async () => {
        await financialReports.checkSubcategories();
    });
    test('Get relative data', async () => {
        await financialReports.chooseRelativeDataToList();
    });    
    test('Assert 2 buttons', async()=>{
        await financialReports.assert2buttons();
    });    
})