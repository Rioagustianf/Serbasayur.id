import Navbar from "../../components/users/Navbar";
import Footer from "../../components/users/Footer";
import { getUserById } from "../../services/api/user";
import page from "page";

const ProfilePage = {
  async render() {
    const userId = localStorage.getItem("userId");
    const userResponse = await getUserById(userId);
    const userData = userResponse.data.user;

    return `
      ${await Navbar.render()}
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-md-3">
            <div class="list-group">
              <div class="list-group-item list-group-item-action active" aria-current="true">
                Akun
              </div>
              <button class="list-group-item list-group-item-action" id="logout-button-profile">Logout</button>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-header">
                Profile
              </div>
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" value="${userData.username}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${userData.email}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="form-label">Nomor Telepon</label>
                    <input type="text" class="form-control" id="phone" value="${userData.nomor_telepon}" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="address" class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="address" value="${userData.alamat}" disabled>
                  </div>
                </form>
                <a href="/profile/edit-profile" class="btn btn-primary mt-3">Ubah Data</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${await Footer.render()}
    `;
  },

  async afterRender() {
    await Navbar.afterRender();

    const logoutButton = document.getElementById("logout-button-profile");

    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userId");
        page.redirect("/login");
      });
    }
  },
};

export default ProfilePage;
