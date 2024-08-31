import { loadFromStorage, cart, saveToStorage, removeFromCart } from '../data/cart';
import products from '../api/products.json';
import { homeProductQuantity } from './homeProductQuantity';

loadFromStorage();

let filterProducts = products.filter((product) => {
  return cart.some((order) => order.id === product.id)
});

function ordersHTML(){
  filterProducts.forEach(product => {
    const localStorageData = priceQuantityFromStorage(product.id, product.price);
    
    const html = `
      <div class="col-lg-12 col-md-12 col-sm-5 my-2 mx-2 pt-2 pb-2 d-flex align-items-center justify-content-between product-row js-ordered-product-${product.id} border">

        <span class="category js-category ps-3 pe-3">${product.category}</span>

        <img src="${product.image}" alt="product-image" class="productImage">

        <p class="fw-bold">${product.name}</p>

        <p class="text-secondary">${localStorageData.price}</p>
        
        <div class="d-flex justify-content-between align-items-center js-stock-element stockElement">
          <button class="border-0 bg-transparent fw-bold js-quantity-increment p-3 ms-1">+</button>
          <p class="mt-3 fw-bold js-product-quantity">${localStorageData.quantity}</p>
          <button class="border-0 bg-transparent fw-bold js-quantity-decrement p-3 me-1">-</button>
        </div>

        <button class="removeBtn js-remove-btn rounded" data-product-id="${product.id}">Remove</button>
      </div>  
    `
  document.querySelector('.js-final-orders').innerHTML += html;
  });
};

ordersHTML();

function priceQuantityFromStorage(id, price){
  let existingProduct = cart.find(product => product.id === id );
  
  let quantity = 1;
  
  if(existingProduct){
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price};
};

document.querySelectorAll('.js-remove-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const { productId } = btn.dataset;
    removeFromCart(productId);
   
    const currentDiv = document.querySelector(`.js-ordered-product-${productId}`);
    currentDiv.remove();
   
    loadFromStorage();
  })
});