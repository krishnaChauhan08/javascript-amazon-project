export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

export function addToCart(productId) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
        if(productId===cartItem.productId){
            matchingItem = cartItem;
        }
    });
  
    if(matchingItem){
        matchingItem.quantity += 1;
    }else{
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
  }


// when we click delete button 
// step a : remove the product from the cart
// step b : update the html

// steps to remove the product from the cart
// 1. create a new array
// 2. loop through the cart 
// 3. add each product to new array, except for this product  

// steps to update the html
// 1. use the dom to get the element to remove 
// 2. use .remove() method
  export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
}