// @ts-check
const { test, expect } = require('@playwright/test');
const ProgrammsSubprogramms = require('../../../pages/Programms&Subprogramms');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Программы и подпрограммы', () => {
  let programmsSubprogramms;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    programmsSubprogramms = new ProgrammsSubprogramms(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await programmsSubprogramms.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await programmsSubprogramms.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await programmsSubprogramms.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await programmsSubprogramms.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await programmsSubprogramms.headerButtonsAssertion();
  });
})