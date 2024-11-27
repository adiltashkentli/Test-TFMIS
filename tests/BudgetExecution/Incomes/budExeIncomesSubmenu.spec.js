// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeTransfersReg = require ('../../../pages/BudExeIncomeTransfersReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр поступления (перевод со счёта)', () => {
  let incomeTransfersReg;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    incomeTransfersReg = new IncomeTransfersReg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await incomeTransfersReg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await incomeTransfersReg.checkTabHeader();
  });
  test ('Select relative data to list', async()=>{
    await incomeTransfersReg.selectElementsToList();
  });
  test ('Check spreadsheet list', async()=>{
    await incomeTransfersReg.checkSpreadsheetHeaders();
  });
  test ('Increade pagination', async()=>{
    await incomeTransfersReg.pagination();
  });
  test ('Asserrt Form PP button', async()=>{
    await incomeTransfersReg.formPPButtonAssertion();
  });

    
})