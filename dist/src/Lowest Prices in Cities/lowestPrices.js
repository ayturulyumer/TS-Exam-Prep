"use strict";
function findLowestPrice(data) {
    const productsObj = {};
    for (const line of data) {
        const [townName, productName, productPriceStr] = line.split(" | ");
        const productPrice = parseFloat(productPriceStr);
        // if product is not in the object or if the new price is less than the existing one
        if (!productsObj[productName] ||
            productPrice < productsObj[productName].price) {
            productsObj[productName] = {
                name: productName,
                price: productPrice,
                town: townName,
            };
        }
    }
    // itterate all the products inside the object and console log them
    for (const key in productsObj) {
        const currentProduct = productsObj[key];
        console.log(`${currentProduct.name} -> ${currentProduct.price} (${currentProduct.town})`);
    }
}
const input = [
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
];
findLowestPrice(input);
//# sourceMappingURL=lowestPrices.js.map