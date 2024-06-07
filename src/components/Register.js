const Register = {
  async render() {
    return `
        <div id="register-page">
          <div class="register-container text-center">
            <div class="register-card">
              <img src="../../public/images/logo1.png" alt="Logo" class="logo">
              <form>
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
                <div class="input-group">
                  <div class="input-container">
                    <label for="phone"></label>
                    <div class=""><i class="fas fa-phone"></i></div>
                    <input type="tel" id="phone" name="phone" placeholder="PHONE" required>
                  </div>
                </div>
                <div class="input-group">
                  <div class="input-container">
                    <label for="address"></label>
                    <div class=""><i class="fas fa-home"></i></div>
                    <input type="text" id="address" name="address" placeholder="ADDRESS" required>
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
};

export default Register;
