import Navbar from "../../components/users/Navbar";
import HeroAbout from "../../components/users/HeroAbout";
import Footer from "../../components/users/Footer";

const AboutPage = {
    async render() {
        return `
        ${await Navbar.render()}
        ${await HeroAbout.render()}
        <div class="container py-5 my-5" style="margin-top: -50px; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div class="row py-5">
            <div class="col-md-10 offset-md-1">
                <h2 class="card-title text-center mb-4" style="font-weight: bold; color: #28a745; font-family: 'poppins', sans-serif;">Ringkasan Eksekutif</h2>
                <p class="card-text text-center" style="font-family: 'poppins', sans-serif;">
                Serbasayur.id menjawab tantangan dalam memperoleh sayuran segar langsung dari petani lokal. Kami bertujuan untuk meningkatkan aksesibilitas dan kualitas dibandingkan pasar konvensional, memastikan keberlanjutan ekonomi petani lokal.
                </p>
                <h2 class="card-title mt-5 text-center" style="font-weight: bold; color: #28a745;">Visi Kami</h2>
                <p class="card-text text-center">
                Menjadi platform terdepan untuk mendapatkan sayuran segar langsung dari petani lokal, mempromosikan pertanian berkelanjutan dan gaya hidup sehat.
                </p>
                <h2 class="card-title mt-5" style="font-weight: bold; color: #28a745;">Misi Kami</h2>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memberikan akses mudah ke sayuran segar dari petani lokal.</li>
                <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Memastikan harga yang adil untuk petani dan konsumen.</li>
                <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Mempromosikan praktik pertanian yang berkelanjutan.</li>
                <li class="list-group-item" style="border: 0; padding-left: 0;"><i class="fas fa-check-circle" style="color: #28a745;"></i> Meningkatkan kualitas dan kesegaran sayuran yang tersedia bagi konsumen.</li>
                </ul>
                <h2 class="card-title mt-5" style="font-weight: bold; color: #28a745;">Tim Kami</h2>
                <p class="card-text">
                Tim kami yang berdedikasi terdiri dari:
                </p>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Rio dan Hanan:</strong> Pengembang Front-End yang bertanggung jawab untuk mengimplementasikan desain UI/UX, berkolaborasi dengan tim back-end untuk integrasi, menguji responsivitas, dan memperbaiki masalah.</li>
                <li class="list-group-item" style="border: 0; padding-left: 0;"><strong>Fauzan:</strong> Pengembang Back-End yang bertanggung jawab untuk merancang dan mengimplementasikan sistem backend, struktur database, pengembangan API, dan pengujian integrasi.</li>
                </ul>
                <h2 class="card-title mt-5" style="font-weight: bold; color: #28a745;">Hubungi Kami</h2>
                <p class="card-text">
                Jika Anda memiliki pertanyaan atau ingin mempelajari lebih lanjut tentang Serbasayur.id, silakan hubungi kami di <a href="mailto:info@serbasayur.id" class="contact-link" style="color: #28a745; text-decoration: none;">info@serbasayur.id</a>.
                </p>
            </div>
            </div>
        </div>
        ${await Footer.render()}
        `;
    },

    async afterRender() {
        Navbar.afterRender();
    }
};

export default AboutPage;