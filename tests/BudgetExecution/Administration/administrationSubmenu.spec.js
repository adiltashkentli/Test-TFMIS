// @ts-check
const { test, expect } = require('@playwright/test');
const AdministrationSubmenu = require('../../../pages/BudExecAdministrationSubmenu');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Подменю: Администрирование', () => {
    let administrationSubmenu;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        administrationSubmenu = new AdministrationSubmenu(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await administrationSubmenu.navigateToPage();
    });
    test('Check categories list', async () => {
        await administrationSubmenu.checkCategoriesList();
    });

})