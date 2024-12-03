// @ts-check
const { test, expect } = require('@playwright/test');
const Outcomes = require('../../../pages/Outcomes')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Меню: Расходы', () => {
  let outcomes;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    outcomes = new Outcomes(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await outcomes.navigateToOutcomes();
  });

  test ('Check submenu list', async ()=> {
    await outcomes.checkSubmenuList();
  });

})