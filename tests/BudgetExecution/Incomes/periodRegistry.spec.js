// @ts-check
const { test, expect } = require('@playwright/test');
const PeriodRegistry = require ('../../../pages/BugExtPeriodRegistry');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр поступления за период', () => {
  let periodRegistry;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    periodRegistry = new PeriodRegistry(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await periodRegistry.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await periodRegistry.checkTabHeader();
  });
  test ('Select relative data to list', async()=>{
    await periodRegistry.selectElementsToList();
  });
  test ('Check spreadsheet list', async()=>{
    await periodRegistry.checkSpreadsheetHeaders();
  });
  test ('Edit modal fucntionality', async()=>{
    await periodRegistry.editModalFunctionality();
  });
  test ('Increase pagination', async()=>{
    await periodRegistry.pagination();
  });
  test ('Assert print list button', async()=>{
    await periodRegistry.printListButtonAssertion();
  });
  test ('Assert report with incomes button', async()=>{
    await periodRegistry.reportWithIncomesButtonAssertion();
  });
})