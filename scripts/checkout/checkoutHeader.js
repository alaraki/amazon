import {cart} from '../../data/cart.js';


export function renderCheckoutHeader(){

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
  
    cartQuantity += cartItem.quantity;
  });
  
  const countItemsHTML = `
  <div class="cart-text">Checkout </div>
  <div class="cart-quantity"> ( <span>${cartQuantity} Items</span>)</div>
  `;

  document.querySelector('.check-count-section')
.innerHTML = countItemsHTML;

}