// src/routes/index.js
import page from "page";
import LandingPage from "../pages/users/LandingPage";
import LoginPage from "../pages/users/LoginPage";
import RegisterPage from "../pages/users/RegisterPage";
import DetailProduk from "../pages/users/DetailProduk";
import CheckoutPage from "../pages/users/CheckoutPage";
import OrderPage from "../pages/users/OrderPage";
import ProductPage from "../pages/users/ProductPage";
import SearchPage from "../pages/users/SearchPage";
import AboutPage from "../pages/users/AboutPage";
import { Dashboard } from "../pages/admin/Dashboard";
import AddProduk from "../pages/admin/Addproduk";
import AddCategory from "../pages/admin/AddCategory";
import ListProdukPage from "../pages/admin/ListProdukPage";
import CustomerDashboard from "../pages/admin/CustomerPage";
import CustomerPage from "../pages/admin/CustomerPage";

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
page("/about", () => renderPage(AboutPage));
page("/checkout", () => renderPage(CheckoutPage));
page("/order", () => renderPage(OrderPage));
page("/dashboard", () => renderPage(Dashboard));
page("/dashboard/addProduk", () => renderPage(AddProduk));
page("/dashboard/Category", () => renderPage(AddCategory));
page("/dashboard/listProduk", () => renderPage(ListProdukPage));
page("/customers", () => renderPage(CustomerPage));

page("/c/:category", async (ctx) => {
  const { category } = ctx.params;
  await renderPage(ProductPage, { category }); // Render halaman kategori dengan nama kategori
});

page("/search/:query", async (ctx) => {
  const { query } = ctx.params;
  await renderPage(SearchPage, { query }); // Render halaman pencarian dengan query
});

page();
