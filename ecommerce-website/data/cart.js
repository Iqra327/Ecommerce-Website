let cart = [];
function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartQuantity(cart);
};

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
};

function updateCartQuantity(cart){
  let cartQuantity = cart.length;
  
  document.querySelector('.js-cart-quantity').innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartQuantity}</i>`;
};

loadFromStorage(); 

export function addToCart(event, id, stock){

  const currentProductElement = document.querySelector
  (`#card${id}`);
  
  let price = currentProductElement.querySelector('.js-product-price').innerText;
  
  let quantity = currentProductElement.querySelector('.js-product-quantity').innerText;

  price = price.replace('RS', '').trim();
  price = Number(price);

  quantity = Number(quantity);

  let totalPrice = price * quantity;

  cart.push({
    id : id,
    price : totalPrice, 
    quantity : quantity
  });

  saveToStorage();
  updateCartQuantity(cart);
};