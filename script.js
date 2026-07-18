// Mengambil elemen-elemen Sidebar
const mobileMenuBtn = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// 1. Fungsi saat tombol Hamburger diklik (Buka Sidebar)
mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.add('active'); // Mendorong sidebar ke kanan
    overlay.classList.add('active'); // Memunculkan layar gelap
});

// 2. Fungsi saat tombol X diklik (Tutup Sidebar)
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Menarik kembali sidebar ke kiri
    overlay.classList.remove('active'); // Menghilangkan layar gelap
});

// 3. Fungsi tambahan: Tutup sidebar jika layar gelap (overlay) diklik
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// 4. Memindahkan penanda Aktif (Spotlight) saat menu diklik
const sidebarLinks = document.querySelectorAll('.sidebar-nav a:not(.btn-lets-talk-sidebar)');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Hapus class 'active' dari semua menu
        sidebarLinks.forEach(item => item.classList.remove('active'));
        
        // Tambahkan class 'active' ke menu yang baru saja diklik
        this.classList.add('active');
        
        // Opsional: Otomatis menutup sidebar saat menu dipilih (cocok untuk HP)
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// =======================================================
// FITUR DARK/LIGHT MODE (Switch)
// =======================================================
const themeToggles = document.querySelectorAll('.theme-toggle-btn');
const bodyElement = document.body;

// 1. Cek ingatan browser: Apakah sebelumnya user milih Light Mode?
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    bodyElement.classList.add('light-mode');
    // Jika Light Mode, geser semua sakelar ke kiri (unchecked)
    themeToggles.forEach(toggle => toggle.checked = false); 
} else {
    // Default: Gelap (Checked = posisi kanan)
    themeToggles.forEach(toggle => toggle.checked = true); 
}

// 2. Perintah saat sakelar digeser
themeToggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
        if (this.checked) {
            // Geser Kanan -> DARK MODE
            bodyElement.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            
            // Sinkronkan sakelar lain (misal dari HP ke Laptop)
            themeToggles.forEach(t => t.checked = true);
        } else {
            // Geser Kiri -> LIGHT MODE
            bodyElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            
            // Sinkronkan sakelar lain
            themeToggles.forEach(t => t.checked = false);
        }
    });
});

// =======================================================
// ANIMASI SCROLL REVEAL (Efek Muncul Berurutan)
// =======================================================
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight; 
        var elementTop = reveals[i].getBoundingClientRect().top; 
        var elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } 
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();

// =======================================================
// SCROLL SPY (Penanda Menu Aktif Otomatis di Navbar & Sidebar)
// =======================================================
const sections = document.querySelectorAll('section');
const topNavLinks = document.querySelectorAll('.desktop-nav a');

const sideNavLinks = document.querySelectorAll('.sidebar-nav > a'); 

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Jarak toleransi (offset) sebelum nabrak ujung atas
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    // 1. Update Penanda di Navbar Atas (Desktop)
    topNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // 2. Update Penanda di Sidebar Kiri (Mobile/Hamburger)
    sideNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// =======================================================
// FILTER SKILLS TABS (Dynamic Marquee / Grid)
// =======================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const skillCategories = document.querySelectorAll('.skill-category');
const skillsWrapper = document.querySelector('.skills-wrapper'); // Panggil wrapper utama

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus class active dari semua tombol
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // LOGIKA MODE BERJALAN VS MODE DIAM
        if (filterValue === 'all') {
            skillsWrapper.classList.remove('grid-mode'); // Nyalakan efek jalan (Marquee)
        } else {
            skillsWrapper.classList.add('grid-mode'); // Matikan jalan, ubah jadi susunan grid
        }

        // Tampilkan kategori yang sesuai
        skillCategories.forEach(category => {
            if (filterValue === 'all') {
                category.style.display = 'block';
            } else {
                if (category.getAttribute('id') === `cat-${filterValue}`) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            }
        });
    });
});

// Mematikan klik kanan dan drag di area skills
const skillsContainer = document.querySelector('.skills-wrapper');
skillsContainer.addEventListener('contextmenu', e => e.preventDefault());
skillsContainer.addEventListener('dragstart', e => e.preventDefault());

// =======================================================
// READ MORE & CLOSE EXTRA INFO LOGIC
// =======================================================
const btnReadMore = document.querySelector('.btn-read-more');
const extraInfo = document.getElementById('extra-info');
const btnCloseExtra = document.getElementById('btn-close-extra');

if (btnReadMore && extraInfo) {
    btnReadMore.addEventListener('click', function(e) {
        e.preventDefault();
        extraInfo.classList.add('active'); // Buka kotak (tombol aslinya bakal hilang pakai CSS)
    });
}

