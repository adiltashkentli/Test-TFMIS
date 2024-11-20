// @ts-check
const { test, expect } = require('@playwright/test');
const BudgetRequests = require('../../pages/BudgetRequests')
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../pages/IncomeByRegions');

test.describe('Категория: Бюджетные заявки "ПБС"', () => {
  let budgetRequests;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    budgetRequests = new BudgetRequests(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await budgetRequests.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await budgetRequests.checkTabHeader();
  });  
  test ('Check pagination', async()=>{
    await budgetRequests.pagination();
  }); 
  test ('Get relative list', async()=>{
    await budgetRequests.selectElementsToList();
  });  
  test ('Get spreadsheet headings', async()=>{
    await budgetRequests.listOfSpreadsheet();
  });
  test ('Check report button', async()=>{
    await budgetRequests.reportButtonAssertion();
  });
})