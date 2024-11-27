// @ts-check
const { test, expect } = require('@playwright/test');
const FunctionalClassification = require('../../pages/FunctionalClassification');
const Dashboard = require('../../pages/Dashboard');

test.describe('Функциональная классификация', () => {
  let functionalClassification;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    functionalClassification = new FunctionalClassification(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await functionalClassification.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await functionalClassification.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await functionalClassification.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await functionalClassification.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await functionalClassification.headerButtonsAssertion();
  });
})