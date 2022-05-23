// import * as chai from "chai";
// const assert = chai.assert
//
// describe('User', function () {
//     it('can login', async function () {
//         const inputUserName = $('#user-name');
//         const inputPassword = $('#password');
//         const btnSubmit = $('#login-button');
//         await inputUserName.setValue(String(process.env.USER_NAME));
//         await inputPassword.setValue(String(process.env.USER_PASSWORD));
//         await btnSubmit.click();
//         const menuButton = $('#menu_button_container');
//         const logoutButton = $('#logout_sidebar_link');
//         assert.isOk(await menuButton.isDisplayed());
//         assert.isOk(await logoutButton.isDisplayed())
//     })
//     it('should not login with invalid credentials @smoke', async () => {
//         const inputUserName = $('#user-name');
//         const inputPassword = $('#password');
//         const btnSubmit = $('#login-button');
//         await inputUserName.setValue('test@com');
//         await inputPassword.setValue(String(process.env.USER_PASSWORD));
//         await btnSubmit.click();
//         const alertError =  $('.error-button');
//         assert.isOk(await alertError.isDisplayed());
//     });
// })
