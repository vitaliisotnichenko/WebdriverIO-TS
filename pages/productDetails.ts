import { BasePage } from "./base";
import { ProductDetailsModel } from "../models/productDetails";

export class ProductDetails extends BasePage {
    public async getProductPrice() {
        const price = $('.inventory_details_price').getText();
        console.log(price)
        return parseFloat(await price)
        // return parseFloat(price.split('$').pop())
    }

    public getProductName() {
        return $('.inventory_details_name').getText();
    }

   async getProductDetails() {
        const productDetails = new ProductDetailsModel();
        productDetails.name = await this.getProductName();
        productDetails.price = await this.getProductPrice();
        return productDetails
    }

    async open(path) {
        await super.open(path)
    }

    async addToCart() {
       await $('#add-to-cart-sauce-labs-backpack').click();
    }

}