export let cart ;

loadFromStorage(); 

export function addToCart(event, id, stock){

  const currentProductElement = document.querySelector
  (`#card${id}`);
  
  let price = currentProductElement.querySelector('.js-product-price').innerText;
  
  let quantity = currentProductElement.querySelector('.js-product-quantity').innerText;

  price = price.replace('RS', '').trim();
  price = Number(price);

  quantity = Number(quantity);

  let existingProduct = cart.find(currProd => currProd.id === id);

  let totalPrice = price * quantity;

  if(existingProduct){
    existingProduct.quantity += quantity;
    existingProduct.price +=  price * quantity;
  }else{
    cart.push({ 
      id : id,
      price : totalPrice, 
      quantity : quantity
    });
  }

  saveToStorage();
  updateCartQuantity(cart);
};

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartQuantity(cart);
};

export function saveToStorage(){  
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function removeFromCart(productId){
  cart = cart.filter(product => product.id != productId);
  saveToStorage();
}

export function updateCartQuantity(cart){
  let cartQuantity = cart.length;
  
  document.querySelector('.js-cart-quantity').innerHTML = `
  <i class="fa-solid fa-cart-shopping"> 
    ${cartQuantity}
  </i>
  `;
};
