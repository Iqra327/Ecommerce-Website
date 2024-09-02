import { loadFromStorage, cart } from "../data/cart";

loadFromStorage();

  const submit = document.querySelector('.js-submit');
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('.js-email').value;
    const message = document.querySelector('.js-message').value;
  
    const wordCount = message.trim().split(/\s+/).length;
  
    if(email && message){
      if(wordCount < 15){
        document.querySelector('.js-message-error').style.opacity = '1';
      }else{
        document.querySelector('.js-message-error').style.opacity = '0'; 
        alert('Your form has been submitted.');
      }
    }else{
      alert('Fill the required fields.');
    }
  
  });