import * as chai from "chai";
import {beforeEach} from "mocha";
const assert = chai.assert

describe('App', () => {
    it('should login with valid credentials @smoke', async () => {
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
    it('should not login with invalid credentials @smoke', async () => {
        const inputUserEmail = $('#email');
        const inputPassword = $('#passwd');
        const btnSubmit = $('#SubmitLogin');
        await inputUserEmail.setValue('test@com');
        await inputPassword.setValue(String(process.env.USER_PASSWORD));
        await btnSubmit.click();
        const alertError =  $('.page-heading+.alert');
        assert.isOk(await alertError.isDisplayed());
    });

    let dataCollection = [1, 2, 3, 4, 5, 6, 7];
    dataCollection.map(data => {
        it.skip(`add item to the shopping cart @smoke`, async function () {
            await browser.url('/');
            const productSection =  $(`#homefeatured li:nth-child(${data}) .product-image-container img`);
            const addToCardButton = $('#add_to_cart button')
            await productSection.click();
            const iframe = $('.fancybox-iframe')
            await expect(iframe).toExist()
            await browser.switchToFrame(iframe);
            expect(addToCardButton).toBeClickable();
            // await addToCardButton.waitForDisplayed({ timeout: 5000 } );
            await addToCardButton.click();
            // await addToCartButton.click();
            browser.switchToParentFrame();
            assert.strictEqual(await $('.layer_cart_product h2').getText(),"Product successfully added to your shopping cart")
        })
    })
})