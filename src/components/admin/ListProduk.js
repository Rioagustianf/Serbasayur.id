import {
  deleteProduct,
  getAllCategories,
  getProductById,
  updateProduct,
} from "../../services/api/product";

const ListProduk = {
  async render(products) {
    const produkList = products
      .map(
        (product, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${product.nama}</td>
        <td>${product.deskripsi}</td>
        <td>${product.harga}</td>
        <td>${product.id_kategori}</td>
        <td>${product.kuantitas}</td>
        <td><img src="${product.imageUrl}" alt="${product.nama}" style="width: 100px;"></td>
        <td>${product.rating}</td>
        <td>
          <div class="d-flex">
            <button class="btn edit-button" data-id="${product.id_produk}" data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa-solid fa-pen-to-square icon"></i></button>
            <button class="btn delete-button" data-id="${product.id_produk}"><i class="fa-solid fa-trash icon"></i></button>
          </div>
        </td>
      </tr>
    `
      )
      .join("");

    // Mendapatkan semua kategori untuk dropdown pada form edit
    const categories = await getAllCategories();
    const options = categories
      .map(
        (category) =>
          `<option value="${category.id_kategori}">${category.nama_kategori}</option>`
      )
      .join("");

    return `
      <div class="container mt-5 mx-2">
        <h2>List Produk</h2>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Kategori</th>
                <th>Kuantitas</th>
                <th>Image</th>
                <th>Rating</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="produkList">
              ${produkList}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Edit Modal -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit Produk</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="edit-form" enctype="multipart/form-data">
                <input type="hidden" id="edit-id" name="id"> <!-- Input hidden untuk menyimpan ID produk -->
                <div class="mb-3">
                  <label for="edit-nama" class="form-label">Nama:</label>
                  <input type="text" class="form-control" id="edit-nama" name="nama" required>
                </div>
                <div class="mb-3">
                  <label for="edit-deskripsi" class="form-label">Deskripsi:</label>
                  <textarea class="form-control" id="edit-deskripsi" name="deskripsi" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="edit-harga" class="form-label">Harga:</label>
                  <input type="number" class="form-control" id="edit-harga" name="harga" required>
                </div>
                <div class="mb-3">
                  <label for="edit-image" class="form-label">Gambar:</label>
                  <div class="d-flex gap-3">
                    <img width="50" id="edit-gambar-preview" src="" alt="Preview Gambar" style="max-width: 200px;">
                    <input type="file" class="form-control" id="edit-image" name="image" accept="image/*">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="edit-kuantitas" class="form-label">Kuantitas:</label>
                  <input type="number" class="form-control" id="edit-kuantitas" name="kuantitas" required>
                </div>
                <div class="mb-3">
                  <label for="edit-id_kategori" class="form-label">Kategori:</label>
                  <select class="form-select" id="edit-id_kategori" name="id_kategori" required>
                    <option value="">Pilih Kategori</option>
                    ${options}
                  </select>
                </div>
                <div class="mb-3">
                  <label for="edit-rating" class="form-label">Rating:</label>
                  <input type="number" class="form-control" id="edit-rating" name="rating" required>
                </div>
                <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const editButtons = document.querySelectorAll(".edit-button");

    editButtons.forEach((button) => {
      button.addEventListener("click", async () => {
        const productId = button.dataset.id;

        // Pastikan productId terdefinisi
        if (!productId) {
          console.error("ID Produk tidak terdefinisi");
          alert("ID Produk tidak ditemukan. Silakan coba lagi.");
          return;
        }

        try {
          const productResponse = await getProductById(productId);
          if (productResponse.status === "success") {
            const product = productResponse.data.product;
            const imageUrl = `http://localhost:3000/image/${product.image}`;

            // Isi formulir edit dengan data produk yang diperoleh
            document.getElementById("edit-nama").value = product.nama;
            document.getElementById("edit-deskripsi").value = product.deskripsi;
            document.getElementById("edit-harga").value = product.harga;
            document.getElementById("edit-kuantitas").value = product.kuantitas;
            document.getElementById("edit-id_kategori").value =
              product.id_kategori;
            document.getElementById("edit-rating").value = product.rating;

            const imgPreview = document.getElementById("edit-gambar-preview");
            imgPreview.src = imageUrl;
            document.getElementById("edit-id").value = productId;
          }
        } catch (error) {
          console.error("Gagal memuat detail produk:", error);
          alert("Gagal memuat detail produk. Silakan coba lagi.");
        }
      });
    });

    // Tambahkan event listener untuk pengiriman formulir edit
    const editForm = document.getElementById("edit-form");

    editForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const editProduct = {
        nama: document.getElementById("edit-nama").value,
        deskripsi: document.getElementById("edit-deskripsi").value,
        harga: document.getElementById("edit-harga").value,
        kuantitas: document.getElementById("edit-kuantitas").value,
        id_kategori: document.getElementById("edit-id_kategori").value,
        rating: document.getElementById("edit-rating").value,
      };

      // Periksa apakah input file tidak kosong
      const editImageInput = document.getElementById("edit-image");
      if (editImageInput.files.length > 0) {
        editProduct.image = editImageInput.files[0]; // File gambar
      }

      const productId = document.getElementById("edit-id").value;

      try {
        await updateProduct(productId, editProduct);
        alert("Produk diperbarui");
        location.reload(); // Refresh halaman setelah produk diperbarui
      } catch (error) {
        console.error("Gagal memperbarui produk:", error);
        alert("Gagal memperbarui produk. Silakan coba lagi.");
      }
    });

    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", async () => {
        const productId = button.dataset.id;
        try {
          const response = await deleteProduct(productId);
          if (response.status === "success") {
            alert("Produk dihapus");
            location.reload();
          } else {
            alert("Gagal menghapus produk. Silakan coba lagi.");
          }
        } catch (error) {
          console.error("Gagal menghapus produk:", error);
          alert("Gagal menghapus produk. Silakan coba lagi.");
        }
      });
    });
  },
};

export default ListProduk;
