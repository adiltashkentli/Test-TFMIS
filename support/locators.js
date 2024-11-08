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
Revenue_ceiling: {
    categoryTabName: '//*[@id="root"]/div[2]/div/div/div[3]/div[1]/div/div/p', //for assertion
    lockButton: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[1]/div/div[1]/div',  //for clikcable assertion
    inputAge: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[2]/div/div[1]/div/div/svg',
    ageSelectList: '//*[@id=":ro:"]//li',
    inputScenario: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[2]/div/div[2]/div/div/svg',
    scenarioSelectList: '//*[@id=":rq:"]//li',
    listButton: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[2]/div/div[3]/div[1]/div',
    colunmHeadersContainer: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[3]/div/div[1]/div[2]/div[1]/div/div/div',//for assertion
    reportButton: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[1]/div/div[2]/div[1]', //for clikcable assertion
    saveButton: '//*[@id="root"]/div[2]/div/div/div[3]/div[2]/div/div/div[1]/div/div[2]/div[2]',//for clikcable assertion
    paginationButton: '//*[@id=":rr:"]',
},
}
module.exports = Locators;