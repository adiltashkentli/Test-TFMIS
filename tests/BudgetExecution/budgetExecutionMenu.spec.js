// @ts-check
const { test, expect } = require('@playwright/test');
const BudgetExecutionMenu = require('../../pages/BudgetExecutionMenu')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Меню: Исполнение бюджета', () => {
  let budgetExecutionMenu;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    budgetExecutionMenu = new BudgetExecutionMenu(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await budgetExecutionMenu.navigateToPage();
  });
  test ('Check submenu list', async()=>{
    await budgetExecutionMenu.checkSubmenuList();
  });
  
    
})