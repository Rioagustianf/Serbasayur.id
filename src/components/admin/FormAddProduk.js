import { getAllCategories, addProduct } from "../../services/api/product";

const FormAddProduk = {
  async render() {
    try {
      const categories = await getAllCategories();
      let options = categories
        .map(
          (category) =>
            `<option value="${category.id_kategori}">${category.nama_kategori}</option>`
        )
        .join("");
      return `
        <div class="container mt-5">
          <h2>Tambah Produk</h2>
          <form id="addProdukForm" enctype="multipart/form-data">
            <div class="mb-3">
              <label for="nama" class="form-label">Nama:</label>
              <input type="text" class="form-control" id="nama" name="nama" required>
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi:</label>
              <textarea class="form-control" id="deskripsi" name="deskripsi" required></textarea>
            </div>
            <div class="mb-3">
              <label for="harga" class="form-label">Harga:</label>
              <input type="number" class="form-control" id="harga" name="harga" required>
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Image:</label>
              <input type="file" class="form-control" id="image" name="image" accept="image/*" required>
            </div>
            <div class="mb-3">
              <label for="kuantitas" class="form-label">Kuantitas:</label>
              <input type="number" class="form-control" id="kuantitas" name="kuantitas" required>
            </div>
            <div class="mb-3">
              <label for="id_kategori" class="form-label">Kategori:</label>
              <select class="form-select" id="id_kategori" name="id_kategori" required>
                <option value="">Pilih Kategori</option>
                ${options}
              </select>
            </div>
            <div class="mb-3">
              <label for="rating" class="form-label">Rating:</label>
              <input type="number" class="form-control" id="rating" name="rating" required>
            </div>
            <button type="submit" class="btn btn-success mb-4">Tambah Produk</button>
          </form>
        </div>
      `;
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      alert("Gagal mengambil kategori. Silakan coba lagi.");
    }
  },

  async afterRender() {
    const form = document.getElementById("addProdukForm");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await addProduct(formData);
        console.log("Produk berhasil ditambahkan:", response);
        alert("Produk berhasil ditambahkan!");
        // Anda bisa tambahkan logika untuk menampilkan pesan sukses atau melakukan navigasi ke halaman lain
      } catch (error) {
        console.error("Gagal menambahkan produk:", error.message);
        alert("Gagal menambahkan produk. Silakan coba lagi.");
      }
    });
  },
};

export default FormAddProduk;
