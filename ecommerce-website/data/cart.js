export function addToCart(event, id, stock){
  
  loadFromStorage(); 

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
 
};

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
};

let cart = [];
function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')) || [];
};