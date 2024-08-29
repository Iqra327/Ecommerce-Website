export function homeProductQuantity(event, id, stock){
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector('.js-product-quantity');

  let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

  if(event.target.classList.contains('js-quantity-increment')){
    if(quantity < stock){
      quantity++;
    }else if(quantity === stock){
      quantity = stock;
    }
  }

  if(event.target.classList.contains('js-quantity-decrement')){
    if(quantity > 1){
      quantity--;
    }
  }

  productQuantity.innerText = quantity;
  productQuantity.setAttribute('data-quantity', quantity);
  return quantity;
};