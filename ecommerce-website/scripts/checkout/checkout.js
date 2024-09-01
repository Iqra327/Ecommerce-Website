import { loadFromStorage, cart, saveToStorage, removeFromCart} from '../../data/cart';
import products from '../../api/products.json';
import { orderSummary } from './orderSummary';
import { showToast } from '../toast';

loadFromStorage();

//accessing the only products from api which are in cart >> reason >> to access the whole data of product
let filterProducts = products.filter((product) => {
  return cart.some((order) => order.id === product.id)
});

//accessing price and quantity from cart to display updated price and quantity in html
function priceQuantityFromStorage(id, price){
  let existingProduct = cart.find(product => product.id === id );
  
  let quantity = 1;
  
  if(existingProduct){
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price};
};

function ordersHTML(){
  filterProducts.forEach(product => {
  
    const localStorageData = priceQuantityFromStorage(product.id, product.price);
    
    const html = `
      <div class="col-lg-12 col-md-12 col-sm-5 my-2 mx-2 pt-2 pb-2 d-flex align-items-center justify-content-between product-row js-ordered-product-${product.id} border">

        <span class="category js-category ps-3 pe-3">${product.category}</span>

        <img src="${product.image}" alt="product-image" class="productImage">

        <p class="fw-bold">${product.name}</p>

        <p class="text-secondary js-price">${localStorageData.price}</p>
        
        <div class="d-flex justify-content-between align-items-center js-stock-element stockElement" data-id="${product.id}" data-price="${product.price}" data-stock="${product.stock}">
          <button class="border-0 bg-transparent fw-bold js-quantity-increment p-3 ms-1">+</button>
          <p class="mt-3 fw-bold js-product-quantity data-quantity="1">
          ${localStorageData.quantity}
          </p>
          <button class="border-0 bg-transparent fw-bold js-quantity-decrement p-3 me-1">-</button>
        </div>

        <button class="removeBtn js-remove-btn rounded" data-product-id="${product.id}">Remove</button>
      </div>  
    `
  document.querySelector('.js-final-orders').innerHTML += html;
  });
};

ordersHTML();

document.querySelectorAll('.js-remove-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const { productId } = btn.dataset;
    removeFromCart(productId);
   
    const currentDiv = document.querySelector(`.js-ordered-product-${productId}`);
    currentDiv.remove();

    showToast("delete");
    orderSummary();
    loadFromStorage();
  })
});

function incrementDecrement(event) {
  const stockElement = event.target.closest('.js-stock-element');
  const { id, price, stock } = stockElement.dataset;

  let quantity = 1;
  let localStoragePrice = price; 

  let existingProduct = cart.find((curProd) => curProd.id === Number(id));
  
  //accessing or getting quantity and price from localStorage to update
  if(existingProduct){
    quantity = existingProduct.quantity;
    localStoragePrice = existingProduct.price;
  }

  if(event.target.classList.contains('js-quantity-increment')){
    if(quantity < stock){
      quantity++;
    }else if(quantity === stock){
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if(event.target.classList.contains('js-quantity-decrement')){
    if(quantity > 1){
      quantity--;
    }
  }

  localStoragePrice = Number(price * quantity);

  //updating cart localstorage
  if(existingProduct){
    existingProduct.quantity = quantity;
    existingProduct.price =  localStoragePrice;
  }

  //updating on screen
  stockElement.querySelector('.js-product-quantity').innerText = quantity;
  stockElement.closest('.product-row').querySelector('.js-price').innerText = localStoragePrice;

  saveToStorage();
  orderSummary();
}

document.querySelectorAll('.js-stock-element').forEach((element) => {
  element.addEventListener('click', (event) => {  
    incrementDecrement(event);
  });
});

orderSummary();