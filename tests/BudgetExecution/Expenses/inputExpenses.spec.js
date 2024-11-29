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
  /*test ('Check spreadsheet list', async()=>{
    await inputExpenses.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await inputExpenses.pagination();
  });
  test ('Check footer fieldsets not to be editable', async()=>{
    await inputExpenses.footer16fieldsetsAssertion();
  });
  test ('Offset of overpayment modal fucntionality', async()=>{
    await inputExpenses.offsetOfOverpayment();
  });
  test ('Return to processing modal fucntionality', async()=>{
    await inputExpenses.returnToProcessingModal();
  });
  test ('Assert 3 buttons', async()=>{
    await inputExpenses.assert3Buttons();
  });
  */
})