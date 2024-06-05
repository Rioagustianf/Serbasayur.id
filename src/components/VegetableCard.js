import { getAllProducts } from "../services/api.js";

const VegetableCard = {
  async render() {
    try {
      const products = await getAllProducts();

      if (!Array.isArray(products)) {
        throw new Error("Products is not an array");
      }

      const productCards = products
        .map(
          (product) => `
          <div class="col-sm-3">
            <div class="card">
              <img height="200px" src="${product.image}" class="card-img-top" alt="${product.nama}">
              <div class="card-body text-center">
                <!-- Perbarui link untuk navigasi ke halaman detail produk -->
                <a href="#/detail/${product.id_produk}" class="text-decoration-none text-black">
                  <h5 class="card-title">${product.nama}</h5>
                </a>
                <p class="card-text fs-5 fw-bold">Rp${product.harga}</p>
                <a href="#" class="btn btn-outline-success border-2">Masukan Keranjang</a>
              </div>
            </div>
          </div>
        `
        )
        .join("");

      return `
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Sayuran Segar</h2>
          <div class="position-relative mb-3">
            <div id="product-carousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row justify-content-center">
                    ${productCards}
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <button class="carousel-control-prev" type="button" data-bs-target="#product-carousel" data-bs-slide="prev">
                <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#product-carousel" data-bs-slide="next">
                <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error(error);
      return `<div>Error fetching products. Please try again later.</div>`;
    }
  },
};

export default VegetableCard;
