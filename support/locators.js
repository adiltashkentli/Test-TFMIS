const Locators = {
MainPage: {
    headText: '//*[@id="root"]/div[2]/div[2]/div/div/div[2]/span[1]',
    headTextSec: '#root > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > span:nth-child(2)',
    nationalArm: '#root > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(1) > img',
    
},
Dashboard: {
    login: 'id=loginForm_login',
    password: 'id=loginForm_password',
    loginButton: '#loginForm > div:nth-child(2) > button',
    headings: '//*[@id="root"]/div[2]/header/div/div[2]/div/a',
    budgPrpMenusList: '//ul[@id="rc-menu-uuid-81808-1-2-popup"]//li/div/span',
    langSlcBtn: '//*[@id="root"]/div[2]/header/div/div[2]/div/div/div/span[2]/div/span',
},
IncomeCeiling: {
    budPrepMenuBut: 'li:nth-child(2) div:nth-child(1) span:nth-child(2)',
    menuRevenue: '//span[contains(text(),"Доходы")]',
    incomeCeilingButton: '[data-menu-id="specific-menu-id"] > li:nth-child(2)',
    categoryTabName: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p', //for assertion
    lockButton: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[1]/div/div[1]/div/img',  //for clikcable assertion
    selectAge: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[2]/div/div[1]/div/div',
    selectScenario: '(//div[@id="demo-simple-select"])[2]',
    secondItemInScenario: '#\\:rq\\: > li:nth-child(3)',    
    colunmHeadersContainer: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[3]/div/div[1]/div[2]/div[1]/div/div/div',//for assertion
    reportButton: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[1]/div/div[2]/div[1]', //for clikcable assertion    
    saveButton: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[1]/div/div[2]/div[2]',//for clikcable assertion    
    paginationButton: '//*[@id=":rr:"]',
    secondElement: '//*[@id=":rt:"]/li[2]',
},
IncomeByRegions: {    
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
    listButton: 'div:nth-child(5) > .ButtonWithIcon_icon__etOIH > svg',
    tableHeadings: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[3]/div[1]/div[1]/div[2]/div[1]/div//div',
    pagination: '10',
    selectPagination: '#\:rd5\: > li:nth-child(2)',
},
IncomeByDistricts: {
    menuDistrictRevenue: '//p[@title="income_by_districts"]',
    tabHeading: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
    selectAge: '(//div[@id="demo-simple-select"])[1]',
    listButton: 'div[class="IncomeRegion_SelectRegion__DQsPf"] p',
},
IncomeAdmins: {
    menuIncomeAdmins: 'Доходы по администраторам',
    tabHeader: '//div[@class="sc-blHHSb jSSlEL"]',
    finsourceSelect: 'Источник финансирования',
    firstItem: '//li[normalize-space()="Ten"]',
    ageSelect: "//div[@id=':rc7:']",
    tableheaders: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[3]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    totalToDistrictInput1: '//*[@id="outlined-basic"]',
    totalToDistrictInput2: '//div[@class="IncomAdmin_income__FVOhE"]//div[2]//div[1]//input[1]',
    totalToDistrictInput3: '//div[@class="IncomAdmin_tableContent__I3ZTO"]//div[3]//div[1]//input[1]',
},
IncomeApplication:{
    menuIncomeApplication: '//p[@title="income_application"]',
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[1]/div/div/div',
    
},





Classifiers: {
    menuClassifiers: '//span[contains(text(),"Классификаторы")]',
    categoriesOfSubmenu: '//*[@id="rc-menu-uuid-64379-1-25-popup"]//li',
},
DepartmentalClassification:{
    menuDepartmentalClassification: '//*[@id="rc-menu-uuid-64379-1-25-popup"]/li[1]',
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
},

}
module.exports = Locators;