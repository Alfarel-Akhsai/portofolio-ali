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
        subtitle: "Elementary School • 2013 - 2019 • Palembang",
        badges: ["Academic", "Primary Education"],
        desc: "My early educational years where I developed fundamental learning habits, discipline, and a natural curiosity for problem-solving. This period laid the groundwork for my academic persistence.",
        achievements: ["Active participant in school activities", "Graduated with excellent academic records"],
        image: "" // Isi path gambar di sini misal: "assets/images/sd-cert.jpg"
    },
    "MTsN 1 Palembang": {
        icon: "fa-mosque",
        subtitle: "Junior High School • 2019 - 2022 • Palembang",
        badges: ["Academic", "Secondary Education"],
        desc: "A balanced educational phase combining general studies with religious education. During this time, I began developing leadership basics and a stronger interest in technology and organization.",
        achievements: ["Active in extracurricular activities", "Consistently ranked among the top students in class"],
        image: ""
    },
    "SMKN 8 Palembang": {
        icon: "fa-laptop-code",
        subtitle: "Vocational High School • 2022 - 2025 • Palembang",
        badges: ["Vocational", "Technology"],
        desc: "Focused heavily on practical technology skills. It was here that I discovered and honed my natural talent for analyzing, troubleshooting, and repairing computer and laptop hardware.",
        achievements: ["Mastered PC and Laptop assembly and hardware troubleshooting", "Passed the technology vocational competency test with high marks"],
        image: ""
    },
    "Institut Teknologi Sumatera": {
        icon: "fa-university",
        subtitle: "Informatics Engineering • 2025 - Present",
        badges: ["State University", "Informatics"],
        desc: "Diving into pure programming. While I didn't initially start with a natural love for coding, I deliberately chose this major with a strong determination to learn and master it from scratch. I actively focus on C++, Python, Web Development, and Linux (Ubuntu) customization.",
        achievements: [
            "Explored biomimicry in engineering projects (focusing on honeycomb structures and biological concrete)",
            "Actively compiling academic reports and formatting complex documents using LaTeX",
            "Initiated an ongoing academic research project starting in May 2026"
        ],
        image: ""
    },
    "BINUS University": {
        icon: "fa-building",
        subtitle: "Business / IT • 2026 - Present",
        badges: ["Private University", "Higher Education"],
        desc: "I transitioned to BINUS University in early 2026 to better accommodate my work responsibilities while continuing my higher education. This path allows me to integrate strategic business mindsets with my technical engineering background.",
        achievements: [
            "Successfully managing academic responsibilities alongside professional work commitments",
            "Building a strong professional network and learning operational business strategies"
        ],
        image: ""
    },
    
    // ---- EXPERIENCE ----
    "CV. RKU Komputer": {
        icon: "fa-tools",
        subtitle: "Internship • Jul 2023 - Dec 2023",
        badges: ["Internship", "Hardware Technician"],
        desc: "Stepped directly into the professional workforce to handle real-world computer and laptop issues. I utilized my practical hardware repair talents to provide efficient IT solutions and maintenance for clients.",
        achievements: [
            "Performed extensive hardware & software troubleshooting for various devices",
            "Executed successful component replacements and laptop maintenance for clients"
        ],
        image: ""
    },
    "Bawaslu Provinsi Sumsel": {
        icon: "fa-briefcase",
        subtitle: "Staff / Intern • Jul 2024 - Mar 2025",
        badges: ["Work", "Government"],
        desc: "Assisted in the operational and administrative tasks at the provincial election supervisory body. This role significantly sharpened my discipline, administrative accuracy, and professionalism within a formal work environment.",
        achievements: [
            "Managed crucial documents and maintained highly organized administrative archives",
            "Supported the preparation and supervision of election administration processes"
        ],
        image: ""
    },
    "Google Student Ambassador": {
        icon: "fa-google",
        subtitle: "Candidate • 2026",
        badges: ["Program", "Global Tech"],
        desc: "Applied as a candidate for the Google Student Ambassador 2026 program. My goal is to foster a strong technology community on campus and represent the Google ecosystem among university students.",
        achievements: [
            "Prepared comprehensive application videos, campaign scripts, and promotional captions",
            "Passed the initial selection phase to become a highly anticipated GSA 2026 Candidate"
        ],
        image: ""
    },
    "Novo Club": {
        icon: "fa-lightbulb",
        subtitle: "Batch 4 Participant • 2026",
        badges: ["Community", "Youth Leadership"],
        desc: "Joined this youth leadership development program to sharpen my innovative leadership skills, broaden my network, and engage in impactful community projects alongside driven peers.",
        achievements: [
            "Actively participated in the Batch 4 orientation and application phases",
            "Created compelling essays and social media content for innovative leadership campaigns"
        ],
        image: ""
    },
    // ---- ACHIEVEMENT & CERTIFICATE ----
    "1st Place Adzan Competition": {
        icon: "fa-microphone-alt",
        subtitle: "Champion • STIE & AKUBANK Mulia Darma Pratama",
        badges: ["1st Winner", "Religion", "City Level"],
        desc: "Berhasil meraih Juara 1 pada ajang lomba Adzan tingkat SMA/SMK/MA se-Kota Palembang yang diselenggarakan oleh STIE & AKUBANK Mulia Darma Pratama. Kompetisi ini melatih kepercayaan diri, vokal, dan keberanian tampil di depan umum.",
        achievements: ["Juara 1 Lomba Adzan se-Kota Palembang", "Menyisihkan puluhan peserta dari berbagai sekolah tingkat atas"],
        image: "" // Nanti isi path foto sertifikatnya di sini
    },
    "2nd Place Asmaul Husna": {
        icon: "fa-book-open",
        subtitle: "Runner Up • SMAN 7 Palembang",
        badges: ["2nd Winner", "Religion", "Provincial Level"],
        desc: "Meraih Juara 2 pada lomba Asmaul Husna tingkat SMA/SMK/MA se-Provinsi Sumatera Selatan yang diselenggarakan di SMAN 7 Palembang. Kompetisi ini sangat menguji daya ingat, pelafalan tajwid, dan ketenangan mental peserta.",
        achievements: ["Juara 2 Lomba Asmaul Husna tingkat Provinsi Sumatera Selatan", "Menunjukkan dedikasi tinggi dalam menghafal dan melafalkan Asmaul Husna"],
        image: ""
    },
    "Top Class Academic Rank": {
        icon: "fa-medal",
        subtitle: "Academic Excellence • SMKN 8 Palembang",
        badges: ["Top Rank", "Academic", "Consistent"],
        desc: "Mendapatkan 4 sertifikat penghargaan sebagai bentuk pengakuan atas pencapaian akademik (peringkat kelas) selama menempuh pendidikan. Pencapaian ini membuktikan konsistensi, kedisiplinan, dan tanggung jawab terhadap pendidikan formil.",
        achievements: ["Memperoleh total 4 sertifikat peringkat kelas", "Konsisten mempertahankan nilai akademik yang tinggi di sekolah"],
        image: ""
    },
    "Bawaslu Internship Certificate": {
        icon: "fa-file-signature",
        subtitle: "Official Certificate • Bawaslu Prov. Sumsel",
        badges: ["Internship", "Government", "Administration"],
        desc: "Sertifikat resmi yang diberikan sebagai bukti telah menyelesaikan program magang di Badan Pengawas Pemilihan Umum (Bawaslu) Provinsi Sumatera Selatan dengan kedisiplinan tinggi dan kontribusi administratif yang nyata.",
        achievements: ["Lulus program magang dengan evaluasi yang memuaskan", "Mendapatkan apresiasi atas ketelitian dalam manajemen arsip"],
        image: ""
    },
    "RKU Komputer Internship Certificate": {
        icon: "fa-tools",
        subtitle: "Official Certificate • CV. RKU Komputer",
        badges: ["Internship", "Hardware", "Technical Skill"],
        desc: "Sertifikat kelulusan Praktik Kerja Lapangan (PKL) dari CV. RKU Komputer, sebagai validasi atas kemampuan teknis dalam melakukan troubleshooting dan perbaikan pada perangkat keras maupun lunak di lingkungan kerja nyata.",
        achievements: ["Diakui kemampuannya dalam menangani masalah hardware klien", "Lulus praktik lapangan dengan nilai evaluasi kinerja yang sangat baik"],
        image: ""
    }
};

