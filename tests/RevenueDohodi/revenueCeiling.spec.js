const { test, expect } = require('@playwright/test');
const RevenueCeiling = require('../pages/Revenue_Ceiling');

test.describe('Тест: Меню доходы', () => {
  let revenue;

  test.beforeEach(async ({page}) => {
    revenue = new RevenueCeiling(page);
    await revenue.navigateToPage();
  });

  test ('Check spredsheet headers', async ()=> {
    await revenue.checkTabHeader();
  });

  test('Check lock button', async ()=> {
    await revenue.checkLockButton();
  });

  test('Get table list', async ()=>{
    await revenue.selectElementsToList();
  });
  test ('Assert spreadsheet headers', async ()=> {
    await revenue.listSpreadsheet();
  });
  test ('Is report button clickable', async ()=>{
    await revenue.reportButtonAssertion();
  });
  test ('Is save button clickable', async ()=>{
    await revenue.saveButtonAssertion();
  });
  test ('Increase paginations', async ()=>{
    await revenue.pagination();
  })

});
