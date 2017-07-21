var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');

describe('登入流程', function () {
  it('登入失敗: @watch', function () {
    LoginPage.open();
    LoginPage.username.setValue(LoginPage.content.wrongAccount);
    LoginPage.password.setValue(LoginPage.content.correctPassword);
    // LoginPage.form.submitForm();
    // var txt = LoginPage.status.getHTML();
    // expect(txt).to.include(LoginPage.content.correctStatus);
  });
});