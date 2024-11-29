// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeRegistry = require ('../../../pages/BudExtIncomeRegistry');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр поступления', () => {
  let incomeRegistry;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    incomeRegistry = new IncomeRegistry(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await incomeRegistry.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await incomeRegistry.checkTabHeader();
  });
  test ('Select relative data to list', async()=>{
    await incomeRegistry.selectElementsToList();
  });
  test ('Check button functionality', async()=>{
    await incomeRegistry.checkButtonFunctionality();
  });
  test ('Check spreadsheet list', async()=>{
    await incomeRegistry.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await incomeRegistry.pagination();
  });
  test ('Check footer fieldsets not to be editable', async()=>{
    await incomeRegistry.footer16fieldsetsAssertion();
  });
  /*test ('Edit modal fucntionality', async()=>{
    await periodRegistry.editModalFunctionality();
  });
  
  test ('Assert print list button', async()=>{
    await periodRegistry.printListButtonAssertion();
  });
  test ('Assert report with incomes button', async()=>{
    await periodRegistry.reportWithIncomesButtonAssertion();
  });*/
})