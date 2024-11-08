const { test, expect } = require('@playwright/test');
const Revenue_Ceiling = require('../pages/Revenue_Ceiling');

test.describe('Dashboard page', () => {
  let dashboard;

  test.beforeEach(async ({page}) => {
    dashboard = new Dashboard(page);
    await dashboard.login();
  });

  test ('Check headings', async ()=> {
    await dashboard.checkHeadings();
  });

  test('Language selection button', async ()=> {
    await dashboard.languageSelection();
  });

  test('List of submenus', async ()=>{
    await dashboard.listOfBudgetPreparation();
  })

});
