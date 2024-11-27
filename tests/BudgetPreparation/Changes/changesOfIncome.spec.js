// @ts-check
const { test, expect } = require('@playwright/test');
const ChangesOfIncome = require('../../../pages/ChangesOfIncome')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../../pages/IncomeByRegions');

test.describe('Категория: Изменение расходного бюджета по объектам', () => {
  let changesOfIncome;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    changesOfIncome = new ChangesOfIncome(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await changesOfIncome.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await changesOfIncome.checkTabHeader();
  });
  test ('Get relative list', async()=>{
    await changesOfIncome.selectElementsToList();
  });
  test ('Null existing data with "New" button', async()=>{
    await changesOfIncome.newButtonAssertion();
  });
  test ('Add new data modal functionality', async()=>{
    await changesOfIncome.addNewLineModal();
  });
  test ('Changes log modal functionality', async()=>{
      await changesOfIncome.changesLogModal();
    });
  test ('List of spreadsheet', async()=>{
    await changesOfIncome.listOfSpreadsheet();
  });
  test ('Assert Report button', async()=>{
    await changesOfIncome.reportButtonAssertion();
  });
  test ('Assert Ready to approve button', async()=>{
    await changesOfIncome.readyToApproveButtonAssertion();
  });
  test ('Assert Cancel ready to approve button', async()=>{
    await changesOfIncome.canselReadyToApproveButtonAssertion();
  });
  test ('Assert reconcile button', async()=>{
    await changesOfIncome.reconcileButtonAssertion();
  });
  test ('Assert Remove document button', async()=>{
    await changesOfIncome.removeDocButtonAssertion();
  });
  test ('Assert Save button', async()=>{
    await changesOfIncome.saveButtonAssertion();
  });
  test ('Increase pagination', async()=>{
    await changesOfIncome.pagination();
  });
  
})