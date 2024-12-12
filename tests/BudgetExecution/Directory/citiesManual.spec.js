// @ts-check
const { test, expect } = require('@playwright/test');
const CitiesManual = require('../../../pages/BudExecCitiesManual');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Справочник городов', () => {
    let citiesManual;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        citiesManual = new CitiesManual(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await citiesManual.navigateToPage();
    });
    test('Check tab header', async () => {
        await citiesManual.checkTabHeader();
    });
    test('Add modal func', async () => {
        await citiesManual.addModalFunc();
    });
    test ('Check spreadsheet headers', async()=>{
        await citiesManual.spreadsheetListAssertion();
    });
    test ('Check data from 1 line', async()=>{
        await citiesManual.checkData();
    });
    test ('Edit data', async()=>{
        await citiesManual.editData();
    });
    test ('Increase pagination', async()=>{
        await citiesManual.pagination();
    });
})