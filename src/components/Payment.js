const Payment = {
    async render() {
        return `
        <div class="payment-container d-flex">
            <h1 class="payment-title fw-semibold">Pilih Metode Pembayaran</h1>
            <div class="dropdown-payment">
                <button class="payment-selector d-flex">
                    <h2 class="fw-normal"><span id="selected-payment">Pilih</span></h2>
                    <div class="dropdown-icon">
                        <i class="fas fa-caret-down fa-lg"></i>
                    </div>
                </button>
                <div class="dropdown-payment-content">
                    <a href="#" data-method="QRIS">QRIS</a>
                    <a href="#" data-method="Cash On Delivery">Cash On Delivery</a>
                    <a href="#" data-method="Transfer Bank">Transfer Bank</a>
                    <a href="#" data-method="Paypal">Paypal</a>
                    <a href="#" data-method="Gopay">Gopay</a>
                </div>
            </div>
        </div>        
        `;
    },
};

export default Payment;