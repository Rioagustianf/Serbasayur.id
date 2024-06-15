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

  async afterRender() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const user = await login(email, password);
        // Login berhasil, Anda bisa menangani responsenya di sini
        console.log("Login berhasil:", user);

        // Simpan informasi pengguna ke sessionStorage atau cookie
        sessionStorage.setItem("currentUser", JSON.stringify(user));

        // Redirect ke halaman setelah login
        window.location.href = "/"; // Ganti dengan halaman yang sesuai
      } catch (error) {
        // Login gagal, tampilkan pesan error
        console.error("Login gagal:", error.message);
        alert(error.message); // Tampilkan pesan error kepada pengguna
      }
    });
  },
};

export default Login;
