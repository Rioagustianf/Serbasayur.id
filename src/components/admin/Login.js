import page from "page";
import { loginAdmin } from "../../services/api/admin";

const Login = {
  async render() {
    return `
      <div id="login-page">
        <div class="login-container text-center">
          <div class="login-card">
            <img src="/public/images/logo1.png" alt="Logo" class="logo">
            <h5 style="color: #4dc38c">Login Admin</h5>
            <form id="login-form">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <button type="submit" class="login-button">Login</button>
            </form>
            <p class="register-link">Don't have an account? <a href="dashboard/register">Register</a></p>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      try {
        const admin = await loginAdmin(username, password);
        if (admin) {
          // Login berhasil, simpan informasi admin ke sessionStorage
          sessionStorage.setItem("currentAdmin", JSON.stringify(admin));

          // Redirect ke halaman dashboard setelah login berhasil
          page.redirect("/dashboard");
        }
      } catch (error) {
        console.error("Login gagal:", error.message);
        alert(error.message);
      }
    });
  },
};

export default Login;
