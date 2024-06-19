import { Navbar } from "../../components/admin/Navbar";
import { handleAdminNavigation } from "../../utils/adminHandler.js";
import FormAddProduk from "../../components/admin/FormAddProduk.js";

const AddProduk = {
  async render() {
    const addProduk = await FormAddProduk.render();
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
                        <img src="../../../public/images/admin/customer01.jpg" alt="">
                    </div>
            </div>
            ${addProduk}
        </div>
        `;
  },

  async afterRender() {
    handleAdminNavigation();
    await FormAddProduk.afterRender();
  },
};

export default AddProduk;
