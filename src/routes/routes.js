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
import ProfilePage from "../pages/users/ProfilePage";
import EditProfilePage from "../pages/users/EditProfilePage";
import { Dashboard } from "../pages/admin/Dashboard";
import AddProduk from "../pages/admin/Addproduk";
import AddCategory from "../pages/admin/AddCategory";
import ListProdukPage from "../pages/admin/ListProdukPage";
import CustomerDashboard from "../pages/admin/CustomerPage";
import CustomerPage from "../pages/admin/CustomerPage";
import Register from "../components/admin/Register";
import Login from "../components/admin/Login";

const app = document.getElementById("app");

const renderPage = async (pageComponent, id) => {
  app.innerHTML = await pageComponent.render(id);

  if (pageComponent.afterRender) {
    pageComponent.afterRender(id);
  }
};

const checkAdminAuth = async (ctx, next) => {
  const currentAdmin = JSON.parse(sessionStorage.getItem("currentAdmin"));

  if (!currentAdmin && ctx.pathname !== "/dashboard/login") {
    // Jika tidak ada admin yang terotentikasi dan bukan halaman login, redirect ke halaman login
    page.redirect("/dashboard/login");
    return;
  }

  // Lanjutkan ke halaman yang diminta jika admin telah terotentikasi
  next();
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
page("/dashboard", checkAdminAuth, () => renderPage(Dashboard));
page("/profile", () => renderPage(ProfilePage));
page("/profile/edit-profile", () => renderPage(EditProfilePage));
page("/dashboard/addProduk", checkAdminAuth, () => renderPage(AddProduk));
page("/dashboard/Category", checkAdminAuth, () => renderPage(AddCategory));
page("/dashboard/listProduk", checkAdminAuth, () => renderPage(ListProdukPage));
page("/dashboard/customers", checkAdminAuth, () => renderPage(CustomerPage));
page("/dashboard/register", () => renderPage(Register));
page("/dashboard/login", () => renderPage(Login));

page("/c/:category", async (ctx) => {
  const { category } = ctx.params;
  await renderPage(ProductPage, { category }); // Render halaman kategori dengan nama kategori
});

page("/search/:query", async (ctx) => {
  const { query } = ctx.params;
  await renderPage(SearchPage, { query }); // Render halaman pencarian dengan query
});

page();
