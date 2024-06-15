import ProductCard from "./ProductCard";

const ProductShelf = {
  async render(category, products, categoryResponse) {
    const filteredCategory = categoryResponse.filter(
      (product) => product.nama_kategori === category
    );
    const filteredProducts = products.filter(
      (product) => product.id_kategori === filteredCategory[0].id_kategori
    );
    const productCards = await ProductCard.render(filteredProducts);
    return `
        <div class="product-shelf mt-3">
            <h6>Menampilkan ${filteredProducts.length} produk untuk kategori <b>"${category}"</b></h6>
            <div class="product-wrapper">
                <div class="product-list mt-3">
                    ${productCards}a
                </div>
            </div>
        </div>
        `;
  },
};

export default ProductShelf;
