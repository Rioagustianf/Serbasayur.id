import { addAdmin } from "../../services/api/admin";

const Register = {
  async render() {
    return `
      <div id="register-page">
        <div class="register-container text-center">
          <div class="register-card">
            <img src="../../public/images/logo1.png" alt="Logo" class="logo">
            <form id="register-form" enctype="multipart/form-data">
              <div class="input-group">
                <div class="input-container">
                  <label for="username"></label>
                  <div class=""><i class="fas fa-user"></i></div>
                  <input type="text" id="username" name="username" placeholder="USERNAME" required>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="email"></label>
                  <div class=""><i class="fas fa-envelope"></i></div>
                  <input type="email" id="email" name="email" placeholder="EMAIL" required>
                  <span id="email-error" class="error-message"></span>
                </div>
              </div>
              <div class="input-group">
                <div class="input-container">
                  <label for="password"></label>
                  <div class=""><i class="fas fa-lock"></i></div>
                  <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                </div>
              </div>
              <button type="submit" class="register-button">Register</button>
            </form>
            <p class="login-link">Have an account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {},
};

export default Register;
