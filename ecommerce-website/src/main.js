import '../styles/style.css';
import products from '../api/products.json';
import { showProducts } from './productCards.js';
// import { contactForm } from './contact.js';

showProducts(products);
// contactForm();