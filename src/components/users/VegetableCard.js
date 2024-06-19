import page from "page";
import { getAllProducts, getAllCategories } from "../../services/api/product";
import { getAllUsers } from "../../services/api/user";
import { chunk } from "lodash-es";
import { formatCurrency } from "../../utils/productHandler";

const VegetableCard = {
  async render() {
    try {
      const [products, categories] = await Promise.all([
        getAllProducts(),
        getAllCategories(),
      ]);

      if (!Array.isArray(products) || !Array.isArray(categories)) {
        throw new Error("Invalid data format for products or categories");
      }

      // Temukan kategori "Sayuran Segar"
      const vegetableCategory = categories.find(
        (category) => category.nama_kategori.toLowerCase() === "Sayuran Segar".toLowerCase()
      );

      if (!vegetableCategory) {
        throw new Error("Kategori 'Sayuran Segar' tidak ditemukan");
      }

      // Filter produk berdasarkan kategori "Sayuran Segar" dan ambil maksimal 9 produk
      const vegetableProducts = products
        .filter(
          (product) => product.id_kategori === vegetableCategory.id_kategori
        )
        .slice(0, 9); // Ambil maksimal 9 produk

      // Ubah jumlah kolom berdasarkan ukuran layar
      const colSize = {
        lg: 2,
        md: 3,
        sm: 6,
      };

      const productGroups = chunk(vegetableProducts, 3);

      const carouselItems = productGroups
        .map((group, index) => {
          const productCards = group
            .map(
              (product) => `
            <div class="col-4 col-md-${colSize.md} col-lg-${colSize.lg}">
              <div class="card h-100" data-id="${product.id_produk}">
                <img height="100px" src="${product.imageUrl}" class="img-fluid" alt="${product.nama}">
                <div class="card-body d-flex flex-column flex-lg-column flex-md-column flex-sm-column text-center">
                  <a href="/detail/${product.id_produk}" class="text-decoration-none text-black product-link" data-id="${product.id_produk}">
                    <p class="card-title text-sm" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${product.nama}</p>
                  </a>
                  <div class="mt-auto">
                    <p class="card-text fw-bold text-sm">${formatCurrency(product.harga)}</p>
                  </div>
                  <div class="">
                    <button class="btn-sm btn-cart rounded-3 p-2 mt-1" type="submit" data-id="${product.id_produk}">masukan keranjang</button>
                  </div>
                </div>
              </div>
            </div>
          `
            )
            .join("");

          return `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <div class="row justify-content-center">
              ${productCards}
            </div>
          </div>
        `;
        })
        .join("");

      const productListLayout = `
        <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Sayuran Segar</h2>
          <div id="vegetable-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              ${carouselItems}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#vegetable-carousel" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#vegetable-carousel" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      `;

      return productListLayout;
    } catch (error) {
      console.error(error);
      return `<div>Error fetching products. Please try again later.</div>`;
    }
  },

  afterRender() {
    try {
      const userId = localStorage.getItem("userId");
      const produkLinks = document.querySelectorAll(".product-link");
    } catch (error) {}
  },
};

export default VegetableCard;
