import ProductCard from './ProductCard';

const ProductShelf = {
    async render(category, products) {

        const filteredProducts = products.filter(product => product.kategori === category);
        const productCards = await ProductCard.render(filteredProducts);

        return `
        <div class="product-shelf mt-3">
            <h6>Menampilkan ${filteredProducts.length} produk untuk kategori <b>"${category}"</b></h6>
            <div class="product-wrapper">
                <div class="product-list mt-3">
                    ${productCards}
                </div>
            </div>
        </div>
        `;
    }
};

export default ProductShelf;
