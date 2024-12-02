// @ts-check
const { test, expect } = require('@playwright/test');
const CashPlan = require ('../../../pages/BudExecCashPlan');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Кассовый план', () => {
  let cashPlan;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    cashPlan = new CashPlan(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await cashPlan.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await cashPlan.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await cashPlan.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await cashPlan.checkSpreadsheetHeadings();
  });
  test ('Add new app modal func', async()=>{
    await cashPlan.addNewAppModal();
  });
  
})