// 2. Logika untuk Memunculkan Modal
const modalOverlay = document.getElementById('card-modal');
const modalCloseBtn = document.querySelector('.modal-close');
const allCards = document.querySelectorAll('.timeline-card, .achieve-card');

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
// Logika Modal Khusus untuk Tombol 'About' di Grid Certificate
const certAboutBtns = document.querySelectorAll('.btn-cert-about');

certAboutBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Cari container cert-card terdekat dari tombol yang diklik
        const card = e.target.closest('.cert-card');
        if (!card) return;
        
        // Ambil data-title dan panggil data dari database
        const title = card.getAttribute('data-title');
        const data = portfolioData[title]; 
        
        if (data) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-subtitle').innerText = data.subtitle;
            document.getElementById('modal-desc').innerText = data.desc;
            
            document.querySelector('.modal-header-icon i').className = `fas ${data.icon}`;
            
            const badgesContainer = document.getElementById('modal-badges');
            badgesContainer.innerHTML = '';
            data.badges.forEach(b => {
                const span = document.createElement('span');
                span.innerText = b;
                badgesContainer.appendChild(span);
            });
            
            const achList = document.getElementById('modal-achievements-list');
            achList.innerHTML = '';
            data.achievements.forEach(ach => {
                const li = document.createElement('li');
                li.innerText = ach;
                achList.appendChild(li);
            });
            
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

