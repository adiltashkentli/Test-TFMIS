// @ts-check
const { test, expect } = require('@playwright/test');
const Administration = require('../../../pages/AdministrationAdditObjects')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../../pages/IncomeByRegions');

test.describe('Подменю: Администрирование', () => {
  let administration;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    administration = new Administration(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await administration.navigateToPage();
  });
  test ('Check submenu list', async()=>{
    await administration.checkSubmenuList();
  });
  test ('Check tab header', async ()=> {
    await administration.checkTabHeader();
  });
  test ('Get relative list', async()=>{
    await administration.selectElementsToList();
  });
    
})