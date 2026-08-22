/* --- TRANSLATION DICTIONARY & LOGIC --- */
const translations = {
    en: {
        // Navbar & Sidebar
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_project: "Project", nav_contact: "Contact", nav_lets_talk: "Let's Talk",
        side_promo_title: "Got an idea?<br>Let's bring it to life!", side_promo_desc: "See how I transform ideas into stunning, functional designs.", side_book: "Book a Coffee Chat", side_cv: "Download CV", side_follow: "FOLLOW ME",

        // Hero
        hero_my: "my", hero_portfolio: "portfolio", hero_subtitle: "Graphic Designer & Web Developer", hero_btn: "My Work",

        // About
        sec_about: "About <span>Me</span>",
        about_hello: "Hello, I'm <br> <span>M. Alfarel</span>",
        about_d1: "Hi! I am <strong>M. Alfarel</strong>, usually called <strong>AL</strong>. Currently, I am pursuing a double degree in two complementary fields: Informatics Engineering at Institut Teknologi Sumatera (ITERA) and Business Management at BINUS University.",
        about_d2: "My journey into IT didn't start with a coding background; in fact, I am actively building my programming skills from the ground up. Historically, my core expertise has been deeply rooted in Graphic Design, where I regularly craft visual materials such as digital posters, banners, and professional pitch decks.",
        about_d3: "My practical skills were significantly shaped through hands-on work experiences. I refined my hardware troubleshooting abilities during my internship at CV. RKU Komputer, and gained valuable operational and managerial insights while working at Bawaslu. I chose to study IT to establish a strong technical foundation that perfectly complements my creative and practical skill sets.",
        about_m1: "Hi, I am <strong>M. Alfarel</strong> (AL). I am currently pursuing a double degree in Informatics (ITERA) and Business (BINUS).",
        about_m2: "My core focus has always been Graphic Design. Now, I am highly enthusiastic about building my coding skills from zero.",
        about_m3: "I bring a strong track record of practical hardware repair (CV. RKU Komputer) and operational management experience (Bawaslu).",
        about_btn: "Read More <i class='fas fa-arrow-down'></i>",

        tab_acad: "<i class='fas fa-graduation-cap'></i> Academic", tab_achieve: "<i class='fas fa-trophy'></i> Achievement", tab_exp: "<i class='fas fa-users'></i> Experience", tab_cert: "<i class='fas fa-certificate'></i> Certificate",

        // Skills & Project
        sec_skill_sub: "PROFESSIONAL VALUE", sec_skill_title: "Skills & <span>Tools</span>",
        filter_s_core: "Core", filter_s_exp: "Expertise", filter_s_lang: "Languages", filter_s_tools: "Tools",
        cat_exp: "Core Expertise", cat_lang: "Language & Framework", cat_tool: "Tools & Environment",

        sec_proj_sub: "PORTFOLIO ARCHIVE", sec_proj_title: "Featured <span>Projects</span>",
        filter_p_all: "All", filter_p_des: "Design & Creative", filter_p_web: "Web Dev", filter_p_hard: "IT & Hardware", filter_p_res: "Research",
        
        p1_title: "Social Media & Digital Campaign", p1_desc: "A comprehensive compilation of social media visual assets, digital campaigns, and event identities.",
        p2_title: "Brand Identity & Print Materials", p2_desc: "Visual brand identity design, including custom logos, banners, brochures, and corporate ID cards.",
        p3_title: "Corporate Deck & Presentations", p3_desc: "Professional and engaging presentation layouts thoughtfully tailored for corporate, institutional, and academic purposes.",
        p4_title: "Interactive Portfolio Website", p4_desc: "Development of an interactive portfolio website featuring custom animations and pure DOM manipulation built from scratch.",
        p5_title: "Hardware Repair & OS Customization", p5_desc: "Physical PC/laptop hardware troubleshooting and deep system customization within the Linux (Ubuntu) ecosystem.",
        
        // Contact
        sec_cont_sub: "GET IN TOUCH", sec_cont_title: "Contact <span>Me</span>",
        c_email: "Email Address", c_phone: "Phone (Optional)", c_name: "Full Name", c_msg: "Write your message here...", c_btn: "Submit Message",
        n_title: "Stay Updated", n_desc: "Subscribe to my newsletter for the latest tech insights and exclusive behind-the-scenes looks at my projects.", n_plc: "Enter your email address", n_btn: "Subscribe Now",
        info_phone: "Open to freelance opportunities and full-time positions. Let's discuss how I can bring value to your team.",
        info_email: "Prefer written communication? Feel free to drop me an email anytime. I typically respond within 24 hours.",
        info_loc: "Currently based in Palembang, South Sumatra. Highly open to remote work opportunities globally.",

        // Footer
        foot_desc: "Transforming complex challenges into elegant, user-centric digital solutions. Let's build something extraordinary together.",
        foot_nav: "Navigation", foot_link: "Quick Links", foot_serv: "Services"
    },
    id: {
        // Navbar & Sidebar
        nav_home: "Beranda", nav_about: "Profil", nav_skills: "Kompetensi", nav_project: "Proyek", nav_contact: "Hubungi", nav_lets_talk: "Mari Berbincang",
        side_promo_title: "Punya ide brilian?<br>Mari wujudkan!", side_promo_desc: "Lihat bagaimana saya menerjemahkan ide Anda menjadi desain yang fungsional dan estetis.", side_book: "Jadwalkan Diskusi", side_cv: "Unduh CV", side_follow: "IKUTI SAYA",

        // Hero
        hero_my: "arsip", hero_portfolio: "portofolio", hero_subtitle: "Desainer Grafis & Web Developer", hero_btn: "Jelajahi Karya",

        // About
        sec_about: "Mengenal <span>Saya</span>",
        about_hello: "Halo, Saya <br> <span>M. Alfarel</span>",
        about_d1: "Halo! Saya <strong>M. Alfarel</strong>, akrab dipanggil <strong>AL</strong>. Saat ini, saya sedang menempuh program <i>double degree</i> di dua bidang yang saling melengkapi: Teknik Informatika di Institut Teknologi Sumatera (ITERA) dan Manajemen Bisnis di BINUS University.",
        about_d2: "Perjalanan saya di dunia IT tidak berawal dari keahlian <i>coding</i>—faktanya, saya membangun pemahaman pemrograman ini benar-benar dari nol. Sebelumnya, fondasi keahlian saya berakar kuat di bidang Desain Grafis, tempat saya terbiasa merancang berbagai materi visual seperti poster digital, <i>banner</i>, hingga <i>pitch deck</i> presentasi yang profesional.",
        about_d3: "Keterampilan praktis saya banyak terbentuk melalui pengalaman terjun langsung ke lapangan. Kemampuan <i>troubleshooting</i> dan perbaikan <i>hardware</i> saya asah ketika magang di CV. RKU Komputer, sementara pemahaman terkait operasional saya dapatkan dari pengalaman bekerja di Bawaslu. Saya memutuskan untuk mendalami IT guna membangun fondasi teknis yang solid, sekaligus menyatukan sisi kreatif dan praktis yang saya miliki.",
        about_m1: "Halo, saya <strong>M. Alfarel</strong> (AL). Saat ini saya sedang menempuh <i>double degree</i> di bidang Informatika (ITERA) dan Bisnis (BINUS).",
        about_m2: "Fokus keahlian saya berakar pada Desain Grafis. Kini, saya juga antusias membangun kemampuan <i>coding</i> secara mandiri dari nol.",
        about_m3: "Saya memiliki rekam jejak praktis dalam perbaikan <i>hardware</i> (CV. RKU Komputer) dan pengalaman manajerial operasional (Bawaslu).",
        about_btn: "Baca Selengkapnya <i class='fas fa-arrow-down'></i>",

        tab_acad: "<i class='fas fa-graduation-cap'></i> Akademik", tab_achieve: "<i class='fas fa-trophy'></i> Pencapaian", tab_exp: "<i class='fas fa-users'></i> Pengalaman", tab_cert: "<i class='fas fa-certificate'></i> Sertifikat",

        // Skills & Project
        sec_skill_sub: "NILAI PROFESIONAL", sec_skill_title: "Kompetensi & <span>Alat</span>",
        filter_s_core: "Utama", filter_s_exp: "Spesialisasi", filter_s_lang: "Bahasa", filter_s_tools: "Tools",
        cat_exp: "Bidang Keahlian", cat_lang: "Bahasa & Framework", cat_tool: "Software & Environment",

        sec_proj_sub: "ARSIP KARYA", sec_proj_title: "Proyek <span>Pilihan</span>",
        filter_p_all: "Semua", filter_p_des: "Desain & Kreatif", filter_p_web: "Web Dev", filter_p_hard: "IT & Hardware", filter_p_res: "Riset",

        p1_title: "Kampanye Digital & Media Sosial", p1_desc: "Kompilasi komprehensif aset visual media sosial, kampanye digital, dan identitas acara.",
        p2_title: "Identitas Merek & Material Cetak", p2_desc: "Perancangan identitas visual merek, mencakup logo kustom, spanduk, brosur, hingga ID card korporat.",
        p3_title: "Presentasi & Deck Korporat", p3_desc: "Desain tata letak presentasi yang profesional dan rapi, disesuaikan untuk kebutuhan korporat, instansi, maupun akademis.",
        p4_title: "Website Portofolio Interaktif", p4_desc: "Pengembangan website portofolio interaktif yang dibangun murni dari nol menggunakan manipulasi DOM dan animasi kustom.",
        p5_title: "Perbaikan Hardware & OS Linux", p5_desc: "Pemecahan masalah komponen fisik PC/Laptop dan kustomisasi mendalam sistem pada ekosistem operasi Linux (Ubuntu).",

        // Contact
        sec_cont_sub: "MARI TERHUBUNG", sec_cont_title: "Hubungi <span>Saya</span>",
        c_email: "Alamat Email", c_phone: "Nomor Telepon (Opsional)", c_name: "Nama Lengkap", c_msg: "Tulis pesan Anda di sini...", c_btn: "Kirim Pesan",
        n_title: "Tetap Terkini", n_desc: "Berlangganan buletin saya untuk mendapatkan insight teknologi terbaru dan melihat di balik layar proyek-proyek saya.", n_plc: "Masukkan alamat email", n_btn: "Berlangganan",
        info_phone: "Terbuka untuk kolaborasi freelance maupun posisi penuh waktu (full-time). Mari diskusikan bagaimana saya bisa memberikan nilai tambah untuk Anda.",
        info_email: "Lebih nyaman berkomunikasi lewat tulisan? Jangan ragu untuk mengirimkan email. Saya biasanya merespons dalam kurun waktu 24 jam.",
        info_loc: "Saat ini berdomisili di Palembang, Sumatera Selatan, dan sangat terbuka untuk kesempatan kerja remote secara global.",

        // Footer
        foot_desc: "Mengubah permasalahan kompleks menjadi solusi digital yang elegan dan berpusat pada pengguna. Mari berkolaborasi dan ciptakan sesuatu yang luar biasa.",
        foot_nav: "Navigasi", foot_link: "Tautan Singkat", foot_serv: "Layanan"
    },
    zh: {
        // Navbar & Sidebar
        nav_home: "首页", nav_about: "关于我", nav_skills: "专业能力", nav_project: "项目作品", nav_contact: "联系我", nav_lets_talk: "立即沟通",
        side_promo_title: "有绝妙的想法？<br>让我们实现它！", side_promo_desc: "看看我如何将您的想法转化为令人惊叹的实用设计。", side_book: "预约交流", side_cv: "下载简历", side_follow: "关注我",

        // Hero
        hero_my: "我的", hero_portfolio: "作品集", hero_subtitle: "平面设计师 & 网页开发者", hero_btn: "探索作品",

        // About
        sec_about: "关于 <span>我</span>",
        about_hello: "你好，我是 <br> <span>M. Alfarel</span>",
        about_d1: "您好！我是 <strong>M. Alfarel</strong>，大家通常叫我 <strong>AL</strong>。目前我正在攻读双学位，在苏门答腊理工学院 (ITERA) 学习信息工程，同时在建国大学 (BINUS) 学习商业管理。",
        about_d2: "我的IT之旅并非源于编程背景；事实上，我是从零开始稳步构建编程技能的。一直以来，我的核心专长扎根于平面设计领域，经常创作数字海报、横幅和专业的商业演示文稿。",
        about_d3: "我的实践技能是在真实的职场经历中磨练出来的。在 CV. RKU Komputer 实习期间，我提升了硬件故障排除能力；而在 Bawaslu 的工作则让我积累了宝贵的运营管理经验。我决定深耕 IT 领域，是为了建立扎实的技术基础，从而完美融合我的创造力与实践能力。",
        about_m1: "您好，我是 <strong>M. Alfarel (AL)</strong>。目前在 ITERA 和 BINUS 攻读双学位。",
        about_m2: "我的核心专长是平面设计。如今，我也怀着极大的热情从零开始构建编程能力。",
        about_m3: "我具备扎实的硬件维修实操经验（CV. RKU Komputer）以及行政管理洞察力（Bawaslu）。",
        about_btn: "阅读更多 <i class='fas fa-arrow-down'></i>",

        tab_acad: "<i class='fas fa-graduation-cap'></i> 教育背景", tab_achieve: "<i class='fas fa-trophy'></i> 荣誉成就", tab_exp: "<i class='fas fa-users'></i> 实践经验", tab_cert: "<i class='fas fa-certificate'></i> 资质证书",

        // Skills & Project
        sec_skill_sub: "专业价值", sec_skill_title: "能力与 <span>工具</span>",
        filter_s_core: "核心", filter_s_exp: "专长", filter_s_lang: "语言", filter_s_tools: "工具",
        cat_exp: "核心专长", cat_lang: "编程语言与框架", cat_tool: "软件与环境",

        sec_proj_sub: "作品档案", sec_proj_title: "精选 <span>项目</span>",
        filter_p_all: "全部", filter_p_des: "设计与创意", filter_p_web: "网页开发", filter_p_hard: "IT与硬件", filter_p_res: "学术研究",

        p1_title: "社交媒体与数字营销", p1_desc: "全面汇集了社交媒体视觉资产、数字营销活动和活动标识设计。",
        p2_title: "品牌形象与印刷材料", p2_desc: "视觉品牌形象设计，包括定制徽标、横幅、宣传册以及企业身份证设计。",
        p3_title: "企业演示文稿", p3_desc: "为企业、机构和学术目的量身定制的专业且引人入胜的演示文稿排版设计。",
        p4_title: "交互式作品集网站", p4_desc: "从零开始开发的一个交互式作品集网站，包含自定义动画和纯 DOM 操作。",
        p5_title: "硬件维修与Linux定制", p5_desc: "物理 PC/笔记本电脑硬件故障排除，以及在 Linux (Ubuntu) 生态系统中的深度系统定制。",

        // Contact
        sec_cont_sub: "保持联系", sec_cont_title: "联系 <span>我</span>",
        c_email: "电子邮箱", c_phone: "电话 (可选)", c_name: "您的姓名", c_msg: "在这里写下您的信息...", c_btn: "提交信息",
        n_title: "订阅更新", n_desc: "订阅我的简报，获取最新的技术见解以及我项目的独家幕后故事。", n_plc: "输入您的电子邮件地址", n_btn: "立即订阅",
        info_phone: "接受自由职业项目和全职工作。欢迎探讨我能如何为您的团队带来价值。",
        info_email: "更喜欢文字交流？随时给我发邮件。我通常会在 24 小时内回复。",
        info_loc: "目前常驻南苏门答腊巨港。非常期待全球范围内的远程工作机会。",

        // Footer
        foot_desc: "将复杂挑战转化为优雅的、以用户为中心的数字解决方案。让我们一起创造非凡。",
        foot_nav: "导航", foot_link: "快速链接", foot_serv: "服务"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // === LOGIKA CUSTOM DROPDOWN BAHASA ===
    const langWrapper = document.getElementById('custom-lang-wrapper');
    const langSelected = document.querySelector('.lang-selected');
    const langText = document.getElementById('lang-text');
    const langOptions = document.querySelectorAll('.lang-option');
    
    let currentLang = localStorage.getItem('app_lang') || 'en';
    
    function applyLanguage(lang) {
        // Update teks kamus
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // Cek kalau dia input atau textarea, yang diganti adalah placeholder-nya
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    // Pakai innerHTML biar tag <span>, <strong>, <i> berfungsi jadi desain, bukan teks mentah
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        document.body.classList.remove('lang-en', 'lang-id', 'lang-zh');
        document.body.classList.add('lang-' + lang);

        langText.innerText = lang.toUpperCase();
        langOptions.forEach(opt => {
            opt.classList.remove('active');
            if(opt.getAttribute('data-val') === lang) {
                opt.classList.add('active');
            }
        });

        localStorage.setItem('app_lang', lang);
        currentLang = lang;
    }

    applyLanguage(currentLang);

    if(langSelected) {
        langSelected.addEventListener('click', (e) => {
            e.stopPropagation();
            langWrapper.classList.toggle('open');
        });
    }

    document.addEventListener('click', () => {
        if (langWrapper && langWrapper.classList.contains('open')) {
            langWrapper.classList.remove('open');
        }
    });
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation(); // Mencegah trigger event ke luar
            const selectedLang = option.getAttribute('data-val');
            applyLanguage(selectedLang);
            langWrapper.classList.remove('open');
        });
    });
});