// =======================================================
// MODAL POPUP SKILLS & TOOLS LOGIC
// =======================================================

// 1. Database Deskripsi & Core Expertise (ENGLISH VERSION)
const skillsData = {
    // ================= EXPERTISE =================
    "UI/UX Design": {
        subtitle: "SPECIALTY DETAILS",
        desc: "The process of designing aesthetic interfaces and ensuring a logical, seamless, and intuitive user experience (UX).",
        expertise: ["User Research & Wireframing", "Interactive Prototyping", "Design Systems", "Usability & Layouting"]
    },
    "Graphic Design": {
        subtitle: "SPECIALTY DETAILS",
        desc: "Creating engaging visual compositions for digital and print media, combining typography, colors, and illustrations.",
        expertise: ["Branding & Identity Design", "Social Media Asset Creation", "Vector Illustration", "Photo Retouching & Editing"]
    },
    "Hardware Repair": {
        subtitle: "PRACTICAL SKILL",
        desc: "My natural technical talent in diagnosing physical hardware issues and performing component repairs or replacements.",
        expertise: ["PC & Laptop Teardown", "Component Replacement", "Motherboard Diagnostics", "Thermal Paste Application & Maintenance"]
    },
    "Software Repair": {
        subtitle: "PRACTICAL SKILL",
        desc: "Expertise in analyzing and troubleshooting operating systems or software issues, both on Windows and Linux.",
        expertise: ["OS Troubleshooting & Installation", "Virus Removal & System Restore", "Driver & Software Optimization", "Data Recovery Basics"]
    },
    "Web Developer": {
        subtitle: "CORE EXPERTISE",
        desc: "Building and maintaining website structures, from front-end user interfaces to basic logic management.",
        expertise: ["Responsive Web Design", "DOM Manipulation", "Modern Layouting (Flexbox/Grid)", "UI Animation Implementation"]
    },

    // ================= LANGUAGES & FRAMEWORKS =================
    "HTML": {
        subtitle: "CORE LANGUAGE",
        desc: "The standard markup language for creating the basic structure of a website. I use it as the fundamental stepping stone in my web development journey.",
        expertise: ["Semantic HTML5", "SEO Friendly Structuring", "Web Accessibility", "Form & Input Management"]
    },
    "CSS": {
        subtitle: "CORE STYLING",
        desc: "The language used to style web interfaces. Essential for crafting layouts, colors, and complex animations (like glassmorphism effects).",
        expertise: ["Flexbox & CSS Grid", "Responsive Design (Media Queries)", "CSS Animations & Transitions", "Custom Variables"]
    },
    "JavaScript": {
        subtitle: "INTERACTIVE LOGIC",
        desc: "The programming language that brings websites to life, enabling interactive features like modal popups, dynamic filters, and element manipulation.",
        expertise: ["DOM Manipulation", "Event Handling", "Logic & Conditionals", "Asynchronous Basics"]
    },
    "PHP": {
        subtitle: "BACKEND SCRIPTING",
        desc: "A server-side scripting language I am exploring to connect static websites with database systems in the future.",
        expertise: ["Server-side Logic Fundamentals", "Form Data Handling", "Basic Database Connection", "Session Management"]
    },
    "SQL": {
        subtitle: "DATABASE MANAGEMENT",
        desc: "The language for managing and manipulating data in relational database systems, essential for dynamic web development.",
        expertise: ["Data Querying", "Database Structuring", "CRUD Operations", "Table Relational Basics"]
    },
    "Python": {
        subtitle: "PROGRAMMING LANGUAGE",
        desc: "A versatile language with clean syntax that I am currently learning for automation, data analysis, and computational logic.",
        expertise: ["Scripting & Automation", "Logic Implementation", "Data Structure Basics", "Problem Solving"]
    },
    "C++": {
        subtitle: "PROGRAMMING LANGUAGE",
        desc: "A high-performance programming language. Highly ideal for practicing computational logic and managing complex memory structures.",
        expertise: ["Object-Oriented Programming (OOP)", "Memory Management", "Algorithm & Data Structures", "Logic Troubleshooting"]
    },
    "LaTeX": {
        subtitle: "DOCUMENT PREPARATION",
        desc: "A typesetting system I frequently use for creating highly precise academic reports, journals, and technical documents.",
        expertise: ["Academic Report Structuring", "Complex Formula Formatting", "Bibliography & Citations", "Template Customization"]
    },

    // ================= TOOLS & ENVIRONMENT =================
    // Design & Video
    "Figma": {
        subtitle: "DESIGN TOOL",
        desc: "The primary collaborative UI/UX design tool for crafting modern website and application interfaces.",
        expertise: ["UI/UX Interface Design", "Interactive Prototyping", "Design Systems", "Auto Layout & Components"]
    },
    "Canva": {
        subtitle: "DESIGN TOOL",
        desc: "An online graphic design platform for creating presentations, posters, and social media content quickly and efficiently.",
        expertise: ["Social Media Templates", "Quick Asset Creation", "Presentation Design", "Brand Kit Management"]
    },
    "Photoshop": {
        subtitle: "DESIGN TOOL",
        desc: "The industry-standard software for digital photo manipulation, retouching, and creating bitmap graphic assets.",
        expertise: ["Photo Retouching", "Layer Masking", "Digital Imaging", "Color Correction"]
    },
    "Illustrator": {
        subtitle: "DESIGN TOOL",
        desc: "The go-to software for creating scalable vector graphics such as logos, icons, and illustrations.",
        expertise: ["Vector Tracing", "Logo Design", "Typography Layouting", "Flat Illustration"]
    },
    "Lightroom": {
        subtitle: "PHOTOGRAPHY TOOL",
        desc: "Focused on color grading and lighting adjustments to professionally enhance photos in bulk.",
        expertise: ["Color Grading", "Exposure Correction", "Preset Management", "Batch Editing"]
    },
    "CorelDraw": {
        subtitle: "DESIGN TOOL",
        desc: "A robust vector software alternative, often used for print design needs and graphic layouting.",
        expertise: ["Print Design", "Vector Illustration", "Layouting", "Typography Formatting"]
    },
    "Pixellab": {
        subtitle: "MOBILE DESIGN TOOL",
        desc: "A lightweight and practical design app for creating typography or basic image manipulation directly from a mobile device.",
        expertise: ["Mobile Editing", "Typography Customization", "Quick Asset Creation", "3D Text Effects"]
    },
    "CapCut": {
        subtitle: "VIDEO EDITING",
        desc: "A trendy and highly practical video editing tool with ready-to-use transitions, ideal for vertical social media content.",
        expertise: ["Short-form Video Editing", "Trendy Transitions", "Audio Syncing", "Auto-Captions"]
    },
    "Filmora": {
        subtitle: "VIDEO EDITING",
        desc: "A user-friendly desktop video editing software for cutting, assembling, and applying effects to video projects.",
        expertise: ["Video Splicing & Timeline", "Effect Application", "Basic Color Correction", "Audio Mixing"]
    },
    "Clipchamp": {
        subtitle: "VIDEO EDITING",
        desc: "A fast, integrated web-based video editor for instant video trimming and lightweight content creation.",
        expertise: ["Quick Web Editing", "Timeline Management", "Export Optimization", "Template Usage"]
    },
    
    // Dev & System
    "Git": {
        subtitle: "VERSION CONTROL",
        desc: "A version control system to track and record every change in the programming code I am working on.",
        expertise: ["Code Tracking", "Branch Management", "Version Reverting", "Commit History"]
    },
    "GitHub": {
        subtitle: "CODE REPOSITORY",
        desc: "A cloud platform where I store, manage, and showcase my code portfolio and programming project repositories.",
        expertise: ["Repository Management", "Open Source Contribution", "Project Hosting", "README Structuring"]
    },
    "Docker": {
        subtitle: "CONTAINERIZATION",
        desc: "A platform for packaging applications and all their dependencies into containers, ensuring software runs consistently in any environment.",
        expertise: ["Container Management", "Environment Isolation", "Image Building", "Deployment Basics"]
    },
    "VS Code": {
        subtitle: "CODE EDITOR",
        desc: "My primary text editor for writing code, debugging, and programming HTML/CSS/JS. Highly powerful thanks to its extension support.",
        expertise: ["Code Formatting", "Extension Management", "Integrated Terminal", "Live Server Integration"]
    },

    // Office
    "Excel": {
        subtitle: "OFFICE TOOL",
        desc: "A powerful spreadsheet tool for analyzing data, creating reports, and building calculation formulas.",
        expertise: ["Data Entry & Formatting", "Formula & Functions", "Data Visualization (Charts)", "Pivot Tables"]
    },
    "Word": {
        subtitle: "OFFICE TOOL",
        desc: "A word processing software for drafting reports, proposals, articles, and various other administrative documents.",
        expertise: ["Document Formatting", "Layout Structuring", "Report Generation", "Mail Merge"]
    }
};

