// @ts-check
const { test, expect } = require('@playwright/test');
const InputExpenses = require ('../../../pages/BudExteInputExpense');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Ввод расхода', () => {
  let inputExpenses;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    inputExpenses = new InputExpenses(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await inputExpenses.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await inputExpenses.checkTabHeader();
  });
  test ('Select relative data to input', async()=>{
    await inputExpenses.inputExpenses();
  });
  test ('Search documents subcategory functionality', async()=>{
    await inputExpenses.searchDocuments();
  });
  
})