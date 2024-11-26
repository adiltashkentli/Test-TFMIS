// @ts-check
const { test, expect } = require('@playwright/test');
const Classifiers = require('../../../pages/Classifiers');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Классификаторы', () => {
  let classifiers;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    classifiers = new Classifiers(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await classifiers.navigateToPage();
  });

  test ('Get submenu categories', async ()=> {
    await classifiers.listOfSubmenuCategories();
  });
})