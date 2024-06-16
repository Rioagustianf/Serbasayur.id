import { formatCurrency } from "../../utils/productHandler";

const ProductCard = {
  async render(products) {
    try {
      if (!Array.isArray(products)) {
        throw new Error("Products is not an array");
      }

      const productCards = products
        .map(
          (product) => `
                <div class="product-card border shadow-sm bg-body-tertiary rounded">
                    <img src="${product.imageUrl}" alt="${product.nama}" class="product-image w-100 rounded-top border-bottom">
                    <div class="product-card__body p-3 text-center bg-white rounded-bottom w-100">
                        <div class="product-name fw-light fs-6 mb-4 text-elip"><a href="/detail/${product.id_produk}">${product.nama}</a></div>
                        <p class="product-price fw-bolder green-t mb-1 w-100">${formatCurrency(product.harga)}</p>
                        <button class="btn-sm btn-cart rounded-3 p-2 w-100 green-t cart-res">Masukan Keranjang</button>
                    </div>
                </div>
            `
        )
        .join("");

      return `
                <div class="product-cards-container d-grid">
                    ${productCards}
                </div>
            `;
    } catch (error) {
      console.error(error);
      return `<div>Error fetching products. Please try again later.</div>`;
    }
  },
};

export default ProductCard;
