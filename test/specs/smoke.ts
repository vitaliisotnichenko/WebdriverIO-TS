import * as chai from "chai";
const assert = chai.assert

describe('App', () => {
    it('should login with valid credentials @smoke', async () => {
        const inputUserName = $('#user-name');
        const inputPassword = $('#password');
        const btnSubmit = $('#login-button');
        await inputUserName.setValue(String(process.env.USER_NAME));
        await inputPassword.setValue(String(process.env.USER_PASSWORD));
        await btnSubmit.click();
        const menuButton = $('#menu_button_container');
        const logoutButton = $('#logout_sidebar_link');
        assert.isOk(await menuButton.isDisplayed());
        assert.isOk(await logoutButton.isDisplayed())
    });
    let dataCollection = [1, 2, 3, 4, 5, 6];
    dataCollection.map(data => {
        it(`add item to the shopping cart @smoke`, async function () {
            const inputUserName = $('#user-name');
            const inputPassword = $('#password');
            const btnSubmit = $('#login-button');
            await inputUserName.setValue(String(process.env.USER_NAME));
            await inputPassword.setValue(String(process.env.USER_PASSWORD));
            await btnSubmit.click();
            const addToCardButton = $(`.inventory_list .inventory_item:nth-child(${data}) button`)
            await addToCardButton.click();
            assert.isAbove(parseInt(await $('.shopping_cart_badge').getText()),0)
        })
    })
})