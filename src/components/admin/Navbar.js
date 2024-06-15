export function Navbar() {
  return `
    <!-- =============== Navigation ================ -->
    <div class="navigation">
        <ul>
            <li>
                <a href="/dashboard">
                    <span class="icon mx-2">
                        <img width="230px" class="img-fluid" src="../../../public/images/logo1.png" alt="" />
                    </span>
                </a>
            </li>

            <li>
                <a href="/dashboard">
                    <span class="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span class="title">Dashboard</span>
                </a>
            </li>

            <li>
                <a href="/customers">
                    <span class="icon">
                        <ion-icon name="people-outline"></ion-icon>
                    </span>
                    <span class="title">Customers</span>
                </a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
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

            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
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

            <li>
                <a href="#">
                    <span class="icon">
                        <ion-icon name="settings-outline"></ion-icon>
                    </span>
                    <span class="title">Settings</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <span class="icon">
                        <ion-icon name="log-out-outline"></ion-icon>
                    </span>
                    <span class="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </div>
  `;
}