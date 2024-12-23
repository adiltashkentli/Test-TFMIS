// @ts-check
const { test, expect } = require('@playwright/test');
const Processes = require('../../../pages/BudExecProcesses');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Процессы', () => {
    let processes;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        processes = new Processes(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await processes.navigateToPage();
    });
    test('Check tab header', async () => {
        await processes.checkTabHeader();
    });
    test('Get relative list', async () => {
        await processes.getRelativeList();
    });

    test('Check spreadsheet headings', async () => {
        await processes.spreadsheetListAssertion();
    });
    test('Add modal functionality', async () => {
        await processes.addModalFunc();
    });
    test('Edit data functionality', async () => {
        await processes.editData();
    });
    test('Delete data functionality', async () => {
        await processes.deleteData();
    });
    test('Increade pagination', async () => {
        await processes.pagination();
    }); 
})