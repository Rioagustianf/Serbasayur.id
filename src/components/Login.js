const Login = {
    async render() {
        return `
        <div id="login-page">
            <div class="login-container">
            <div class="login-card">
                <img src="../../public/images/logo1.png" alt="Logo" class="logo">
                <form>
                <div class="input-group">
                    <div class="input-container">
                        <div class=""><i class="fas fa-user"></i></div>
                        <label for="email"></label>
                        <input type="email" id="email" name="email" placeholder="EMAIL" required>
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-container">
                        <div class=""><i class="fas fa-lock"></i></div>
                        <label for="password"></label>
                        <input type="password" id="password" name="password" placeholder="PASSWORD" required>
                    </div>
                </div>
                <button type="submit" class="login-button">Login</button>
                </form>
                <p class="register-link">Don’t have an account? <a href="#">Register</a></p>
            </div>
            </div>
        </div>
      
        `;
    },
};

export default Login;