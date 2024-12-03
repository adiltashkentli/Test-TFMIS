// @ts-check
const { test, expect } = require('@playwright/test');
const BudgetRequestTypes = require('../../../pages/BudgetRequestTypes');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Типы бюджетных заявок', () => {
  let budgetRequestTypes;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    budgetRequestTypes = new BudgetRequestTypes(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await budgetRequestTypes.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await budgetRequestTypes.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await budgetRequestTypes.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await budgetRequestTypes.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await budgetRequestTypes.headerButtonsAssertion();
  });
})