if (btnCloseExtra && extraInfo) {
    btnCloseExtra.addEventListener('click', function(e) {
        e.preventDefault();
        extraInfo.classList.remove('active'); // Tutup kotak
    });
}

// =======================================================
// SPLIT TABS LOGIC (KIRI & KANAN INDEPENDENT)
// =======================================================

// 1. Logika untuk Tab Bagian Kiri (Academic / Achievement)
const leftBtns = document.querySelectorAll('.left-btn');
const leftContents = document.querySelectorAll('.left-content');

leftBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Reset state di kolom kiri aja
        leftBtns.forEach(b => b.classList.remove('active'));
        leftContents.forEach(c => c.classList.remove('active'));
        
        // Aktifin yang diklik
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-target')).classList.add('active');
    });
});

// 2. Logika untuk Tab Bagian Kanan (Experience / Certificate)
const rightBtns = document.querySelectorAll('.right-btn');
const rightContents = document.querySelectorAll('.right-content');

rightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Reset state di kolom kanan aja
        rightBtns.forEach(b => b.classList.remove('active'));
        rightContents.forEach(c => c.classList.remove('active'));
        
        // Aktifin yang diklik
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-target')).classList.add('active');
    });
});

// =======================================================
// MODAL POPUP LOGIC & DATABASE PRESTASI
// =======================================================

// 1. Database Cerita & Prestasi (Key harus sama persis dengan judul <h4> di HTML)
const portfolioData = {
    // ---- ACADEMIC ----
    "SDN 226 Palembang": {
        icon: "fa-child",
        subtitle: "SD • 2013 - 2019 • Palembang",
        badges: ["Akademik", "Pendidikan Dasar"],
        desc: "Masa awal menempuh pendidikan dasar. Di sini saya mulai mengeksplorasi minat dalam belajar, membangun kedisiplinan, dan bersosialisasi dengan lingkungan sekitar.",
        achievements: ["Aktif dalam kegiatan sekolah", "Lulus dengan nilai memuaskan"],
        image: "" // Isi path gambar di sini misal: "assets/images/sd-cert.jpg"
    },
    "MTsN 1 Palembang": {
        icon: "fa-mosque",
        subtitle: "SMP / MTs • 2019 - 2022 • Palembang",
        badges: ["Akademik", "Menengah Pertama"],
        desc: "Fase menengah di mana saya mempelajari ilmu agama dan pendidikan umum secara seimbang, serta mulai mengenal dasar-dasar kepemimpinan.",
        achievements: ["Peserta aktif ekstrakurikuler", "Juara kelas"],
        image: ""
    },
    "SMKN 8 Palembang": {
        icon: "fa-laptop-code",
        subtitle: "SMA / SMK • 2022 - 2025 • Palembang",
        badges: ["Vokasi", "Teknologi"],
        desc: "Fokus pada keahlian praktis di bidang teknologi. Di sinilah saya menemukan bakat alami saya dalam menganalisis dan memperbaiki kerusakan pada hardware maupun software komputer dan laptop.",
        achievements: ["Merakit dan troubleshooting PC/Laptop", "Lulus uji kompetensi keahlian teknologi"],
        image: ""
    },
    "Institut Teknologi Sumatera (ITERA)": {
        icon: "fa-university",
        subtitle: "S1 Informatics Engineering • 2025 - Sekarang",
        badges: ["PTN", "Informatics"],
        desc: "Memasuki dunia programming murni. Walau awalnya tidak langsung suka coding, saya masuk dengan tekad bulat untuk belajar. Saat ini aktif mengasah skill di C++, Python, HTML/CSS/JS, dan kustomisasi Linux Ubuntu.",
        achievements: ["Mengeksplorasi proyek biomimicry in engineering (biological concrete/honeycomb)", "Aktif menulis & men-debug kode pemrograman", "Menyusun laporan akademik menggunakan LaTeX"],
        image: ""
    },
    "BINUS University": {
        icon: "fa-building",
        subtitle: "S1 Business • 2026 - Sekarang",
        badges: ["PTS", "Double Degree"],
        desc: "Menjalankan program double degree untuk menguasai aspek bisnis dan manajemen. Tujuannya adalah mengkombinasikan skill teknologi dari ITERA dengan mindset bisnis yang strategis.",
        achievements: ["Mempelajari strategi bisnis operasional", "Membangun networking profesional"],
        image: ""
    },
    // ---- EXPERIENCE ----
    "Festival Seni Islam": {
        icon: "fa-users",
        subtitle: "Kepanitiaan • 2023",
        badges: ["Organisasi", "Leadership"],
        desc: "Mengelola acara berskala sekolah dan memastikan seluruh rangkaian event berjalan lancar dari persiapan hingga eksekusi.",
        achievements: ["Bertugas sebagai Penanggung Jawab Proyek utama", "Sukses menyelenggarakan acara dengan partisipasi siswa yang tinggi"],
        image: ""
    },
    "CV. RKU Komputer": {
        icon: "fa-tools",
        subtitle: "Praktik Kerja Lapangan • Jul 2023 - Des 2023",
        badges: ["Internship", "Teknisi Hardware"],
        desc: "Terjun langsung ke dunia kerja untuk menangani masalah komputer dan laptop klien secara nyata. Memanfaatkan bakat reparasi saya untuk memberikan solusi IT kepada pelanggan.",
        achievements: ["Troubleshooting hardware & software", "Melakukan perbaikan dan perawatan laptop klien"],
        image: ""
    },
    "Bawaslu Provinsi Sumsel": {
        icon: "fa-briefcase",
        subtitle: "Staff / Intern • Jul 2024 - Mar 2025",
        badges: ["Work", "Pemerintahan"],
        desc: "Membantu operasional dan administrasi di lembaga pengawas pemilu tingkat provinsi. Melatih kedisiplinan dan profesionalitas di lingkungan kerja pemerintahan.",
        achievements: ["Mengelola dokumen dan arsip penting", "Mendukung persiapan dan pengawasan administrasi Pemilu"],
        image: ""
    },
    "Google Student Ambassador": {
        icon: "fa-google",
        subtitle: "Candidate • 2026",
        badges: ["Program", "Global"],
        desc: "Mengajukan diri sebagai kandidat duta Google untuk kampus. Berfokus pada pengembangan komunitas teknologi mahasiswa dan representasi ekosistem Google.",
        achievements: ["Lolos seleksi sebagai Candidate GSA 2026", "Mempersiapkan video aplikasi dan naskah kampanye program"],
        image: ""
    },
    "Novo Club": {
        icon: "fa-lightbulb",
        subtitle: "Batch 4 Participant • 2026",
        badges: ["Community", "Youth Leadership"],
        desc: "Bergabung dengan program pengembangan kepemimpinan pemuda untuk mengasah skill kepemimpinan yang inovatif dan memperluas jaringan.",
        achievements: ["Menyelesaikan Youth Leadership Bootcamp (Mei 2026)", "Pembuatan essay dan konten campaign inovatif"],
        image: ""
    }
};

