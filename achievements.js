/* --- PENGATURAN NAVBAR & THEME (Sama dengan halaman utama) --- */
const mobileMenuBtn = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Dark / Light Mode Switcher
const themeToggles = document.querySelectorAll('.theme-toggle-btn');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    bodyElement.classList.add('light-mode');
    themeToggles.forEach(toggle => toggle.checked = false); 
} else {
    themeToggles.forEach(toggle => toggle.checked = true); 
}

themeToggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
        if (this.checked) {
            bodyElement.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            themeToggles.forEach(t => t.checked = true);
        } else {
            bodyElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            themeToggles.forEach(t => t.checked = false);
        }
    });
});

// Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight; 
        const elementTop = reveals[i].getBoundingClientRect().top; 
        const elementVisible = 40;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();

/* --- FUNGSI SEARCH & FILTER SERTIFIKAT --- */
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const categoryFilter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.achv-card');
const totalCount = document.getElementById('totalCount');
const noResultsMsg = document.getElementById('noResultsMsg');

// Set hitungan awal
totalCount.innerText = cards.length;

function filterAchievements() {
    const searchText = searchInput.value.toLowerCase();
    const typeValue = typeFilter.value;
    const catValue = categoryFilter.value;
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const type = card.getAttribute('data-type');
        const category = card.getAttribute('data-category');

        const matchesSearch = title.includes(searchText);
        const matchesType = (typeValue === 'all') || (type === typeValue);
        const matchesCategory = (catValue === 'all') || (category === catValue);

        if (matchesSearch && matchesType && matchesCategory) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update Counter
    totalCount.innerText = visibleCount;

    // Tampilkan pesan kosong jika tidak ada yang cocok
    if (visibleCount === 0) {
        noResultsMsg.style.display = 'block';
    } else {
        noResultsMsg.style.display = 'none';
    }
}

// Tambahkan event listener ke input dan opsi dropdown
searchInput.addEventListener('input', filterAchievements);
typeFilter.addEventListener('change', filterAchievements);
categoryFilter.addEventListener('change', filterAchievements);