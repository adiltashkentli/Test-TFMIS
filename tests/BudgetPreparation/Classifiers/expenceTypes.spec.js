// @ts-check
const { test, expect } = require('@playwright/test');
const ExpenceTypes = require('../../pages/ExpenceTypes');
const Dashboard = require('../../pages/Dashboard');

test.describe('Типы расходов', () => {
  let expenceTypes;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    expenceTypes = new ExpenceTypes(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await expenceTypes.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await expenceTypes.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await expenceTypes.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await expenceTypes.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await expenceTypes.headerButtonsAssertion();
  });
})