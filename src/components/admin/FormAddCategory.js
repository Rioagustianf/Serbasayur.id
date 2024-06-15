import { addCategory } from "../../services/api/product"; // Pastikan path ini benar
import ListCategory from "./ListCategory";

const FormAddCategory = {
  async render() {
    return `
      <div class="container mt-5" id="kategori-page">
        <h2>Tambah Kategori</h2>
        <form id="addKategoriForm">
          <div class="mb-3">
            <label for="namaKategori" class="form-label">Nama Kategori:</label>
            <input type="text" class="form-control" id="namaKategori" required>
          </div>
          <button type="submit" class="btn btn-primary">Tambah Kategori</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const addCategoryForm = document.querySelector("#addKategoriForm");

    if (addCategoryForm) {
      addCategoryForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Mencegah pengiriman form secara default

        const nama_kategori = document.getElementById("namaKategori").value;
        const kategori = { nama_kategori };

        try {
          // Gunakan service API untuk menambahkan kategori ke database
          const response = await addCategory(kategori);

          // Setelah submit berhasil, kosongkan nilai input
          document.getElementById("namaKategori").value = "";

          ListCategory.addCategoryToList(kategori);
        } catch (error) {
          console.error("Failed to add category:", error);
          alert("Gagal menambahkan kategori");
        }
      });
    } else {
      console.error("Form not found in DOM");
    }
  },
};

export default FormAddCategory;
