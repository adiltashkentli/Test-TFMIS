// @ts-check
const { test, expect } = require('@playwright/test');
const CKVappReg = require ('../../../pages/BudExecCKVappReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр заявок на ЦКВ', () => {
  let cKVappReg;
  let dashboard;

  test.beforeEach(async ({page}) => {
    cKVappReg = new CKVappReg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await cKVappReg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await cKVappReg.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await cKVappReg.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await cKVappReg.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await cKVappReg.pagination();
  });
  test ('Assert header 2 buttons', async()=>{
    await cKVappReg.header2buttonAssert();
  });
})