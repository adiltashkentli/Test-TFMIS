// @ts-check
const { test, expect } = require('@playwright/test');
const TenderApplications = require('../../../pages/BudExecTenderApplications');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Тендерные заявки', () => {
    let tenderApplications;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        tenderApplications = new TenderApplications(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await tenderApplications.navigateToPage();
    });
    test('Check tab header', async () => {
        await tenderApplications.checkTabHeader();
    });
    test('Get relative list', async () => {
        await tenderApplications.chooseRelativeDataToList();
    });    
    test('Get spreadsheet list', async () => {
        await tenderApplications.spreadsheetListAssertion();
    });
    test('Increase paginatipon', async () => {
        await tenderApplications.pagination();
    });

})