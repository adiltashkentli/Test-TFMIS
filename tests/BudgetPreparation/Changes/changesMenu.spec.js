// @ts-check
const { test, expect } = require('@playwright/test');
const Changes = require('../../../pages/ChangesMenu')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../../pages/IncomeByRegions');

test.describe('Категория: Лимиты по заработной плате', () => {
  let changes;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    changes = new Changes(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await changes.navigateToPage();
  });
  test ('Check categories list', async ()=> {
    await changes.checkTabHeader();
  });
  test ('Get relative list', async()=>{
    await changes.checkSubmenuList();
  });  

})