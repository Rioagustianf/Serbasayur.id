const FormAddProduk = {
  async render() {
    return `
            <!-- add_produk_form.html -->
<div class="container mt-5">
  <h2>Tambah Produk</h2>
  <form id="addProdukForm">
    <div class="mb-3">
      <label for="nama" class="form-label">Nama:</label>
      <input type="text" class="form-control" id="nama" required>
    </div>
    <div class="mb-3">
      <label for="idKategori" class="form-label">Id Kategori:</label>
      <input type="text" class="form-control" id="idKategori" required>
    </div>
    <div class="mb-3">
      <label for="deskripsi" class="form-label">Deskripsi:</label>
      <textarea class="form-control" id="deskripsi" required></textarea>
    </div>
    <div class="mb-3">
      <label for="harga" class="form-label">Harga:</label>
      <input type="number" class="form-control" id="harga" required>
    </div>
    <div class="mb-3">
      <label for="image" class="form-label">Image:</label>
      <input type="file" class="form-control" id="image" required>
    </div>
    <div class="mb-3">
      <label for="kuantitas" class="form-label">Kuantitas:</label>
      <input type="number" class="form-control" id="kuantitas" required>
    </div>
    <div class="mb-3">
      <label for="kategori" class="form-label">Kategori:</label>
      <select class="form-select" id="kategori" required>
        <option value="">Pilih Kategori</option>
        <option value="1">Kategori 1</option>
        <option value="2">Kategori 2</option>
        <option value="3">Kategori 3</option>
        <!-- Tambahkan opsi lainnya sesuai dengan kategori yang Anda miliki -->
      </select>
    </div>
    <div class="mb-3">
      <label for="rating" class="form-label">Rating:</label>
      <input type="number" class="form-control" id="rating" required>
    </div>
    <button type="submit" class="btn btn-primary">Tambah Produk</button>
  </form>
</div>
`;
  },
};

export default FormAddProduk;
