// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeApplication = require('../../pages/IncomeApplication');
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');

test.describe('Доходная заявка', () => {
  let incomeApplication;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    incomeApplication = new IncomeApplication(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await incomeApplication.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await incomeApplication.checkTabHeader();
  });

  test ('Select elements to relative list', async()=>{
    await incomeApplication.selectElementsToList();
  });
  test ('Check spreadsheet headers', async()=>{
    await incomeApplication.listOfSpreadsheet();
  });
  test ('Check report button', async()=>{
    await incomeApplication.reportButtonAssertion();
  });
  test ('Check save button', async()=>{
    await incomeApplication.saveButtonAssertion();
  });
})