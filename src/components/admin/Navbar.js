import page from "page";

const Navbar = {
  async render() {
    return `
      <!-- =============== Navigation ================ -->
      <div class="navigation">
          <ul>
              <!-- Logo -->
              <li>
                  <a href="/dashboard">
                      <span class="icon mx-2">
                          <img width="230px" class="img-fluid" src="../../../public/images/logo1.png" alt="" />
                      </span>
                  </a>
              </li>
  
              <!-- Dashboard -->
              <li>
                  <a href="/dashboard">
                      <span class="icon">
                          <ion-icon name="home-outline"></ion-icon>
                      </span>
                      <span class="title">Dashboard</span>
                  </a>
              </li>
  
              <!-- Customers -->
              <li>
                  <a href="/dashboard/customers">
                      <span class="icon">
                          <ion-icon name="people-outline"></ion-icon>
                      </span>
                      <span class="title">Customers</span>
                  </a>
              </li>
  
              <!-- Dropdown Produk -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownProduk" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="archive-outline"></ion-icon>
                      </span>
                      <span class="title">Produk</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/dashboard">Produk</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="/dashboard/addProduk">Add Produk</a></li>
                      <li><a class="dropdown-item" href="/dashboard/category">Kategori</a></li>
                      <li><a class="dropdown-item" href="/dashboard/listProduk">List Produk</a></li>
                  </ul>
              </li>
  
              <!-- Dropdown Order -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownOrder" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="archive-outline"></ion-icon>
                      </span>
                      <span class="title">Order</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Order</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="#">Add Produk</a></li>
                      <li><a class="dropdown-item" href="#">Kategori</a></li>
                      <li><a class="dropdown-item" href="#">List Produk</a></li>
                  </ul>
              </li>
  
              <!-- Dropdown Settings -->
              <li class="nav-item dropdown">
                  <a class="nav-link" href="#" role="button" id="navbarDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="icon">
                          <ion-icon name="settings-outline"></ion-icon>
                      </span>
                      <span class="title">Settings</span>
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Setting</a></li>
                      <hr />
                      <li><a class="dropdown-item" href="/dashboard/register">Add Account Admin</a></li>
                      <li><a class="dropdown-item" href="#">Profile Admin</a></li>
                  </ul>
              </li>
  
              <!-- Logout -->
              <li>
                  <a href="#" id="logoutBtn">
                      <span class="icon">
                          <ion-icon name="log-out-outline"></ion-icon>
                      </span>
                      <span class="title">Logout</span>
                  </a>
              </li>
          </ul>
      </div>
    `;
  },

  afterRender() {
    const logoutButton = document.getElementById("logoutBtn");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        // Hapus informasi admin dari sessionStorage
        sessionStorage.removeItem("currentAdmin");
        // Redirect ke halaman login
        page.redirect("/dashboard/login");
      });
    }
  },
};

export { Navbar };
