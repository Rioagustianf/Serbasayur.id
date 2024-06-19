import CategoryContainer from "../../components/users/CategoryContainer";
import ProductSearch from "../../components/users/ProductSearch";
import Navbar from "../../components/users/Navbar";
import Footer from "../../components/users/Footer";
import { searchProducts } from "../../services/api/product";

const SearchPage = {
  async render({ query }) {
    try {
      const productResponse = await searchProducts(query);
      const container = await CategoryContainer.render();
      if (productResponse.status === "success") {
        const products = productResponse.data.products;
        const productShelf = await ProductSearch.render(query, products);
        return `
                    ${await Navbar.render()}
                    <div class="cp-container mt-5 mb-5">
                        ${container}
                        ${productShelf}
                    </div>
                    ${await Footer.render()}
                    `;
      } else {
        throw new Error("Failed to fetch search results");
      }
    } catch (error) {
      console.error(error);
      return `<div>Error fetching search results. Please try again later.</div>`;
    }
  },
  async afterRender() {
    await Navbar.afterRender();
    await CategoryContainer.afterRender(); // Panggil afterRender untuk menambahkan event listener
  },
};

export default SearchPage;
