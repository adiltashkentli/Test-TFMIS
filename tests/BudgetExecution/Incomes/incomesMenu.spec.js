// @ts-check
const { test, expect } = require('@playwright/test');
const BudExeIncomesMenu = require ('../../../pages/BudExIncomesMenu');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр поступления (перевод со счёта)', () => {
  let budExeIncomesMenu;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    budExeIncomesMenu = new BudExeIncomesMenu(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await budExeIncomesMenu.navigateToPage();
  });
  test ('Check submenu categories', async()=>{
    await budExeIncomesMenu.checkCategoriesList();
  });    
})