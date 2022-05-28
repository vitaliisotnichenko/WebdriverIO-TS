import { BasePage } from "../base";
import { ShoppingCart } from "./components/shoppingCart";

export class Checkout extends BasePage {
    shoppingCart
    constructor() {
        super();
        this.shoppingCart = new ShoppingCart();
    }
    private get cartItemName() {
        return $('.inventory_item_name')
    }

    async open() {
        await super.open('/cart.html')
    }

    async isItemInCart() {
        if(await this.cartItemName.isDisplayed()) {
            return (await this.cartItemName.getText()).includes('Sauce Labs Backpack')
        } else {
            return false
        }
    }

    async itNoItemsInChart() {
        return !(await this.isItemInCart());
    }
}