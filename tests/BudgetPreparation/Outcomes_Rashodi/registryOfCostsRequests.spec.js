// @ts-check
const { test, expect } = require('@playwright/test');
const RegistryOfCostsRequests = require("../../../pages/RegistryOfCostsRequests");
const Dashboard = require("../../../pages/Dashboard");
const IncomeByRegions = require("../../../pages/IncomeByRegions");
const { assert } = require('console');

test.describe('Категория: Бюджетные заявки "ПБС"', () => {
  let registryOfCostsRequests;
  let dashboard;
  let incomeByRegions;
  
  test.beforeEach(async ({page}) => {
    registryOfCostsRequests = new RegistryOfCostsRequests(page);
    dashboard = new Dashboard(page);
    incomeByRegions = new IncomeByRegions(page);
    await dashboard.login();
    await registryOfCostsRequests.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await registryOfCostsRequests.checkTabHeader();
  });   
  test ('Get relative list', async()=>{
    await registryOfCostsRequests.selectElementsToList();
  });  
  test ('Get spreadsheet headings', async()=>{
    await registryOfCostsRequests.listOfSpreadsheet();
  });
  test ('Check allow to sign button', async()=>{
    await registryOfCostsRequests.allowSignButtonAssertion();
  });
  test ('Check approve button', async()=>{
    await registryOfCostsRequests.approveButtonAssertion();
  });
  test ('Check endorse button', async()=>{
    await registryOfCostsRequests.endorseButtonAssertion();
  });
  test ('Check agreed button', async()=>{
    await registryOfCostsRequests.agreedButtonAssertion();
  })
})