// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeByRegions = require('../../pages/IncomeByRegions');
const Dashboard = require('../../pages/Dashboard');

test.describe('Доходы по областям', () => {
  let income_Regions;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    income_Regions = new IncomeByRegions(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await income_Regions.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await income_Regions.checkTabHeader();
  });
  
  test ('Ckeck lock button', async()=>{
    await income_Regions.lockButton();
  });

  test ('Check table headings', async()=>{
    await income_Regions.selectElementsToList();
  });
  test ('Check pagination', async()=>{
    await income_Regions.pagination();
  });
  test ('List of spreadsheet', async()=>{
    await income_Regions.listOfSpreadsheet();    
  })
});

