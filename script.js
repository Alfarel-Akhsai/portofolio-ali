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

const readMoreBtn = document.querySelector('.btn-read-more');
const extraInfo = document.getElementById('extra-info');

readMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    extraInfo.classList.toggle('active');
    
    // Ganti teks tombol dan animasi auto-scroll ke bawah
    if (extraInfo.classList.contains('active')) {
        readMoreBtn.innerHTML = 'Read Less <i class="fas fa-arrow-up"></i>';
        
        // Jeda sebentar buat biarin kotaknya melar, lalu scroll layarnya ke bawah!
        setTimeout(() => {
            const offset = 80; // Jarak aman dari navbar atas
            const elementPosition = extraInfo.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 350); 
    } else {
        readMoreBtn.innerHTML = 'Read More <i class="fas fa-arrow-down"></i>';
    }
});

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