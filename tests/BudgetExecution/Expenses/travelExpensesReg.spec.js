// @ts-check
const { test, expect } = require('@playwright/test');
const TravelExpensesRegistry = require ('../../../pages/BudExecTravelExpensesReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр командировочных расходов', () => {
  let travelExpensesRegistry;
  let dashboard;

  test.beforeEach(async ({page}) => {
    travelExpensesRegistry = new TravelExpensesRegistry(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await travelExpensesRegistry.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await travelExpensesRegistry.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await travelExpensesRegistry.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await travelExpensesRegistry.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await travelExpensesRegistry.pagination();
  });
  test ('Assert header 2 buttons', async()=>{
    await travelExpensesRegistry.header2buttonAssert();
  });
})