import Navbar from "../../components/users/Navbar";
import Footer from "../../components/users/Footer";
import { getUserById, updateUser } from "../../services/api/user";
import page from "page";

const EditProfilePage = {
  async render() {
    const userId = localStorage.getItem("userId");
    const userResponse = await getUserById(userId);
    const userData = userResponse.data.user;

    return `
      ${await Navbar.render()}
      <div class="container mt-3 mb-5">
        <div class="row">
          <div class="col-md-3 mt-4">
            <div class="list-group">
              <div class="list-group-item list-group-item-action active" aria-current="true">
                Akun
              </div>
              <button class="list-group-item list-group-item-action" id="logout-button-profile">Logout</button>
            </div>
          </div>
          <div class="col-md-9 mt-4">
            <div class="card">
              <div class="card-header">
                Edit Profile
              </div>
              <div class="card-body">
                <form id="edit-profile-form">
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value="${userData.username}">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${userData.email}">
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Nomor Telepon</label>
                    <input type="text" class="form-control" id="phone" value="${userData.nomor_telepon}">
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="address" value="${userData.alamat}">
                  </div>
                  <div class="mb-3">
                    <label for="currentPassword" class="form-label">Password Lama</label>
                    <input type="password" class="form-control" id="currentPassword" placeholder="••••••••" required>
                  </div>
                  <div class="mb-3">
                    <label for="newPassword" class="form-label">Password Baru</label>
                    <input type="password" class="form-control" id="newPassword" placeholder="••••••••" required>
                  </div>
                  <button type="submit" class="btn btn-success mt-3">Simpan Perubahan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${await Footer.render()}
    `;
  },

  async afterRender() {
    document.getElementById('edit-profile-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const userId = localStorage.getItem("userId");
      const userResponse = await getUserById(userId);
      const userData = userResponse.data.user;

      const currentPassword = document.getElementById('currentPassword').value;
      const newPassword = document.getElementById('newPassword').value;
      const updatedUser = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        nomor_telepon: document.getElementById('phone').value,
        alamat: document.getElementById('address').value,
        password: userData.password, // Default to current password if not changing
      };

      if (currentPassword && newPassword) {
        if (currentPassword === userData.password) {
          updatedUser.password = newPassword;
        } else {
          alert('Password lama tidak sesuai');
          return;
        }
      }

      try {
        await updateUser(userId, updatedUser);
        alert('Data berhasil diperbarui');
        page.redirect("/profile");
      } catch (error) {
        console.error("Failed to update user:", error.message);
        alert('Gagal memperbarui data');
      }
    });

    const logoutButton = document.getElementById("logout-button-profile");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userId");
        page.redirect("/login");
      });
    }

    await Navbar.afterRender();
  },
};

export default EditProfilePage;
