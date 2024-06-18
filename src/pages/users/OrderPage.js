import Navbar from "../../components/users/Navbar";
import QtyButton from "../../components/users/QtyButton";
import Footer from "../../components/users/Footer";
import { handleProdukQty } from "../../utils/productHandler";
import { getAllOrderItems } from "../../services/api/order";

const OrderPage = {
  async render() {
    try {
      const productListHTML = orderItems
        .map(
          (item, index) => `
            <div class="border rounded-3 m-3" key="${item.product.id}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="${item.product.imageUrl}" alt="${item.product.name}" />
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>${item.product.name}</h4>
                  <p>Harga: ${item.product.price}</p>
                  <div class="d-flex justify-content-between">
                    ${qtyButton}
                    <div class="form-check form-check-reverse mt-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked-${index}" checked>
                      <label class="form-check-label" for="flexCheckChecked-${index}"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        )
        .join("");

      // Tampilkan halaman order
      return `
        ${navbar}
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
              <p>Rp10.000</p>
            </div>
            <a href="/checkout" class="btn btn-success w-100">Bayar</a>
          </div>
        </div>
        ${footer}
      `;
    } catch (error) {
      console.error("Error rendering OrderPage:", error);
      return `<div>Error rendering OrderPage. Please try again later.</div>`;
    }
  },

  async afterRender() {
    await Navbar.afterRender();
    handleProdukQty();
  },
};

export default OrderPage;
