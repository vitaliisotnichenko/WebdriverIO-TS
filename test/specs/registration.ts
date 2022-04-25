import * as assert from 'assert';

const { faker } = require('@faker-js/faker')

describe('User', function () {
    it('can register', async function () {
        this.retries(4)
        browser.url('?controller=authentication&back=my-account');
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const address = faker.address.streetAddress();
        $('#email_create').setValue(`test${new Date().getTime()}@test.com`);
        await browser.pause(5000);
        $('#SubmitCreate').click();
        await browser.pause(2000);
        $('#customer_firstname').waitForDisplayed( { timeout: 5000 })
        $('#customer_firstname').setValue(firstName);
        $('#customer_lastname').setValue(lastName);
        $('input[type="password"]').isDisplayed();
        $('input[type="password"]').setValue(String(process.env.USER_PASSWORD));
        $('#firstname').setValue(firstName);
        $('#lastname').setValue(lastName);
        $('#address1').setValue(address);
        $('#city').setValue('New York');
        $('#id_state').isDisplayed();
        $('#id_state').selectByVisibleText('Alaska');
        $('#postcode').setValue('93995');
        $('#phone_mobile').setValue('1-264-963-3754 801');
        await browser.pause(3000);
        $('#submitAccount').click();
        $('.account').waitForDisplayed( { timeout: 5000 })
        await expect($('.account')).toBeDisplayed();
        const myAccountMenu = $('.navigation_page');
        assert(await myAccountMenu.getText() === 'My account');
    })
})