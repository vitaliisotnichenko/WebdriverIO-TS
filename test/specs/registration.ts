const { faker } = require('@faker-js/faker')

describe('User', function () {
    it('can register', async function () {
        browser.url('?controller=authentication&back=my-account');
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const address = faker.address.streetAddress();
        await  $('#email_create').waitForDisplayed({ timeout: 5000 });
        $('#email_create').setValue(`test${new Date().getTime()}@test.com`);
        await browser.pause(10000)
        $('#SubmitCreate').click();
        $('#customer_firstname').waitForDisplayed({ timeout: 5000 });
        $('#customer_firstname').setValue(firstName);
        $('#customer_lastname').setValue(lastName);
        await browser.pause(2000)
        $('input[type="password"]').setValue('123456');
        $('#firstname').setValue(firstName);
        $('#lastname').setValue(lastName);
        await browser.pause(2000)
        $('#address1').setValue(address);
        $('#city').setValue('New York');
        await browser.pause(2000)
        $('#id_state').selectByVisibleText('Alaska');
        await browser.pause(2000)
        $('#postcode').setValue('93995');
        $('#phone_mobile').setValue('1-264-963-3754 801');
        await browser.pause(5000)
        $('#submitAccount').click();
        await browser.pause(5000)
        await expect($('.account')).toBeDisplayed();
    })
})