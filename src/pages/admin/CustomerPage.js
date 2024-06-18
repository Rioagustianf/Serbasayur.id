// CustomerPage.js

import ListCustomer from "../../components/admin/ListCustomer.js";
import { Navbar } from "../../components/admin/Navbar.js";
import { getAllUsers } from "../../services/api/user.js";
import { handleAdminNavigation } from "../../utils/adminHandler.js";

const CustomerPage = {
  async render() {
    try {
      const response = await getAllUsers();

      if (!response || !response.status === "success") {
        throw new Error("Failed to fetch users");
      }

      const users =
        response.data && Array.isArray(response.data.users)
          ? response.data.users
          : [];

      console.log("Users:", users);

      // Memanggil ListCustomer.render dengan benar
      const listCustomer = await ListCustomer.render(users);
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
            <div class="container w-100">
            ${listCustomer}
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error("Failed to render CustomerPage:", error);
      return "<p>Failed to load customers. Please try again later.</p>";
    }
  },

  afterRender: () => {
    handleAdminNavigation();
  },
};

export default CustomerPage;
