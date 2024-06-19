import categories from "../../data/categories";
import page from "page"; // Import page.js for routing

const CategoryContainer = {
  async render() {
    const categoriesHTML = categories
      .map((category) => {
        return `
          <li class="ctg-container__content px-4">
            <a href="/c/${category.name}" class="category-link" data-category="${category.name}">
              ${category.name}
            </a>
          </li>
        `;
      })
      .join("");

    return `
      <div class="ctg-container me-4 rounded border">
        <h4 class="ctg-container__title bg-body-tertiary rounded-top p-3">Kategori</h4>
        <ul class="ctg-container__body mb-3">
          ${categoriesHTML}
        </ul>
      </div>
    `;
  },
  async afterRender() {
    // Add click event listener for category links
    const categoryLinks = document.querySelectorAll(".category-link");
    categoryLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const category = event.target.getAttribute("data-category");
        page(`/c/${category}`);
      });
    });
  },
};

export default CategoryContainer;
