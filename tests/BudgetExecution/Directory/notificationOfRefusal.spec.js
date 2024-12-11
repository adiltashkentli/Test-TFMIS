// @ts-check
const { test, expect } = require('@playwright/test');
const NotificationOfRefusal = require('../../../pages/BudExecNotifOfRefusal');
const Dashboard = require('../../../../pages/Dashboard');


test.describe('Категория: Уведомление об отказе', () => {
    let notificationOfRefusal;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        notificationOfRefusal = new NotificationOfRefusal(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await notificationOfRefusal.navigateToPage();
    });
    test('Check tab header', async () => {
        await notificationOfRefusal.checkTabHeader();
    });
    test('Get relative list', async () => {
        await notificationOfRefusal.inputDataToRelativeList();
    });
    test('Check spreadsheet headers', async () => {
        await notificationOfRefusal.spreadsheetListAssertion();
    });
    test('Increase pagination', async () => {
        await notificationOfRefusal.pagination();
    });
})