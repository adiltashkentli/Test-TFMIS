// @ts-check
const { test, expect } = require('@playwright/test');
const OperationalDay = require('../../../pages/BudExecOperationalDay');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Операционный день', () => {
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
    test('Set new date', async () => {
        await operationalDay.chooseDate();
    });
    test('Assert close button', async () => {
        await operationalDay.closeButtonFunc();
    });

})