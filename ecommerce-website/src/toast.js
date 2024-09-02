export function showToast(operation){
  const toast = document.createElement('div');
  toast.classList.add('toastDisplay');

  if(operation === 'add'){
    toast.textContent = `Product has been added to cart.`
  }else{
    toast.textContent = `Product has been deleted from cart.`
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);

}