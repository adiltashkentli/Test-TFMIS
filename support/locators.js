const OperationalDay = require("../pages/BudExecOperationalDay");

const Locators = {
MainPage: {
    headText: '//*[@id="root"]/div[2]/div[2]/div/div/div[2]/span[1]',
    headTextSec: '//*[@id="root"]/div[2]/div[2]/div/div/div[2]/span[2]',
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
IncomeApplicationRegistry: {
    menuIncomeApplicationRegistry: '//p[@title="income_application_registry"]',
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[1]/div/div/div',
    allowSignButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]//div[1]/div[1]/p',
    approveButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]//div[2]/div[1]/p',
    endorseButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]//div[3]/div[1]/p',
    agreedButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]//div[4]/div[1]/p',
    refuseToApproveButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[2]//div[1]/div[11]/div/span[1]',
    denyToApproveButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[2]//div[1]/div[11]/div/span[2]',
    refuseToReconcileButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[2]//div[1]/div[11]/div/span[3]',
    checkAllBoxesRadioButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[1]//div[2]/div[1]//div/span',
},
Budget_Preparation: {
    checkOneBox: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[2]//div[4]/div[2]/span',
    assertionCheckedBoxes: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[1]//div[2]/div[1]//div/span/input',
    assertionOneBox: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[2]//div[4]/div[2]/span/input',
},
Outcomes: {
    budgetPreparationMenu: "(//span[contains(text(),'Подготовка бюджета')])[1]",
    menuOutcomes:  '//span[contains(text(),"Расходы")]',
    submenuList: '//*[@id="rc-menu-uuid-69063-1-22-popup"]/li',
},
GeneralBudgetCeilings: {
    categoryMenu: '//p[@title="general_budget_ceilings"]',
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
    selectYear: '//*[@id="select-year"]',
    selectRelativeYear: '//li[normalize-space()="2024"]',
    selectScenario: '//div[@id=":rr:"]',
    selctRelativeCategory: '//li[contains(text(),"Вариант МФ РТ")]',
    listButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div[2]/div[3]/div[1]',
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[2]/div/div[1]/div[2]/div[1]/div/div/div',
},
CeilingsBySector: {
    budgetPreparationMenu: '//*[@id="root"]/div[2]//div[1]//div/ul/li[2]',
    categoryMenu: '//p[@title="budget_ceilings_by_sector"]',
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]//div/p',
    selectYear: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div[2]/div[1]/div/div',
    selectFirstYear: '//div/ul/li[normalize-space()="Ten"]',
    selectLabel: '(//div[@id="demo-simple-select"])[2]',
    selectSecondLabel: '//div/ul/li[normalize-space()="Twenty"]',
    selectParameter: '(//div[@id="demo-simple-select"])[3]',
    selectThirdParameter: '//div/ul/li[normalize-space()="Thirty"]',
    listButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div[2]/div[4]/div[1]',
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[2]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    changesLogButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]/div[1]/div[2]/div[1]/div[1]/p',
    reportButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div/div[1]/div[1]/div[2]/div[2]/div[1]/p',
    saveButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div[1]/div[2]/div[3]/div[1]',
    checkOneBox: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[2]//div[4]/div[2]/span',    
    assertionCheckedBoxes: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[1]//div[2]/div[1]//div/span/input',
    assertionOneBox: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]//div[1]/div[2]/div[2]//div[4]/div[2]/span/input',  
},
CeilingsByDepartment:{    
    categoryMenu: '(//p[@title="budget_ceilings_by_department"])[1]',
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]//div/p',
    reportSelector: '//*[@id="outlined-basic"]',
    firstElement: '//div/ul/li[normalize-space()="Ten"]',
    reportButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]//div[1]/div[3]/div[1]/p',
    selectYear: '//div[@class="MuiFormControl-root css-1bc8ceu"]//label[@id="demo-simple-select-label"]',
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[4]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    saveButton: '//div[1]/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/p[1]',
},
CeilingsByDistributors: {
    categoryMenu: '(//p[@title="budget_ceilings_by_distributors"])[1]',
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    saveButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]/div/div[2]/div[2]/div[1]/p',
    spreadsheetHeaders: '//*[@id="root"]//div/div[3]/div[1]/div[1]/div[2]/div[1]/div/div/div',
},
CeilingsByOrganizations: {
    categoryMenu: "//p[@title='budget_ceilings_by_organizations']",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]//div/div[3]/div[2]//div[3]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    lockButton: '//*[@id="root"]//div[3]/div[2]//div[1]/div[1]/div[1]/img'
},
BudgetRequests: {
    categoryMenu: "//p[@title='budget_requests']",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]/div/div[1]/div[2]/div[1]/div/div/div',
    reportButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]/div[1]/div[1]/p',
    addButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div[2]/div/div[1]/p',
    addModalHeader: "//div[contains(text(),'Добавление бюджетной заявки')]",
    saveButton: '//div[2]//div[2]//div[2]//div[2]/div/form/div[6]/button[2]/span',
},
RegistryOfCostsRequests:{
    categoryMenu: "//p[@title='restore_income_registry']",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    listButton: "(//p[contains(text(),'Список')])[1]",
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[3]/div/div[1]/div[2]/div[1]/div/div/div',
    
},
SalaryLimitApp: {
    categoryMenu: "//p[@title='salary_limit_application']",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    addButton: "(//p[contains(text(),'Добавить')])[1]",
    modalHeader: "(//div[contains(text(),'Заявка на выделение лимита по заработной плате')])[1]",
    closeModal: "(//*[name()='svg'][@fill-rule='evenodd'])[1]",
    modal1stTabHeader: '//div[2]//div[2]//div[2]//div[2]/div[3]/p',
    modal1sheetHeaders: '//div[2]//div[2]//div[2]//div[2]/div[4]/div/div[1]/div[2]/div[1]/div/div/div',
    modal2ndTabHeader: '//div[2]//div[2]//div[2]//div[2]/div[5]/p',
    modal2sheetHeaders: '//div[2]//div[2]//div[2]//div[2]/div[6]/div/div[1]/div[2]/div[1]/div/div/div',
    modal3thTabHeader: '//div[2]//div[2]//div[2]//div[2]/div[7]/p',
    modal3sheetHeaders: '//div[2]//div[2]//div[2]//div[2]/div[8]/div/div[1]/div[2]/div[1]/div/div/div',
},
ChangesMenu: {
    submenuChanges: "(//span[contains(text(),'Изменение')])[1]",
    categoriesOfSubmenu: '//*[@id="rc-menu-uuid-20641-1-23-popup"]/li',
},
ChangesExpenditureBudgWithtObj: {
    categoryMenu: "(//p[@title='changes_expenditure_budget_without_object'])[1]",
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[5]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    newButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[2]//div[1]/div[1]/p',
    addLinebutton: "(//p[contains(text(),'Добавить строку')])[1]",
    modalHeader: "(//p[contains(text(),'Выберите доходную заявку')])[1]",
    resultListInSpradsheet: '//div[3]//div[2]/div/table/thead/tr/th',    
    firstLineData: '//div[3]/div/div[2]/div/div[2]/div/div/div[2]/div[2]/div/table/tbody/tr[1]/td',
    changesLogButton: '//*[@id="root"]//div[2]/div/div[2]/div[1]/p',
    changesModalHeader: "(//p[contains(text(),'История изменений')])[2]",
    changesLogModalSpshHeaders: '//div[2]/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/div/div/div',
    reportButton:         '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div[2]/div[1]/p',
    readyToApproveButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div[3]/div[1]/p',
    canselReadeToApproveButton: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/button',
    reconcileButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]/div[4]/div[1]/p',
    removeDocButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]/div[5]/div[1]/p',
    saveButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]/div[6]/div[1]/p',
    resultsButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[2]/div/div[3]/div[1]/p',
    footer5InputAreas: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[5]/div[2]/div',
},
ChangesExpBudgetWithObject:{
    categoryMenu: "(//p[@title='changes_expenditure_budget_with_object'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    addLine: "(//p[contains(text(),'Добавить строку')])[1]",
    modalHeader: "(//p[contains(text(),'Выберите бюджетную заявку и объект')])[1]",
    modal1sheetHeaders: '//div[2]/div/table/thead/tr/th',
    modal2sheetHeaders: '//div[2]/div[5]/div/table/thead/tr/th',
    modal3sheetHeaders: '//div[2]/div[7]/div/table/thead/tr/th'
},
ChangesOfIncome: {
    categoryMenu: "(//p[@title='changes_of_revenue_budget'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    modalHeader: "(//p[contains(text(),'Выберите доходную заявку')])[1]",
    pagination: '100',
    listOfSpreadsheet: '//*[@id="root"]/div[2]//div[3]/div[2]//div[5]/div/div[1]/div[2]/div[1]/div/div/div',
},
Administration: {
    submenuAdministration: "(//span[contains(text(),'Администрирование')])[1]",
    categoriesOfSubmenu: '//*[@id="rc-menu-uuid-21333-1-24-popup"]/li',
    categoryAdditObjOfBSlevel: "(//p[@title='additional_objects_of_bz_level'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
},
AmdinBudgetRequestTypes: {
    categoryMenu: "(//p[@title='admin_budget_request_types'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]//div[2]//div[3]/div/div[1]/div[2]/div[1]/div/div/div',
    secondLineData: '//*[@id="root"]//div[2]//div[3]/div/div[1]/div[2]/div[2]/div/div[2]/div',
    addButton: '//*[@id="root"]/div[2]//div[3]/div[2]//div[1]/div/div[1]/p',
},
Classifiers: {
    menuClassifiers: '//span[contains(text(),"Классификаторы")]',
    categoriesOfSubmenu: '//*[@id="rc-menu-uuid-64379-1-25-popup"]//li',
},
DepartmentalClassification:{
    categoryMenu: "(//p[@title='cls_departmental'])[1]",
    tabHeader: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p',
    categoryHeader: '//*[@id="root"]//div[2]/div/div/div/div[1]//div/div[1]/div[1]/p',
    codeArea: "(//input[@id='outlined-basic'])[1]",
    nameArea: "(//input[@id='outlined-basic'])[2]",
    header6Buttons: '//*[@id="root"]//div[2]/div/div/div/div[3]/div/div[1]/div/div',
},
FunctionalClassification: {
    categoryMenu: "(//p[@title='cls_functional'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',    
},
FinancialSourses: {
    categoryMenu: "(//p[@title='fin_source'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',    
},
EconomicalClassification: {
    categoryMenu: "(//p[@title='cls_economical'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',    
},
IncomeClassification: {
    categoryMenu: "(//p[@title='cls_of_incomes'])[1]",    
},
ProgrammsSubprogramms: {
    categoryMenu: "(//p[@title='cls_programs'])[1]",
},
BudgetRequestTypes: {
    categoryMenu: "(//p[@title='budget_request_types'])[1]",    
},
ExpenceTypes: {
    categoryMenu: "(//p[@title='expense_types'])[1]",
},
TerritorialClassification: {
    categoryMenu: "(//p[@title='cls_territorials'])[1]",
},
BudgetIndicators: {
    categoryMenu: "(//p[@title='budget_indicators'])[1]",
},
AdminsOfIncomes: {
    categoryMenu: "(//p[@title='admins_of_incomes'])[1]",
},
AccountsPlan: {
    categoryMenu: "(//p[@title='account_plan'])[1]",
},
BudgetExecution:{
    menu: "(//span[contains(text(),'Исполнение бюджета')])[1]",
    subMenus: '//*[@id="rc-menu-uuid-49922-1-3-popup"]/li',
},
SubmenuIncomes: {
    submenuIncomes: "(//span[contains(text(),'Доходы')])[1]",
    categoriesOfSubmenu: '//*[@id="rc-menu-uuid-49432-1-31-popup"]/li',
},
IncomeTransfersReg:{
    categoryMenu: "(//p[@title='income_transfers_registry'])[1]",
    tabHeading: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]//div[2]//div[5]/div/div[1]/div[2]/div[1]/div/div/div',
    formPP: "(//p[contains(text(),'Сформировать ПП')])[1]",
},
DistributedIncomeReg:{
    categoryMenu: "(//p[@title='distributed_income_registry'])[1]",    
    spreadsheetHeaders: '//*[@id="root"]//div[2]//div[5]/div/div[1]/div[2]/div[1]/div/div/div',
    exportButton: "(//p[contains(text(),'Экспорт')])[1]",
},
PeriodRegistry: {
    categoryMenu: "(//p[@title='income_receipts_by_period_registry'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]//div[2]//div[3]/div/div[1]/div[2]/div[1]/div/div/div',
    printListButton: "(//p[contains(text(),'Печать списка')])[1]",
    reportWithIncomesButton: "(//p[contains(text(),'Отчёт с доходами')])[1]"
},
IncomeRegistry: {
    categoryMenu: "(//p[@title='registry_of_incomes'])[1]",
    selectAllRows: "(//input[@aria-label='Select all rows'])[1]",
    selectFirstLine: "(//input[@aria-label='Select row'])[1]",
    chekedMessage: "//div[@class='MuiDataGrid-selectedRowCount css-eozsn7']",
    footer16fielsets: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[4]//input',
    modalHeader: '//*[@id=":r4r:"]/div/p',
    modalHeader2: '//div[2]/form//div[2]/div[1]/p',
    modalHeader3: '//div[2]/form//div[3]/div[1]/p',
    modal1stSprshHdrs: '//div[2]/div[3]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    modal2ndSprshHdrs: '//div[2]/div[6]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    adjustingSpreedButton: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]/div[1]/p',
    changesButton: '//*[@id="root"]//div[2]//div[1]/div[2]/div[4]/div[1]/p',
    clearFilterButton: '//*[@id="root"]//div[2]/div/div/div[1]/p'
},
ExpensesSubmenu:{
    submenuExpenses: "(//span[contains(text(),'Расходы')])[1]",
    categories: '//*[@id="rc-menu-uuid-12286-1-32-popup"]/li',
},
InputExpenses: {    
    categoryMenu: "(//p[@title='input_of_consumption'])[1]",
    tabHeader: '//*[@id="root"]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]//div[2]/div/div[2]/div/div[1]/div[2]/div[1]/div/div/div'
},
SalaryLimitApp:{
    categoryMenu: "(//p[@title='salary_limit_application'])[1]",
    tabHeader:'//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]//div[3]/div/div[1]/div[2]/div[1]/div/div/div',
},
CashPlan: {
    categoryMenu: "(//p[@title='cash_plan'])[1]",
    addNewAppModalButton: "(//p[contains(text(),'Добавить новую заявку')])[1]",
    modalHeader: "//div[3]/div/div[2]/div/div[2]/div/div/div[1]",
    modalHeader2: '//div[3]//div[2]//div[2]/div[5]/div[1]/p',
    modalHeader3: '//div[3]//div[2]//div[2]/div[6]/div[1]/p',
    modalSpreadsheet: '//div[3]//div[2]/div[5]/div[2]/div[1]/div[2]/div[1]/div/div/div',
    modalSpreadsheet2: '//div[3]//div[2]/div[6]/div[2]/div[1]/div[2]/div[1]/div/div/div',
    header5buttons: '//div[3]/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div'
},
TenderAppReg: {
    categoryMenu: "(//p[@title='tender_application_registry'])[1]",
    tabHeader: '//*[@id="root"]/div[2]//div[3]/div[1]/div/div/p',
    spreadsheetHeaders: '//*[@id="root"]//div[2]/div/div/div[2]/div[1]/div[1]/div[2]/div[1]/div/div/div',
    footerInpArea: '(//*[@id="outlined-basic"])[1]',
    footerInpArea2: '(//*[@id="outlined-basic"])[2]',
    header2Buttons: '//*[@id="root"]/div[2]//div[3]/div[2]/div/div/div[1]/div/div'
},
ContractsRegistry: {
    categoryMenu: "(//p[@title='contracts_registry'])[1]",    
},
ConractObligationsReg: {
    categoryMenu: "(//p[@title='contract_obligations_registry'])[1]",
    spreadsheetHeaders: '//*[@id="root"]//div[2]/div/div/div[2]/div/div[1]/div[2]/div[1]/div/div/div',    
},
SalaryCalcReg: {
    categoryMenu: "(//p[@title='salary_calculations_registry'])[1]",
    spreadsheetHeaders: '//*[@id="root"]//div[2]/div/div/div[2]/div[1]/div[1]/div[2]/div[1]/div/div/div',    
},
InvoicesRegistry: {
    categoryMenu: "(//p[@title='invoices_registry'])[1]",
    spreadsheetHeaders: '//*[@id="root"]/div[2]//div[3]/div[2]//div[2]/div/div[1]/div[2]/div[1]/div/div/div',    
},
ExpenseRequestReg:{
    categoryMenu: "(//p[@title='expenditure_requests_registry'])[1]", 
},
AccountingCertificate: {
    categoryMenu: "(//p[@title='accounting_certificate'])[1]",
    modalSheetHeaders: '//div[2]//div[2]/div[3]/div/div/div[1]/div[2]/div[1]/div/div/div',
},
ExpensesWithoutBudg: {
    categoryMenu: "(//p[@title='expenses_without_budget'])[1]",
    spreadsheetHeaders: '//*[@id="root"]//div[3]/div[2]//div[2]/div/div[1]/div[2]/div[1]/div/div/div',
    
},
ExpenseObjects:{
    categoryMenu: "(//p[@title='expense_objects_registry'])[1]",
},
ContractObligationSelfPaymReg: {
    categoryMenu: "(//p[@title='contract_obligation_self_payment_registry'])[1]",
},
TravelExpensesRegistry: {
    categoryMenu: "(//p[@title='travel_expenses_registry'])[1]",
    row1: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[3]/div[1]/div[1]',    
    row2: '//*[@id="root"]//div[2]//div[2]//div/div[4]/div[1]/div[1]/div/div',
    row3: '//*[@id="root"]//div[2]//div[2]//div/div[5]/div[1]/div[1]/div/div',
    row4: '//*[@id="root"]//div[2]//div[2]//div/div[6]/div[1]/div[1]/div/div',
    row5: '//*[@id="root"]//div[2]//div[2]//div/div[7]/div[1]/div[1]/div/div',
    row6: '//*[@id="root"]//div[2]//div[2]//div/div[8]/div[1]/div[1]/div/div',
    row7: '//*[@id="root"]//div[2]//div[2]//div/div[9]/div[1]/div[1]/div/div',
    row8: '//*[@id="root"]//div[2]//div[2]//div/div[10]/div[1]/div[1]/div/div',
    row9: '//*[@id="root"]//div[2]//div[2]//div/div[11]/div[1]/div[1]/div/div',
    acceptToExecButton: '//*[@id="root"]//div[2]//div[1]/div[1]/div[1]/div[1]/p',
    approveButton: '//*[@id="root"]//div[2]//div[1]/div[1]/div[2]/div[1]/p',
},
CKVappReg: {
    categoryMenu: "(//p[@title='ckv_applications_registry'])[1]",
},
SomoniPaymentsReg: {
    categoryMenu: "(//p[@title='somoni_payments_registry'])[1]",
    row: '//*[@id="root"]//div[2]//div[2]//div[1]/div[2]/div[1]/div/div/div[2]/div[1]/div[1]/div/div',
    row1: '//*[@id="root"]//div[2]//div[2]//div[1]/div[2]/div[1]//div[3]/div[1]/div[1]/div/div',
    row2: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[4]/div[1]/div[1]/div/div',
    row3: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[5]/div[1]/div[1]/div/div',
    row4: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[6]/div[1]/div[1]/div/div',
    row5: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[7]/div[1]/div[1]/div/div',
    row6: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[8]/div[1]/div[1]/div/div',
    row7: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[9]/div[1]/div[1]/div/div',
    row8: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[10]/div[1]/div[1]/div/div',
    row9: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[11]/div[1]/div[1]/div/div',
    row10: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[12]/div[1]/div[1]/div/div',
    row11: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[13]/div[1]/div[1]/div/div',
    row12: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[14]/div[1]/div[1]/div/div',
    row13: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[15]/div[1]/div[1]/div/div',
    row14: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[16]/div[1]/div[1]/div/div',
    row15: '//*[@id="root"]//div[2]//div[1]/div[2]/div[1]//div[17]/div[1]/div[1]/div/div',
    listReportButton: "(//p[contains(text(),'Отчет списка')])[1]",
},
CheckIssuanceReg: {
    categoryMenu: "(//p[@title='check_issuance_registry'])[1]",
    headerButton: "(//p[contains(text(),'Обналичено')])[1]",
},
TransferAppReg: {
    categoryMenu: "(//p[@title='translation_application_registry'])[1]",
    spreadsheetHeaders: '//*[@id="root"]//div[2]/div/div/div[2]/div/div[1]/div[2]/div[1]/div/div/div',
    takeToExecButton: "(//p[contains(text(),'Принять к исполнению')])[1]",
    acceptButton: "(//p[contains(text(),'Утвердить')])[1]",
},
ReportSubmenu:{
    submenu: "(//span[@class='ant-menu-title-content'][contains(text(),'Отчет')])[1]",
    categoriesOfSubmenu: '//*[@id="rc-menu-uuid-77711-1-33-popup"]/li',
    cat1: "(//p[@title='balance_sheet'])[1]",
    cat2: "(//p[@title='accounting_reports'][contains(text(),'Бухгалтерские отчеты')])[1]",
    cat3: "(//p[@title='extract_reports'])[1]",
    cat4: "(//p[@title='balance_of_period'])[1]",
    cat5: "(//p[@title='other_expenses'])[1]",
    cat6: "(//p[@title='entering_bo_balance_funds'])[1]",
    cat7: "(//p[@title='budget_execution_reports'])[1]",
    cat8: "(//p[@title='accounting_reports'][contains(text(),'Бухгалтерские отчеты')])[2]",
    cat9: "(//p[@title='financial_reports'])[1]",
    cat10: "(//p[@title='reports_of_income'])[1]",
    cat11: "(//p[@title='income_statement'])[1]",
},
BalanceSheet:{
    categoryMenu: "(//p[@title='balance_sheet'])[1]",    
},
AccountReport:{
    categoryMenu: "(//p[@title='accounting_reports'][contains(text(),'Бухгалтерские отчеты')])[1]",
},
ExcractReports: {
    categoryMenu: "(//p[@title='extract_reports'])[1]",
},
BalanceOfPeriod: {
    categoryMenu: "(//p[@title='balance_of_period'])[1]",
},
OtherExpenses: {
    categoryMenu: "(//p[@title='other_expenses'])[1]",
    printButton: "(//p[contains(text(),'Печать Excel')])[1]",
},
EnteringBObalanceFunds:{
    categoryMenu: "(//p[@title='entering_bo_balance_funds'])[1]",
},
BudgetExecutionReports:{
    categoryMenu: "(//p[@title='budget_execution_reports'])[1]",
    categoryHeader: '//*[@id="root"]//div[2]//div[1]//div[1]/button/div/div/div',
    cat1: '//*[@id="root"]//div[2]//div[1]//div[1]/div/div/div[2]/p[1]',
    cat2: '//*[@id="root"]//div[2]//div[1]//div[1]/div/div/div[2]/p[2]',
    cat3: '//*[@id="root"]//div[2]//div[1]//div[1]/div/div/div[2]/p[3]',
    cat4: '//*[@id="root"]//div[2]//div[1]//div[1]/div/div/div[2]/p[4]',
    cat5: '//*[@id="root"]//div[2]//div[1]//div[1]/div/div/div[2]/p[5]',
    cat6: '//*[@id="root"]//div[2]//div[1]//div[1]/div/div/div[2]/p[6]',
    button1: '//*[@id="root"]//div[2]/div/div/div/div[2]/div[1]/div[1]/div[1]/div[1]/span[1]',
    button2: '//*[@id="root"]//div[2]/div/div/div/div[2]/div[1]/div[1]/div[1]/div[2]/span[1]',
    button3: '//*[@id="root"]//div[2]/div/div/div/div[2]/div[1]/div[1]/div[1]/div[3]/span[1]',
    text1: '//*[@id="root"]//div[2]//div[2]/div[1]/div[1]/div[1]/div[1]/span[2]',
    text2: '//*[@id="root"]//div[2]//div[2]/div[1]/div[1]/div[1]/div[2]/span[2]',
    text3: '//*[@id="root"]//div[2]//div[2]/div[1]/div[1]/div[1]/div[3]/span[2]',
    row1: "(//div[contains(text(),'Счет №')])[1]",
    row2: "(//div[contains(text(),'Дебет')])[1]",
    row3: "(//div[contains(text(),'Кредит')])[1]",
    row4: "(//div[contains(text(),'Разница')])[1]",
    input1: '//*[@id=":r1i:-label"]',
    input2: '//*[@id=":r1j:"]',
    input3: '//*[@id=":r1k:"]',
    input4: '//*[@id=":r1l:-label"]',
    input5: '//*[@id=":r1m:"]',
    input6: '//*[@id=":r1n:-label"]',
    input7: '//*[@id=":r1o:"]',
    input8: '//*[@id=":r1p:-label"]',
    input9: '//*[@id=":r1q:"]',
    input10: '//*[@id=":r1r:"]',
    input11: '//*[@id=":r1s:"]',
    input12: '//*[@id=":r1t:"]',
    input13: '//*[@id=":r1u:"]',
    input14: '//*[@id=":r1v:"]',
    input15: '//*[@id=":r20:"]',
},
FinancialReports:{
    categoryMenu: "(//p[@title='financial_reports'])[1]",
},
ReportsofIncome: {
    categoryMenu: "(//p[@title='reports_of_income'])[1]",
},
DirectorySubmenu:{
    submenu: "(//span[contains(text(),'Справочники')])[1]",
    cat1: "(//p[@title='operating_day'])[1]",
    cat2: "(//p[@title='goods_and_services'])[1]",
    cat3: "(//p[@title='inn_registration'])[1]",
    cat4: "(//p[@title='tender_applications'])[1]",
    cat5: "(//p[@title='payers'])[1]",
    cat6: "(//p[@title='contracts'])[1]",
    cat7: "(//p[@title='recipients'])[1]",
    cat8: "(//p[@title='salary_of_recipients'])[1]",
    cat9: "(//p[@title='banks'])[1]",
    cat10: "(//p[@title='notification_of_refusal'])[1]",
    cat11: "(//p[@title='account_plan'])[1]",
    cat12: "(//p[@title='treasure_department'])[1]",
    cat13: "(//p[@title='trasure_binding_with_bz'])[1]",
    cat14: "(//p[@title='manual_of_cities'])[1]",
    cat15: "(//p[@title='bz_binding'])[1]",
    cat16: "(//p[@title='curators'])[1]",
    cat17: "(//p[@title='binding_of_curators'])[1]",
    cat18: "(//p[@title='manual_debt'])[1]",
},
OperationalDay:{
    categoryMenu: "(//p[@title='operating_day'])[1]",
    currentDay: '//*[@id="root"]//div[2]/div/div/div/div/p[2]',
    dateSelector: "//button[@aria-label='Choose date']//*[name()='svg']",
    date: "(//button[normalize-space()='10'])[1]",
    saveButton: "(//span[contains(text(),'Сохранить')])[1]",
    alert: "(//span[contains(text(),'Операционная дата обновлена!')])[1]",
    closeButton: "(//span[contains(text(),'Закрыть')])[1]"
},
GoodsandServices:{
    categoryMenu: "(//p[@title='goods_and_services'])[1]",
    inputArea: "(//input[@id=':r1a:'])[1]",
    searchButton: "(//p[contains(text(),'Поиск')])[1]",
    resultItem: "(//span[contains(text(),'По ценным бумагам, кроме акций -2313-1-514310 - 23')])[1]",
},
RegistrationINN:{
    categoryMenu: "(//p[@title='inn_registration'])[1]",
    row1: "(//div[contains(text(),'ИНН')])[1]",
    row2: "(//div[contains(text(),'Название')])[1]",
    row3: "(//div[contains(text(),'Тип')])[1]",
    row4: "(//div[contains(text(),'Операции')])[1]"
},
TenderApplications: {
    categoryMenu: "(//p[@title='tender_applications'])[1]",
    dataID: '//*[@id="root"]//div[2]//div[2]//div[5]/div[2]/div',
    dataPBS: '//*[@id="root"]//div[2]//div[2]//div[5]/div[4]/div',
    dataNameSur: '//*[@id="root"]//div[2]//div[5]/div[8]/div',
    value1: '//*[@id="root"]//div[2]//div[1]//div[2]/div/div[1]/div[8]/div',
    value2: '//*[@id="root"]//div[2]//div[2]//div[2]/div[8]/div',
    value3: "(//div/*[@id=':rv2:'])[1]",
    alert: "(//div[@class='ant-notification-notice-message'])[1]",
    nextPageHeader: '//*[@id="root"]//div[2]//form/div[2]/p',
    prevInput1: '(//*[@id="outlined-basic"])[1]',
    prevInput2: '(//*[@id="outlined-basic"])[2]',
    prevInput3: '(//*[@id="outlined-basic"])[3]',
    prevInput4: '(//*[@id="outlined-basic"])[4]',
    prevInput5: '(//*[@id="outlined-basic"])[5]',
    prevInput6: '(//*[@id="outlined-basic"])[6]',
    prevInput7: '(//*[@id="outlined-basic"])[7]',
    prevInput8: '(//*[@id="outlined-basic"])[8]',
    prevInput9: '(//*[@id="outlined-basic"])[9]',
    prevInput10: '(//*[@id="outlined-basic"])[10]',
    prevInput11: '(//*[@id="outlined-basic"])[11]',
    prevInput12: '(//*[@id="outlined-basic"])[12]',
    prevInput13: '(//*[@id="outlined-basic"])[13]',
    prevInput14: '(//*[@id="outlined-basic"])[14]',
    lastPageInput1: '(//*[@id="outlined-basic"])[1]',
    lastPageInput2: '(//*[@id="outlined-basic"])[2]',
    lastPageInput3: '(//*[@id="outlined-basic"])[3]',
    lastPageInput4: '(//*[@id="outlined-basic"])[4]',
    lastPageInput5: '(//*[@id="outlined-basic"])[5]',
    lastPageInput6: '(//*[@id="outlined-basic"])[6]',
    lastPageInput7: '(//*[@id="outlined-basic"])[7]',
    lastPageInput8: '(//*[@id="outlined-basic"])[8]',
    lastPageInput9: '(//*[@id="outlined-basic"])[9]',
},
PayersBudgetOrg:{
    categoryMenu: "(//p[@title='payers'])[1]",
    addINNbutton: "(//p[contains(text(),'Добавить ИНН')])[1]",
    saveButton: "(//p[contains(text(),'Сохранить')])[1]",
    addAccountButton: "(//p[contains(text(),'Добавить счет')])[1]",
    paginationSelector: '//*[@id="root"]//div[2]/div[2]//div[2]/div[2]/div/div[2]',
    row1: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[2]/div[1]/div[1]/div/div',
    row2: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[3]/div[1]/div[1]/div/div',
    row3: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[4]/div[1]/div[1]/div/div',
    row4: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[5]/div[1]/div[1]/div/div',
    row5: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[6]/div[1]/div[1]/div/div'
},
Contracts:{
    categoryMenu: "(//p[@title='contracts'])[1]",
    header1: '//*[@id=":r15:"]',
    header2: '//*[@id=":r16:"]',
    header3: '//*[@id=":r17:"]',
    header4: '//*[@id=":r18:"]',    
    header5: '//*[@id="root"]//div[2]/div/div/div[1]/div[2]/div[5]/div',
    header6: '//*[@id=":r1a:"]',
    listButton: '//*[@id="root"]//div[1]/div[2]/div[7]/div[1]/p',
    row1: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]/div[1]//div[2]/div[1]/div[1]/div/div',
    row2: '//*[@id="root"]//div[2]//div[1]/div/div/div[3]/div[1]/div[1]/div/div',
    row3: '//*[@id="root"]//div[4]/div[1]/div[1]/div/div',
    row4: '//*[@id="root"]//div[5]/div[1]/div[1]/div/div',
    row5: '//*[@id="root"]//div[6]/div[1]/div[1]/div/div',
    row6: '//*[@id="root"]//div[7]/div[1]/div[1]/div/div',
    row7: '//*[@id="root"]//div[8]/div[1]/div[1]/div/div',
    row8: '//*[@id="root"]//div[9]/div[1]/div[1]/div/div',
    row9: '//*[@id="root"]//div[10]/div[1]/div[1]/div/div',
    footerInput: '//*[@id=":r1b:"]',
    addNewContractBetton: "(//p[contains(text(),'Добавить новый контракт')])[1]",
},
Recipients:{
    categoryMenu: "(//p[@title='recipients'])[1]",
    inputArea: '//*[@id=":r7u:"]',
    searchAndAdd: "(//p[contains(text(),'Найти и добавить')])[1]",
    dataAdd: '//*[@id="root"]//div[2]/div[5]/div/div[1]',
    add1button: "(//p[contains(text(),'Добавить')])[1]",
    inn: "(//input[@id='taxId'])[1]",
    description: "(//input[@id='shortDescription'])[1]",
    BZname: "(//input[@id='rc_select_2'])[1]",
    receipFunc: "(//label[contains(text(),'Функция')])[1]",
    modalAddButton: "(//span[contains(text(),'Добавить')])[1]",
    alert: "(//div[contains(text(),'Ошибка при добавлении заявки!')])[1]",
    cancelBut: "(//span[contains(text(),'Отмена')])[1]",
    add2button: "(//p[contains(text(),'Добавить')])[2]",
    bankID: "(//div[@id='bankId'])[1]",
    accNum: "(//input[@id='accNum'])[1]",
    comment: "(//input[@id='comment'])[1]",
    addButton: "(//span[contains(text(),'Добавить')])[1]",
    cancel: "(//span[contains(text(),'Отмена')])[1]",
    spsheet1: '//*[@id="root"]//div[1]/div/div[1]/div[2]//div/div[2]/div[1]/div[1]/div/div',
    spsheet2: '//*[@id="root"]//div[1]/div/div[1]/div[2]//div/div[3]/div[1]/div[1]/div/div',
    spsheet3: '//*[@id="root"]//div[1]/div/div[1]/div[2]//div/div[4]/div[1]/div[1]/div/div',
    row1: '//*[@id="root"]//div[2]/div/div/div[2]/div/div[1]/div[2]//div[2]/div[1]/div[1]/div[1]',
    row2: '//*[@id="root"]//div[2]/div/div/div[2]/div/div[1]/div[2]//div[3]/div[1]/div[1]/div[1]',
    row3: '//*[@id="root"]//div[2]/div/div/div[2]/div/div[1]/div[2]//div[4]/div[1]/div[1]/div[1]',
    row4: "(//div[@class='MuiDataGrid-columnHeaderTitle css-mh3zap'][normalize-space()='-'])[2]",
    deleteButton: "(//p[contains(text(),'Удалить')])[1]",
},
Salary:{
    categoryMenu: "(//p[@title='salary_of_recipients'])[1]",
    listButton: "(//p[contains(text(),'Список')])[1]",    
    taxType: "(//label[contains(text(),'Вид удержания (Перечисление)')])[1]",
    staffSocialTax: "(//li[contains(text(),'21111 - Социальный налог с работника')])[1]",
    addButton: "(//p[contains(text(),'Добавить')])[1]",
    modalHeader: "(//div[contains(text(),'Добавить')])[1]",
    row1: '//*[@id="root"]//div[1]//div[1]/div/div/div[2]/div[1]/div/div',
    row2: '//*[@id="root"]//div[1]//div[1]/div/div/div[3]/div[1]/div/div',
    row3: '//*[@id="root"]//div[1]//div[1]/div/div/div[4]/div[1]/div/div',
    row4: '//*[@id="root"]//div[1]//div[1]/div/div/div[5]/div[1]/div/div',
    row5: '//*[@id="root"]//div[1]//div[1]/div/div/div[6]/div[1]/div/div',
    row6: '//*[@id="root"]//div[1]//div[1]/div/div/div[7]/div[1]/div/div',
    row7: '//*[@id="root"]//div[1]//div[1]/div/div/div[8]/div[1]/div/div',
    row8: '//*[@id="root"]//div[1]//div[1]/div/div/div[9]/div[1]/div/div',
    row9: '//*[@id="root"]//div[1]//div[1]/div/div/div[10]/div[1]/div/div',
},
Banks: {
    categoryMenu: "(//p[@title='banks'])[1]",    
    alert2: '//*[@id="3"]/div[1]/div[2]',
},
NotificationOfRefusal: {
    categoryMenu: "(//p[@title='notification_of_refusal'])[1]",
    row1: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[2]/div[1]/div[1]/div/div',
    row2: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[3]/div[1]/div[1]/div/div',
    row3: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[4]/div[1]/div[1]/div/div',
    row4: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[5]/div[1]/div[1]/div/div',
    row5: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[6]/div[1]/div[1]/div/div',
    row6: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[7]/div[1]/div[1]/div/div',
    row7: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[8]/div[1]/div[1]/div/div',
    row8: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[9]/div[1]/div[1]/div/div',
    row9: '//*[@id="root"]//div[2]/div/div/div[2]//div[2]//div/div[10]/div[1]/div[1]/div/div',
},
AccountPlan: {
    categoryMenu: "(//p[@title='account_plan'])[1]",
    code: '//*[@id="createForm"]/div[1]/div/div/div/div/div/div/div/div/input',
    name: '//*[@id="createForm"]/div[2]/div/div/div/div/div/div/div/div/input',
    description: "(//textarea[@id='createForm_description'])[1]",
    text1: "(//span[contains(text(),'Скопировать предыдущий год')])[1]",
    text2: "(//span[contains(text(),'Экспорт из системы')])[1]",
    text3: "(//span[contains(text(),'Импорт из файла')])[1]",
    alert: "(//span[contains(text(),'Классификация успешно сохранена!')])[1]",
    reportButton: "(//p[contains(text(),'Отчет')])[1]",
    deleteButton: "(//p[contains(text(),'Удалить')])[1]",
},
TreasureDepartment:{
    categoryMenu: "(//p[@title='treasure_department'])[1]",
    row1: '//*[@id="root"]//div[1]/div[2]//div/div[2]/div[1]/div[1]/div/div',
    row2: '//*[@id="root"]//div[1]/div[2]//div/div[3]/div[1]/div[1]/div/div',
    row3: '//*[@id="root"]//div[1]/div[2]//div/div[4]/div[1]/div[1]/div/div',
    row4: '//*[@id="root"]//div[1]/div[2]//div/div[5]/div[1]/div[1]/div/div',
    row5: '//*[@id="root"]//div[1]/div[2]//div/div[6]/div[1]/div[1]/div/div',
    row6: '//*[@id="root"]//div[1]/div[2]//div/div[7]/div[1]/div[1]/div/div',
    row7: '//*[@id="root"]//div[1]/div[2]//div/div[8]/div[1]/div[1]/div/div',
    row8: '//*[@id="root"]//div[1]/div[2]//div/div[9]/div[1]/div[1]/div/div',    
},
BidndingTreasureDprt:{
    categoryMenu: "(//p[@title='trasure_binding_with_bz'])[1]",
    modalspsh1: '//div[2]/div/div/div[1]/div[2]/div[1]/div/div/div[2]/div[1]/div[1]/div/div',
    modalspsh2: '//div[2]/div/div/div[1]/div[2]/div[1]/div/div/div[3]/div[1]/div[1]/div/div',
    modalspsh3: '//div[2]/div/div/div[1]/div[2]/div[1]/div/div/div[4]/div[1]/div[1]/div/div',
    modalspsh4: '//div[2]/div/div/div[1]/div[2]/div[1]/div/div/div[5]/div[1]/div[1]/div/div',
    modalspsh5: '//div[2]/div/div/div[1]/div[2]/div[1]/div/div/div[6]/div[1]/div[1]/div/div',
    modalspsh6: '//div[2]/div/div/div[1]/div[2]/div[1]/div/div/div[7]/div[1]/div[1]/div/div',
    modalspsh7: '//div[2]/div/div/div[1]/div[2]/div[1]/div/div/div[8]/div[1]/div[1]/div/div',
    row1: '//*[@id="root"]//div[1]/div[2]//div/div[2]/div[1]/div[1]/div/div',
    row2: '//*[@id="root"]//div[1]/div[2]//div/div[3]/div[1]/div[1]/div/div',
    row3: '//*[@id="root"]//div[1]/div[2]//div/div[4]/div[1]/div[1]/div/div',
    row4: '//*[@id="root"]//div[1]/div[2]//div/div[5]/div[1]/div[1]/div/div',
    row5: '//*[@id="root"]//div[1]/div[2]//div/div[6]/div[1]/div[1]/div/div',
    row6: '//*[@id="root"]//div[1]/div[2]//div/div[7]/div[1]/div[1]/div/div',
    row7: '//*[@id="root"]//div[1]/div[2]//div/div[8]/div[1]/div[1]/div/div',
    row8: '//*[@id="root"]//div[1]/div[2]//div/div[9]/div[1]/div[1]/div/div',
    row9: '//*[@id="root"]//div[1]/div[2]//div/div[10]/div[1]/div[1]/div/div',
    row10: '//*[@id="root"]//div[1]/div[2]//div/div[11]/div[1]/div[1]/div/div',
    row11: '//*[@id="root"]//div[1]/div[2]//div/div[12]/div[1]/div[1]/div/div',
}


}

module.exports = Locators;