// @ts-check
const { test, expect } = require('@playwright/test');
const ExpenseRequestReg = require ('../../../pages/BudExecExpenseRequestReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр расходных заявок', () => {
  let expenseRequestReg;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    expenseRequestReg = new ExpenseRequestReg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await expenseRequestReg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await expenseRequestReg.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await expenseRequestReg.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await expenseRequestReg.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await expenseRequestReg.pagination();
  });
  test ('Check header buttons', async()=>{
    await expenseRequestReg.headerButtonsAssert();
  });
})