// @ts-check
const { test, expect } = require('@playwright/test');
const CeilingsBySector = require('../../pages/CeilingsBySector')
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../pages/IncomeByRegions');

test.describe('Категория: Потолки по секторам', () => {
  let ceilingsBySector;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    ceilingsBySector = new CeilingsBySector(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await ceilingsBySector.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await ceilingsBySector.checkTabHeader();
  });
  test ('Ckeck lock button', async()=>{
    await incomeByRegions.lockButton();
  });
  test ('Check pagination', async()=>{
    await incomeByRegions.pagination();
  });
  test ('Select elements to get relative list', async()=>{
    await ceilingsBySector.selectElementsToList();
  });
  test ('Get spreadsheet headers list', async()=>{
    await ceilingsBySector.listOfSpreadsheet();
  });
  test ('Fill footer inputs', async()=>{
    await ceilingsBySector.fulfillFooterInputs();
  });
  test ('Check changes log button', async()=>{
    await ceilingsBySector.changesLogButtonAssertion();
  });
  test ('Check report button', async()=>{
    await ceilingsBySector.reportButtonAssertion();
  });
  test ('Check save button', async()=>{
    await ceilingsBySector.saveButtonAssertion();
  })
})