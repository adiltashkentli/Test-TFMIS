// @ts-check
const { test, expect } = require('@playwright/test');
const ChangesExpBudgetWithObject = require('../../../pages/ChangesExpBudgetWithObject')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../../pages/IncomeByRegions');

test.describe('Категория: Изменение расходного бюджета по объектам', () => {
  let changesExpBudgetWithObject;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    changesExpBudgetWithObject = new ChangesExpBudgetWithObject(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await changesExpBudgetWithObject.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await changesExpBudgetWithObject.checkTabHeader();
  });
  test ('Get relative list', async()=>{
    await changesExpBudgetWithObject.selectElementsToList();
  });
  test ('Null existing data with "New" button', async()=>{
    await changesExpBudgetWithObject.newButtonAssertion();
  });
  test ('List of spreadsheet', async()=>{
    await changesExpBudgetWithObject.listOfSpreadsheet();
  });
  test ('Changes log modal functionality', async()=>{
    await changesExpBudgetWithObject.changesLogModal();
  });
  test ('Assert Report button', async()=>{
    await changesExpBudgetWithObject.reportButtonAssertion();
  });
  test ('Assert Ready to approve button', async()=>{
    await changesExpBudgetWithObject.readyToApproveButtonAssertion();
  });
  test ('Assert Cancel ready to approve button', async()=>{
    await changesExpBudgetWithObject.canselReadyToApproveButtonAssertion();
  });
  test ('Assert reconcile button', async()=>{
    await changesExpBudgetWithObject.reconcileButtonAssertion();
  });
  test ('Assert Remove document button', async()=>{
    await changesExpBudgetWithObject.removeDocButtonAssertion();
  });
  test ('Assert Save button', async()=>{
    await changesExpBudgetWithObject.saveButtonAssertion();
  });
  test ('Increase pagination', async()=>{
    await changesExpBudgetWithObject.pagination();
  });
  test ('Assert that 5 input fields are not editable', async()=>{
    await changesExpBudgetWithObject.footerInputAreas();
  })
  test ('Add new data modal functionality', async()=>{
    await changesExpBudgetWithObject.addNewLineModal();
  });
})