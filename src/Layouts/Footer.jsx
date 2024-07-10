import React from "react"

export default function Footer(){
    return(
        
<footer class="footer  mt-auto py-3 bg-light">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-3">
        <h2 class="h4">About Us</h2>
        <p>Here you can add a short description about your organization and the Medicare services you provide. Keep it concise and informative.</p>
      </div>
      <div class="col-md-4 mb-3">
        <h2 class="h4">Navigation</h2>
        <ul class="nav flex-column">
          <li class="nav-item"><a href="#" class="nav-link p-0">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link p-0">Services</a></li>
          <li class="nav-item"><a href="#" class="nav-link p-0">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link p-0">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-4 mb-3">
        <h2 class="h4">Contact</h2>
        <ul class="nav flex-column">
          <li class="nav-item"><a href="#" class="nav-link p-0"><i class="fas fa-phone-alt"></i> Phone: (555) 555-0101</a></li>
          <li class="nav-item"><a href="#" class="nav-link p-0"><i class="fas fa-envelope"></i> info@yourmedicaresite.com</a></li>
          <li class="nav-item">
            <a href="#" class="nav-link p-0">
              <i class="fab fa-facebook-f"></i> Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col text-center">
        <p class="text-muted">Copyright &copy; 2024 Your Medicare Website</p>
      </div>
    </div>
  </div>
</footer>
    );
}
