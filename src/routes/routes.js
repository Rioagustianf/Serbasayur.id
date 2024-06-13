import page from "page";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DetailProduk from "../pages/DetailProduk";
import CheckoutPage from "../pages/CheckoutPage";
import OrderPage from "../pages/OrderPage";

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

page("/c/:category", async (ctx) => {
  const { category } = ctx.params;
  await renderPage(ProductPage, { category }); // Render halaman kategori dengan nama kategori
});

page("/search/:query", async (ctx) => {
  const { query } = ctx.params;
  await renderPage(SearchPage, { query }); // Render halaman pencarian dengan query
});

page();
