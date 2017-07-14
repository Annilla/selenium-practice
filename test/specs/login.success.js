var expect = require('chai').expect;
var LoginPage = require('../pageobjects/login.page');

describe('登入流程', function () {
  it('登入成功', function () {
    LoginPage.open();
    LoginPage.username.setValue('01565');
    LoginPage.password.setValue('1109anny');
    LoginPage.submit();
    expect(LoginPage.status.getText()).to.include('Logout');
  });
});