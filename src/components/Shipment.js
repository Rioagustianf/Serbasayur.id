const Shipment = {
    async render() {
        return `
        <div class="container">
            <h2 class="section-title fw-semibold">PENGIRIMAN</h2>
            <div class="shipment-wrapper d-flex">
                <div class="dropdown-shipment">
                    <button class="shipment-selector d-flex">
                        <h2 class="selected-shipment fw-normal"><span id="selected-shipment">Pilih</span></h2>
                        <div class="dropdown-icon">
                            <i class="fas fa-caret-down fa-lg"></i>
                        </div>
                    </button>
                    <div class="dropdown-shipment-content">
                        <a href="#" data-method="Next Day">Next Day</a>
                        <a href="#" data-method="Kargo">Kargo</a>
                        <a href="#" data-method="Reguler">Reguler</a>
                        <a href="#" data-method="Same Day">Same Day</a>
                    </div>
                </div>
                <h1 class="shipment-price fw-normal">Rp25.000</h1>
            </div>
        </div>
        `;
    },
};

export default Shipment;