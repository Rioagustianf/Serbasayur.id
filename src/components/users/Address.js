import { getAllOrders } from "../../services/api/order";
import { getUserById } from "../../services/api/user";

const Address = {
  async render() {
    try {
      const productResponse = await getAllOrders();
      const userId = localStorage.getItem("userId");
      const userResponse = await getUserById(userId);

      if (
        productResponse.status === "success" &&
        userResponse.status === "success"
      ) {
        const orders = productResponse.data.orders;
        const user = userResponse.data.user;

        // Cari alamat_order berdasarkan user_id
        const userOrder = orders.find((order) => order.user_id === user.id);

        if (userOrder) {
          return `
            <div class="container">
              <h2 class="section-title green fw-semibold">ALAMAT KIRIM</h2>
              <div class="address-wrapper d-flex">
                <h2 class="address-body fw-light">${userOrder.alamat_order}</h2>
                <a href="" class="address-change text-center"><h2>UBAH</h2></a>
              </div>
            </div>
          `;
        } else {
          throw new Error("User order not found");
        }
      } else {
        throw new Error("Failed to fetch product or user details");
      }
    } catch (error) {
      console.error("Error fetching address:", error.message);
      return `<div>Error fetching address. Please try again later.</div>`;
    }
  },
};

export default Address;
