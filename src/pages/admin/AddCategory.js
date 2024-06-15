import { Navbar } from "../../components/admin/Navbar";
import { handleAdminNavigation } from "../../utils/adminHandler.js";
import FormAddCategory from "../../components/admin/FormAddCategory.js";
import ListCategory from "../../components/admin/ListCategory.js";

const AddCategory = {
  async render() {
    const addCategoryForm = await FormAddCategory.render();
    const listCategory = await ListCategory.render();
    return `
      <div class="container-dashboard ms-0">
        ${Navbar()}
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
              <img src="../../../public/images/admin/customer01.jpg" alt="">
            </div>
          </div>
          ${addCategoryForm}
          ${listCategory}
        </div>
      </div>
    `;
  },

  async afterRender() {
    handleAdminNavigation();
    await FormAddCategory.afterRender();
    await ListCategory.afterRender();
  },
};

export default AddCategory;
