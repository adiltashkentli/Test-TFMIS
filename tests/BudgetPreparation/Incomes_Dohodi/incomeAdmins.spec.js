// @ts-check
const { test, expect } = require('@playwright/test');
const IncomeAdmins = require('../../../pages/incomeAdmins');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Доходы по администраторам', () => {
  let incomeAdmins;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    incomeAdmins = new IncomeAdmins(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await incomeAdmins.navigateToPage();
  });

  test ('Check tab header', async ()=> {
    await incomeAdmins.checkTabHeader();
  });
  test ('Add category', async()=>{
    await incomeAdmins.addCategory();
  });
  test ('Get relative list', async()=>{
    await incomeAdmins.selectElementsToList();
  });
  test ('Get table headers', async()=>{
    await incomeAdmins.listOfSpreadsheet();
  });
  test ('Report buttotn assertion', async()=>{
    await incomeAdmins.reportButtonAssertion();
  });
  test ('Save button assertion', async()=>{
    await incomeAdmins.saveButtonAssertion();
  });
  test ('Footer input areas', async()=>{
    await incomeAdmins.footerInpurAreas();
  });

})