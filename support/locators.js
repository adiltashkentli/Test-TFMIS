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
    spreadsheetHeaders: '//*[@id="root"]//div[3]/div[2]//div[2]/div/div[1]/div[2]/div[1]/div/div/div'
},

}

module.exports = Locators;