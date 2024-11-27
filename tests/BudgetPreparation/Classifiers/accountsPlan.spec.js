// @ts-check
const { test, expect } = require('@playwright/test');
const AccountsPlan = require('../../../pages/AccountsPlan');
const Dashboard = require('../../../pages/Dashboard');

test.describe('План счетов', () => {
  let accountsPlan;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    accountsPlan = new AccountsPlan(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await accountsPlan.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await accountsPlan.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await accountsPlan.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await accountsPlan.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await accountsPlan.headerButtonsAssertion();
  });
})