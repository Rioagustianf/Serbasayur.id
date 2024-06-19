import Navbar from "../../components/users/Navbar";
import QtyButton from "../../components/users/QtyButton";
import Footer from "../../components/users/Footer";
import { handleProdukQty } from "../../utils/productHandler";
import { getAllCarts, getAllCartItems } from "../../services/api/cart";
import { getProductById } from "../../services/api/product";

const OrderPage = {
  async render() {
    try {
      const userId = localStorage.getItem('userId');
      const carts = await getAllCarts(userId);
      const allCartItems = [];
      const allCartItemsData = [];

      for (const cart of carts) {
        const cartItems = await getAllCartItems(cart.id_cart);
        allCartItems.push(...cartItems);
      }
      
      for (const cart of allCartItems) {
        const cartItemsData = await getProductById(cart.id_produk);
        allCartItemsData.push(cartItemsData.data.product);
      }    

      const productListHTML = allCartItemsData
        .map(
          (item, index) => `
            <div class="border rounded-3 m-3" key="${item.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="../../serbasayur-id-back-end/image/${item.image}" alt="${item.image}" /> <!-- Sesuaikan path gambar -->
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${item.nama}</h4> <!-- Sesuaikan nama produk -->
                  <p>Harga: Rp${item.harga}</p> <!-- Sesuaikan harga produk -->
                  <div class="d-flex justify-content-between">
                    ${QtyButton.render(item.kuantitas)}
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

      const totalHarga = allCartItemsData.reduce((total, item) => total + (item.harga), 0);
      console.log(totalHarga)
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
              <p>Rp${totalHarga}</p> <!-- Jumlah total harga disesuaikan -->
            </div>
            <a href="/checkout" id="pay" class="btn btn-success w-100">Bayar</a>
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
