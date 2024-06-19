import Navbar from "../../components/users/Navbar";
import HeroAbout from "../../components/users/HeroAbout";
import Footer from "../../components/users/Footer";

const AboutPage = {
  async render() {
    return `
        ${await Navbar.render()}
        ${await HeroAbout.render()}
        <div class="shadow">
            <div class="company-desc">
                <div class="image-desc">
                    <img class="shadow" src="../../public/images/petani.jpg" alt="Petani">
                </div>
                <h4 class="mt-0 ms-4 fw-light">Serbasayur.id menjawab tantangan dalam memperoleh sayuran segar langsung dari petani lokal. Kami bertujuan untuk meningkatkan aksesibilitas dan kualitas dibandingkan pasar konvensional, memastikan keberlanjutan ekonomi petani lokal.</h4>
            </div>
        </div>
        <div>
            <div class="company-desc">
                <h4 class="mt-0 fw-light text-end">Menjadi platform terdepan untuk mendapatkan sayuran segar langsung dari petani lokal, mempromosikan pertanian berkelanjutan dan gaya hidup sehat.</h4>
                <div class="image-desc ms-4">
                    <img class="shadow" src="../../public/images/vision.jpg" alt="Petani">
                </div>
            </div>
        </div>
        <div class="shadow">
            <div class="company-desc">
                <div class="image-desc">
                    <img class="shadow" src="../../public/images/petani.jpg" alt="Petani">
                </div>
                <div class="company-mission ms-4">
                    <h2 class="card-title mt-5" style="font-weight: bold; color: #28a745;">Misi Kami</h2>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memberikan akses mudah ke sayuran segar dari petani lokal.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memastikan harga yang adil untuk petani dan konsumen.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Mempromosikan praktik pertanian yang berkelanjutan.</li>
                        <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Meningkatkan kualitas dan kesegaran sayuran yang tersedia bagi konsumen.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <h2 class="card-title mt-5 text-center" style="font-weight: bold; color: #28a745;">Tim Kami</h2>
            <p class="card-text text-center">
            Tim kami yang berdedikasi terdiri dari:
            </p>
            <ul class="company-desc pt-2 list-group list-group-flush">
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Rio dan Hanan:</strong> Pengembang Front-End yang bertanggung jawab untuk mengimplementasikan desain UI/UX, berkolaborasi dengan tim back-end untuk integrasi, menguji responsivitas, dan memperbaiki masalah.</li>
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Fauzan:</strong> Pengembang Back-End yang bertanggung jawab untuk merancang dan mengimplementasikan sistem backend, struktur database, pengembangan API, dan pengujian integrasi.</li>
            </ul>
        </div>
        ${await Footer.render()}
        `;
  },

  async afterRender() {
    Navbar.afterRender();
  },
};

export default AboutPage;
