// @ts-check
const { test, expect } = require('@playwright/test');
const EconomicalClassification = require('../../../pages/EconomicalClassification');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Экономическая финансирование', () => {
  let economicalClassification;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    economicalClassification = new EconomicalClassification(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await economicalClassification.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await economicalClassification.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await economicalClassification.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await economicalClassification.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await economicalClassification.headerButtonsAssertion();
  });
})