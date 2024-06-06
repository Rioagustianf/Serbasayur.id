const ProductCheckout = {
    async render() {
        return `
        <div class="container">
            <div class="section-title-wrapper d-grid">
                <h2 class="section-title selected-product fw-semibold">HASIL PANEN DARING</h2>
                <h4 class="product-price text-center grey">Harga</h4>
                <h4 class="product-quantity text-center grey">Jumlah</h4>
                <h4 class="product-subtotal grey">Subtotal</h4> <!-- Perubahan di sini -->
            </div>
            <div class="product-list">
            <div class="product-wrapper d-grid">
                <img class="product-image" src="../../public/images/product1.png" alt="Bayam">
                <h4 class="product-title fw-light">Bayam Hijau 1 Ikat [200 gr] Sayuran Segar Bayam Hi...</h4>
                <h4 class="product-price fw-light text-center">Rp10.000</h4>
                <h4 class="product-quantity fw-light text-center">1</h4>
                <h4 class="product-subtotal fw-normal">Rp10.000</h4>
            </div>
            <div class="product-wrapper d-grid">
                <img class="product-image" src="../../public/images/product2.png" alt="Bayam">
                <h4 class="product-title fw-light">Mangga 1 Kg</h4>
                <h4 class="product-price fw-light text-center">Rp35.000</h4>
                <h4 class="product-quantity fw-light text-center">1</h4>
                <h4 class="product-subtotal fw-normal">Rp35.000</h4>
            </div>
            <div class="product-wrapper d-grid">
                <img class="product-image" src="../../public/images/product3.png" alt="Bayam">
                <h4 class="product-title fw-light">Buah Naga 1 Kg</h4>
                <h4 class="product-price fw-light text-center">Rp30.000</h4>
                <h4 class="product-quantity fw-light text-center">1</h4>
                <h4 class="product-subtotal fw-normal">Rp30.000</h4>
            </div>
            <hr>
            <h1 class="product-total fw-normal">Rp75.000</h1>
            </div>
        </div>
        `;
    },
};

export default ProductCheckout;