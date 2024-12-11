// @ts-check
const { test, expect } = require('@playwright/test');
const AccountPlan = require('../../../pages/BudExecAccountPlan');
const Dashboard = require('../../../../pages/Dashboard');


test.describe('Категория: План счетов', () => {
    let accountPlan;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        accountPlan = new AccountPlan(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await accountPlan.navigateToPage();
    });
    test('Check tab header', async () => {
        await accountPlan.checkTabHeader();
    });
    test('Get relative list', async () => {
        await accountPlan.selectDataToRelativeList();
    });
    test ('Assert button hover text', async()=>{
        await accountPlan.headerButtonsAssertion();
    });
    test ('Save button functionality', async()=>{
        await accountPlan.saveButtonFunc();
    });    
    test('2 buttons functionality', async () => {
        await accountPlan.header2ButtonsAssertion();
    });
})