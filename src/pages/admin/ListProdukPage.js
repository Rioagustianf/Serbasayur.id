import { Navbar } from "../../components/admin/Navbar.js";
import { handleAdminNavigation } from "../../utils/adminHandler.js";
import ListProduk from "../../components/admin/ListProduk.js";
const ListProdukPage = {
  async render() {
    const listProduk = await ListProduk.render();
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
            ${listProduk}
        </div>
        `;
  },

  afterRender: () => {
    handleAdminNavigation();
  },
};

export default ListProdukPage;
