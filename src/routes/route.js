import LandingPage from "../pages/LandingPage";
import DetailProduk from "../pages/DetailProduk";
import Login from "../components/Login";
import Register from "../components/Register";

const routes = {
  "/": LandingPage,
  "/login": Login,
  "/register": Register,
  // Perbarui rute untuk detail produk
  "/detail/:produkId": DetailProduk,
};

export async function router() {
  const path = window.location.hash.replace("#", "") || "/";
  const params = path.split("/");
  const page = routes[`/${params[1]}`] || LandingPage;

  if (page && typeof page.render === "function") {
    document.getElementById("app").innerHTML = await page.render();
    if (typeof page.afterRender === "function") {
      page.afterRender();
    }
  } else {
    document.getElementById("app").innerHTML = "<h1>Page not found</h1>";
  }
}
