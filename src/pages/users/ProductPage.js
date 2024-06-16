import CategoryContainer from "../../components/users/CategoryContainer";
import ProductShelf from "../../components/users/ProductShelf";
import Navbar from "../../components/users/Navbar";
import Footer from "../../components/users/Footer";
import {
  getProductsByCategory,
  getAllCategories,
} from "../../services/api/product";

const ProductPage = {
  async render({ category }) {
    try {
      const productResponse = await getProductsByCategory(category);
      const categoryResponse = await getAllCategories();
      const container = await CategoryContainer.render();
      if (productResponse.length >= 0) {
        const productShelf = await ProductShelf.render(
          category,
          productResponse,
          categoryResponse
        );
        console.log(productShelf)
        return `
                    ${await Navbar.render()}
                    <div class="cp-container mt-5 mb-5">
                        ${container}
                        ${productShelf}
                    </div>
                    ${await Footer.render()}
                    `;
      } else {
        throw new Error("Failed to fetch product details");
      }
    } catch (error) {
      console.error(error);
      return `
      ${await Navbar.render()}
      <div style="height: calc(100vh - 66px)">Found Empty Product.<a href="../">Back</a></div>
      ${await Footer.render()}
      `;
    }
  },
  async afterRender() {
    await Navbar.afterRender();
    await CategoryContainer.afterRender(); // Panggil afterRender untuk menambahkan event listener
  },
};

export default ProductPage;
