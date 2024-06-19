import Navbar from "../../components/users/Navbar";
import Footer from "../../components/users/Footer";
import QtyButton from "../../components/users/QtyButton"; // Pastikan komponen QtyButton sudah diimpor
import { getAllOrders, getAllOrderItems } from "../../services/api/order"; // Ganti dengan fungsi yang sesuai untuk mengambil orders dan order items
import { getProductById } from "../../services/api/product";

const ProductCheckout = {
  async render() {
    try {
      // Simulasikan userId, bisa diganti dengan cara sesuai di aplikasi Anda
      const userId = localStorage.getItem("userId");

      // Ambil semua pesanan (orders) berdasarkan userId
      let orders = await getAllOrders(userId);

      if (!Array.isArray(orders)) {
        // Jika bukan array, coba konversi menjadi array
        orders = [orders];
      }

      if (!Array.isArray(orders)) {
        throw new Error("Orders is not an array");
      }

      const allOrderItemsData = await Promise.all(
        orders.map(async (order) => {
          const orderItems = await getAllOrderItems(order.id_order);

          if (!Array.isArray(orderItems)) {
            throw new Error("Order items is not an array");
          }

          // Mengambil data produk untuk setiap order item
          const orderItemsData = await Promise.all(
            orderItems.map(async (orderItem) => {
              const productData = await getProductById(
                { params: { idProduk: orderItem.id_produk } },
                { response: { code: () => {} } }
              ); // Panggil getProductByIdHandler dengan parameter yang sesuai
              if (productData.status === "success") {
                return {
                  ...productData.data.product,
                  quantity: orderItem.quantity,
                };
              } else {
                throw new Error("Product not found");
              }
            })
          );

          return orderItemsData;
        })
      );

      // Menyatukan semua order items menjadi satu array
      const flattenedOrderItems = allOrderItemsData.flat();

      // Render HTML untuk setiap item order
      const productListHTML = flattenedOrderItems
        .map(
          (item, index) => `
            <div class="border rounded-3 m-3" key="${item.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="http://localhost:3000/image/${item.image}" alt="${item.image}" /> <!-- Sesuaikan path gambar -->
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${item.nama}</h4> <!-- Sesuaikan nama produk -->
                  <p>Harga: Rp${item.harga}</p> <!-- Sesuaikan harga produk -->
                  <div class="d-flex justify-content-between">
                    ${QtyButton.render(item.quantity)}
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

      // Hitung total harga dari semua order items
      const totalHarga = flattenedOrderItems.reduce(
        (total, item) => total + item.harga * item.quantity,
        0
      );

      // Return HTML yang akan dirender
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
            <button id="pay" class="btn btn-success w-100">Bayar</button>
          </div>
        </div>
        ${await Footer.render()}
      `;
    } catch (error) {
      console.error("Error rendering ProductCheckout:", error);
      return `<div>Error rendering ProductCheckout. Please try again later.</div>`;
    }
  },

  async afterRender() {
    // Tambahkan logika setelah rendering jika diperlukan
  },
};

export default ProductCheckout;
