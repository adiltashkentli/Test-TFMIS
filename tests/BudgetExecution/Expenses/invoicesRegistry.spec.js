// @ts-check
const { test, expect } = require('@playwright/test');
const InvoicesRegistry = require ('../../../pages/BudExecInvoicesRegistry');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр счет фактуров', () => {
  let invoicesRegistry;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    invoicesRegistry = new InvoicesRegistry(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await invoicesRegistry.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await invoicesRegistry.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await invoicesRegistry.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await invoicesRegistry.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await invoicesRegistry.pagination();
  });
  test ('Check header buttons', async()=>{
    await invoicesRegistry.headerButtonsAssert();
  });
})