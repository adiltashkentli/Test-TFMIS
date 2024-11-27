// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeByDistricts = require('../../pages/IncomeByDistricts');
const Dashboard = require('../../pages/Dashboard');

test.describe('Доходы по районам', () => {
  let income_Districts;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    income_Districts = new IncomeByDistricts(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await income_Districts.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await income_Districts.checkTabHeader();
  });
  test ('Check lock button', async()=>{
    await income_Districts.lockButton();
  });
  test ('Get relative list', async()=>{
    await income_Districts.selectElementsToList();
  });
  test ('Increase pagination', async()=>{
    await income_Districts.pagination();
  });
  test ('Get list of spreadsheet', async()=>{
    await income_Districts.listOfSpreadsheet();
  });
  test ('Check report button', async()=>{
    await income_Districts.reportButtonAssertion();
  });
  test ('Check save button', async()=>{
    await income_Districts.saveButtonAssertion();
  })

})