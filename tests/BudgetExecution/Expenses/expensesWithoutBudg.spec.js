// @ts-check
const { test, expect } = require('@playwright/test');
const ExpensesWithoutBudg = require ('../../../pages/BudExecExpensWithoutBudg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Прочие расходы без бюджета', () => {
  let expensesWithoutBudg;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    expensesWithoutBudg = new ExpensesWithoutBudg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await expensesWithoutBudg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await expensesWithoutBudg.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await expensesWithoutBudg.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await expensesWithoutBudg.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await expensesWithoutBudg.pagination();
  });
  test ('Add modal functionality', async()=>{
    await expensesWithoutBudg.addModalFunc();
  });
})