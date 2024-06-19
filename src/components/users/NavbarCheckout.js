import page from "page";

const NavbarCheckout = {
  async render() {
    return `
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="logo">
              <a href="/"><img height="50px" src="/public/images/logo1.png" alt="Serba Sayur ID"></a>
            </div>
          </div>
        </nav>
      </div>
    `;
  },

  afterRender() {
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = document.getElementById("search-input").value;
      if (query) {
        page(`/search/${query}`);
      }
    });
  },
};

export default NavbarCheckout;
