// @ts-check
const { test, expect } = require('@playwright/test');
const TerritorialClassification = require('../../pages/TerritorialClassification');
const Dashboard = require('../../pages/Dashboard');

test.describe('Территориальная классификация', () => {
  let territorialClassification;
  let dashboard;
  
  test.beforeEach(async ({page}) => {
    territorialClassification = new TerritorialClassification(page);
    dashboard = new Dashboard(page);
    await dashboard.login();
    await territorialClassification.navigateToPage();
  });
  test ('Check tab header', async ()=> {
    await territorialClassification.checkTabHeader();
  });
  test ('Get relative data', async ()=> {
    await territorialClassification.selectElementsToList();
  });
  test ('Check category header', async ()=> {
    await territorialClassification.checkCategoryHeader();
  });
  test ('Check header 6 buttons to be clickable', async()=>{
    await territorialClassification.headerButtonsAssertion();
  });
})