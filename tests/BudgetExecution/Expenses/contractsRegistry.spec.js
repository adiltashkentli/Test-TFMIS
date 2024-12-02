// @ts-check
const { test, expect } = require('@playwright/test');
const ConractsRegistry = require ('../../../pages/BudExecContractsRegistry');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр договоров', () => {
  let contractsRegistry;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    contractsRegistry = new ConractsRegistry(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await contractsRegistry.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await contractsRegistry.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await contractsRegistry.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await contractsRegistry.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await contractsRegistry.pagination();
  });
  test ('Check header buttons', async()=>{
    await contractsRegistry.headerButtonsAssert();
  });
})