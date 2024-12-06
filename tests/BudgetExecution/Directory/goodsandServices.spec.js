// @ts-check
const { test, expect } = require('@playwright/test');
const OperationalDay = require('../../../pages/BudExecOperationalDay');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Товары и услуги', () => {
    let operationalDay;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        operationalDay = new OperationalDay(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await operationalDay.navigateToPage();
    });
    test('Check tab header', async () => {
        await operationalDay.checkTabHeader();
    });
    test('Check search functionality', async () => {
        await operationalDay.searchFunctionality();
    });
    test('Assert close button', async () => {
        await operationalDay.closeButtonFunc();
    });

})