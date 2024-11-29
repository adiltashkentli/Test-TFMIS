// @ts-check
const { test, expect } = require('@playwright/test');
const ExpensesSubmenu = require('../../../pages/BudExtnExpensesSubmenu')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Подменю: Расходы', () => {
  let expensesSubmenu;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    expensesSubmenu = new ExpensesSubmenu(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await expensesSubmenu.navigateToPage();
  });
  test ('Check categories list', async()=>{
    await expensesSubmenu.checkCategoriesList();
  });
})