// @ts-check
const { test, expect } = require('@playwright/test');
const DistributedIncomeReg = require ('../../../pages/BudExeDistributedIncomeReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр поступления (перевод со счёта)', () => {
  let distributedIncomeReg;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    distributedIncomeReg = new DistributedIncomeReg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await distributedIncomeReg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await distributedIncomeReg.checkTabHeader();
  });
  test ('Select relative data to list', async()=>{
    await distributedIncomeReg.selectElementsToList();
  });
  test ('Check spreadsheet list', async()=>{
    await distributedIncomeReg.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await distributedIncomeReg.pagination();
  });
  test ('Assert export button', async()=>{
    await distributedIncomeReg.exportButtonAssertion();
  });
})