// 2. Logika Pemanggilan Modal
const skillModalOverlay = document.getElementById('skill-modal');
const skillCloseBtn = document.getElementById('skill-close-btn');
const allSkillButtons = document.querySelectorAll('.expertise-card, .skill-pill');

allSkillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Ambil nama skill dari tag span di dalam tombol
        const titleSpan = btn.querySelector('span');
        if (!titleSpan) return;
        
        const title = titleSpan.innerText.trim();
        
        // Cek apakah data skill-nya ada di database kita
        const data = skillsData[title];
        
        if (data) {
            // Ambil Icon otomatis dari tombol yang diklik (baik itu tag <i> atau <img>)
            const iconElement = btn.querySelector('i, img');
            if (iconElement) {
                document.getElementById('skill-modal-icon').innerHTML = iconElement.outerHTML;
            } else {
                document.getElementById('skill-modal-icon').innerHTML = '<i class="fas fa-star"></i>'; // fallback icon
            }

            // Isi Text dan Judul
            document.getElementById('skill-modal-title').innerText = title;
            document.getElementById('skill-modal-subtitle').innerText = data.subtitle;
            document.getElementById('skill-modal-desc').innerText = data.desc;

            // Kosongkan dan Isi List Expertise
            const listContainer = document.getElementById('skill-modal-list');
            listContainer.innerHTML = '';
            
            data.expertise.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                listContainer.appendChild(li);
            });

            // Tampilkan Modal
            skillModalOverlay.classList.add('active');
        } else {
            console.log(`Data untuk skill "${title}" belum ditambahkan di JavaScript.`);
        }
    });
});

