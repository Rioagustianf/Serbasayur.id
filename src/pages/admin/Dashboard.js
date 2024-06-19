import { Navbar } from "../../components/admin/Navbar.js";
import { Card } from "../../components/admin/Card.js";
import { RecentOrders } from "../../components/admin/RecentOrders.js";
import RecentCustomers from "../../components/admin/RecentCustomer.js";
import { handleAdminNavigation } from "../../utils/adminHandler.js";

const Dashboard = {
  async render() {
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
          </div>
          <div class="cardBox">
            ${Card({ numbers: "1,504", cardName: "Views", icon: "eye-outline" })}
            ${Card({ numbers: "80", cardName: "Penjualan", icon: "cart-outline" })}
            ${Card({ numbers: "284", cardName: "Comments", icon: "chatbubbles-outline" })}
            ${Card({ numbers: "Rp 240.000", cardName: "Pemasukan", icon: "cash-outline" })}
          </div>
          <div class="details">
            ${RecentOrders()}
            ${await RecentCustomers.render()}
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    handleAdminNavigation();
    await Navbar.afterRender();
    await RecentCustomers.afterRender();
  },
};

export { Dashboard };
