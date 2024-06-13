import { getProductById } from "../services/api/product";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { handleProdukQty } from "../utils/productHandler";
import { generateStarRating, formatCurrency } from "../utils/productHandler";

const DetailProduk = {
  async render(productId) {
    try {
      const productResponse = await getProductById(productId);

      if (productResponse.status === "success") {
        const product = productResponse.data.product;

        return `
          ${await Navbar.render()}
          <div class="container my-5">
            <div class="row">
              <div class="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
                <img class="img-fluid" src="${product.image}" alt="${product.nama}" />
              </div>
              <div class="col-12 col-md-7 text-center text-md-start">
                <h3 class="detail-name">${product.nama}</h3>
                <p class="detail-price">${formatCurrency(product.harga)}</p>
                <p>${generateStarRating(product.rating)}</p>
                <p>Qty: ${product.kuantitas}</p>
                <div class="d-flex flex-column flex-md-row align-items-center mb-3">
                  <div class="d-flex align-items-center mb-3 mb-md-0">
                    <button id="decreaseQty" class="btn btn-outline-success">-</button>
                    <input type="number" id="quantity" value="1" class="form-control text-center mx-2" style="width: 60px;">
                    <button id="increaseQty" class="btn btn-outline-success">+</button>
                  </div>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button class="btn btn-success btn-cart p-2 mx-2">+ Keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-5">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active text-success"
                  id="detail-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#detail"
                  type="button"
                  role="tab"
                  aria-controls="detail"
                  aria-selected="true"
                >
                  Detail
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-success"
                  id="specs-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#specs"
                  type="button"
                  role="tab"
                  aria-controls="specs"
                  aria-selected="false"
                >
                  Spesifikasi
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-success"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#review"
                  type="button"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="detail"
                role="tabpanel"
                aria-labelledby="detail-tab"
              >
                <p>${product.deskripsi}</p>
              </div>
              <div
                class="tab-pane fade"
                id="specs"
                role="tabpanel"
                aria-labelledby="specs-tab"
              >
                <p>${product.specifications}</p>
              </div>
              <div
                class="tab-pane fade"
                id="review"
                role="tabpanel"
                aria-labelledby="review-tab"
              >
                <p>Bintang : ${product.rating}</p>
              </div>
            </div>
          </div>
          ${await Footer.render()}
        `;
      } else {
        throw new Error("Failed to fetch product details");
      }
    } catch (error) {
      console.error(error);
      return `<div>Error fetching product details. Please try again later.</div>`;
    }
  },

  afterRender(productId) {
    Navbar.afterRender();
    handleProdukQty(); // Panggil fungsi untuk menangani kuantitas produk
  },
};

export default DetailProduk;
