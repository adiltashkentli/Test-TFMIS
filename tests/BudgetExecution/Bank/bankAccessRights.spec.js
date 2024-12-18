// @ts-check
const { test, expect } = require('@playwright/test');
const BankAccessRights = require('../../../pages/BudExecBankAccessRights');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Доступ и права (Банк)', () => {
    let bankAccessRights;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        bankAccessRights = new BankAccessRights(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await bankAccessRights.navigateToPage();
    });
    test('Check tab header', async () => {
        await bankAccessRights.checkTabHeader();
    });
    test('Check sucategories headings', async () => {
        await bankAccessRights.checkSubCategoriesHeadings();
    });
    test('Get list with login func', async () => {
        await bankAccessRights.loginAccess();
    });
    test('Get spreadsheet headers', async () => {
        await bankAccessRights.checkSpreadsheetList();
    });    
})