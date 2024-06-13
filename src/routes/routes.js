// src/routes/index.js
import page from "page";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailProduk from "../pages/DetailProduk";
import CheckoutPage from "../pages/CheckoutPage";
import OrderPage from "../pages/OrderPage";
import { Dashboard } from "../pages/admin/Dashboard";
import AddProduk from "../pages/admin/Addproduk";
import AddCategory from "../pages/admin/AddCategory";
import ListProdukPage from "../pages/admin/ListProdukPage";

const app = document.getElementById("app");

const renderPage = async (pageComponent, id) => {
  app.innerHTML = await pageComponent.render(id);

  if (pageComponent.afterRender) {
    pageComponent.afterRender(id);
  }
};

page("/", async () => {
  await renderPage(LandingPage);
});
page("/login", () => renderPage(LoginPage));
page("/register", async () => {
  await renderPage(RegisterPage);
});
page("/detail/:id", async (ctx) => {
  const { id } = ctx.params;
  await renderPage(DetailProduk, id); // Render halaman detail produk dengan ID produk
});
page("/checkout", () => renderPage(CheckoutPage));
page("/order", () => renderPage(OrderPage));
page("/dashboard", () => renderPage(Dashboard));
page("/dashboard/addProduk", () => renderPage(AddProduk));
page("/dashboard/Category", () => renderPage(AddCategory));
page("/dashboard/listProduk", () => renderPage(ListProdukPage));
page("/dashboard/listProduk", () => renderPage(ListProdukPage));

page();