/* --- 1. SIDEBAR & NAVIGATION --- */
const mobileMenuBtn = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Toggle Sidebar Mobile
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

// Penanda Spotlight Menu Sidebar
const sidebarLinks = document.querySelectorAll('.sidebar-nav a:not(.btn-lets-talk-sidebar)');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebarLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        closeSidebar();
    });
});

/* --- 2. DARK / LIGHT MODE SWITCHER --- */
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

/* --- 3. SCROLL REVEAL & SCROLL SPY --- */
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight; 
        const elementTop = reveals[i].getBoundingClientRect().top; 
        const elementVisible = window.innerWidth <= 768 ? 40 : 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();

const sections = document.querySelectorAll('section');
const topNavLinks = document.querySelectorAll('.desktop-nav a');
const sideNavLinks = document.querySelectorAll('.sidebar-nav > a'); 

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    topNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    sideNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* --- 4. ABOUT SECTION (TABS & READ MORE) --- */
const btnReadMore = document.querySelector('.btn-read-more');
const extraInfo = document.getElementById('extra-info');
const btnCloseExtra = document.getElementById('btn-close-extra');

if (btnReadMore && extraInfo) {
    btnReadMore.addEventListener('click', (e) => {
        e.preventDefault();
        extraInfo.classList.add('active');
    });
}

