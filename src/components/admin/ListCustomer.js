const ListCustomer = {
  async render(users) {
    try {
      if (!Array.isArray(users)) {
        throw new Error("Expected an array of users");
      }

      const userList = users
        .map(
          (user, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.alamat}</td>
              <td>${user.nomor_telepon}</td>
            </tr>
          `
        )
        .join("");

      return `
          <div class="container mt-5 mx-2">
            <h2 class="text-center">List Customers</h2>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Alamat</th>
                    <th>Telepon</th>
                  </tr>
                </thead>
                <tbody id="userList">
                  ${userList}
                </tbody>
              </table>
            </div>
          </div>
        `;
    } catch (error) {
      console.error("Error rendering user list:", error);
      return "<p>Failed to render user list. Please try again later.</p>";
    }
  },
};

export default ListCustomer;
