// @ts-check
const { test, expect } = require('@playwright/test');
const ConractObligationsRegistry = require ('../../../pages/BudExecContractObligationsReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр обязательств БО', () => {
  let contractObligationsRegistry;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    contractObligationsRegistry = new ConractObligationsRegistry(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await contractObligationsRegistry.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await contractObligationsRegistry.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await contractObligationsRegistry.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await contractObligationsRegistry.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await contractObligationsRegistry.pagination();
  });
  test ('Check header buttons', async()=>{
    await contractObligationsRegistry.headerButtonsAssert();
  });
})