// @ts-check
const { test, expect } = require('@playwright/test');
const DirectorySubmenu = require('../../../pages/BudExecDirectorySubmenu');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Подменю: Справочники', () => {
    let directorySubmenu;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        directorySubmenu = new DirectorySubmenu(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await directorySubmenu.navigateToPage();
    });
    test('Check categories list', async () => {
        await directorySubmenu.checkCategoriesList();
    });

})