if (btnCloseExtra && extraInfo) {
    btnCloseExtra.addEventListener('click', (e) => {
        e.preventDefault();
        extraInfo.classList.remove('active');
    });
}

// AMBIL SEMUA TOMBOL DAN KONTEN
const leftBtns = document.querySelectorAll('.left-btn');
const leftContents = document.querySelectorAll('.left-content');
const rightBtns = document.querySelectorAll('.right-btn');
const rightContents = document.querySelectorAll('.right-content');
const allBtns = [...leftBtns, ...rightBtns];
const allContents = [...leftContents, ...rightContents];

// BIKIN CUSTOM DROPDOWN KHUSUS MOBILE (BISA CUSTOM ICON & WARNA)
const infoGrid = document.querySelector('.info-grid-split');
if (infoGrid && !document.getElementById('custom-mobile-dropdown')) {
    const customDropdownHTML = `
        <div class="custom-mobile-dropdown" id="custom-mobile-dropdown">
            <div class="dropdown-selected">
                <span><i class="fas fa-graduation-cap"></i> Academic</span>
                <i class="fas fa-chevron-down chevron"></i>
            </div>
            <div class="dropdown-items">
                <div class="dropdown-item" data-target="academic-content">
                    <i class="fas fa-graduation-cap"></i> Academic
                </div>
                <div class="dropdown-item" data-target="achievement-content">
                    <i class="fas fa-trophy"></i> Achievement
                </div>
                <div class="dropdown-item" data-target="experience-content">
                    <i class="fas fa-users"></i> Experience
                </div>
                <div class="dropdown-item" data-target="certificate-content">
                    <i class="fas fa-certificate"></i> Certificate
                </div>
            </div>
        </div>
    `;
    infoGrid.insertAdjacentHTML('afterbegin', customDropdownHTML);

    const dropdownObj = document.getElementById('custom-mobile-dropdown');
    const selectedObj = dropdownObj.querySelector('.dropdown-selected');
    const itemsObj = dropdownObj.querySelector('.dropdown-items');
    const itemDivs = dropdownObj.querySelectorAll('.dropdown-item');

    // Buka/Tutup Dropdown
    selectedObj.addEventListener('click', function(e) {
        e.stopPropagation();
        itemsObj.classList.toggle('show');
        selectedObj.classList.toggle('active');
    });

    // Tutup saat klik di luar area
    document.addEventListener('click', function() {
        itemsObj.classList.remove('show');
        selectedObj.classList.remove('active');
    });

    // Saat item dipilih
    itemDivs.forEach(item => {
        item.addEventListener('click', function() {
            selectedObj.querySelector('span').innerHTML = this.innerHTML; // Update teks & icon
            const targetId = this.getAttribute('data-target');
            const targetBtn = document.querySelector(`.mini-tab-btn[data-target="${targetId}"]`);
            if(targetBtn) targetBtn.click(); // Pencet tombol asli yang disembunyikan
        });
    });
}

allBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // LOGIKA HP: Matikan semua tab, nyalakan 1 saja
            allBtns.forEach(b => b.classList.remove('active'));
            allContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target')).classList.add('active');
            
            // Sinkronkan text Custom Dropdown dengan tab yang sedang aktif
            const customItems = document.querySelectorAll('.dropdown-item');
            customItems.forEach(item => {
                if(item.getAttribute('data-target') === btn.getAttribute('data-target')) {
                    const selectedSpan = document.querySelector('.dropdown-selected span');
                    if(selectedSpan) selectedSpan.innerHTML = item.innerHTML;
                }
            });
        } else {
            // LOGIKA DESKTOP: Tetap sakral 2 Kolom (Kiri & Kanan terpisah)
            if (btn.classList.contains('left-btn')) {
                leftBtns.forEach(b => b.classList.remove('active'));
                leftContents.forEach(c => c.classList.remove('active'));
            } else {
                rightBtns.forEach(b => b.classList.remove('active'));
                rightContents.forEach(c => c.classList.remove('active'));
            }
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target')).classList.add('active');
        }
    });
});

// RESET SAAT DIBUKA DI HP: Matikan kolom kanan biar sisa Academic aja
if (window.innerWidth <= 768) {
    rightBtns.forEach(b => b.classList.remove('active'));
    rightContents.forEach(c => c.classList.remove('active'));
}

/* --- 5. DATABASES --- */
const portfolioData = {
    // ---- ACADEMIC ----
    "SDN 226 Palembang": {
        icon: "fa-child",
        subtitle: "Elementary School • 2013 - 2019 • Palembang",
        badges: ["Academic", "Primary Education"],
        desc: "My early educational years where I developed fundamental learning habits, discipline, and a natural curiosity for problem-solving. This period laid the groundwork for my academic persistence.",
        achievements: [
            "Active participant in school activities",
            "Graduated with excellent academic records"
        ],
        image: ""
    },
    "MTsN 1 Palembang": {
        icon: "fa-mosque",
        subtitle: "Junior High School • 2019 - 2022 • Palembang",
        badges: ["Academic", "Secondary Education"],
        desc: "A balanced educational phase combining general studies with religious education. During this time, I began developing leadership basics and a stronger interest in technology and organization.",
        achievements: [
            "Active in extracurricular activities",
            "Consistently ranked among the top students in class"
        ],
        image: ""
    },
    "SMKN 8 Palembang": {
        icon: "fa-laptop-code",
        subtitle: "Vocational High School • 2022 - 2025 • Palembang",
        badges: ["Vocational", "Technology"],
        desc: "Focused heavily on practical technology skills. It was here that I discovered and honed my natural talent for analyzing, troubleshooting, and repairing computer and laptop hardware.",
        achievements: [
            "Mastered PC and Laptop assembly and hardware troubleshooting",
            "Passed the technology vocational competency test with high marks"
        ],
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
        desc: "Secured 1st Place in the city-wide high school Adzan competition organized by STIE & AKUBANK Mulia Darma Pratama. Participating in this event significantly built my public speaking confidence and vocal projection.",
        achievements: [
            "1st Place Adzan Competition across Palembang City",
            "Outperformed dozens of participants from various high schools"
        ],
        image: "" 
    },
    "2nd Place Asmaul Husna": {
        icon: "fa-book-open",
        subtitle: "Runner Up • SMAN 7 Palembang",
        badges: ["2nd Winner", "Religion", "Provincial Level"],
        desc: "Achieved 2nd Place in the provincial high school Asmaul Husna competition held at SMAN 7 Palembang. This contest rigorously tested memory, precise pronunciation (tajwid), and mental composure under pressure.",
        achievements: [
            "2nd Place Asmaul Husna Competition in South Sumatra",
            "Demonstrated strong dedication in memorizing and reciting the Asmaul Husna"
        ],
        image: ""
    },
    "Top Class Academic Rank": {
        icon: "fa-medal",
        subtitle: "Academic Excellence • SMKN 8 Palembang",
        badges: ["Top Rank", "Academic", "Consistent"],
        desc: "Received 4 certificates of excellence in recognition of top academic rankings throughout my studies. This achievement highlights my consistency, discipline, and strong commitment to formal education.",
        achievements: [
            "Awarded a total of 4 class ranking certificates",
            "Consistently maintained high academic grades throughout high school"
        ],
        image: ""
    },
    "Bawaslu Internship Certificate": {
        icon: "fa-file-signature",
        subtitle: "Official Certificate • Bawaslu Prov. Sumsel",
        badges: ["Internship", "Government", "Administration"],
        desc: "An official certificate confirming the successful completion of my internship at the General Election Supervisory Agency (Bawaslu) of South Sumatra. It recognizes my strict discipline and tangible administrative contributions.",
        achievements: [
            "Completed the internship program with highly satisfactory evaluations",
            "Received special appreciation for meticulous archive management"
        ],
        image: ""
    },
    "RKU Komputer Internship Certificate": {
        icon: "fa-tools",
        subtitle: "Official Certificate • CV. RKU Komputer",
        badges: ["Internship", "Hardware", "Technical Skill"],
        desc: "Certificate of completion for my field internship at CV. RKU Komputer. This credential validates my technical capability to troubleshoot and resolve hardware and software issues within a fast-paced, real-world work environment.",
        achievements: [
            "Recognized for proficiency in handling client hardware issues",
            "Passed the field practice with excellent performance evaluations"
        ],
        image: ""
    }
};

