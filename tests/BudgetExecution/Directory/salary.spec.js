// @ts-check
const { test, expect } = require('@playwright/test');
const Salary = require('../../../pages/BudExecSalary');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Заработная плата (Получатели)', () => {
    let salary;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        salary = new Salary(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await salary.navigateToPage();
    });
    test('Check tab header', async () => {
        await salary.checkTabHeader();
    });
    test('Get relative list', async () => {
        await salary.inputDataToRelativeList();
    });
    test('Check spreadsheet headers', async () => {
        await salary.spreadsheetListAssertion();
    });
    test('Increase pagination', async () => {
        await salary.pagination();
    });
})