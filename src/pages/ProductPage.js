import CategoryContainer from '../components/CategoryContainer';
import ProductShelf from '../components/ProductShelf';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProductsByCategory, getAllCategories } from '../services/api/product';

const ProductPage = {
    async render({category}) {
        try {
            const productResponse = await getProductsByCategory(category);
            const categoryResponse = await getAllCategories();
            const container = await CategoryContainer.render();
            if (productResponse.status === "success") {
                const product = productResponse.data.products;
                const productShelf = await ProductShelf.render(category, product, categoryResponse);
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
          return `<div>Error fetching product details. Please try again later.</div>`;
        }
    },
    async afterRender() {
        await Navbar.afterRender();
        await CategoryContainer.afterRender(); // Panggil afterRender untuk menambahkan event listener
    }
};

export default ProductPage;