// 3. Logika Penutupan Modal
if(skillCloseBtn) {
    skillCloseBtn.addEventListener('click', () => {
        skillModalOverlay.classList.remove('active');
    });
}

if(skillModalOverlay) {
    skillModalOverlay.addEventListener('click', (e) => {
        // Hanya tutup jika yang diklik area background gelapnya
        if (e.target === skillModalOverlay) {
            skillModalOverlay.classList.remove('active');
        }
    });
}

// =======================================================
// FLAT TRUE INFINITE CAROUSEL & FILTER LOGIC
// =======================================================
const projectFilterBtns = document.querySelectorAll('.p-filter-btn');
const projectTrack = document.getElementById('project-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let allOriginalSlides = Array.from(document.querySelectorAll('.project-slide'));
let visibleSlides = [...allOriginalSlides];
let isMoving = false;
let autoPlayTimer;

// Hitung koordinat biar kotak ada persis di tengah layar
function getCenterOffset() {
    if(visibleSlides.length === 0) return 0;
    const wrapperWidth = document.querySelector('.project-carousel-wrapper').clientWidth;
    const slideWidth = visibleSlides[0].offsetWidth;
    
    let offset = (wrapperWidth / 2) - (slideWidth / 2);
    // Kalau kotaknya lebih dari 1, kita selalu nentuin elemen index ke-1 sebagai yang aktif (di tengah)
    if (visibleSlides.length > 1) {
        offset -= slideWidth; 
    }
    return offset;
}

// Bikin kotak tengah terang, pinggir meredup
function updateActiveClasses() {
    visibleSlides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.opacity = '0.35';
        slide.style.transform = 'scale(0.85)';
    });
    
    let activeIdx = visibleSlides.length > 1 ? 1 : 0;
    if(visibleSlides[activeIdx]) {
        visibleSlides[activeIdx].classList.add('active');
        visibleSlides[activeIdx].style.opacity = '1';
        visibleSlides[activeIdx].style.transform = 'scale(1)';
    }
}

