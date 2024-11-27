// @ts-check
const { test, expect } = require('@playwright/test');
const RevenueCeiling = require('../../../pages/Income_ceiling');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Тест: Меню доходы', () => {
  let revenue;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    revenue = new RevenueCeiling(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await revenue.navigateToPage();
  });

  test ('Check header', async ()=> {
    await revenue.checkTabHeader();
  });

  test('Check lock button', async ()=> {
    await revenue.lockButton();
  });
  test ('Select elements to list', async ()=> {
    await revenue.selectElementsToList();
  })

  test('Get table list', async ()=>{
    await revenue.selectElementsToList();
  });
  test ('Assert spreadsheet headers', async ()=> {
    await revenue.listSpreadsheet();
  });
  test ('Is report button clickable', async ()=>{
    await revenue.reportButtonAssertion();
  });
  test ('Is save button clickable', async ()=>{
    await revenue.saveButtonAssertion();
  });
  test ('Increase paginations', async ()=>{
    await revenue.pagination();
  })

});

