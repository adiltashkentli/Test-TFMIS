// @ts-check
const { test, expect } = require('@playwright/test');
const GeneralBudgetCeilings = require('../../pages/GeneralBudgetCeilings')
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Общие бюджетные потолки', () => {
  let generalBudgetCeilings;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    generalBudgetCeilings = new GeneralBudgetCeilings(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await generalBudgetCeilings.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await generalBudgetCeilings.checkTabHeader();
  });
  test ('Select relative elements to list', async()=>{
    await generalBudgetCeilings.selectElementsToList();
  });
  test ('Get spreadsheet headers', async () => {
    await generalBudgetCeilings.listSpreadsheet();
  });
})