// @ts-check
const { test, expect } = require('@playwright/test');
const ChangesExpenditureBudgWithtObj = require('../../../pages/ChangesExpenditureBudgWithtObj')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../../pages/IncomeByRegions');

test.describe('Категория: Изменение расходного бюджета без объекта', () => {
  let changesExpenditureBudgWithtObj;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    changesExpenditureBudgWithtObj = new ChangesExpenditureBudgWithtObj(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await changesExpenditureBudgWithtObj.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await changesExpenditureBudgWithtObj.checkTabHeader();
  });
  test ('Get relative list', async()=>{
    await changesExpenditureBudgWithtObj.selectElementsToList();
  });
  test ('List of spreadsheet', async()=>{
    await changesExpenditureBudgWithtObj.listOfSpreadsheet();
  });
  test ('Null existing data with "New" button', async()=>{
    await changesExpenditureBudgWithtObj.newButtonAssertion();
  });
  test ('Add new data modal functionality', async()=>{
    await changesExpenditureBudgWithtObj.addNewLineModal();
  });
  test ('Changes log modal functionality', async()=>{
    await changesExpenditureBudgWithtObj.changesLogModal();
  });
  test ('Assert Report button', async()=>{
    await changesExpenditureBudgWithtObj.reportButtonAssertion();
  });
  test ('Assert Ready to approve button', async()=>{
    await changesExpenditureBudgWithtObj.readyToApproveButtonAssertion();
  });
  test ('Assert Cancel ready to approve button', async()=>{
    await changesExpenditureBudgWithtObj.canselReadyToApproveButtonAssertion();
  });
  test ('Assert reconcile button', async()=>{
    await changesExpenditureBudgWithtObj.reconcileButtonAssertion();
  });
  test ('Assert Remove document button', async()=>{
    await changesExpenditureBudgWithtObj.removeDocButtonAssertion();
  });
  test ('Assert Save button', async()=>{
    await changesExpenditureBudgWithtObj.saveButtonAssertion();
  });
  test ('Increase pagination', async()=>{
    await changesExpenditureBudgWithtObj.pagination();
  });
  test ('Assert that 5 input fields are not editable', async()=>{
    await changesExpenditureBudgWithtObj.footerInputAreas();
  })
})