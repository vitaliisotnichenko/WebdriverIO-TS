const chai = require('chai');
const assert = chai.assert

describe('Login app', () => {
    it('should login with valid credentials', async () => {
        await browser.url('?controller=authentication&back=my-account');
        const inputUserEmail = $('#email');
        const inputPassword = $('#passwd');
        const btnSubmit = $('#SubmitLogin');
        await inputUserEmail.setValue(String(process.env.USER_EMAIL));
        await inputPassword.setValue(String(process.env.USER_PASSWORD));
        await btnSubmit.click();
        const myAccountHeader = $('.page-heading');
        assert.isOk(await myAccountHeader.isDisplayed());
        assert.strictEqual(await myAccountHeader.getText(), 'MY ACCOUNT');
    });
    it('should not login with invalid credentials', async () => {
        await browser.url('?controller=authentication&back=my-account');
        const inputUserEmail = $('#email');
        const inputPassword = $('#passwd');
        const btnSubmit = $('#SubmitLogin');
        await inputUserEmail.setValue('test@com');
        await inputPassword.setValue(String(process.env.USER_PASSWORD));
        await btnSubmit.click();
        const alertError =  $('.page-heading+.alert')
        assert.isTrue(alertError).isDisplayed();
    })
})