// 2. Logika untuk Memunculkan Modal
const modalOverlay = document.getElementById('card-modal');
const modalCloseBtn = document.querySelector('.modal-close');
const allCards = document.querySelectorAll('.timeline-card');

allCards.forEach(card => {
    card.addEventListener('click', () => {
        // Ambil judul (h4) dari kartu yang diklik
        const titleElement = card.querySelector('h4');
        if (!titleElement) return; // Abaikan jika tidak ada judul
        
        const title = titleElement.innerText;
        const data = portfolioData[title]; // Cocokkan dengan database di atas
        
        // Jika data ditemukan, isi modal dan tampilkan
        if (data) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-subtitle').innerText = data.subtitle;
            document.getElementById('modal-desc').innerText = data.desc;
            
            // Update Icon
            document.querySelector('.modal-header-icon i').className = `fas ${data.icon}`;
            
            // Inject Badges
            const badgesContainer = document.getElementById('modal-badges');
            badgesContainer.innerHTML = '';
            data.badges.forEach(b => {
                const span = document.createElement('span');
                span.innerText = b;
                badgesContainer.appendChild(span);
            });
            
            // Inject Achievements List
            const achList = document.getElementById('modal-achievements-list');
            achList.innerHTML = '';
            data.achievements.forEach(ach => {
                const li = document.createElement('li');
                li.innerText = ach;
                achList.appendChild(li);
            });
            
            // Tampilkan atau Sembunyikan Foto
            const imgEl = document.getElementById('modal-image');
            const imgBox = document.querySelector('.modal-image-box');
            if (data.image !== "") {
                imgEl.src = data.image;
                imgEl.style.display = 'block';
                imgBox.querySelector('i').style.display = 'none';
                imgBox.querySelector('span').style.display = 'none';
            } else {
                imgEl.src = "";
                imgEl.style.display = 'none';
                imgBox.querySelector('i').style.display = 'block';
                imgBox.querySelector('span').style.display = 'block';
            }

            // Munculkan Modal!
            modalOverlay.classList.add('active');
        }
    });
});

// 3. Logika Menutup Modal
modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});