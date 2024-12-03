// @ts-check
const { test, expect } = require('@playwright/test');
const ExpenseObjects = require ('../../../pages/BudExecExpenseObjects');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр Объектов(Титульный лист)', () => {
  let expenseObjects;
  let dashboard;

  test.beforeEach(async ({page}) => {
    expenseObjects = new ExpenseObjects(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await expenseObjects.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await expenseObjects.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await expenseObjects.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await expenseObjects.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await expenseObjects.pagination();
  });
})