// Pasang posisi awal kereta
function initCarousel() {
    if (visibleSlides.length > 1) {
        // Taruh 1 kotak dari belakang ke depan, biar ada tetangga di kiri
        projectTrack.insertBefore(visibleSlides[visibleSlides.length - 1], visibleSlides[0]);
        visibleSlides.unshift(visibleSlides.pop());
    }
    projectTrack.style.transition = 'none';
    projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
    updateActiveClasses();
}

// Geser Nyambung ke Kanan
function moveNext() {
    if (isMoving || visibleSlides.length <= 1) return;
    isMoving = true;

    // Transisi Opacity langsung jalan duluan
    visibleSlides[1].classList.remove('active');
    visibleSlides[1].style.opacity = '0.35';
    visibleSlides[1].style.transform = 'scale(0.85)';
    
    const nextActive = visibleSlides[2] ? 2 : 0;
    visibleSlides[nextActive].classList.add('active');
    visibleSlides[nextActive].style.opacity = '1';
    visibleSlides[nextActive].style.transform = 'scale(1)';

    const slideWidth = visibleSlides[0].offsetWidth;
    const targetX = getCenterOffset() - slideWidth;

    // Kereta jalan
    projectTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    projectTrack.style.transform = `translateX(${targetX}px)`;

    // Ganti posisi HTML secara ghaib pas kereta udah mentok
    setTimeout(() => {
        projectTrack.style.transition = 'none';
        projectTrack.appendChild(visibleSlides[0]); // Pindah elemen pertama ke ujung kanan
        visibleSlides.push(visibleSlides.shift()); // Update data array
        
        projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
        isMoving = false;
    }, 500);
}

// Geser Nyambung ke Kiri
function movePrev() {
    if (isMoving || visibleSlides.length <= 1) return;
    isMoving = true;

    // Transisi Opacity
    visibleSlides[1].classList.remove('active');
    visibleSlides[1].style.opacity = '0.35';
    visibleSlides[1].style.transform = 'scale(0.85)';
    
    visibleSlides[0].classList.add('active');
    visibleSlides[0].style.opacity = '1';
    visibleSlides[0].style.transform = 'scale(1)';

    const slideWidth = visibleSlides[0].offsetWidth;
    const targetX = getCenterOffset() + slideWidth;

    projectTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    projectTrack.style.transform = `translateX(${targetX}px)`;

    setTimeout(() => {
        projectTrack.style.transition = 'none';
        projectTrack.insertBefore(visibleSlides[visibleSlides.length - 1], visibleSlides[0]);
        visibleSlides.unshift(visibleSlides.pop());
        
        projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
        isMoving = false;
    }, 500);
}

// Event Listener Tombol Panah
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => { moveNext(); resetAutoPlay(); });
    prevBtn.addEventListener('click', () => { movePrev(); resetAutoPlay(); });
}

// Auto Play
function startAutoPlay() { 
    if(!autoPlayTimer) autoPlayTimer = setInterval(moveNext, 3500); 
}
function stopAutoPlay() { 
    clearInterval(autoPlayTimer); 
    autoPlayTimer = null; 
}
function resetAutoPlay() { stopAutoPlay(); startAutoPlay(); }

const carouselWrapper = document.querySelector('.project-carousel-wrapper');
if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
    carouselWrapper.addEventListener('mouseleave', startAutoPlay);
}

