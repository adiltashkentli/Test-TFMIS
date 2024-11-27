// @ts-check
const { test, expect } = require('@playwright/test');
const BudghetExecutionMenu = require('../../pages/BudgetExecutionMenu');
const Dashboard = require('../../pages/Dashboard');

test.describe('Меню: Исполнение бюджета', () => {
  let budgetExecutionMenu;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    budgetExecutionMenu = new BudghetExecutionMenu(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await budgetExecutionMenu.navigateToPage();
  });
  test ('Check submenu list', async ()=> {
    await budgetExecutionMenu.checkSubmenuList();
  });

})
