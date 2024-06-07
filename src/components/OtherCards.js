import { getAllProducts } from "../services/api";
import { chunk } from "lodash-es";

const OtherCards = {
  async render() {
    try {
      const products = await getAllProducts();
      if (!Array.isArray(products)) {
        throw new Error("Products is not an array");
      }

      const productGroups = chunk(products, 4);

      const carouselItems = productGroups
        .map((group, index) => {
          const productCards = group
            .map(
              (product) => `
            <div class="col-sm-2">
              <div class="card h-100" data-id="${product.id_produk}">
                <img height="100px" src="${product.image}" class="card-img-top" alt="${product.nama}">
                <div class="card-body d-flex flex-column text-center">
                  <a href="/detail/${product.id_produk}" class="text-decoration-none text-black product-link" data-id="${product.id_produk}">
                    <h5 class="card-title">${product.nama}</h5>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fs-5 fw-bold">${new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(product.harga)}</p>
                  </div>
                  <div class="mt-auto">
                    <a href="#" class="btn btn-outline-success border-2" style=" --bs-btn-font-size: .75rem;">Masukan Keranjang</a>
                  </div>
                </div>
              </div>
            </div>
          `
            )
            .join("");

          return `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div class="row justify-content-center">
              ${productCards}
            </div>
          </div>
        `;
        })
        .join("");

      const productListLayout = `
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Produk Lain</h2>
          <div id="other-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${carouselItems}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#other-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#other-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `;

      return productListLayout;
    } catch (error) {
      console.error(error);
      return `<div>Error fetching products. Please try again later.</div>`;
    }
  },

  afterRender() {
    const productLinks = document.querySelectorAll(".product-link");
    productLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const productId = event.target
          .closest(".product-link")
          .getAttribute("data-id");
        console.log("Product ID:", productId);
        page(`/detail/${productId}`); // Mengarahkan ke halaman detail produk dengan menggunakan page.js
      });
    });
  },
};

export default OtherCards;
