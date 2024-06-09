const Navbar = {
  async render() {
    return `
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="logo me-5">
              <a href="/"><img height="50px" src="../../public/images/logo1.png" alt="Serba Sayur ID"></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="w-75 d-flex me-auto my-2 my-lg-0">
                <div class="input-group w-100 position-relative">
                  <input class="form-control ps-5" type="search" placeholder="Ayo hidup sehat dan cari kebutuhanmu disini!" aria-label="Search">
                  <span class="input-group-text position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent"><i class="fas fa-search icon-search"></i></span>
                </div>
              </form>
              <ul class="navbar-nav mx-3 mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" aria-current="page" href=""><i class="fa-sharp fa-regular fa-bell icon"></i></a>
                  <a class="nav-link d-lg-none" aria-current="page" href="">Notifikasi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" href="#"><i class="fa-sharp fa-regular fa-comment-dots icon"></i></a>
                  <a class="nav-link d-lg-none" href="#">Pesan</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-lg-block" href="/order"><i class="fas fa-shopping-cart icon"></i></a>
                  <a class="nav-link d-lg-none" href="/checkout">Keranjang</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <a class="nav-link ms-2" href="#"><img height="25px" src="../../public/images/icon3.png" alt="" /></a>
                </li>
                <li class="nav-item ms-2">
                  <a href="/login" type="button" class="btn text-white" style="background-color: #4DC38C;">Masuk</a>
                </li>
                <li class="nav-item ms-2">
                  <a href="/register" type="button" class="btn text-success" style="background-color: #D9D9D9;">Daftar</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    `;
  },
};

export default Navbar;
