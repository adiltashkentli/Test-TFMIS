const Locators = {
MainPage: {
    headText: '//*[@id="root"]/div[2]/div[2]/div/div/div[2]/span[1]',
    headTextSec: '//*[@id="root"]/div[2]/div[2]/div/div/div[2]/span[2]',
    nationalArm: '//*[@id="root"]/div[2]/div[2]//img',
    loginInput: 'id=loginForm_login',
    password: 'id=loginForm_password',
    loginButton: '#loginForm > div:nth-child(2) > button'
}
}
module.exports = Locators;