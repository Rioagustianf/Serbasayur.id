const HeroAbout = {
  async render() {
    return `
      <div class="hero-about position-relative text-center d-flex justify-content-center align-items-center" 
           style="margin: auto; width: 100vw; background: url('../../../public/images/about-bg.png') no-repeat bottom center; height: calc(100vh - 66px); background-size: 90vh;   font-family: 'poppins', sans-serif;">
        <div class="hero-about_title p-5 rounded" style="opacity: 0.9; margin-bottom: 40vh">
          <h1>Selamat Datang di <span style="color: #4dc38c;">Serbasayur.id!</span></h1>
        </div>
      </div>
    `;
  },
};

export default HeroAbout;
