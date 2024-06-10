const API_BASE_URL = "http://localhost:5000";
// Fungsi untuk mengambil semua produk
async function getAllProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  // Periksa apakah data yang diterima adalah array
  if (Array.isArray(data)) {
    return data;
  } else if (data && data.data && Array.isArray(data.data.products)) {
    // Jika data tidak berupa array langsung, tetapi ada dalam properti data
    return data.data.products;
  } else {
    throw new Error("Invalid data format for products");
  }
}

// Fungsi untuk mengambil produk berdasarkan ID
async function getProductById(idProduk) {
  const response = await fetch(`${API_BASE_URL}/products/${idProduk}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${idProduk}`); // Ganti dari id menjadi idProduk
  }
  return response.json();
}

// Fungsi untuk menambahkan produk baru
async function addProduct(product) {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error("Failed to add product");
  }
  return response.json();
}

// Fungsi untuk memperbarui produk berdasarkan ID
async function updateProduct(id, product) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error("Failed to update product");
  }
  return response.json();
}

// Fungsi untuk menghapus produk berdasarkan ID
async function deleteProduct(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
  return response.json();
}

// Ekspor fungsi-fungsi API
export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
