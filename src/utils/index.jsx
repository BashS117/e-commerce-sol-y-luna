/**
 * This function calculates total price of a new order 
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number}TotalPrice 
 */
 export const totalPrice =(products)=>{
    let sum= 0;
    products.forEach(element => sum += (element.price * element.amount));
    return sum;
}   

//Function totalPrice whit Reduce:

// export const totalPrice = (products) => {
//     return products.reduce((sum, product) => sum + product.price, 0)
// } 