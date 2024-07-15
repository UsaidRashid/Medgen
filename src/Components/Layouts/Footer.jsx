import React from "react";

export default function Footer() {
  return (
    <footer class="footer  mt-auto py-3 bg-light">
      <div class="container  d-flex flex-column">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h2 class="h4 text-center">About Us</h2>
            <p className="p-3">
              Welcome to MedGen, your trusted partner in finding affordable
              healthcare options. At MedCare Solutions, we are dedicated to
              helping you access high-quality, cost-effective medications. Our
              platform allows you to search for generic alternatives to
              brand-name medicines, ensuring you get the best value for your
              health needs.
            </p>
          </div>
          <div class="col-md-4 mb-3">
            <h2 class="h4">Navigation</h2>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a href="/" class="nav-link p-0">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="/services" class="nav-link p-0">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="/faq" class="nav-link p-0">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a href="/contact-us" class="nav-link p-0">
                  Contact us
                </a>
              </li>
              <li class="nav-item">
                <a href="/admin" class="nav-link p-0">
                  Admin
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-3">
            <h2 class="h4">Contact</h2>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link p-0">
                  <i class="fas fa-phone-alt"></i> Phone: +1 (555) 123-4567
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link p-0">
                  <i class="fas fa-envelope"></i> medgen@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col text-center">
            <p class="text-muted">Copyright &copy; 2024 Medgen</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