const skillsData = {
    // ================= EXPERTISE =================
    "UI/UX Design": {
        subtitle: "SPECIALTY DETAILS",
        desc: "The process of designing aesthetic interfaces and ensuring a logical, seamless, and intuitive user experience (UX).",
        expertise: [
            "User Research & Wireframing",
            "Interactive Prototyping",
            "Design Systems",
            "Usability & Layouting"
        ]
    },
    "Graphic Design": {
        subtitle: "SPECIALTY DETAILS",
        desc: "Creating engaging visual compositions for digital and print media, combining typography, colors, and illustrations.",
        expertise: [
            "Branding & Identity Design",
            "Social Media Asset Creation",
            "Vector Illustration",
            "Photo Retouching & Editing"
        ]
    },
    "Hardware Repair": {
        subtitle: "PRACTICAL SKILL",
        desc: "My natural technical talent in diagnosing physical hardware issues and performing component repairs or replacements.",
        expertise: [
            "PC & Laptop Teardown",
            "Component Replacement",
            "Motherboard Diagnostics",
            "Thermal Paste Application & Maintenance"
        ]
    },
    "Software Repair": {
        subtitle: "PRACTICAL SKILL",
        desc: "Expertise in analyzing and troubleshooting operating systems or software issues, both on Windows and Linux.",
        expertise: [
            "OS Troubleshooting & Installation",
            "Virus Removal & System Restore",
            "Driver & Software Optimization",
            "Data Recovery Basics"
        ]
    },
    "Web Developer": {
        subtitle: "CORE EXPERTISE",
        desc: "Building and maintaining website structures, from front-end user interfaces to basic logic management.",
        expertise: [
            "Responsive Web Design",
            "DOM Manipulation",
            "Modern Layouting (Flexbox/Grid)",
            "UI Animation Implementation"
        ]
    },

    // ================= LANGUAGES & FRAMEWORKS =================
    "HTML": {
        subtitle: "CORE LANGUAGE",
        desc: "The standard markup language for creating the basic structure of a website. I use it as the fundamental stepping stone in my web development journey.",
        expertise: [
            "Semantic HTML5",
            "SEO Friendly Structuring",
            "Web Accessibility",
            "Form & Input Management"
        ]
    },
    "CSS": {
        subtitle: "CORE STYLING",
        desc: "The language used to style web interfaces. Essential for crafting layouts, colors, and complex animations (like glassmorphism effects).",
        expertise: [
            "Flexbox & CSS Grid",
            "Responsive Design (Media Queries)",
            "CSS Animations & Transitions",
            "Custom Variables"
        ]
    },
    "JavaScript": {
        subtitle: "INTERACTIVE LOGIC",
        desc: "The programming language that brings websites to life, enabling interactive features like modal popups, dynamic filters, and element manipulation.",
        expertise: [
            "DOM Manipulation",
            "Event Handling",
            "Logic & Conditionals",
            "Asynchronous Basics"
        ]
    },
    "PHP": {
        subtitle: "BACKEND SCRIPTING",
        desc: "A server-side scripting language I am exploring to connect static websites with database systems in the future.",
        expertise: [
            "Server-side Logic Fundamentals",
            "Form Data Handling",
            "Basic Database Connection",
            "Session Management"
        ]
    },
    "SQL": {
        subtitle: "DATABASE MANAGEMENT",
        desc: "The language for managing and manipulating data in relational database systems, essential for dynamic web development.",
        expertise: [
            "Data Querying",
            "Database Structuring",
            "CRUD Operations",
            "Table Relational Basics"
        ]
    },
    "Python": {
        subtitle: "PROGRAMMING LANGUAGE",
        desc: "A versatile language with clean syntax that I am currently learning for automation, data analysis, and computational logic.",
        expertise: [
            "Scripting & Automation",
            "Logic Implementation",
            "Data Structure Basics",
            "Problem Solving"
        ]
    },
    "C++": {
        subtitle: "PROGRAMMING LANGUAGE",
        desc: "A high-performance programming language. Highly ideal for practicing computational logic and managing complex memory structures.",
        expertise: [
            "Object-Oriented Programming (OOP)",
            "Memory Management",
            "Algorithm & Data Structures",
            "Logic Troubleshooting"
        ]
    },
    "LaTeX": {
        subtitle: "DOCUMENT PREPARATION",
        desc: "A typesetting system I frequently use for creating highly precise academic reports, journals, and technical documents.",
        expertise: [
            "Academic Report Structuring",
            "Complex Formula Formatting",
            "Bibliography & Citations",
            "Template Customization"
        ]
    },

    // ================= TOOLS & ENVIRONMENT =================
    "Figma": {
        subtitle: "DESIGN TOOL",
        desc: "The primary collaborative UI/UX design tool for crafting modern website and application interfaces.",
        expertise: [
            "UI/UX Interface Design",
            "Interactive Prototyping",
            "Design Systems",
            "Auto Layout & Components"
        ]
    },
    "Canva": {
        subtitle: "DESIGN TOOL",
        desc: "An online graphic design platform for creating presentations, posters, and social media content quickly and efficiently.",
        expertise: [
            "Social Media Templates",
            "Quick Asset Creation",
            "Presentation Design",
            "Brand Kit Management"
        ]
    },
    "Photoshop": {
        subtitle: "DESIGN TOOL",
        desc: "The industry-standard software for digital photo manipulation, retouching, and creating bitmap graphic assets.",
        expertise: [
            "Photo Retouching",
            "Layer Masking",
            "Digital Imaging",
            "Color Correction"
        ]
    },
    "Illustrator": {
        subtitle: "DESIGN TOOL",
        desc: "The go-to software for creating scalable vector graphics such as logos, icons, and illustrations.",
        expertise: [
            "Vector Tracing",
            "Logo Design",
            "Typography Layouting",
            "Flat Illustration"
        ]
    },
    "Lightroom": {
        subtitle: "PHOTOGRAPHY TOOL",
        desc: "Focused on color grading and lighting adjustments to professionally enhance photos in bulk.",
        expertise: [
            "Color Grading",
            "Exposure Correction",
            "Preset Management",
            "Batch Editing"
        ]
    },
    "CorelDraw": {
        subtitle: "DESIGN TOOL",
        desc: "A robust vector software alternative, often used for print design needs and graphic layouting.",
        expertise: [
            "Print Design",
            "Vector Illustration",
            "Layouting",
            "Typography Formatting"
        ]
    },
    "Pixellab": {
        subtitle: "MOBILE DESIGN TOOL",
        desc: "A lightweight and practical design app for creating typography or basic image manipulation directly from a mobile device.",
        expertise: [
            "Mobile Editing",
            "Typography Customization",
            "Quick Asset Creation",
            "3D Text Effects"
        ]
    },
    "CapCut": {
        subtitle: "VIDEO EDITING",
        desc: "A trendy and highly practical video editing tool with ready-to-use transitions, ideal for vertical social media content.",
        expertise: [
            "Short-form Video Editing",
            "Trendy Transitions",
            "Audio Syncing",
            "Auto-Captions"
        ]
    },
    "Filmora": {
        subtitle: "VIDEO EDITING",
        desc: "A user-friendly desktop video editing software for cutting, assembling, and applying effects to video projects.",
        expertise: [
            "Video Splicing & Timeline",
            "Effect Application",
            "Basic Color Correction",
            "Audio Mixing"
        ]
    },
    "Clipchamp": {
        subtitle: "VIDEO EDITING",
        desc: "A fast, integrated web-based video editor for instant video trimming and lightweight content creation.",
        expertise: [
            "Quick Web Editing",
            "Timeline Management",
            "Export Optimization",
            "Template Usage"
        ]
    },
    "Git": {
        subtitle: "VERSION CONTROL",
        desc: "A version control system to track and record every change in the programming code I am working on.",
        expertise: [
            "Code Tracking",
            "Branch Management",
            "Version Reverting",
            "Commit History"
        ]
    },
    "GitHub": {
        subtitle: "CODE REPOSITORY",
        desc: "A cloud platform where I store, manage, and showcase my code portfolio and programming project repositories.",
        expertise: [
            "Repository Management",
            "Open Source Contribution",
            "Project Hosting",
            "README Structuring"
        ]
    },
    "Docker": {
        subtitle: "CONTAINERIZATION",
        desc: "A platform for packaging applications and all their dependencies into containers, ensuring software runs consistently in any environment.",
        expertise: [
            "Container Management",
            "Environment Isolation",
            "Image Building",
            "Deployment Basics"
        ]
    },
    "VS Code": {
        subtitle: "CODE EDITOR",
        desc: "My primary text editor for writing code, debugging, and programming HTML/CSS/JS. Highly powerful thanks to its extension support.",
        expertise: [
            "Code Formatting",
            "Extension Management",
            "Integrated Terminal",
            "Live Server Integration"
        ]
    },
    "Excel": {
        subtitle: "OFFICE TOOL",
        desc: "A powerful spreadsheet tool for analyzing data, creating reports, and building calculation formulas.",
        expertise: [
            "Data Entry & Formatting",
            "Formula & Functions",
            "Data Visualization (Charts)",
            "Pivot Tables"
        ]
    },
    "Word": {
        subtitle: "OFFICE TOOL",
        desc: "A word processing software for drafting reports, proposals, articles, and various other administrative documents.",
        expertise: [
            "Document Formatting",
            "Layout Structuring",
            "Report Generation",
            "Mail Merge"
        ]
    }
};

