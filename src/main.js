import page from "page";
import "./style/style.css";
import "./style/category.css";
import "./style/login.css";
import "./style/register.css";
import "./style/checkout.css";
import "./style/footer.css";
import "./style/product.css";
import "./style/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./routes/routes";
import LandingPage from "./pages/LandingPage";

document.addEventListener("DOMContentLoaded", async () => {
  const rootElement = document.getElementById("app");
  rootElement.innerHTML = await LandingPage.render();
  LandingPage.afterRender();
  page();
});
