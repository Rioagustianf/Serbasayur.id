import Navbar from "../../components/users/Navbar";
import Footer from "../../components/users/Footer";
import QtyButton from "../../components/users/QtyButton";
import { getAllOrders, getAllOrderItems } from "../../services/api/order";
import { getProductById } from "../../services/api/product";

async function getItemOrders() {
  try {
    const userId = localStorage.getItem("userId");
    console.log("User ID:", userId);
    const allCartItems = [];
    let orders = await getAllOrders(userId);
    const response = orders.data.orders;
    console.log("Response:", response);

    for (const order of response) {
      const orderItems = await getAllOrderItems(order.id_order);
      allCartItems.push(...orderItems);
    }

    const allCartItemsData = [];
    for (const orderItem of allCartItems) {
      const productData = await getProductById(orderItem.id_produk);
      if (productData.data.product) {
        const product = productData.data.product;
        allCartItemsData.push({
          id_produk: product.id_produk,
          nama: product.nama,
          harga: product.harga,
          quantity: orderItem.quantity,
          image: product.image,
        });
      }
    }

    return allCartItemsData;
  } catch (error) {
    console.error("Error getting item orders:", error);
    throw error; // Throw error agar dapat ditangkap di bagian render
  }
}

const ProductCheckout = {
  async render() {
    try {
      const orderItems = await getItemOrders();

      if (!Array.isArray(orderItems) || orderItems.length === 0) {
        console.warn("No order items found.");
        return `<div>No order items found. Please try again later.</div>`;
      }

      const productListHTML = orderItems
        .map(
          (item, index) => `
            <div class="border rounded-3 m-3" key="${item.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="http://localhost:3000/image/${item.image}" alt="${item.image}" />
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${item.nama}</h4>
                  <p>Harga: Rp${item.harga}</p>
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

      const totalHarga = orderItems.reduce((total, item) => {
        const harga = parseFloat(item.harga);
        const quantity = parseInt(item.quantity);
        return isNaN(harga) || isNaN(quantity)
          ? total
          : total + harga * quantity;
      }, 0);

      console.log("Total Harga:", totalHarga);

      return `

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
              <p>Rp${totalHarga}</p>
            </div>
            <button id="pay" class="btn btn-success w-100">Bayar</button>
          </div>
        </div>
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
