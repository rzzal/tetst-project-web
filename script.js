/* =====================================================
   FILE: script.js
   FUNGSI: Membuat tombol "Sapa saya!" memunculkan pesan
   ===================================================== */

// Menunggu seluruh halaman HTML selesai dimuat terlebih dahulu,
// agar tombol sudah benar-benar ada saat JavaScript mencarinya.
document.addEventListener('DOMContentLoaded', function () {

    // 1. Pilih tombol berdasarkan ID-nya
    //    Nama ID harus SAMA PERSIS dengan id di file HTML
    const tombolSapa = document.getElementById('sapaButton');

    // 2. Tambahkan 'event listener' untuk aksi 'click' (klik)
    tombolSapa.addEventListener('click', function () {

        // 3. Jalankan kode ini ketika tombol di-klik:
        //    memunculkan kotak pesan (alert) di browser
        alert('Halo! Terima kasih sudah berkunjung!');

    });

});
