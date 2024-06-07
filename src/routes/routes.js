import page from "page";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailProduk from "../pages/DetailProduk";
import CheckoutPage from "../pages/CheckoutPage";

const app = document.getElementById("app");

const renderPage = async (pageComponent) => {
  app.innerHTML = await pageComponent.render();
  if (pageComponent.afterRender) {
    pageComponent.afterRender();
  }
};

page("/", () => renderPage(LandingPage));
page("/login", () => renderPage(LoginPage));
page("/register", () => renderPage(RegisterPage));
page("/detail", () => renderPage(DetailProduk));
page("/checkout", () => renderPage(CheckoutPage));

page();
