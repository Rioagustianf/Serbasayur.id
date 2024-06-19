const Payment = {
    async render() {
        return `
        <div class="payment-container d-flex">
            <h1 class="payment-title fw-semibold">Pilih Metode Pembayaran</h1>
            <select id="paymentMethod" class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Pilih</option>
                <option value="QRIS">QRIS</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="Gopay">Gopay</option>
                <option value="Paypal">Paypal</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
            </select>
        </div>        
        `;
    },
};

export default Payment;
