// @ts-check
const { test, expect } = require('@playwright/test');
const TransferAppReg = require('../../../pages/BudExecTransferAppReg');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Реестр заявок на перевод', () => {
    let transferAppReg;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        transferAppReg = new TransferAppReg(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await transferAppReg.navigateToPage();
    });
    test('Check tab header', async () => {
        await transferAppReg.checkTabHeader();
    });
    test('Select relative data get list', async () => {
        await transferAppReg.chooseRelativeDataToList();
    });
    test('Get spreadsheet headings', async () => {
        await transferAppReg.checkSpreadsheetHeaders();
    });
    test('Increase pagination', async () => {
        await transferAppReg.pagination();
    });
    test ("Assert header buttons", async()=>{
        await transferAppReg.headerButtonsAssertion();
    });

})