import { getAllUsers } from "../../services/api/user";

const RecentCustomers = {
  async render() {
    try {
      const res = await getAllUsers();
      const users = res.data.users;

      if (!Array.isArray(users) || users.length === 0) {
        throw new Error("Failed to fetch users or empty user list.");
      }

      const recentCustomers = users.slice(0, 5);

      const customersHTML = recentCustomers
        .map(
          (user, index) => `
          <tr>
            <td>
              <h4>${user.username} <br> <span>${user.nomor_telepon}</span></h4>
            </td>
          </tr>
        `
        )
        .join("");

      return `
        <div class="recentCustomers">
          <div class="cardHeader">
            <h2>Recent Customers</h2>
          </div>
          <table>
            ${customersHTML}
          </table>
        </div>
      `;
    } catch (error) {
      console.error("Failed to fetch and display recent customers:", error);
      return `<p>Failed to load recent customers. Please try again later.</p>`;
    }
  },

  async afterRender() {},
};

export default RecentCustomers;
