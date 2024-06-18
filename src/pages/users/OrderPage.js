import Navbar from "../../components/users/Navbar";
import QtyButton from "../../components/users/QtyButton";
import Footer from "../../components/users/Footer";
import { handleProdukQty } from "../../utils/productHandler";

const OrderPage = {
  // Mock data for cart items
  cartItems: [
    { id_produk: 1 },
    { id_produk: 2 },
    // Add more items as needed
  ],

  async render() {
    try {
      const productListHTML = this.cartItems
        .map(
          (item, index) => `
            <div class="border rounded-3 m-3" key="${item.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="path/to/image/${item.id_produk}.jpg" alt="${item.id_produk}" /> <!-- Sesuaikan path gambar -->
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${item.id_produk}</h4> <!-- Sesuaikan nama produk -->
                  <p>Harga: Rp10.000</p> <!-- Sesuaikan harga produk -->
                  <div class="d-flex justify-content-between">
                    ${QtyButton.render()}
                    <div class="form-check form-check-reverse mt-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked-${item.id_produk}" checked>
                      <label class="form-check-label" for="flexCheckChecked-${item.id_produk}"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        )
        .join("");

      return `
        ${await Navbar.render()}
        <div class="container d-flex gap-3 my-5">
          <div class="container">
            <div class="bakul d-flex justify-content-between">
              <h4>Bakul</h4>
              <div class="form-check d-flex">
                <p class="me-5">pilih semua panenmu</p>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedAll" checked>
                <label class="form-check-label" for="flexCheckCheckedAll"></label>
              </div>
            </div>
            <div class="border border-2 rounded-3">
              ${productListHTML}
            </div>
          </div>
          <div class="w-25 h-25 mt-5 border rounded-3 p-3">
            <h4 class="section-title my-2">Rincian Pesan</h4>
            <p class="border border-bottom border-grey"></p>
            <div class="d-flex justify-content-between">
              <p>Total Harga</p>
              <p>Rp30.000</p> <!-- Jumlah total harga disesuaikan -->
            </div>
            <a href="/checkout" class="btn btn-success w-100">Bayar</a>
          </div>
        </div>
        ${await Footer.render()}
      `;
    } catch (error) {
      console.error("Error rendering CartPage:", error);
      return `<div>Error rendering CartPage. Please try again later.</div>`;
    }
  },

  async afterRender() {
    await Navbar.afterRender();
    handleProdukQty();
  },
};

export default OrderPage;
