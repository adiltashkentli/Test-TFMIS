// @ts-check
const { test, expect } = require('@playwright/test');
const BudgetIndicators = require('../../../pages/BudgetIndicators');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Бюджетные показатели', () => {
  let budgetIndicators;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    budgetIndicators = new BudgetIndicators(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await budgetIndicators.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await budgetIndicators.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await budgetIndicators.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await budgetIndicators.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await budgetIndicators.headerButtonsAssertion();
  });
})