/* --- 6. MODAL POPUPS (PORTFOLIO & SKILLS) --- */
const modalOverlay = document.getElementById('card-modal');
const modalCloseBtn = document.querySelector('.modal-close');

// Fungsi Utama: Mengisi data dan membuka modal Portfolio
function bukaModalPortofolio(title, data) {
    if (!data) {
        return;
    }
    
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-subtitle').innerText = data.subtitle;
    document.getElementById('modal-desc').innerText = data.desc;
    document.querySelector('.modal-header-icon i').className = `fas ${data.icon}`;
    
    // Inject Badges
    const badgesContainer = document.getElementById('modal-badges');
    badgesContainer.innerHTML = '';
    data.badges.forEach(b => {
        const span = document.createElement('span');
        span.innerText = b;
        badgesContainer.appendChild(span);
    });
    
    // Inject Achievements
    const achList = document.getElementById('modal-achievements-list');
    achList.innerHTML = '';
    data.achievements.forEach(ach => {
        const li = document.createElement('li');
        li.innerText = ach;
        achList.appendChild(li);
    });
    
    // Setup Image Box
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

// Trigger untuk Kartu Timeline & Achievement
document.querySelectorAll('.timeline-card, .achieve-card').forEach(card => {
    card.addEventListener('click', () => {
        const titleEl = card.querySelector('h4');
        if (titleEl) {
            bukaModalPortofolio(titleEl.innerText, portfolioData[titleEl.innerText]);
        }
    });
});

// Trigger untuk Tombol "About" di Sertifikat
document.querySelectorAll('.btn-cert-about').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.cert-card');
        if (!card) return;
        
        const title = card.getAttribute('data-title');
        bukaModalPortofolio(title, portfolioData[title]);
    });
});

