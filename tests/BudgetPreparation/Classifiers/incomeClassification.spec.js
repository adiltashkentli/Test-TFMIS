// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeClassification = require('../../pages/EconomicalClassification');
const Dashboard = require('../../pages/Dashboard');

test.describe('Классификация доходов', () => {
  let incomeClassification;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    incomeClassification = new IncomeClassification(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await incomeClassification.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await incomeClassification.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await incomeClassification.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await incomeClassification.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await incomeClassification.headerButtonsAssertion();
  });
})