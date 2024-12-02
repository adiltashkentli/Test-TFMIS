// @ts-check
const { test, expect } = require('@playwright/test');
const TenderAppReg = require ('../../../pages/BudExecTenderAppRegistry');
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');

test.describe('Категория: Реестр тендерных заявок', () => {
  let tenderAppReg;
  let dashboard;
    
  test.beforeEach(async ({page}) => {
    tenderAppReg = new TenderAppReg(page);
    dashboard = new Dashboard(page);    
    await dashboard.login();
    await tenderAppReg.navigateToPage();
  });
  test ('Check tab header', async()=>{
    await tenderAppReg.checkTabHeader();
  });
  test ('Select relative data get list', async()=>{
    await tenderAppReg.chooseRelativeDataToList();
  });
  test ('Get spreadsheet headings', async()=>{
    await tenderAppReg.checkSpreadsheetHeadings();
  });
  test ('Increase pagination', async()=>{
    await tenderAppReg.pagination();
  });
  test ('Check footer areas', async()=>{
    await tenderAppReg.footerAreas();
  });
  test ('Check header buttons', async()=>{
    await tenderAppReg.headerButtonsAssert();
  });
})