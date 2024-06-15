const Shipment = {
    async render() {
        return `
        <div class="container">
            <h2 class="section-title fw-semibold">PENGIRIMAN</h2>
            <div class="shipment-wrapper d-flex">
                <select class="form-select form-select-lg mb-3" aria-label="Large select example">
                <option selected>Pilih</option>
                <option value="Next Day">Next Day</option>
                <option value="Kargo">Kargo</option>
                <option value="Reguler">Reguler</option>
                <option value="Same Day">Same Day</option>
            </select>
                <h1 class="shipment-price fw-normal">Rp25.000</h1>
            </div>
        </div>
        `;
    },
};

export default Shipment;
