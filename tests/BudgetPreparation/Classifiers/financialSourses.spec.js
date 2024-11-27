// @ts-check
const { test, expect } = require('@playwright/test');
const FinancialSourses = require('../../pages/FinancialSourses');
const Dashboard = require('../../pages/Dashboard');

test.describe('Источники финансирования', () => {
  let financialSourses;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    financialSourses = new FinancialSourses(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await financialSourses.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await financialSourses.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await financialSourses.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await financialSourses.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await financialSourses.headerButtonsAssertion();
  });
})