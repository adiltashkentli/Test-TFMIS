// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeApplicationRegistry = require('../../../pages/IncomeApplicationRegistry')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Реестр доходных заявок', () => {
  let incomeApplicationRegistry;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    incomeApplicationRegistry = new IncomeApplicationRegistry(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await incomeApplicationRegistry.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await incomeApplicationRegistry.checkTabHeader();
  });
  test ('Select elements to relarive list', async()=>{
    await incomeApplicationRegistry.selectElementsToList();
  });
  test ('Increase pagination', async()=>{
    await incomeApplicationRegistry.pagination();
  });
  test ('Get spreadsheet headers', async()=>{
    await incomeApplicationRegistry.listOfSpreadsheet();
  });
  test ('Check all boxes radio button', async()=>{
    await incomeApplicationRegistry.ckeckAllBoxesRadioButton();
  });
  test ('Check one box radio button', async()=>{
    await incomeApplicationRegistry.checkOneLineBox();
  })
  test ('Check allow to sign button', async()=>{
    await incomeApplicationRegistry.allowSignButtonAssertion();
  });
  test ('Check approve button', async()=>{
    await incomeApplicationRegistry.approveButtonAssertion();
  });
  test ('Check endorse button', async()=>{
    await incomeApplicationRegistry.endorseButtonAssertion();
  });
  test ('Check agreed button', async()=>{
    await incomeApplicationRegistry.agreedButtonAssertion();
  });
  test ('Check refuse to approve button', async()=>{
    await incomeApplicationRegistry.refuseApproveButtonAssertion();
  });
  test ('Check deny to approve button', async()=>{
    await incomeApplicationRegistry.denyToApproveButtonAssertion();
  });
  test ('Check refuse to reconcile button', async()=>{
    await incomeApplicationRegistry.refuseToReconcileButtonAssertion();
  });
})