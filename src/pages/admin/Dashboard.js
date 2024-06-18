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
            <div class="user">
              <img src="assets/imgs/customer01.jpg" alt="">
            </div>
          </div>
          <div class="cardBox">
            ${Card({ numbers: "1,504", cardName: "Daily Views", icon: "eye-outline" })}
            ${Card({ numbers: "80", cardName: "Sales", icon: "cart-outline" })}
            ${Card({ numbers: "284", cardName: "Comments", icon: "chatbubbles-outline" })}
            ${Card({ numbers: "$7,842", cardName: "Earning", icon: "cash-outline" })}
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
