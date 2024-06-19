import { getUserById } from "../../services/api/user";

const Address = {
  async render() {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        throw new Error("User not logged in");
      }

      const userResponse = await getUserById(userId);

      if (userResponse.status === "success") {
        const user = userResponse.data.user;

        return `
          <div class="container">
            <h2 class="section-title green fw-semibold">ALAMAT KIRIM</h2>
            <div class="address-wrapper d-flex">
              <h2 class="address-body fw-light">${user.alamat}</h2>
              <a href="" class="address-change text-center"><h2>UBAH</h2></a>
            </div>
          </div>
        `;
      } else {
        throw new Error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching address:", error.message);
      return `<div>Error fetching address. Please try again later.</div>`;
    }
  },
};

export default Address;
