// @ts-check
const { test, expect } = require('@playwright/test');
const ContractObligationSelfPaymReg = require ('../../../pages/BudExecConrtactObligationSePayReg');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр договорных обязательство (самооплата)', () => {
  let contractObligationSelfPaymReg;
  let dashboard;

  test.beforeEach(async ({page}) => {
    contractObligationSelfPaymReg = new ContractObligationSelfPaymReg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await contractObligationSelfPaymReg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await contractObligationSelfPaymReg.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await contractObligationSelfPaymReg.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await contractObligationSelfPaymReg.checkSpreadsheetHeaders();
  });
  test ('Increase pagination', async()=>{
    await contractObligationSelfPaymReg.pagination();
  });
})