// =======================================================
// FIX BUG: PINDAH TAB (PAGE VISIBILITY API)
// =======================================================
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        // Kalau user pindah tab, STOP total semua mesin animasi
        stopAutoPlay();
        isMoving = false; // Lepas kunci pergerakan
    } else {
        // Kalau user balik ke tab ini, refresh layout dan jalanin ulang
        setTimeout(() => {
            projectTrack.style.transition = 'none';
            projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
            startAutoPlay();
        }, 50); // Jeda 50ms biar browser ngitung ulang lebar layar dengan bener
    }
});

// Logika Filter Kategori
const emptyMsg = document.getElementById('empty-project-msg'); // Panggil elemen pesan kosong

projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        
        // Kembalikan semua kotak ke posisi HTML semula biar aman
        allOriginalSlides.forEach(slide => projectTrack.appendChild(slide));
        visibleSlides = [];
        
        allOriginalSlides.forEach(slide => {
            if (filterValue === 'all' || slide.getAttribute('data-category') === filterValue) {
                slide.style.display = 'block';
                visibleSlides.push(slide);
            } else {
                slide.style.display = 'none';
            }
        });

        const categoryNames = {
            'all': 'All',
            'design': 'Design & Creative',
            'webdev': 'Web Dev',
            'hardware': 'IT & Hardware',
            'research': 'Research'
        };

        const catName = categoryNames[filterValue];
        const projCount = visibleSlides.length;
        const counterEl = document.getElementById('project-counter');

        if (projCount === 0) {
            // KONDISI 0 KOTAK: Muncul pesan kosong, sembunyikan counter
            emptyMsg.style.display = 'block'; 
            prevBtn.style.display = 'none';   
            nextBtn.style.display = 'none';
            projectTrack.style.transform = `translateX(0px)`; 
            stopAutoPlay(); 
            counterEl.style.display = 'none'; 
            
        } else if (projCount === 1) {
            // KONDISI 1 KOTAK: Sembunyikan panah, tengahkan kotak, tulisan 'project' (tanpa s)
            emptyMsg.style.display = 'none';
            prevBtn.style.display = 'none';   
            nextBtn.style.display = 'none';
            initCarousel(); 
            stopAutoPlay(); 
            
            counterEl.style.display = 'block';
            document.getElementById('counter-category').innerText = catName;
            document.getElementById('counter-number').innerText = `${projCount} project`;
            
        } else {
            // KONDISI > 1 KOTAK: Normal, jalanin carousel, tulisan 'projects' (pakai s)
            emptyMsg.style.display = 'none';
            prevBtn.style.display = 'flex';   
            nextBtn.style.display = 'flex';
            initCarousel();
            resetAutoPlay(); 
            
            counterEl.style.display = 'block';
            document.getElementById('counter-category').innerText = catName;
            document.getElementById('counter-number').innerText = `${projCount} projects`;
        }
    });
});

window.addEventListener('resize', () => {
    projectTrack.style.transition = 'none';
    projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
});

initCarousel();
startAutoPlay();

// =======================================================
// EASTER EGG: LOGIN RAHASIA ALFAREL
// =======================================================
let penToolAktif = false;
let klikLogoCount = 0;
let resetTimer;

const penTool = document.getElementById('rahasia-pen');
const logo = document.getElementById('rahasia-logo');

if (penTool && logo) {
    // 1. Dengerin kalau Pen Tool di bagian About diklik
    penTool.addEventListener('click', (e) => {
        // Biar klik pen toolnya nggak malah scroll layar atau error
        e.preventDefault(); 
        
        penToolAktif = true;
        klikLogoCount = 0; // Reset hitungan klik logo
        
        console.log("🤫 Sistem Rahasia Aktif! Punya waktu 5 detik buat klik Logo 3x.");

        // Kasih waktu 5 detik, kalau logo nggak diklik 3x, balik normal (anti-kepencet)
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            penToolAktif = false;
            klikLogoCount = 0;
            console.log("🔒 Waktu habis, pintu rahasia dikunci lagi.");
        }, 5000); 
    });

    // 2. Dengerin kalau Logo Navbar di klik
    logo.addEventListener('click', (e) => {
        // Kalau pen tool udah diklik sebelumnya dan waktu belum habis
        if (penToolAktif) {
            e.preventDefault(); 
            klikLogoCount++;
            console.log(`Pintu diketuk: ${klikLogoCount}/3`);

            // Kalau udah pas 3 kali klik
            if (klikLogoCount === 3) {
                console.log("🚀 Akses Diterima! Mengalihkan ke database...");
                // Ganti 'login.php' dengan nama file login lu nanti (contoh: 'admin/index.php')
                window.location.href = 'login.html'; 
            }
        }
    });
}

