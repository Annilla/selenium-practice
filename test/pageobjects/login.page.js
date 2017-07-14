var Page = require('./page')
var LoginPage = Object.create(Page, {

  // 定義元素
  username: { get: function () { return browser.element('#EmployeeID'); } },
  password: { get: function () { return browser.element('#Password'); } },
  form: { get: function () { return browser.element('.container form'); } },
  status: { get: function () { return browser.element('#UserEmpId'); } },

  // override 方法
  open: {
    value: function () {
      Page.open.call(this, '');
    }
  },

  // 自訂方法
  submit: {
    value: function () {
      this.form.submitForm();
    }
  }
});

module.exports = LoginPage;