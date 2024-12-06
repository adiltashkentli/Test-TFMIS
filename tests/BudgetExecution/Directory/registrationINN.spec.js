// @ts-check
const { test, expect } = require('@playwright/test');
const RegistrationINN = require('../../../pages/BudExecRegistrationINN');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Регитсрация ИНН', () => {
    let registrationINN;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        registrationINN = new RegistrationINN(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await registrationINN.navigateToPage();
    });
    test('Check tab header', async () => {
        await registrationINN.checkTabHeader();
    });
    test('Get relative list', async () => {
        await registrationINN.inputDataToRelativeList();
    });
    test('Add INN button functionality', async () => {
        await registrationINN.addINNbuttonFunc();
    });
    test('Get spreadsheet list', async () => {
        await registrationINN.spreadsheetListAssertion();
    });
    test('Increase paginatipon', async () => {
        await registrationINN.pagination();
    });

})