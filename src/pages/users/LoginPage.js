import Login from "../../components/users/Login";
import page from "page";
import { loginUser } from "../../services/api/user.js"; // Import addUser function from user API

const LoginPage = {
  async render() {
    const login = await Login.render();

    return `
      ${login}
    `;
  },

  async afterRender() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // If already logged in, redirect to home or dashboard
    if (isLoggedIn) {
      // Redirect logic here
    }

    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        // Assume addUser function adds the user to the database and returns user data
        const newUser = await loginUser(email, password);

        // Simulate successful login by setting isLoggedIn to true in localStorage
        localStorage.setItem("isLoggedIn", true);

        // Redirect logic here after successful login
        page.redirect("/");
      } catch (error) {
        console.error("Failed to login:", error);
      }
    });
  },
};

export default LoginPage;
