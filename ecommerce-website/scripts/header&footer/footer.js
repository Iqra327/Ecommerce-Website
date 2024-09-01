const footerHtml = `
  <div class="container mt-5 pt-5 pb-2 text-white">
    <div class="row">
      
      <div class="col-lg-6 col-12">
        <img class="footer-logo" src="images/logo.png" alt="logo-img">
        <p class="text-white mt-3">Welcome to the E-Store, your ultimate destination for cutting-edge gadgets.</p>
        <i class="fa-brands fa-cc-paypal fa-xl text-white cursor-pointer"></i>
        <i class="fa-brands fa-cc-stripe fa-xl text-white"></i>
        <i class="fa-brands fa-cc-amazon-pay fa-xl text-white"></i>

        <div class="mt-3">
          <p class="mb-0 fs-5">Email<span class="text-danger">*</span></p>
          <input type="email" placeholder="Your Email" class="p-1 ps-2 text-success footer-input-email rounded mb-3">
          <button class="ps-2 pe-2 p-1 footer-submit-btn rounded">Submit</button>
        </div>
      </div>

      <div class="col-lg-2 col-md-4 col-sm-6">
        <h5 class="fw-bold mb-3 mt-4">SHOPPING</h5>
        <p class="m-0">Computer Store</p>
        <p class="m-0">Laptop Store</p>
        <p class="m-0">Accessories</p>
        <p class="mb-0">Sales & Discount</p>
      </div>

      <div class="col-lg-2 col-md-4 col-sm-6">
        <h5 class="fw-bold mb-3 mt-4">Experience</h5>
        <p class="m-0">Contact Us</p>
        <p class="m-0">Payment Method</p>
        <p class="m-0">Delivery</p>
        <p class="m-0">Return & Exchange</p>
      </div>

      <div class="col-lg-2 col-md-4 col-sm-6">
        <h5 class="fw-bold mb-3 mt-4">Newsletter</h5>
        <p>Be the first to know about new <br> arrivals, sales & promos!</p>
      </div>
    </div>
    </div>
    <hr class="mt-5">
    <p class="mb-0 pb-2 text-white text-center"> <i class="fa-regular fa-copyright"></i> All Rights Reserved.</p>  
`

document.querySelector('.js-footer').innerHTML = footerHtml;