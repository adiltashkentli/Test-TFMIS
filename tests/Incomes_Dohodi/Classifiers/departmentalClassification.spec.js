// @ts-check
const { test, expect } = require('@playwright/test');
const DepartmentalClassification = require('../../../pages/DepartmentalClassification');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Ведомственная классификация', () => {
  let departmentalClassification;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    departmentalClassification = new DepartmentalClassification(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await departmentalClassification.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await departmentalClassification.checkTabHeader();
  });
})