// import * as chai from "chai";
// const assert = chai.assert
// import { ProductDetails } from "../../pages/productDetails";
// import { Checkout } from "../../pages/checkout";
//
// describe('Cart', () => {
//     // it('can add item', function () {
//     //     const productDetails = new ProductDetails();
//     //     const checkout = new Checkout();
//     //     productDetails.open('/inventory-item.html?id=4');
//     //     productDetails.addToCart();
//     //     checkout.open();
//     //     expect(checkout.isItemInCart()).to.be.true;
//     // })
//
//     it.only('can add correct item', async function () {
//         const inputUserName = $('#user-name');
//         const inputPassword = $('#password');
//         const btnSubmit = $('#login-button');
//         await inputUserName.setValue(String(process.env.USER_NAME));
//         await inputPassword.setValue(String(process.env.USER_PASSWORD));
//         await btnSubmit.click();
//         const menuButton = $('#menu_button_container');
//         const logoutButton = $('#logout_sidebar_link');
//         await expect(logoutButton).toBeDisplayed();
//         await expect(menuButton).toBeDisplayed();
//
//         const product = new ProductDetails();
//         const checkout = new Checkout();
//         product.open('/inventory-item.html?id=4')
//         const productDetails = product.getProductDetails();
//         console.log(productDetails)
//         product.addToCart();
//         checkout.open();
//         // expect(checkout.isItemInCart()).to.be.true;
//         // const productNameInCart = checkout.shoppingCart.items[0].getProductName();
//         // const productPrice = checkout.shoppingCart.items[0].getProductPrice();
//         // expect(productNameInCart).to.equal(productDetails.name);
//         // expect(productPrice).to.equal(productDetails.price);
//     })
// })
