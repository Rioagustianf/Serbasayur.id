import { getProductById } from "../services/api.js";
import Navbar from "../components/Navbar.js";
import ProductImage from "../components/ProdukImage.js";
import ProdukInfo from "../components/ProdukInfo.js";
import QuantityButtons from "../components/QtyButton.js";

const DetailProduk = {
  async render() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get("idProduk");

      // Fetch product data based on product ID
      const product = await getProductById(productId);

      // Render the detail product information
      return `
        ${Navbar.render()}
        <div class="container my-3">
          <div class="row">
            <div class="col-lg-5 col-md-6">
              ${ProductImage.render({ src: product.image, alt: product.nama })}
            </div>
            <div class="col-lg-7 col-md-6 mt-2">
              ${ProdukInfo.render({ name: product.nama, price: product.harga, description: product.deskripsi })}
              <div class="d-flex">
                ${QuantityButtons.render()}
                <button class="btn btn-success mx-3">+ Keranjang</button>
              </div>
              <div class="mt-2 d-flex">
                <i class="fa-regular fa-heart fs-3 whist"></i>
                <p class="mx-3 whist-text">add to wishlist</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <ul class="nav nav-underline mt-4" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active text-success" id="detail-tab" data-bs-toggle="tab" data-bs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="true">Detail</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-success" id="specs-tab" data-bs-toggle="tab" data-bs-target="#specs" type="button" role="tab" aria-controls="specs" aria-selected="false">Spesifikasi</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link text-success" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Review</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="detail-tab">
              <p>${product.deskripsi}</p>
            </div>
            <div class="tab-pane fade" id="specs" role="tabpanel" aria-labelledby="specs-tab">
              <p>Spesifikasi produk akan ditampilkan di sini.</p>
            </div>
            <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
              <p>Review produk akan ditampilkan di sini.</p>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error(error);
      // Handle the error gracefully, e.g., show an error message
      return `<div>Error fetching product details. Please try again later.</div>`;
    }
  },
};

export default DetailProduk;
