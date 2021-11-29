// Write a function to calculate the total amount of the cart

// V1: for...i
export function calcCartTotalV1(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  let sum = 0;
  // loop and add to sum
  for (let i = 0; i < cartItemList.length; i++) {
    const cartItem = cartItemList[i];
    const itemTotal = cartItem.product.price * cartItem.quantity;
    sum += itemTotal;
  }
  return sum;
}

// V2: using reduce
export function calcCartTotalV2(cartItemList) {
  if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

  return cartItemList.reduce((sum, cartItem) => {
    const itemTotal = cartItem.product.price * cartItem.quantity;
    return sum + itemTotal;
  }, 0);
}
