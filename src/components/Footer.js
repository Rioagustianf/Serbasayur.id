const Footer = {
    async render() {
        return `
        <footer>
            <div class="footer-container">
            <div class="footer-section" id="footer-about">
                <h2>Tentang Kami</h2>
                <p>Kami menyediakan berbagai sayuran segar, buah-buahan, minuman sehat, dan produk berkualitas lainnya langsung dari petani lokal. Berkomitmen untuk kesehatan dan kesejahteraan Anda.</p>
            </div>
            <div class="footer-section" id="footer-links">
                <h2>Sebarsayur.id</h2>
                <ul>
                <li><a href="#">Beranda</a></li>
                <li><a href="#">Belanja</a></li>
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Kontak</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="footer-section" id="footer-contact">
                <h2>Kontak Kami</h2>
                <p><span class="footer-icon"><i class="fas fa-map-marker-alt"></i></span> Jalan Sehat No. 123, Jakarta</p>
                <p><span class="footer-icon"><i class="fas fa-phone"></i></span> +62 123 4567 890</p>
                <p><span class="footer-icon"><i class="fas fa-envelope"></i></span> <a href="mailto:info@sebarsayur.id">info@sebarsayur.id</a></p>
            </div>
            <div class="footer-section" id="footer-follow">
                <h2>Ikuti Kami</h2>
                <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-section" id="footer-logo">
                <img src="../../public/images/logo1.png" alt="Logo Sebarsayur.id">
            </div>
            </div>
            <div class="footer-bottom">
            <p>© 2024 Serba Sayur Id. All Rights Reserved.</p>
            </div>
        </footer>
        `;
    },
};

export default Footer;