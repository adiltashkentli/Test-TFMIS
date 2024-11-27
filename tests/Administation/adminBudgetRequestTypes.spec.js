// @ts-check
const { test, expect } = require('@playwright/test');
const AdminBudgetRequestTypes = require('../../pages/BudgetRequestTypes')
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');

test.describe('Подменю: Администрирование типов бюджетных заявок', () => {
  let adminBudgetRequestTypes;
  let dashboard;
  
  
  test.beforeEach(async ({page}) => {
    adminBudgetRequestTypes = new AdminBudgetRequestTypes(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await adminBudgetRequestTypes.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await adminBudgetRequestTypes.checkTabHeader();
  });  
  test ('Assert relative headers & data', async()=>{
    await adminBudgetRequestTypes.listOfSpreadsheet();
  });
  test ('Assert add button', async()=>{
    await adminBudgetRequestTypes.addButtonAssertion();
  });
  test ('Increase pagination', async()=>{
    await adminBudgetRequestTypes.pagination();
  });
    
})