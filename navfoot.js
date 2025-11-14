document.addEventListener('DOMContentLoaded', function () {

    const navbarContainer = document.getElementById('navbar');
const footerContainer = document.getElementById('footer');

navbarContainer.innerHTML = `
       <div class="logo">
      <a href="index.html"><img src="pic/logo.svg" alt="logo" /></a>
    </div>

    <div class="menu-toggle" id="menu-toggle">
      <span></span><span></span><span></span>
    </div>

    <div class="nav-link">
      <ul id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li class="main-dropdown">
          <a href="#">Zones <i class="fa-solid fa-caret-down"></i></a>
          <div class="dropdown">
            <ul>
              <li><a href="east.html">Eastern Zone</a></li>
              <li><a href="west.html">Western Zone</a></li>
              <li><a href="north.html">Northern Zone</a></li>
              <li><a href="south.html">Southern Zone</a></li>
            </ul>
          </div>
        </li>
        <li><a href="Contact.html">Contact Us</a></li>
        <li><a href="site-map.html">Site Map</a></li>
        <li><a href="Feedback.html">Feedback</a></li>
        <li><a href="Queries.html">Queries</a></li>
      </ul>
    </div>
`;

footerContainer.innerHTML = `<div class="container text-center text-md-left">
            <div class="row text-center text-md-left">

                <!-- Logo & Description -->
                <div class="col-12 col-sm-6 col-md-4 mx-auto mt-3">
                    <h5 class="mb-3">
                        <img src="pic/logo.svg" alt="Logo" class="img-fluid" style="max-width: 200px;">
                    </h5>
                    <p>We provide top-quality services to help your business grow.</p>
                </div>

                <!-- Navigation -->
                <div class="col-12 col-sm-6 col-md-4 mx-auto mt-3">
                    <h5 class="text-uppercase mb-3 text-info">Navigation Tabs</h5>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="text-white text-decoration-none">Home</a></li>
                        <li><a href="about.html" class="text-white text-decoration-none">About Us</a></li>
                        <li><a href="gallery.html" class="text-white text-decoration-none">Gallery</a></li>
                        <li><a href="Contact.html" class="text-white text-decoration-none">Contact</a></li>
                        <li><a href="Feedback.html" class="text-white text-decoration-none">Feedback</a></li>
                        <li><a href="site-map.html" class="text-white text-decoration-none">Site Map</a></li>
                        <li><a href="Queries.html" class="text-white text-decoration-none">Queries</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-12 col-md-4 mx-auto mt-3">
                    <h5 class="text-uppercase mb-3 text-info">Contact</h5>
                    <p><i class="fas fa-home me-2"></i> Karachi, Pakistan</p>
                    <p><i class="fas fa-envelope me-2"></i> info@beautifulbeaches.com</p>
                    <p><i class="fas fa-phone me-2"></i> +92 300256232</p>
                </div>

            </div>

            <hr class="my-4" style="border-color: rgba(255, 255, 255, 0.2);">

            <!-- Copyright & Social -->
            <div class="row align-items-center text-center text-md-start">
                <div class="col-md-7 col-lg-8 mb-3 mb-md-0">
                    <p class="mb-0">© 2025 Copyright:
                        <a href="#" class="text-info text-decoration-none">
                            <strong>Creative Web Agency</strong>
                        </a>
                    </p>
                </div>
                <div class="col-md-5 col-lg-4">
                    <div class="text-center text-md-end">
                        <ul class="list-unstyled list-inline mb-0">
                            <li class="list-inline-item"><a href="https://facebook.com" class="text-white"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="list-inline-item"><a href="https://twiter.com" class="text-white"><i class="fab fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="https://instagram.com" class="text-white"><i class="fab fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="https://Linkedin.com" class="text-white"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;


 const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const dropdownParent = document.querySelector(".main-dropdown");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  dropdownParent.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      dropdownParent.classList.toggle("dropdown-active");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });
});