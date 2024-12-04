// @ts-check
const { test, expect } = require('@playwright/test');
const CheckIssuanceReg = require('../../../pages/BudExecCheckIssuanceReg');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Реестр платёжных для обналичивание', () => {
    let checkIssuanceReg;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        checkIssuanceReg = new CheckIssuanceReg(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await checkIssuanceReg.navigateToPage();
    });
    test('Check tab header', async () => {
        await checkIssuanceReg.checkTabHeader();
    });
    test('Select relative data get list', async () => {
        await checkIssuanceReg.chooseRelativeDataToList();
    });
    test('Get spreadsheet headings', async () => {
        await checkIssuanceReg.checkSpreadsheetHeaders();
    });
    test('Increase pagination', async () => {
        await checkIssuanceReg.pagination();
    });
    test ("Assert header button", async()=>{
        await checkIssuanceReg.headerButtonAssertion();
    });

})