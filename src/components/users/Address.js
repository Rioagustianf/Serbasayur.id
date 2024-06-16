const Address = {
  async render() {
    return `
        <div class="container">
            <h2 class="section-title green fw-semibold">ALAMAT KIRIM</h2>
            <div class="address-wrapper d-flex">
                <h2 class="address-body fw-light">Jl. Contoh Alamat No. 123, RT 04 RW 05 Kelurahan Contoh, Kecamatan Contoh Kota Contoh, Provinsi Contoh Kode Pos 12345</h2>
                <a href="" class="address-change text-center"><h2>UBAH</h2></a>
            </div>
        </div>
        `;
  },
};

export default Address;
