const API_BASE_URL = "https://serbasayur-id-back-end.up.railway.app";

async function getAllProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  let products = [];

  if (Array.isArray(data)) {
    products = data;
  } else if (data && data.data && Array.isArray(data.data.products)) {
    products = data.data.products;
  } else {
    throw new Error("Invalid data format for products");
  }

  // Modifikasi produk untuk menambahkan URL gambar
  products.forEach((product) => {
    product.imageUrl = `${API_BASE_URL}/image/${product.image}`; // Hapus spasi tambahan
  });

  return products;
}

async function getProductById(idProduk) {
  const response = await fetch(`${API_BASE_URL}/products/${idProduk}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${idProduk}`);
  }
  return response.json();
}

async function addProduct(formData) {
  try {
    const response = await fetch("https://serbasayur-id-back-end.up.railway.app/products", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Gagal menambahkan produk");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal menambahkan produk:", error.message);
    throw new Error(`Gagal menambahkan produk: ${error.message}`);
  }
}

async function updateProduct(productId, productData) {
  try {
    // Membuat FormData untuk mengirim data produk
    const formData = new FormData();
    formData.append("nama", productData.nama);
    formData.append("id_kategori", productData.id_kategori);
    formData.append("deskripsi", productData.deskripsi);
    formData.append("harga", productData.harga);
    formData.append("kuantitas", productData.kuantitas);
    formData.append("rating", productData.rating);

    // Memeriksa apakah ada file gambar yang dipilih
    if (productData.image) {
      formData.append("image", productData.image); // file gambar
    }

    // Mengirim permintaan PUT ke endpoint backend
    const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json(); // Ambil pesan error dari server
      throw new Error(errorData.message || "Gagal memperbarui produk");
    }

    const data = await response.json();
    return data; // Mengembalikan data jika diperlukan di frontend
  } catch (error) {
    console.error("Gagal memperbarui produk:", error.message);
    throw new Error(`Gagal memperbarui produk: ${error.message}`);
  }
}

async function deleteProduct(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
  return response.json();
}

async function getProductsByCategory(category) {
  const response = await fetch(`${API_BASE_URL}/products?category=${category}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products for category ${category}`);
  }

  const data = await response.json();
  let products = [];

  if (Array.isArray(data)) {
    products = data;
  } else if (data && data.data && Array.isArray(data.data.products)) {
    products = data.data.products;
  } else {
    throw new Error("Invalid data format for products");
  }

  // Modifikasi produk untuk menambahkan URL gambar
  products.forEach((product) => {
    product.imageUrl = `${API_BASE_URL}/image/${product.image}`;
  });

  return products;
}

async function searchProducts(query) {
  const response = await fetch(`${API_BASE_URL}/products?id_produk=${query}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch search results for query: ${query}`);
  }
  return response.json();
}

// --- Service API Kategori ---

async function getAllCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data.data.categories;
}

async function getCategoryById(idKategori) {
  const response = await fetch(`${API_BASE_URL}/categories/${idKategori}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch category with id ${idKategori}`);
  }

  const data = await response.json();
  return data.data.category;
}

async function addCategory(category) {
  const response = await fetch(`${API_BASE_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  if (!response.ok) {
    throw new Error("Failed to add category");
  }

  const data = await response.json();
  return data.data;
}

async function updateCategory(idKategori, category) {
  const response = await fetch(`${API_BASE_URL}/categories/${idKategori}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  if (!response.ok) {
    throw new Error("Failed to update category");
  }

  const data = await response.json();
  return data.data;
}

async function deleteCategory(idKategori) {
  const response = await fetch(`${API_BASE_URL}/categories/${idKategori}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete category");
  }

  const data = await response.json();
  return data.data;
}

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  searchProducts,
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
