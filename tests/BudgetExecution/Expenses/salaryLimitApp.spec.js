// @ts-check
const { test, expect } = require('@playwright/test');
const SalaryLimitApp = require ('../../../pages/BudExtsSalaryLimitApp');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Лимиты по заработной плате', () => {
  let salaryLimitApp;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    salaryLimitApp = new SalaryLimitApp(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await salaryLimitApp.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await salaryLimitApp.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await salaryLimitApp.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await salaryLimitApp.checkSpreadsheetHeadings();
  });
  
})