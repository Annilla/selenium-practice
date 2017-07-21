var Page = require('./page')
var LoginPage = Object.create(Page, {

  // 設定值
  content: {
    get: () => {
      return {
        correctAccount: '01565',
        correctPassword: '1109anny',
        correctStatus: 'Logout',
        wrongAccount: 'error'
      }
    }
  },

  // 定義元素
  username: { get: () => { return browser.element('#EmployeeID'); } },
  password: { get: () => { return browser.element('#Password'); } },
  form: { get: () => { return browser.element('.container form'); } },
  status: { get: () => { return browser.element('#UserEmpId'); } },

  // override 方法
  open: {
    value: () => {
      Page.open.call(this, '');
    }
  }

});

module.exports = LoginPage;