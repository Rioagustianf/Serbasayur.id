import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LandingPage from "./pages/LandingPage";

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.querySelector("#app");

  // Render LandingPage
  app.innerHTML = await LandingPage.render();
});
