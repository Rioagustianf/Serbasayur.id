const FormAddCategory = {
  async render() {
    return `
            <!-- add_kategori_form.html -->
<div class="container mt-5">
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
};

export default FormAddCategory;
