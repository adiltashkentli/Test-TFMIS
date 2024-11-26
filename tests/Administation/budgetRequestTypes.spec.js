// @ts-check
const { test, expect } = require('@playwright/test');
const BudgetRequestTypes = require('../../pages/BudgetRequestTypes')
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');

test.describe('Подменю: Администрирование типов бюджетных заявок', () => {
  let budgetRequestTypes;
  let dashboard;
  
  
  test.beforeEach(async ({page}) => {
    budgetRequestTypes = new BudgetRequestTypes(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await budgetRequestTypes.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await budgetRequestTypes.checkTabHeader();
  });  
  test ('Assert relative headers & data', async()=>{
    await budgetRequestTypes.listOfSpreadsheet();
  });
  test ('Assert add button', async()=>{
    await budgetRequestTypes.addButtonAssertion();
  });
  test ('Increase pagination', async()=>{
    await budgetRequestTypes.pagination();
  });
    
})