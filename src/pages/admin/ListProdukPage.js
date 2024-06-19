import { Navbar } from "../../components/admin/Navbar.js";
import { handleAdminNavigation } from "../../utils/adminHandler.js";
import ListProduk from "../../components/admin/ListProduk.js";
import { getAllProducts } from "../../services/api/product.js";

const ListProdukPage = {
  async render() {
    try {
      const products = await getAllProducts();
      const listProduk = await ListProduk.render(products);

      return `
        <div class="container-dashboard ms-0">
          ${await Navbar.render()}
          <div class="main">
            <div class="topbar">
              <div class="toggle">
                <ion-icon name="menu-outline"></ion-icon>
              </div>
              <div class="search">
                <label>
                  <input type="text" placeholder="Search here">
                  <ion-icon name="search-outline"></ion-icon>
                </label>
              </div>
              <div class="user">
                <img src="..//public/images/admin/customer01.jpg" alt="">
              </div>
            </div>
            <div class="container w-100">
              ${listProduk}
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error("Failed to render ListProdukPage:", error);
      return "<p>Failed to load products. Please try again later.</p>";
    }
  },

  async afterRender() {
    // Panggil ListProduk.afterRender() setelah render ListProdukPage
    await ListProduk.afterRender();

    // Handle navigation or other operations if needed
    handleAdminNavigation();
  },
};

export default ListProdukPage;
