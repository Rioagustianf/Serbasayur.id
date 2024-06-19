// Import semua yang diperlukan
import Navbar from "../../components/users/Navbar";
import QtyButton from "../../components/users/QtyButton";
import Footer from "../../components/users/Footer";
import { handleProdukQty } from "../../utils/productHandler";
import { getAllCarts, getAllCartItems } from "../../services/api/cart";
import { getProductById } from "../../services/api/product";
import { addOrder, addOrderItem } from "../../services/api/order";

async function getItems() {
  const userId = localStorage.getItem("userId");
  const carts = await getAllCarts(userId);
  const allCartItems = [];
  const allCartItemsData = [];

  for (const cart of carts) {
    const cartItems = await getAllCartItems(cart.id_cart);
    allCartItems.push(...cartItems);
  }

  for (const cartItem of allCartItems) {
    const cartItemsData = await getProductById(cartItem.id_produk);
    allCartItemsData.push(
      Object.assign(cartItemsData.data.product, { quantity: cartItem.quantity })
    );
  }

  console.log(allCartItemsData);

  return allCartItemsData;
}

var total = 0;

const OrderPage = {
  async render() {
    try {
      const userId = localStorage.getItem("userId");
      const tanggalOrder = `${new Date().toISOString().slice(0, 19).replace("T", " ")}`;
      const status = "Belum bayar";

      // Tambahkan order baru
      const addOrderResponse = await addOrder(
        userId,
        tanggalOrder,
        status,
        total
      );

      // Simpan id_order ke localStorage
      localStorage.setItem("currentOrderId", addOrderResponse.data.id_order);

      const cartItems = await getItems();

      const productListHTML = cartItems
        .map(
          (item, index) => `
            <div class="border rounded-3 m-3" key="${item.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="https://serbasayur-id-back-end.up.railway.app/image/${item.image}" alt="${item.image}" /> <!-- Sesuaikan path gambar -->
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

      const totalHarga = cartItems.reduce(
        (total, item) => total + item.harga * item.quantity,
        0
      );

      total = totalHarga;

      console.log(total);
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
      console.error("Error rendering CartPage:", error);
      return `<div>Error rendering CartPage. Please try again later.</div>`;
    }
  },

  async afterRender() {
    Navbar.afterRender();
    handleProdukQty();

    const cartItems = await getItems();

    const orderButton = document.getElementById("pay");
    orderButton.addEventListener("click", async () => {
      try {
        const userId = localStorage.getItem("userId");

        const tanggalOrder = `${new Date().toISOString().slice(0, 19).replace("T", " ")}`;

        // Tambahkan data ke tabel carts
        const addOrderResponse = await addOrder(
          userId,
          tanggalOrder,
          "Belum bayar",
          total
        );

        console.log(addOrderResponse);

        const idOrder = addOrderResponse.data.id_order;

        for (const item of cartItems) {
          // Dapatkan kuantitas produk yang ditambahkan ke keranjang
          const quantity = parseInt(item.quantity, 10);

          const hargaSatuan = parseInt(item.harga, 10);

          // Tambahkan data ke tabel cart_items
          const addCartItemResponse = await addOrderItem(
            idOrder,
            item.id_produk,
            quantity,
            hargaSatuan
          );
        }

        // Simpan id_order ke localStorage
        localStorage.setItem("currentOrderId", idOrder);

        // Tampilkan pesan sukses atau lakukan tindakan lainnya setelah berhasil menambahkan ke keranjang
        alert("Berhasil menambahkan ke pesanan!");
        window.location.href = "/checkout";
      } catch (error) {
        console.error("Error adding all product to order:", error.message);
        alert("Gagal menambahkan ke pesanan. Silakan coba lagi.");
      }
    });
  },
};

export default OrderPage;
