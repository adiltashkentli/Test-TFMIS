// @ts-check
const { test, expect } = require('@playwright/test');
const CeilingsByDepartment = require('../../pages/CeilingsByDepartment')
const Dashboard = require('../../pages/Dashboard');
const { assert } = require('console');
const IncomeByRegions = require('../../pages/IncomeByRegions');

test.describe('Категория: Потолки по ГРБС', () => {
  let ceilingsByDepartment;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    ceilingsByDepartment = new CeilingsByDepartment(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await ceilingsByDepartment.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await ceilingsByDepartment.checkTabHeader();
  });
  test ('Ckeck lock button', async()=>{
    await incomeByRegions.lockButton();
  });
  test ('Check pagination', async()=>{
    await incomeByRegions.pagination();
  });
  test ('Get relative report', async()=>{
    await ceilingsByDepartment.selectReport();
  });
  test ('Select elements to get relative list', async()=>{
    await ceilingsByDepartment.selectElementsToList();
  });
  test ('Get spreadsheet headers list', async()=>{
    await ceilingsByDepartment.listOfSpreadsheet();
  });
  test ('Fill footer inputs', async()=>{
    await ceilingsByDepartment.fulfillFooterInputs();
  });
  test ('Check changes log button', async()=>{
    await ceilingsByDepartment.changesLogButtonAssertion();
  });  
  test ('Check save button', async()=>{
    await ceilingsByDepartment.saveButtonAssertion();
  })
})