// Tutup Modal Portfolio
modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Skill Modal Logic
const skillModalOverlay = document.getElementById('skill-modal');
const skillCloseBtn = document.getElementById('skill-close-btn');

document.querySelectorAll('.expertise-card, .skill-pill').forEach(btn => {
    btn.addEventListener('click', () => {
        const titleSpan = btn.querySelector('span');
        if (!titleSpan) return;
        
        const title = titleSpan.innerText.trim();
        const data = skillsData[title];
        
        if (data) {
            const iconElement = btn.querySelector('i, img');
            
            if (iconElement) {
                document.getElementById('skill-modal-icon').innerHTML = iconElement.outerHTML;
            } else {
                document.getElementById('skill-modal-icon').innerHTML = '<i class="fas fa-star"></i>';
            }
            
            document.getElementById('skill-modal-title').innerText = title;
            document.getElementById('skill-modal-subtitle').innerText = data.subtitle;
            document.getElementById('skill-modal-desc').innerText = data.desc;

            const listContainer = document.getElementById('skill-modal-list');
            listContainer.innerHTML = '';
            
            data.expertise.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                listContainer.appendChild(li);
            });

            skillModalOverlay.classList.add('active');
        }
    });
});

if (skillCloseBtn) {
    skillCloseBtn.addEventListener('click', () => {
        skillModalOverlay.classList.remove('active');
    });
}

if (skillModalOverlay) {
    skillModalOverlay.addEventListener('click', (e) => {
        if (e.target === skillModalOverlay) {
            skillModalOverlay.classList.remove('active');
        }
    });
}

/* --- 7. SKILLS FILTER --- */
const filterBtns = document.querySelectorAll('.filter-btn');
const skillCategories = document.querySelectorAll('.skill-category');
const skillsWrapper = document.querySelector('.skills-wrapper');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            skillsWrapper.classList.remove('grid-mode'); 
        } else {
            skillsWrapper.classList.add('grid-mode'); 
        }

        skillCategories.forEach(category => {
            if (filterValue === 'all' || category.getAttribute('id') === `cat-${filterValue}`) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    });
});

/* --- 8. PROJECT CAROUSEL & FILTER --- */
const projectFilterBtns = document.querySelectorAll('.p-filter-btn');
const projectTrack = document.getElementById('project-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
// === TAMBAHAN DROPDOWN KHUSUS MOBILE UNTUK PROJECT ===
const projectFilterContainer = document.querySelector('.project-filter');
if (projectFilterContainer && window.innerWidth <= 768 && !document.getElementById('project-mobile-dropdown')) {
    const projectDropdownHTML = `
        <div class="custom-mobile-dropdown" id="project-mobile-dropdown" style="margin: 0 auto 20px auto !important; width: 65% !important; z-index: 50; display: block !important;">
            <div class="dropdown-selected" style="border-radius: 20px; justify-content: center;">
                <span id="project-dropdown-text">All Projects</span>
                <i class="fas fa-chevron-down chevron" style="margin-left: 10px;"></i>
            </div>
            <div class="dropdown-items" style="border-radius: 15px; text-align: center;">
                <div class="dropdown-item" data-filter="all">All Projects</div>
                <div class="dropdown-item" data-filter="design">Design & Creative</div>
                <div class="dropdown-item" data-filter="webdev">Web Dev</div>
                <div class="dropdown-item" data-filter="hardware">IT & Hardware</div>
                <div class="dropdown-item" data-filter="research">Research</div>
            </div>
        </div>
    `;
    projectFilterContainer.insertAdjacentHTML('afterend', projectDropdownHTML);

    const pDropdownObj = document.getElementById('project-mobile-dropdown');
    const pSelectedObj = pDropdownObj.querySelector('.dropdown-selected');
    const pItemsObj = pDropdownObj.querySelector('.dropdown-items');
    const pItemDivs = pDropdownObj.querySelectorAll('.dropdown-item');

    pSelectedObj.addEventListener('click', function(e) {
        e.stopPropagation();
        pItemsObj.classList.toggle('show');
        pSelectedObj.classList.toggle('active');
    });

    document.addEventListener('click', function() {
        pItemsObj.classList.remove('show');
        pSelectedObj.classList.remove('active');
    });

    pItemDivs.forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('project-dropdown-text').innerText = this.innerText;
            const targetFilter = this.getAttribute('data-filter');
            // Simulasi klik pada tombol filter asli yang disembunyikan
            const targetBtn = document.querySelector(`.p-filter-btn[data-filter="${targetFilter}"]`);
            if(targetBtn) targetBtn.click(); 
        });
    });
}

let allOriginalSlides = Array.from(document.querySelectorAll('.project-slide'));
let visibleSlides = [...allOriginalSlides];
let isMoving = false;
let autoPlayTimer;

function getCenterOffset() {
    if (visibleSlides.length === 0) return 0;
    
    const wrapperWidth = document.querySelector('.project-carousel-wrapper').clientWidth;
    const slideWidth = visibleSlides[0].offsetWidth;
    let offset = (wrapperWidth / 2) - (slideWidth / 2);
    
    if (visibleSlides.length > 1) {
        offset -= slideWidth; 
    }
    
    return offset;
}

function updateActiveClasses() {
    visibleSlides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.opacity = '0.35';
        slide.style.transform = 'scale(0.85)';
    });
    
    let activeIdx = visibleSlides.length > 1 ? 1 : 0;
    
    if (visibleSlides[activeIdx]) {
        visibleSlides[activeIdx].classList.add('active');
        visibleSlides[activeIdx].style.opacity = '1';
        visibleSlides[activeIdx].style.transform = 'scale(1)';
    }
}

