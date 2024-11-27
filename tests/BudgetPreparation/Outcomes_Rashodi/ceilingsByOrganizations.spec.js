// @ts-check
const { test, expect } = require('@playwright/test');
const CeilingsByOrganizations = require('../../pages/CeilingsByOrganizations')
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../pages/IncomeByRegions');

test.describe('Категория: Потолки по "ПБС"', () => {
  let ceilingsByOrganizations;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    ceilingsByOrganizations = new CeilingsByOrganizations(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await ceilingsByOrganizations.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await ceilingsByOrganizations.checkTabHeader();
  });
  test ('Select relative report type', async()=>{
    await ceilingsByOrganizations.selectReport();
  });
  test ('Ckeck lock button', async()=>{
    await ceilingsByOrganizations.lockButton();
  });
  test ('Check pagination', async()=>{
    await ceilingsByOrganizations.pagination();
  }); 
  test ('Get relative list', async()=>{
    await ceilingsByOrganizations.selectElementsToList();
  });  
  test ('Check changes log button', async()=>{
    await ceilingsByOrganizations.changesLogButtonAssertion();
  });  
  test ('Check save button', async()=>{
    await ceilingsByOrganizations.saveButtonAssertion();
  });
  test ('Get spreadsheet headings', async()=>{
    await ceilingsByOrganizations.listOfSpreadsheet();
  })
})