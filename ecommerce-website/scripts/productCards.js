import { addToCart } from "../data/cart.js";
import { homeProductQuantity } from "./homeProductQuantity.js";

const productContainer = document.querySelector('.js-product-container');
const productTemplate = document.querySelector('.js-product-template');

// function to show products
export function showProducts(products){
  
  if(!products){
    return false;
  }

  products.forEach(productElem => {
    const { id, name, category, price, stock, description , image} = productElem;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector('.js-card').setAttribute('id', `card${id}`);

    productClone.querySelector('.js-product-name').innerText = name;   
    productClone.querySelector('.js-category').innerText = category;
    productClone.querySelector('.js-product-image').src = image;
    productClone.querySelector('.js-product-image').alt = name;
    productClone.querySelector('.js-product-description').innerText = description;
    productClone.querySelector('.js-product-stock').innerText = stock;
    productClone.querySelector('.js-product-price').innerText = `RS ${price}`;
    productClone.querySelector('.js-product-actual-price').innerText = `RS ${price * 4}`;

    productClone.querySelector('.js-stock-element').addEventListener('click' ,(event) => {
      homeProductQuantity(event, id, stock);
    });

    productClone.querySelector('.js-add-to-cart-btn').addEventListener('click', (event) => {
      addToCart(event, id, stock);
    })
  
    productContainer.append(productClone);
  });
};