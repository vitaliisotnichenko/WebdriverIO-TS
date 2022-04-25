const { faker } = require('@faker-js/faker')

describe('User', function () {
    it('can register', async function () {
        browser.url('?controller=authentication&back=my-account');
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const address = faker.address.streetAddress();
        $('#email_create').clearValue();
        $('#email_create').setValue(`test${new Date().getTime()}@test.com`);
        await browser.pause(5000);
        $('#SubmitCreate').click();
        await browser.pause(2000);
        $('#customer_firstname').setValue(firstName);
        $('#customer_lastname').setValue(lastName);
        await browser.pause(2000);
        $('input[type="password"]').setValue('123456Qq@');
        $('#firstname').setValue(firstName);
        $('#lastname').setValue(lastName);
        $('#address1').setValue(address);
        $('#city').setValue('New York');
        $('#id_state').clearValue();
        $('#id_state').selectByVisibleText('Alaska');
        $('#postcode').setValue('93995');
        $('#phone_mobile').setValue('1-264-963-3754 801');
        await browser.pause(2000);
        $('#submitAccount').click();
        await expect($('.account')).toBeDisplayed();
    })
})