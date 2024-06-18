import { getProductById } from "../../services/api/product";
import Navbar from "../../components/users/Navbar";
import Footer from "../../components/users/Footer";
import { handleProdukQty } from "../../utils/productHandler";
import { generateStarRating, formatCurrency } from "../../utils/productHandler";
import { addOrder } from "../../services/api/order";
import { getUserById } from "../../services/api/user";

const DetailProduk = {
  async render(productId) {
    try {
      const productResponse = await getProductById(productId);
      const userId = localStorage.getItem("userId");
      const userResponse = await getUserById(userId);

      if (
        productResponse.status === "success" &&
        userResponse.status === "success"
      ) {
        const product = productResponse.data.product;
        const user = userResponse.data.user;

        const imageUrl = `http://localhost:3000/image/${product.image}`;

        return `
          ${await Navbar.render()}
          <div class="container my-5">
            <div class="row">
              <div class="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
                <img class="img-fluid" src="${imageUrl}" alt="${product.nama}" />
              </div>
              <div class="col-12 col-md-7 text-center text-md-start">
                <h3 class="detail-name">${product.nama}</h3>
                <p class="detail-price">${formatCurrency(product.harga)}/kg</p>
                <p>${generateStarRating(product.rating)}</p>
                <p>Qty: ${product.kuantitas}</p>
                <div class="d-flex flex-column flex-md-row align-items-center mb-3">
                  <div class="d-flex align-items-center mb-3 mb-md-0">
                    <button id="decreaseQty" class="btn btn-outline-success">-</button>
                    <input type="number" id="quantity" value="1" class="form-control text-center mx-2" style="width: 60px;">
                    <button id="increaseQty" class="btn btn-outline-success">+</button>
                  </div>
                  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button id="addToCart" class="btn btn-success btn-cart p-2 mx-2">+ Keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-5">
            <ul class="nav nav-underline" id="myTab" role="tablist">
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
        throw new Error("Failed to fetch product or user details");
      }
    } catch (error) {
      console.error(error);
      return `<div>Error fetching product details. Please try again later.</div>`;
    }
  },

  afterRender(productId) {
    // Initialize Navbar after rendering
    Navbar.afterRender();

    // Call function to handle product quantity
    handleProdukQty();

    // Add event listener to add to cart button
    const addToCartButton = document.getElementById("addToCart");
    addToCartButton.addEventListener("click", async () => {
      try {
        const productResponse = await getProductById(productId);
        const userId = localStorage.getItem("userId");
        const userResponse = await getUserById(userId);

        if (
          productResponse.status === "success" &&
          userResponse.status === "success"
        ) {
          const product = productResponse.data.product;
          const user = userResponse.data.user;

          const quantity = parseInt(document.getElementById("quantity").value);

          // Get user id and alamat from user data
          const userId = user.id_user;
          if (!userId) {
            throw new Error("User id not found in local storage");
          }

          const alamat = user.alamat;
          if (!alamat) {
            throw new Error("Alamat not found in user data");
          }

          // Calculate total harga based on product price and quantity
          const totalHarga = product.harga;

          // Prepare order object
          const order = {
            id_user: userId,
            tanggal_order: new Date().toISOString().split("T")[0], // Mengambil tanggal hari ini
            alamat_order: alamat,
            total_harga: totalHarga * quantity,
          };

          // Add order to database
          const addOrderResponse = await addOrder(order);

          if (addOrderResponse.status === "success") {
            alert("Order berhasil ditambahkan ke keranjang!");
          } else {
            throw new Error("Failed to add order: " + addOrderResponse.message);
          }
        } else {
          throw new Error("Failed to fetch product or user details");
        }
      } catch (error) {
        console.error("Failed to add order:", error.message);
        alert("Failed to add order. Please try again later.");
      }
    });
  },
};

export default DetailProduk;
