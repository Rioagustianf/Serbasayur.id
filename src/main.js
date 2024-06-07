import page from "page";
import "./style/style.css";
import "./style/category.css";
import "./style/login.css";
import "./style/register.css";
import "./style/checkout.css";
import "./style/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./routes/routes";

document.addEventListener("DOMContentLoaded", () => {
  page(); // Memanggil router untuk merender halaman yang sesuai pada saat halaman dimuat pertama kali
});

window.addEventListener("hashchange", () => {
  page(); // Memanggil router untuk merender halaman yang sesuai setiap kali hash di URL berubah
});
