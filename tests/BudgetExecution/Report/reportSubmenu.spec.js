// @ts-check
const { test, expect } = require('@playwright/test');
const ReportSubmenu = require('../../../pages/BudExecReportSubmenu');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Подменю: Отчет', () => {
    let reportSubmenu;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        reportSubmenu = new ReportSubmenu(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await reportSubmenu.navigateToPage();
    });
    test('Check categories list', async () => {
        await reportSubmenu.checkCategoriesList();
    });

})