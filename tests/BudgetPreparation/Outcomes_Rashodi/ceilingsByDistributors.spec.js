// @ts-check
const { test, expect } = require('@playwright/test');
const CeilingsByDistributors = require('../../../pages/CeilingsByDistributors')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../../pages/IncomeByRegions');

test.describe('Категория: Потолки по "РБС"', () => {
  let ceilingsByDistributors;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    ceilingsByDistributors = new CeilingsByDistributors(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await ceilingsByDistributors.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await ceilingsByDistributors.checkTabHeader();
  });
  test ('Ckeck lock button', async()=>{
    await incomeByRegions.lockButton();
  });
  test ('Check pagination', async()=>{
    await incomeByRegions.pagination();
  }); 
  test ('Select elements to report type & get relative list', async()=>{
    await ceilingsByDistributors.selectElementsToList();
  });  
  test ('Check changes log button', async()=>{
    await ceilingsByDistributors.changesLogButtonAssertion();
  });  
  test ('Check save button', async()=>{
    await ceilingsByDistributors.saveButtonAssertion();
  });
  test ('Get list of spreadsheet headings', async()=>{
    await ceilingsByDistributors.listOfSpreadsheet();
  })
})