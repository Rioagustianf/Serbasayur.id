import categories from "../../data/categories";

const Category = {
  async render() {
    const categoriesHTML = categories
      .map((category) => {
        return `
          <li class="category-item">
            <a class="category-grid" href="/c/${category.name}">
              <div class="item-wrap">
                <div class="item-wrap__image">
                  <div class="category-image">
                    <img class="category-image__placement" src="../../public/images/categories/${category.image}">
                  </div>
                </div>
                <div class="item-wrap__image-title">
                  ${category.name}
                </div>
              </div>
            </a>
          </li>
        `;
      })
      .join("");

    return `
      <div class="home-category mt-5">
        <div class="category-header-section text-center">
          <div class="category-header-section__header">
            <h2 class="category-header-section__header__title">Kategori</h2>
          </div>
          <div class="category-header-section__content">
            <div class="image-category">
              <ul class="category-list mt-5 mb-5">
                ${categoriesHTML}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  },
};

export default Category;
