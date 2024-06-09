import { getProductById } from "../services/api";
import Navbar from "../components/Navbar";
import ProductImage from "../components/ProdukImage";
import ProductInfo from "../components/ProdukInfo";
import QuantityButtons from "../components/QtyButton";
import Footer from "../components/Footer";
import productHandler from "../utils/productHandler";

const DetailProduk = {
  async render(productId) {
    try {
      const productResponse = await getProductById(productId);
      console.log("Product Response:", productResponse);

      const formatCurrency = (amount) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        }).format(amount);
      };

      if (productResponse.status === "success") {
        const product = productResponse.data.product;
        console.log("Product:", product);

        return `
          ${await Navbar.render()}
          <div class="container my-3">
            <div class="d-flex justify-content-around">
              <div class="">
                ${await ProductImage.render({ src: product.image, alt: product.nama })}
              </div>
              <div class="col-lg-7 col-md-6 mt-2">
                ${await ProductInfo.render({ name: product.nama, price: `${formatCurrency(product.harga)}` })}
                <div class="d-flex">
                  ${await QuantityButtons.render()}
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
      <p>
        $
        {product
          ? product.specifications
          : "Product specifications are not available"}
      </p>
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
</div>;
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
    productHandler();
  },
};

export default DetailProduk;
