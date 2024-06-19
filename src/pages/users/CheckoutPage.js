import NavbarCheckout from "../../components/users/NavbarCheckout";
import Address from "../../components/users/Address";
import ProductCheckout from "../../components/users/ProductCheckout";
import Shipment from "../../components/users/Shipment";
import Payment from "../../components/users/Payment";
import Footer from "../../components/users/Footer";

const CheckoutPage = {
  async render() {
    return `
    ${await NavbarCheckout.render()}
    <div id="checkout-page">
        <h1 class="checkout-title fw-semibold">Checkout</h1>
        ${await Address.render()}
        ${await ProductCheckout.render()}
        ${await Shipment.render()}
        <div class="total-price-container d-flex">
            <h2 class="price-total__title fw-normal">Total Harga</h2>
            <h1 class="price-total__value fw-normal">Rp100.000</h1>
        </div>
        ${await Payment.render()}
        <button class="pay text-center">Bayar
        </button>
    </div>
    ${await Footer.render}
    `;
  },
};

export default CheckoutPage;
