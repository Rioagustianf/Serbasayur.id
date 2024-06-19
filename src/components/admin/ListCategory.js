import { getAllCategories } from "../../services/api/product";

const ListCategory = {
  async render() {
    return `
      <div class="container mt-5">
        <h2>List Kategori</h2>
        <ul class="list-group mb-5" id="categoryList">
          <!-- Item list kategori akan diisi melalui JavaScript -->
        </ul>
      </div>
    `;
  },

  async afterRender() {
    try {
      const categories = await getAllCategories();
      const categoryList = document.getElementById("categoryList");

      categories.forEach((category) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = category.nama_kategori; // Sesuaikan dengan struktur data kategori Anda
        categoryList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      alert("Gagal mengambil kategori. Silakan coba lagi.");
    }
  },

  addCategoryToList(category) {
    const categoryList = document.getElementById("categoryList");
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = category.nama_kategori; // Sesuaikan dengan struktur data kategori Anda
    categoryList.appendChild(listItem);
  },
};

export default ListCategory;
