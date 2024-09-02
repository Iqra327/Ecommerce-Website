const headerHtml = `
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#"><img class="logo" src="images/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
          
          <li class="nav-item me-1">
            <a class="nav-link active position-relative" aria-current="page" href="/">Home</a>
          </li>
          
          <li class="nav-item me-1">
            <a class="nav-link active position-relative" aria-current="page" href="about.html">About</a>
          </li>
          
          <li class="nav-item me-1">
            <a class="nav-link active position-relative" aria-current="page" href="products.html">Products</a>
          </li>
          
          <li class="nav-item me-1">
            <a class="nav-link active position-relative me-3" aria-current="page" href="contact.html">Contact</a>
          </li>
          
          <li class="nav-item mt-1">
            <a class="btn btn-outline-none bg-dark text-white js-cart-quantity" href="checkout.html"><i class="fa-solid fa-cart-shopping"> 0</i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`

document.querySelector('.js-header').innerHTML = headerHtml;