// @ts-check
const { test, expect } = require('@playwright/test');
const AdminsOfIncomes = require('../../pages/AdminsOfIncomes');
const Dashboard = require('../../pages/Dashboard');

test.describe('Администраторы доходов', () => {
  let adminsOfIncomes;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    adminsOfIncomes = new AdminsOfIncomes(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await adminsOfIncomes.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await adminsOfIncomes.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await adminsOfIncomes.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await adminsOfIncomes.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await adminsOfIncomes.headerButtonsAssertion();
  });
})