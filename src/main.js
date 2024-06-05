import "./style/style.css";
import "./style/category.css";
import "./style/login.css";
import "./style/register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { router } from "./routes/route";

document.addEventListener("DOMContentLoaded", () => {
  router(); // Memanggil router untuk merender halaman yang sesuai pada saat halaman dimuat pertama kali
});

window.addEventListener("hashchange", () => {
  router(); // Memanggil router untuk merender halaman yang sesuai setiap kali hash di URL berubah
});
