// @ts-check
const { test, expect } = require('@playwright/test');
const AccountingCertificate = require ('../../../pages/BudExecAccountCertf');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Бухгалтерская справка', () => {
  let accountingCertificate;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    accountingCertificate = new AccountingCertificate(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await accountingCertificate.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await accountingCertificate.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await accountingCertificate.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await accountingCertificate.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await accountingCertificate.pagination();
  });
  test ('Add modal functionality', async()=>{
    await accountingCertificate.addModalFunc();
  });
})