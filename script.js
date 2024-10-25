// Mendapatkan elemen modal
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");

// Fungsi untuk membuka modal dengan gambar yang diperbesar
function openModal(imageSrc, altText) {
    modal.style.display = "block"; // Tampilkan modal
    modalImage.src = imageSrc; // Set gambar ke modal
    captionText.innerHTML = altText; // Set caption
}

// Tambahkan event listener untuk semua gambar
const images = document.querySelectorAll('.couple-image, .gallery-image');
images.forEach((img) => {
    img.addEventListener('click', function() {
        openModal(this.src, this.alt); // Buka modal saat gambar diklik
    });
});

// Menutup modal saat mengklik tombol close
closeModal.addEventListener('click', function() {
    modal.style.display = "none"; // Sembunyikan modal
});

// Menutup modal saat mengklik di luar gambar
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Sembunyikan modal
    }
});

// Hitung Mundur Acara
const weddingDate = new Date("2024-12-01T12:00:00").getTime();
const timer = document.getElementById("timer");

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        timer.innerHTML = "Acara Telah Dimulai!";
    }
}, 1000);

// Mengirim Pesan ke WhatsApp
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const message = document.getElementById("message").value;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6285771443462&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
    document.getElementById("message").value = ''; // Clear textarea
});

// Inisialisasi Peta
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -7.250445, lng: 112.768845 }, // Ganti dengan koordinat lokasi Anda
        zoom: 15,
    });
    new google.maps.Marker({
        position: { lat: -7.250445, lng: 112.768845 }, // Ganti dengan koordinat lokasi Anda
        map: map,
        title: "Lokasi Pernikahan!",
    });
}

// Fungsi untuk menambahkan kelas visible saat elemen berada di viewport
function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) { // Ketika elemen hampir terlihat
            element.classList.add('visible');
        }
    });
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', fadeInOnScroll);

// Panggil fungsi saat halaman dimuat pertama kali
window.addEventListener('load', fadeInOnScroll);