// =======================================================
// KEAMANAN ASET: MATIKAN KLIK KANAN & DRAG DI GAMBAR PROJECT
// =======================================================
const projectImages = document.querySelectorAll('.p-card-gallery img');

projectImages.forEach(img => {
    // Mematikan klik kanan (Context Menu)
    img.addEventListener('contextmenu', e => e.preventDefault());
    
    // Keamanan ganda untuk mematikan fitur drag-and-drop
    img.addEventListener('dragstart', e => e.preventDefault());
});

// =======================================================
// LOGIKA "SHOW MORE" UNTUK TAB KONTEN (DINAMIS)
// =======================================================
function initShowMore() {
    // 1. Konfigurasi setiap tab (id container, class item, limit jumlah yang tampil)
    const tabConfigs = [
        { id: 'academic-content', itemClass: '.timeline-zigzag-item', limit: 8 }, // Limit 4 kotak (SD, SMP, SMK, Kuliah)
        { id: 'achievement-content', itemClass: '.achieve-card', limit: 8 }, // Limit 4 kotak
        { id: 'certificate-content', itemClass: '.cert-card', limit: 8 } // Limit 4 kotak
    ];

    // Jalankan untuk tab standar (Grid & Zigzag)
    tabConfigs.forEach(config => {
        const container = document.getElementById(config.id);
        if (!container) return;

        const items = container.querySelectorAll(config.itemClass);
        if (items.length > config.limit) {
            sembunyikanItem(items, config.limit);
            buatTombol(container, items);
        }
    });

    // 2. Logika Khusus untuk Experience (Karena ada 2 kolom terpisah: Kiri & Kanan)
    const expContainer = document.getElementById('experience-content');
    if (expContainer) {
        const leftItems = expContainer.querySelectorAll('.timeline-straight .timeline-item');
        const rightItems = expContainer.querySelectorAll('.timeline-straight-right .timeline-item');
        const expLimit = 4; // Artinya 2 kotak di kiri, 2 kotak di kanan (Total 4)

        let isOverflow = false;
        
        if (leftItems.length > expLimit) {
            sembunyikanItem(leftItems, expLimit);
            isOverflow = true;
        }
        if (rightItems.length > expLimit) {
            sembunyikanItem(rightItems, expLimit);
            isOverflow = true;
        }

        if (isOverflow) {
            // Gabung jadi satu array biar tombolnya bisa buka kolom kiri & kanan sekaligus
            const allExpItems = [...leftItems, ...rightItems]; 
            buatTombol(expContainer, allExpItems); 
        }
    }

    // --- Fungsi Bantuan ---
    // Fungsi nyembunyiin elemen yang kelebihan
    function sembunyikanItem(items, limit) {
        for (let i = limit; i < items.length; i++) {
            items[i].style.display = 'none';
            items[i].classList.add('hidden-by-js'); // Kasih tanda kalau dia disembunyiin sama sistem
        }
    }

    // Fungsi bikin tombol Show More secara otomatis
    function buatTombol(container, items) {
        const wrapper = document.createElement('div');
        wrapper.className = 'show-more-wrapper';

        const btn = document.createElement('button');
        btn.className = 'btn-show-more';
        btn.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';

        let expanded = false;

        btn.addEventListener('click', () => {
            expanded = !expanded;

            if (expanded) {
                // TAMPILKAN SEMUA (Buka Gembok)
                items.forEach(item => {
                    if (item.classList.contains('hidden-by-js')) {
                        item.style.display = ''; // Balikin ke CSS aslinya (flex/block)
                        item.style.animation = 'fadeIn 0.5s ease forwards';
                    }
                });
                btn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                // SEMBUNYIKAN LAGI (Kunci)
                items.forEach(item => {
                    if (item.classList.contains('hidden-by-js')) {
                        item.style.display = 'none';
                    }
                });
                btn.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
                
                // Animasi scroll halus balik ke atas dikit biar layar user gak nyasar
                container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        wrapper.appendChild(btn);
        container.appendChild(wrapper);
    }
}

// Jalankan fungsi otomatis saat web lu baru dibuka
document.addEventListener('DOMContentLoaded', initShowMore);