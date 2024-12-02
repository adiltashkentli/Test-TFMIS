// @ts-check
const { test, expect } = require('@playwright/test');
const SalaryCalcReg = require ('../../../pages/BudExecSalaryCalcReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр расчетов зарплат', () => {
  let salaryCalcReg;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    salaryCalcReg = new SalaryCalcReg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await salaryCalcReg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await salaryCalcReg.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await salaryCalcReg.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await salaryCalcReg.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await salaryCalcReg.pagination();
  });
  test ('Check header buttons', async()=>{
    await salaryCalcReg.headerButtonsAssert();
  });
})