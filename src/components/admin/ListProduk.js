const ListProduk = {
  async render() {
    return `
            <div class="container mt-5 mx-2">
  <h2>List Produk</h2>
  <div class="table-responsive">
    <table class="table table-striped table-success">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Kategori</th>
          <th>Kuantitas</th>
          <th>Image</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody id="produkList">
        <!-- Data produk akan ditampilkan di sini -->
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `;
  },
};

export default ListProduk;
