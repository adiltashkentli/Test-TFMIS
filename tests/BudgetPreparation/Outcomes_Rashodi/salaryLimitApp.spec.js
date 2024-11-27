// @ts-check
const { test, expect } = require('@playwright/test');
const SalaryLimitApp = require('../../../pages/SalaryLimitApp')
const Dashboard = require('../../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../../pages/IncomeByRegions');

test.describe('Категория: Лимиты по заработной плате', () => {
  let salaryLimitApp;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    salaryLimitApp = new SalaryLimitApp(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await salaryLimitApp.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await salaryLimitApp.checkTabHeader();
  });
  test ('Get relative list', async()=>{
    await salaryLimitApp.selectElementsToList();
  });  
  test ('Get spreadsheet headings', async()=>{
    await salaryLimitApp.listOfSpreadsheet();
  });
  test ('Increase pagination', async()=>{
    await salaryLimitApp.pagination();
  });
  test ('Open, assert header 7 close add modal', async()=>{
    await salaryLimitApp.addModal();
  });
  test ('Modal functionality', async()=>{
    await salaryLimitApp.modalFunctionality();
  });
  test ('Modal 1-st tab header assertion', async()=>{
    await salaryLimitApp.modal1stHeader();
  });  
  test ('Modal 1-st spreadsheet headers assertion', async()=>{
    await salaryLimitApp.modal1Spreadsheets();
  });
  test ('Modal 2-nd tab header assertion', async()=>{
    await salaryLimitApp.modal2ndHeader();
  });  
  test ('Modal 2-nd spreadsheet headers assertion', async()=>{
    await salaryLimitApp.modal2Spreadsheets();
  });
  test ('Modal 3-th tab header assertion', async()=>{
    await salaryLimitApp.modal3thHeader();
  }); 
  test ('Modal 3-nd spreadsheet headers assertion', async()=>{
    await salaryLimitApp.modal3Spreadsheets();
  });
})