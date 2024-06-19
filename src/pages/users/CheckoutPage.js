import NavbarCheckout from "../../components/users/NavbarCheckout";
import Address from "../../components/users/Address";
import Shipment from "../../components/users/Shipment";
import Payment from "../../components/users/Payment";
import Footer from "../../components/users/Footer";
import { getAllOrders, getAllOrderItems } from "../../services/api/order";
import { getProductById } from "../../services/api/product";
import { addPayment } from "../../services/api/payment";

var orderId = "";
var total = 0;

const CheckoutPage = {
  async render() {
    try {
      const userId = localStorage.getItem("userId");
      console.log("User ID:", userId);
      const allCartItems = [];
      let orders = await getAllOrders(userId);
      const response = orders.data.orders;
      console.log("Response:", response);

      for (const order of response) {
        orderId = order.id_order;
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

      const productListHTML = allCartItemsData
        .map(
          (item, index) => `
            <div class="border rounded-3 m-3" key="${item.id_produk}">
              <h4 class="section-title ms-5 my-2">Serbasayur.id</h4>
              <div class="d-flex">
                <div class="border border-2 ms-5 mb-3 mt-2">
                  <img width="100px" src="https://serbasayur-id-back-end.up.railway.app/image/${item.image}" alt="${item.image}" />
                </div>
                <div class="mx-5 d-flex flex-column align-content-center w-100">
                  <h4>Produk ${item.nama}</h4>
                  <p>Harga: Rp${item.harga}</p>
                  <div class="d-flex justify-content-between">
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

      const totalHarga = allCartItemsData.reduce((total, item) => {
        const harga = parseFloat(item.harga);
        const quantity = parseInt(item.quantity);
        return isNaN(harga) || isNaN(quantity)
          ? total
          : total + harga * quantity;
      }, 0);

      console.log("Total Harga:", totalHarga);

      total = totalHarga + 25000;

      return `
        ${await NavbarCheckout.render()}
        <div id="checkout-page">
          <h1 class="checkout-title fw-semibold">Checkout</h1>
          ${await Address.render()}
          ${productListHTML}
          ${await Shipment.render()}
          ${await Payment.render()}
          <div class="total-price-container d-flex">
            <h2 class="price-total__title fw-normal">Total Harga</h2>
            <h1 class="price-total__value fw-normal">Rp${total}</h1>
          </div> 
          <div class="d-flex justify-content-end w-100 mt-2">
            <button id="payButton" class="pay text-center w-25 h-25">Bayar</button>
          </div>
        </div>
        ${await Footer.render()} <!-- Memanggil render untuk komponen Footer -->
      `;
    } catch (error) {
      console.error("Error rendering CheckoutPage:", error);
      return `<div>Error rendering CheckoutPage. Please try again later.</div>`;
    }
  },

  async afterRender() {
    // NavbarCheckout.afterRender();

    const payButton = document.getElementById("payButton");
    payButton.addEventListener("click", async () => {
      try {
        const userId = localStorage.getItem("userId");

        let orders = await getAllOrders(userId);
        const response = orders.data.orders;

        const paymentDate = `${new Date().toISOString().slice(0, 19).replace("T", " ")}`;
        const payment_method = document.getElementById("paymentMethod").value;

        // Tambahkan data ke tabel carts
        const addPaymentResponse = await addPayment(
          {
            id_order: orderId,
            payment_date: paymentDate,
            amount: total,
            payment_method: payment_method,
            payment_status: "Berhasil",
          }
        );

        // Tampilkan pesan sukses atau lakukan tindakan lainnya setelah berhasil menambahkan ke keranjang
        alert("Berhasil menambahkan ke pembayaran!");
        window.location.href = "/";
      } catch (error) {
        console.error("Error adding all product to payment:", error.message);
        alert("Gagal menambahkan ke pembayaran. Silakan coba lagi.");
      }
    });
  },
};

export default CheckoutPage;
