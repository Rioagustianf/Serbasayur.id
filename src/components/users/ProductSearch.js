import ProductCard from "./ProductCard";
import Fuse from "fuse.js";

const ProductSearch = {
  async render(query, products) {
    // Konfigurasi untuk Fuse.js
    const options = {
      keys: ["nama"],
      threshold: 0.3, // Ambang batas kemiripan (0.0 - 1.0), semakin kecil semakin ketat
    };

    // Buat instance Fuse.js
    const fuse = new Fuse(products, options);

    // Cari produk yang sesuai dengan query
    const result = fuse.search(query);
    const filteredProducts = result.map((res) => res.item);

    const productCards = await ProductCard.render(filteredProducts);
    console.log(filteredProducts);

    return `
        <div class="product-shelf mt-3">
            <h6>Menampilkan ${filteredProducts.length} produk untuk pencarian <b>"${query}"</b></h6>
            <div class="product-wrapper">
                <div class="product-list mt-3">
                    ${productCards}
                </div>
            </div>
        </div>
        `;
  },
};

export default ProductSearch;