function initCarousel() {
    if (visibleSlides.length > 1) {
        projectTrack.insertBefore(visibleSlides[visibleSlides.length - 1], visibleSlides[0]);
        visibleSlides.unshift(visibleSlides.pop());
    }
    
    projectTrack.style.transition = 'none';
    projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
    updateActiveClasses();
}

function moveNext() {
    if (isMoving || visibleSlides.length <= 1) return;
    isMoving = true;

    visibleSlides[1].classList.remove('active');
    visibleSlides[1].style.opacity = '0.35';
    visibleSlides[1].style.transform = 'scale(0.85)';
    
    const nextActive = visibleSlides[2] ? 2 : 0;
    visibleSlides[nextActive].classList.add('active');
    visibleSlides[nextActive].style.opacity = '1';
    visibleSlides[nextActive].style.transform = 'scale(1)';

    const targetX = getCenterOffset() - visibleSlides[0].offsetWidth;
    projectTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    projectTrack.style.transform = `translateX(${targetX}px)`;

    setTimeout(() => {
        projectTrack.style.transition = 'none';
        projectTrack.appendChild(visibleSlides[0]); 
        visibleSlides.push(visibleSlides.shift()); 
        
        projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
        isMoving = false;
    }, 500);
}

function movePrev() {
    if (isMoving || visibleSlides.length <= 1) return;
    isMoving = true;

    visibleSlides[1].classList.remove('active');
    visibleSlides[1].style.opacity = '0.35';
    visibleSlides[1].style.transform = 'scale(0.85)';
    
    visibleSlides[0].classList.add('active');
    visibleSlides[0].style.opacity = '1';
    visibleSlides[0].style.transform = 'scale(1)';

    const targetX = getCenterOffset() + visibleSlides[0].offsetWidth;
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

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => { 
        moveNext(); 
        resetAutoPlay(); 
    });
    prevBtn.addEventListener('click', () => { 
        movePrev(); 
        resetAutoPlay(); 
    });
}

function startAutoPlay() { 
    if (!autoPlayTimer) {
        autoPlayTimer = setInterval(moveNext, 3500); 
    }
}

function stopAutoPlay() { 
    clearInterval(autoPlayTimer); 
    autoPlayTimer = null; 
}

function resetAutoPlay() { 
    stopAutoPlay(); 
    startAutoPlay(); 
}

const carouselWrapper = document.querySelector('.project-carousel-wrapper');
if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoPlay);
    carouselWrapper.addEventListener('mouseleave', startAutoPlay);
}

// Fix Bug Animasi Tab (Page Visibility)
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        stopAutoPlay();
        isMoving = false;
    } else {
        setTimeout(() => {
            projectTrack.style.transition = 'none';
            projectTrack.style.transform = `translateX(${getCenterOffset()}px)`;
            startAutoPlay();
        }, 50); 
    }
});

// Project Filter
const emptyMsg = document.getElementById('empty-project-msg'); 

projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        
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
            emptyMsg.style.display = 'block'; 
            prevBtn.style.display = 'none';   
            nextBtn.style.display = 'none';
            projectTrack.style.transform = `translateX(0px)`; 
            stopAutoPlay(); 
            counterEl.style.display = 'none'; 
            
        } else if (projCount === 1) {
            emptyMsg.style.display = 'none';
            prevBtn.style.display = 'none';   
            nextBtn.style.display = 'none';
            initCarousel(); 
            stopAutoPlay(); 
            counterEl.style.display = 'block';
            document.getElementById('counter-category').innerText = catName;
            document.getElementById('counter-number').innerText = `${projCount} project`;
            
        } else {
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

/* --- 9. UTILITIES (SHOW MORE, EASTER EGG, PROTECT ASSETS) --- */

// Fitur Show More
function initShowMore() {
    const tabConfigs = [
        { id: 'academic-content', itemClass: '.timeline-zigzag-item', limit: 8 }, 
        { id: 'achievement-content', itemClass: '.achieve-card', limit: 8 }, 
        { id: 'certificate-content', itemClass: '.cert-card', limit: 8 } 
    ];

    tabConfigs.forEach(config => {
        const container = document.getElementById(config.id);
        if (!container) return;
        
        const items = container.querySelectorAll(config.itemClass);
        if (items.length > config.limit) {
            sembunyikanItem(items, config.limit);
            buatTombol(container, items);
        }
    });

    const expContainer = document.getElementById('experience-content');
    if (expContainer) {
        const leftItems = expContainer.querySelectorAll('.timeline-straight .timeline-item');
        const rightItems = expContainer.querySelectorAll('.timeline-straight-right .timeline-item');
        const expLimit = 4; // 4 kiri, 4 kanan

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
            const allExpItems = [...leftItems, ...rightItems]; 
            buatTombol(expContainer, allExpItems); 
        }
    }

    function sembunyikanItem(items, limit) {
        for (let i = limit; i < items.length; i++) {
            items[i].style.display = 'none';
            items[i].classList.add('hidden-by-js');
        }
    }

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
                items.forEach(item => {
                    if (item.classList.contains('hidden-by-js')) {
                        item.style.display = ''; 
                        item.style.animation = 'fadeIn 0.5s ease forwards';
                    }
                });
                btn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                items.forEach(item => {
                    if (item.classList.contains('hidden-by-js')) {
                        item.style.display = 'none';
                    }
                });
                btn.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
                container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
        
        wrapper.appendChild(btn);
        container.appendChild(wrapper);
    }
}
document.addEventListener('DOMContentLoaded', initShowMore);

// Easter Egg Login Rahasia
let penToolAktif = false;
let klikLogoCount = 0;
let resetTimer;

const penTool = document.getElementById('rahasia-pen');
const logo = document.getElementById('rahasia-logo');

if (penTool && logo) {
    penTool.addEventListener('click', (e) => {
        e.preventDefault(); 
        penToolAktif = true;
        klikLogoCount = 0; 
        
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            penToolAktif = false;
            klikLogoCount = 0;
        }, 5000); 
    });

    logo.addEventListener('click', (e) => {
        if (penToolAktif) {
            e.preventDefault(); 
            klikLogoCount++;
            
            if (klikLogoCount === 3) {
                window.location.href = 'login.html'; 
            }
        }
    });
}

// Matikan Klik Kanan & Drag di Gambar Project / Skills
const protectedImages = document.querySelectorAll('.p-card-gallery img, .skills-wrapper');
protectedImages.forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
    img.addEventListener('dragstart', e => e.preventDefault());
});