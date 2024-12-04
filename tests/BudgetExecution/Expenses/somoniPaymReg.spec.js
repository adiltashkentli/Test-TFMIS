// @ts-check
const { test, expect } = require('@playwright/test');
const SomoniPaymentsReg = require('../../../pages/BudExecSomoniPaymentsReg');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Реестр платёжных поручений (Сомони)', () => {
    let somoniPaymentsReg;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        somoniPaymentsReg = new SomoniPaymentsReg(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await somoniPaymentsReg.navigateToPage();
    });
    test('Check tab header', async () => {
        await somoniPaymentsReg.checkTabHeader();
    });
    test('Select relative data get list', async () => {
        await somoniPaymentsReg.chooseRelativeDataToList();
    });
    test('Get spreadsheet headings', async () => {
        await somoniPaymentsReg.checkSpreadsheetHeaders();
    });
    test('Increase pagination', async () => {
        await somoniPaymentsReg.pagination();
    });
    test ("Assert header button", async()=>{
        await somoniPaymentsReg.reportlistbuttonAssertion();
    });

})