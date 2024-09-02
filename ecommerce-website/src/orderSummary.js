import { cart} from "../data/cart";

export function orderSummary(){
  let subTotalPrice = cart.reduce((accum, element)=> { 
    let productPrice = parseInt(element.price) || 0;
    return accum + productPrice;
  }, 0);

document.querySelector('.js-sub-total-price').innerText = `RS ${subTotalPrice}`;
document.querySelector('.js-final-total-price').innerText = `RS ${subTotalPrice + 60}`;
}

