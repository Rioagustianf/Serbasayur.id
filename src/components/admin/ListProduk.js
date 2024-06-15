// ListProduk.js
const ListProduk = {
  async render(products) {
    const produkList = products
      .map(
        (product) => `
      <tr>
        <td>${product.nama}</td>
        <td>${product.deskripsi}</td>
        <td>${product.harga}</td>
        <td>${product.id_kategori}</td>
        <td>${product.kuantitas}</td>
        <td><img src="/images/${product.image}" alt="${product.nama}" style="width: 100px;"></td>
        <td>${product.rating}</td>
      </tr>
    `
      )
      .join("");

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
              ${produkList}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },
};

export default ListProduk;
