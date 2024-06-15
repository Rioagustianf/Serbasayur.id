const Login = {
  async render() {
    return `
        <div id="login-page">
          <div class="login-container text-center">
            <div class="login-card">
              <img src="../../public/images/logo1.png" alt="Logo" class="logo">
              <form id="login-form">
                <div class="input-group">
                  <div class="input-container">
                    <label for="email"></label>
                    <div class=""><i class="fas fa-user"></i></div>
                    <input type="email" id="email" name="email" placeholder="EMAIL" required>
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
              <p class="register-link">Don't have an account? <a href="/register">Register</a></p>
            </div>
          </div>
        </div>
      `;
  },

  async afterRender() {},
};

export default Login;
