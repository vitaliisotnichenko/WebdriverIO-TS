
describe('Login app', () => {
    it('should login with valid credentials', async () => {
        await browser.url('/login');
        const inputUserName = $('#username');
        const inputPassword = $('#password');
        const btnSubmit = $('button');
        await inputUserName.setValue('tomsmith');
        await inputPassword.setValue('SuperSecretPassword');
        await btnSubmit.click();
        expect('#flash').toBeExisting();
        expect('#flash').toHaveTextContaining(
            'You logged into a secure area!');
    });
})