/* --- TRANSLATION DICTIONARY & LOGIC --- */
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_project: "Project", nav_contact: "Contact", nav_lets_talk: "Let's Talk",
        side_promo_title: "Got an idea?<br>Let's bring it to life!", side_promo_desc: "See how I transform ideas into stunning, functional designs.", side_book: "Book a Coffee Chat", side_cv: "Download CV", side_follow: "FOLLOW ME",
        hero_my: "my", hero_portfolio: "portfolio", hero_subtitle: "Graphic Designer & Web Developer", hero_btn: "My Work",
        sec_about: "About <span>Me</span>", about_hello: "Hello, I'm <br> <span>M. Alfarel</span>",
        about_d1: "Hi! I am <strong>M. Alfarel</strong>, usually called <strong>AL</strong>. Currently, I am pursuing a double degree in two complementary fields: Informatics Engineering at Institut Teknologi Sumatera (ITERA) and Business Management at BINUS University.",
        about_d2: "My journey into IT didn't start with a coding background; in fact, I am actively building my programming skills from the ground up. Historically, my core expertise has been deeply rooted in Graphic Design, where I regularly craft visual materials such as digital posters, banners, and professional pitch decks.",
        about_d3: "My practical skills were significantly shaped through hands-on work experiences. I refined my hardware troubleshooting abilities during my internship at CV. RKU Komputer, and gained valuable operational and managerial insights while working at Bawaslu. I chose to study IT to establish a strong technical foundation that perfectly complements my creative and practical skill sets.",
        about_m1: "Hi, I am <strong>M. Alfarel</strong> (AL). I am currently pursuing a double degree in Informatics (ITERA) and Business (BINUS).",
        about_m2: "My core focus has always been Graphic Design. Now, I am highly enthusiastic about building my coding skills from zero.",
        about_m3: "I bring a strong track record of practical hardware repair (CV. RKU Komputer) and operational management experience (Bawaslu).",
        about_btn: "Read More <i class='fas fa-arrow-down'></i>",
        
        tab_acad: "Academic", tab_achieve: "Achievement", tab_exp: "Experience", tab_cert: "Certificate",
        badge_state: "State Univ.", badge_private: "Private Univ.", badge_religion: "Religion", badge_academic: "Academic", badge_intern: "Internship", badge_work: "Work", badge_community: "Community",
        desc_informatics: "Informatics Engineering", desc_business: "Business", desc_intern: "Professional Internship", desc_staff: "Staff / Intern", desc_participant: "Batch 4 Participant", desc_bawaslu: "Badan Pengawas Pemilihan Umum", desc_pkl: "Praktik Kerja Lapangan", btn_about: "About", btn_view: "View",

        sec_skill_sub: "PROFESSIONAL VALUE", sec_skill_title: "Skills & <span>Tools</span>",
        filter_s_core: "Core", filter_s_exp: "Expertise", filter_s_lang: "Languages", filter_s_tools: "Tools",
        cat_exp: "Core Expertise", cat_lang: "Language & Framework", cat_tool: "Tools & Environment",

        sec_proj_sub: "PORTFOLIO ARCHIVE", sec_proj_title: "Featured <span>Projects</span>",
        filter_p_all: "All", filter_p_des: "Design & Creative", filter_p_web: "Web Dev", filter_p_hard: "IT & Hardware", filter_p_res: "Research", empty_project_msg: "Oops! No projects in this category yet. Stay tuned!",
        p1_title: "Social Media & Digital Campaign", p1_desc: "A comprehensive compilation of social media visual assets, digital campaigns, and event identities.",
        p2_title: "Brand Identity & Print Materials", p2_desc: "Visual brand identity design, including custom logos, banners, brochures, and corporate ID cards.",
        p3_title: "Corporate Deck & Presentations", p3_desc: "Professional and engaging presentation layouts thoughtfully tailored for corporate, institutional, and academic purposes.",
        p4_title: "Interactive Portfolio Website", p4_desc: "Development of an interactive portfolio website featuring custom animations and pure DOM manipulation built from scratch.",
        p5_title: "Hardware Repair & OS Customization", p5_desc: "Physical PC/laptop hardware troubleshooting and deep system customization within the Linux (Ubuntu) ecosystem.",
        
        sec_cont_sub: "GET IN TOUCH", sec_cont_title: "Contact <span>Me</span>",
        c_email: "Email Address", c_phone: "Phone (Optional)", c_name: "Full Name", c_message: "Write your message here...", c_submit: "Submit Message",
        c_newsletter_title: "Stay Updated", c_newsletter_desc: "Subscribe to my newsletter for the latest tech insights and exclusive behind-the-scenes looks at my projects.", c_newsletter_email: "Enter your email address", c_newsletter_submit: "Subscribe Now",
        info_phone: "Open to freelance opportunities and full-time positions. Let's discuss how I can bring value to your team.",
        info_email: "Prefer written communication? Feel free to drop me an email anytime. I typically respond within 24 hours.",
        info_loc: "Currently based in Palembang, South Sumatra. Highly open to remote work opportunities globally.",

        f_brand_desc: "Transforming complex challenges into elegant, user-centric digital solutions. Let's build something extraordinary together.",
        f_nav: "Navigation", f_quick_links: "Quick Links", f_services: "Services", f_copyright: "&copy; 2026 M. Alfarel Portfolio •"
    },
    id: {
        nav_home: "Beranda", nav_about: "Profil", nav_skills: "Kompetensi", nav_project: "Proyek", nav_contact: "Hubungi", nav_lets_talk: "Mari Berbincang",
        side_promo_title: "Punya ide brilian?<br>Mari wujudkan!", side_promo_desc: "Lihat bagaimana saya menerjemahkan ide Anda menjadi desain yang fungsional dan estetis.", side_book: "Jadwalkan Diskusi", side_cv: "Unduh CV", side_follow: "IKUTI SAYA",
        hero_my: "arsip", hero_portfolio: "portofolio", hero_subtitle: "Desainer Grafis & Web Developer", hero_btn: "Jelajahi Karya",
        sec_about: "Mengenal <span>Saya</span>", about_hello: "Halo, Saya <br> <span>M. Alfarel</span>",
        about_d1: "Halo! Saya <strong>M. Alfarel</strong>, akrab dipanggil <strong>AL</strong>. Saat ini, saya sedang menempuh program <i>double degree</i> di dua bidang yang saling melengkapi: Teknik Informatika di Institut Teknologi Sumatera (ITERA) dan Manajemen Bisnis di BINUS University.",
        about_d2: "Perjalanan saya di dunia IT tidak berawal dari keahlian <i>coding</i>—faktanya, saya membangun pemahaman pemrograman ini benar-benar dari nol. Sebelumnya, fondasi keahlian saya berakar kuat di bidang Desain Grafis, tempat saya terbiasa merancang berbagai materi visual seperti poster digital, <i>banner</i>, hingga <i>pitch deck</i> presentasi yang profesional.",
        about_d3: "Keterampilan praktis saya banyak terbentuk melalui pengalaman terjun langsung ke lapangan. Kemampuan <i>troubleshooting</i> dan perbaikan <i>hardware</i> saya asah ketika magang di CV. RKU Komputer, sementara pemahaman terkait operasional saya dapatkan dari pengalaman bekerja di Bawaslu. Saya memutuskan untuk mendalami IT guna membangun fondasi teknis yang solid, sekaligus menyatukan sisi kreatif dan praktis yang saya miliki.",
        about_m1: "Halo, saya <strong>M. Alfarel</strong> (AL). Saat ini saya sedang menempuh <i>double degree</i> di bidang Informatika (ITERA) dan Bisnis (BINUS).",
        about_m2: "Fokus keahlian saya berakar pada Desain Grafis. Kini, saya juga antusias membangun kemampuan <i>coding</i> secara mandiri dari nol.",
        about_m3: "Saya memiliki rekam jejak praktis dalam perbaikan <i>hardware</i> (CV. RKU Komputer) dan pengalaman manajerial operasional (Bawaslu).",
        about_btn: "Baca Selengkapnya <i class='fas fa-arrow-down'></i>",
        
        tab_acad: "Akademik", tab_achieve: "Pencapaian", tab_exp: "Pengalaman", tab_cert: "Sertifikat",
        badge_state: "PTN", badge_private: "PTS", badge_religion: "Agama", badge_academic: "Akademik", badge_intern: "Magang", badge_work: "Kerja", badge_community: "Komunitas",
        desc_informatics: "Teknik Informatika", desc_business: "Manajemen Bisnis", desc_intern: "Magang Profesional", desc_staff: "Staf / Intern", desc_participant: "Peserta Batch 4", desc_bawaslu: "Badan Pengawas Pemilihan Umum", desc_pkl: "Praktik Kerja Lapangan", btn_about: "Detail", btn_view: "Lihat Dokumen",

        sec_skill_sub: "NILAI PROFESIONAL", sec_skill_title: "Kompetensi & <span>Alat</span>",
        filter_s_core: "Utama", filter_s_exp: "Spesialisasi", filter_s_lang: "Bahasa", filter_s_tools: "Tools",
        cat_exp: "Bidang Keahlian", cat_lang: "Bahasa & Framework", cat_tool: "Software & Environment",

        sec_proj_sub: "ARSIP KARYA", sec_proj_title: "Proyek <span>Pilihan</span>",
        filter_p_all: "Semua", filter_p_des: "Desain & Kreatif", filter_p_web: "Web Dev", filter_p_hard: "IT & Hardware", filter_p_res: "Riset", empty_project_msg: "Oops! Belum ada proyek di kategori ini. Tunggu ya!",
        p1_title: "Kampanye Digital & Media Sosial", p1_desc: "Kompilasi komprehensif aset visual media sosial, kampanye digital, dan identitas acara.",
        p2_title: "Identitas Merek & Material Cetak", p2_desc: "Perancangan identitas visual merek, mencakup logo kustom, spanduk, brosur, hingga ID card korporat.",
        p3_title: "Presentasi & Deck Korporat", p3_desc: "Desain tata letak presentasi yang profesional dan rapi, disesuaikan untuk kebutuhan korporat, instansi, maupun akademis.",
        p4_title: "Website Portofolio Interaktif", p4_desc: "Pengembangan website portofolio interaktif yang dibangun murni dari nol menggunakan manipulasi DOM dan animasi kustom.",
        p5_title: "Perbaikan Hardware & OS Linux", p5_desc: "Pemecahan masalah komponen fisik PC/Laptop dan kustomisasi mendalam sistem pada ekosistem operasi Linux (Ubuntu).",
        
        sec_cont_sub: "MARI TERHUBUNG", sec_cont_title: "Hubungi <span>Saya</span>",
        c_email: "Alamat Email", c_phone: "Nomor Telepon (Opsional)", c_name: "Nama Lengkap", c_message: "Tulis pesan Anda di sini...", c_submit: "Kirim Pesan",
        c_newsletter_title: "Tetap Terkini", c_newsletter_desc: "Berlangganan buletin saya untuk mendapatkan insight teknologi terbaru dan melihat di balik layar proyek-proyek saya.", c_newsletter_email: "Masukkan alamat email", c_newsletter_submit: "Berlangganan",
        info_phone: "Terbuka untuk kolaborasi freelance maupun posisi penuh waktu (full-time). Mari diskusikan bagaimana saya bisa memberikan nilai tambah untuk Anda.",
        info_email: "Lebih nyaman berkomunikasi lewat tulisan? Jangan ragu untuk mengirimkan email. Saya biasanya merespons dalam kurun waktu 24 jam.",
        info_loc: "Saat ini berdomisili di Palembang, Sumatera Selatan, dan sangat terbuka untuk kesempatan kerja remote secara global.",

        f_brand_desc: "Mengubah permasalahan kompleks menjadi solusi digital yang elegan dan berpusat pada pengguna. Mari berkolaborasi dan ciptakan sesuatu yang luar biasa.",
        f_nav: "Navigasi", f_quick_links: "Tautan Singkat", f_services: "Layanan", f_copyright: "&copy; 2026 Portofolio M. Alfarel •"
    },
    zh: {
        nav_home: "首页", nav_about: "关于我", nav_skills: "专业能力", nav_project: "项目作品", nav_contact: "联系我", nav_lets_talk: "立即沟通",
        side_promo_title: "有绝妙的想法？<br>让我们实现它！", side_promo_desc: "看看我如何将您的想法转化为令人惊叹的实用设计。", side_book: "预约交流", side_cv: "下载简历", side_follow: "关注我",
        hero_my: "我的", hero_portfolio: "作品集", hero_subtitle: "平面设计师 & 网页开发者", hero_btn: "探索作品",
        sec_about: "关于 <span>我</span>", about_hello: "你好，我是 <br> <span>M. Alfarel</span>",
        about_d1: "您好！我是 <strong>M. Alfarel</strong>，大家通常叫我 <strong>AL</strong>。目前我正在攻读双学位，在苏门答腊理工学院 (ITERA) 学习信息工程，同时在建国大学 (BINUS) 学习商业管理。",
        about_d2: "我的IT之旅并非源于编程背景；事实上，我是从零开始稳步构建编程技能的。一直以来，我的核心专长扎根于平面设计领域，经常创作数字海报、横幅和专业的商业演示文稿。",
        about_d3: "我的实践技能是在真实的职场经历中磨练出来的。在 CV. RKU Komputer 实习期间，我提升了硬件故障排除能力；而在 Bawaslu 的工作则让我积累了宝贵的运营管理经验。我决定深耕 IT 领域，是为了建立扎实的技术基础，从而完美融合我的创造力与实践能力。",
        about_m1: "您好，我是 <strong>M. Alfarel (AL)</strong>。目前在 ITERA 和 BINUS 攻读双学位。",
        about_m2: "我的核心专长是平面设计。如今，我也怀着极大的热情从零开始构建编程能力。",
        about_m3: "我具备扎实的硬件维修实操经验（CV. RKU Komputer）以及行政管理洞察力（Bawaslu）。",
        about_btn: "阅读更多 <i class='fas fa-arrow-down'></i>",
        
        tab_acad: "教育背景", tab_achieve: "荣誉成就", tab_exp: "实践经验", tab_cert: "资质证书",
        badge_state: "国立大学", badge_private: "私立大学", badge_religion: "宗教", badge_academic: "学术", badge_intern: "实习", badge_work: "工作", badge_community: "社区",
        desc_informatics: "信息工程", desc_business: "商业管理", desc_intern: "专业实习", desc_staff: "职员 / 实习生", desc_participant: "第 4 期参与者", desc_bawaslu: "大选监督机构", desc_pkl: "实地工作实践", btn_about: "详情", btn_view: "查看文档",

        sec_skill_sub: "专业价值", sec_skill_title: "能力与 <span>工具</span>",
        filter_s_core: "核心", filter_s_exp: "专长", filter_s_lang: "语言", filter_s_tools: "工具",
        cat_exp: "核心专长", cat_lang: "编程语言与框架", cat_tool: "软件与环境",

        sec_proj_sub: "作品档案", sec_proj_title: "精选 <span>项目</span>",
        filter_p_all: "全部", filter_p_des: "设计与创意", filter_p_web: "网页开发", filter_p_hard: "IT与硬件", filter_p_res: "学术研究", empty_project_msg: "哎呀！该类别尚无项目。敬请期待！",
        p1_title: "社交媒体与数字营销", p1_desc: "全面汇集了社交媒体视觉资产、数字营销活动和活动标识设计。",
        p2_title: "品牌形象与印刷材料", p2_desc: "视觉品牌形象设计，包括定制徽标、横幅、宣传册以及企业身份证设计。",
        p3_title: "企业演示文稿", p3_desc: "为企业、机构和学术目的量身定制的专业且引人入胜的演示文稿排版设计。",
        p4_title: "交互式作品集网站", p4_desc: "从零开始开发的一个交互式作品集网站，包含自定义动画和纯 DOM 操作。",
        p5_title: "硬件维修与Linux定制", p5_desc: "物理 PC/笔记本电脑硬件故障排除，以及在 Linux (Ubuntu) 生态系统中的深度系统定制。",
        
        sec_cont_sub: "保持联系", sec_cont_title: "联系 <span>我</span>",
        c_email: "电子邮箱", c_phone: "电话 (可选)", c_name: "您的姓名", c_message: "在这里写下您的信息...", c_submit: "提交信息",
        c_newsletter_title: "订阅更新", c_newsletter_desc: "订阅我的简报，获取最新的技术见解以及我项目的独家幕后故事。", c_newsletter_email: "输入您的电子邮件地址", c_newsletter_submit: "立即订阅",
        info_phone: "接受自由职业项目和全职工作。欢迎探讨我能如何为您的团队带来价值。",
        info_email: "更喜欢文字交流？随时给我发邮件。我通常会在 24 小时内回复。",
        info_loc: "目前常驻南苏门答腊巨港。非常期待全球范围内的远程工作机会。",

        f_brand_desc: "将复杂挑战转化为优雅的、以用户为中心的数字解决方案。让我们一起创造非凡。",
        f_nav: "导航", f_quick_links: "快速链接", f_services: "服务", f_copyright: "&copy; 2026 M. Alfarel 作品集 •"
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
        subtitle: {
            en: "Elementary School • 2013 - 2019 • Palembang",
            id: "Sekolah Dasar • 2013 - 2019 • Palembang",
            zh: "小学 • 2013 - 2019 • 巨港"
        },
        badges: {
            en: ["Academic", "Primary Education"],
            id: ["Akademik", "Pendidikan Dasar"],
            zh: ["学术", "基础教育"]
        },
        desc: {
            en: "My early educational years where I developed fundamental learning habits, discipline, and a natural curiosity for problem-solving. This period laid the groundwork for my academic persistence.",
            id: "Tahun-tahun awal pendidikan tempat saya membangun kebiasaan belajar fundamental, kedisiplinan, dan rasa ingin tahu alami untuk memecahkan masalah. Periode ini menjadi fondasi kegigihan akademik saya.",
            zh: "在我的早期教育阶段，我养成了基本的学习习惯、纪律性以及解决问题的天然好奇心。这一时期为我的学术坚持奠定了基础。"
        },
        achievements: {
            en: ["Active participant in school activities", "Graduated with excellent academic records"],
            id: ["Aktif dalam kegiatan sekolah", "Lulus dengan catatan akademik yang sangat baik"],
            zh: ["积极参与学校活动", "以优异的学业成绩毕业"]
        },
        image: ""
    },
    "MTsN 1 Palembang": {
        icon: "fa-mosque",
        subtitle: {
            en: "Junior High School • 2019 - 2022 • Palembang",
            id: "SMP / MTs • 2019 - 2022 • Palembang",
            zh: "初中 • 2019 - 2022 • 巨港"
        },
        badges: {
            en: ["Academic", "Secondary Education"],
            id: ["Akademik", "Pendidikan Menengah"],
            zh: ["学术", "中等教育"]
        },
        desc: {
            en: "A balanced educational phase combining general studies with religious education. During this time, I began developing leadership basics and a stronger interest in technology and organization.",
            id: "Fase pendidikan yang menyeimbangkan studi umum dengan pendidikan agama. Pada masa ini, saya mulai mengembangkan dasar kepemimpinan dan minat yang lebih kuat pada teknologi dan keorganisasian.",
            zh: "这是一个将一般学习与宗教教育相结合的平衡教育阶段。在此期间，我开始培养领导力基础，并对技术和组织产生了更浓厚的兴趣。"
        },
        achievements: {
            en: ["Active in extracurricular activities", "Consistently ranked among the top students in class"],
            id: ["Aktif dalam kegiatan ekstrakurikuler", "Konsisten meraih peringkat atas di kelas"],
            zh: ["积极参与课外活动", "成绩始终名列班级前茅"]
        },
        image: ""
    },
    "SMKN 8 Palembang": {
        icon: "fa-laptop-code",
        subtitle: {
            en: "Vocational High School • 2022 - 2025 • Palembang",
            id: "Sekolah Menengah Kejuruan • 2022 - 2025 • Palembang",
            zh: "职业高中 • 2022 - 2025 • 巨港"
        },
        badges: {
            en: ["Vocational", "Technology"],
            id: ["Kejuruan", "Teknologi"],
            zh: ["职业", "技术"]
        },
        desc: {
            en: "Focused heavily on practical technology skills. It was here that I discovered and honed my natural talent for analyzing, troubleshooting, and repairing computer and laptop hardware.",
            id: "Sangat berfokus pada keterampilan teknologi praktis. Di sinilah saya menemukan dan mengasah bakat alami saya dalam menganalisis, memecahkan masalah, dan memperbaiki perangkat keras komputer dan laptop.",
            zh: "高度专注于实用的技术技能。正是在这里，我发现并磨练了自己在分析、排除故障和修理电脑及笔记本硬件方面的天赋。"
        },
        achievements: {
            en: ["Mastered PC and Laptop assembly and hardware troubleshooting", "Passed the technology vocational competency test with high marks"],
            id: ["Menguasai perakitan dan pemecahan masalah perangkat keras PC/Laptop", "Lulus uji kompetensi kejuruan teknologi dengan nilai tinggi"],
            zh: ["精通PC和笔记本电脑组装及硬件故障排除", "以高分通过技术职业能力测试"]
        },
        image: ""
    },
    "Institut Teknologi Sumatera": {
        icon: "fa-university",
        subtitle: {
            en: "Informatics Engineering • 2025 - Present",
            id: "Teknik Informatika • 2025 - Sekarang",
            zh: "信息工程 • 2025 - 至今"
        },
        badges: {
            en: ["State University", "Informatics"],
            id: ["PTN", "Informatika"],
            zh: ["国立大学", "信息学"]
        },
        desc: {
            en: "Diving into pure programming. While I didn't initially start with a natural love for coding, I deliberately chose this major with a strong determination to learn and master it from scratch. I actively focus on C++, Python, Web Development, and Linux (Ubuntu) customization.",
            id: "Terjun langsung ke dunia pemrograman. Meski awalnya tidak memiliki latar belakang coding, saya sengaja memilih jurusan ini dengan tekad kuat untuk belajar dari nol. Saya aktif berfokus pada C++, Python, Web Development, dan kustomisasi Linux (Ubuntu).",
            zh: "深入纯编程领域。虽然我最初并不是天生热爱编程，但我怀着从零开始学习和掌握它的坚定决心，刻意选择了这个专业。我积极专注于 C++、Python、Web 开发和 Linux (Ubuntu) 定制。"
        },
        achievements: {
            en: ["Explored biomimicry in engineering projects (focusing on honeycomb structures and biological concrete)", "Actively compiling academic reports and formatting complex documents using LaTeX", "Initiated an ongoing academic research project starting in May 2026"],
            id: ["Mengeksplorasi biomimikri dalam proyek teknik (fokus pada struktur sarang lebah dan beton biologis)", "Aktif menyusun laporan akademik dan memformat dokumen kompleks menggunakan LaTeX", "Memulai proyek riset akademik yang berlangsung sejak Mei 2026"],
            zh: ["在工程项目中探索仿生学（专注于蜂窝结构和生物混凝土）", "积极使用 LaTeX 编写学术报告并排版复杂的文档", "于 2026 年 5 月启动了一项正在进行的学术研究项目"]
        },
        image: ""
    },
    "BINUS University": {
        icon: "fa-building",
        subtitle: {
            en: "Business / IT • 2026 - Present",
            id: "Manajemen Bisnis / IT • 2026 - Sekarang",
            zh: "商业 / IT • 2026 - 至今"
        },
        badges: {
            en: ["Private University", "Higher Education"],
            id: ["PTS", "Pendidikan Tinggi"],
            zh: ["私立大学", "高等教育"]
        },
        desc: {
            en: "I transitioned to BINUS University in early 2026 to better accommodate my work responsibilities while continuing my higher education. This path allows me to integrate strategic business mindsets with my technical engineering background.",
            id: "Saya bertransisi ke BINUS University pada awal 2026 untuk menyelaraskan tanggung jawab pekerjaan dengan pendidikan tinggi saya. Jalur ini memungkinkan saya memadukan pola pikir strategis bisnis dengan latar belakang teknis yang saya miliki.",
            zh: "我于 2026 年初转入建国大学，以便在继续接受高等教育的同时更好地兼顾我的工作职责。这条道路使我能够将战略商业思维与我的技术工程背景结合起来。"
        },
        achievements: {
            en: ["Successfully managing academic responsibilities alongside professional work commitments", "Building a strong professional network and learning operational business strategies"],
            id: ["Berhasil mengelola tanggung jawab akademik bersamaan dengan komitmen kerja profesional", "Membangun jaringan profesional yang kuat dan mempelajari strategi bisnis operasional"],
            zh: ["成功在承担专业工作承诺的同时管理好学业责任", "建立强大的专业网络并学习运营商业战略"]
        },
        image: ""
    },
    
    // ---- EXPERIENCE ----
    "CV. RKU Komputer": {
        icon: "fa-tools",
        subtitle: {
            en: "Internship • Jul 2023 - Dec 2023",
            id: "Magang • Jul 2023 - Des 2023",
            zh: "实习 • 2023年7月 - 2023年12月"
        },
        badges: {
            en: ["Internship", "Hardware Technician"],
            id: ["Magang", "Teknisi Hardware"],
            zh: ["实习", "硬件技术员"]
        },
        desc: {
            en: "Stepped directly into the professional workforce to handle real-world computer and laptop issues. I utilized my practical hardware repair talents to provide efficient IT solutions and maintenance for clients.",
            id: "Terjun langsung ke dunia kerja profesional untuk menangani masalah komputer dan laptop di dunia nyata. Saya menggunakan bakat perbaikan perangkat keras saya untuk memberikan solusi TI dan pemeliharaan yang efisien bagi klien.",
            zh: "直接步入职场，处理现实世界中的电脑和笔记本问题。我运用我实际的硬件维修天赋，为客户提供高效的 IT 解决方案和维护。"
        },
        achievements: {
            en: ["Performed extensive hardware & software troubleshooting for various devices", "Executed successful component replacements and laptop maintenance for clients"],
            id: ["Melakukan pemecahan masalah perangkat keras & lunak secara menyeluruh untuk berbagai perangkat", "Sukses melakukan penggantian komponen dan perawatan laptop klien"],
            zh: ["对各种设备进行了广泛的硬件和软件故障排除", "成功为客户执行了组件更换和笔记本电脑维护"]
        },
        image: ""
    },
    "Bawaslu Provinsi Sumsel": {
        icon: "fa-briefcase",
        subtitle: {
            en: "Staff / Intern • Jul 2024 - Mar 2025",
            id: "Staf / Magang • Jul 2024 - Mar 2025",
            zh: "职员 / 实习生 • 2024年7月 - 2025年3月"
        },
        badges: {
            en: ["Work", "Government"],
            id: ["Kerja", "Pemerintahan"],
            zh: ["工作", "政府机构"]
        },
        desc: {
            en: "Assisted in the operational and administrative tasks at the provincial election supervisory body. This role significantly sharpened my discipline, administrative accuracy, and professionalism within a formal work environment.",
            id: "Membantu tugas operasional dan administratif di Badan Pengawas Pemilihan Umum tingkat provinsi. Peran ini sangat mempertajam kedisiplinan, ketelitian administratif, dan profesionalisme saya dalam lingkungan kerja formal.",
            zh: "协助省级选举监督机构的日常运营和行政任务。这个角色极大地锻炼了我在正式工作环境中的纪律性、行政准确性和专业素养。"
        },
        achievements: {
            en: ["Managed crucial documents and maintained highly organized administrative archives", "Supported the preparation and supervision of election administration processes"],
            id: ["Mengelola dokumen krusial dan merawat arsip administratif yang sangat rapi", "Mendukung persiapan dan pengawasan proses administrasi pemilu"],
            zh: ["管理重要文件并维护高度条理化的行政档案", "支持选举行政程序的准备和监督工作"]
        },
        image: ""
    },
    "Novo Club": {
        icon: "fa-lightbulb",
        subtitle: {
            en: "Batch 4 Participant • 2026",
            id: "Peserta Batch 4 • 2026",
            zh: "第 4 期参与者 • 2026"
        },
        badges: {
            en: ["Community", "Youth Leadership"],
            id: ["Komunitas", "Kepemimpinan Pemuda"],
            zh: ["社区", "青年领导力"]
        },
        desc: {
            en: "Joined this youth leadership development program to sharpen my innovative leadership skills, broaden my network, and engage in impactful community projects alongside driven peers.",
            id: "Bergabung dengan program pengembangan kepemimpinan pemuda ini untuk mengasah keterampilan kepemimpinan inovatif, memperluas jaringan, dan terlibat dalam proyek komunitas yang berdampak bersama rekan-rekan yang antusias.",
            zh: "加入这个青年领导力发展项目，以敏锐我的创新领导技能，拓宽我的网络，并与志同道合的同龄人一起参与有影响力的社区项目。"
        },
        achievements: {
            en: ["Actively participated in the Batch 4 orientation and application phases", "Created compelling essays and social media content for innovative leadership campaigns"],
            id: ["Aktif berpartisipasi dalam fase orientasi dan aplikasi Batch 4", "Membuat esai dan konten media sosial yang menarik untuk kampanye kepemimpinan inovatif"],
            zh: ["积极参与第 4 期的迎新和申请阶段", "为创新领导力活动创作了引人注目的文章和社交媒体内容"]
        },
        image: ""
    },

    // ---- ACHIEVEMENT & CERTIFICATE ----
    "1st Place Adzan Competition": {
        icon: "fa-microphone-alt",
        subtitle: {
            en: "Champion • STIE & AKUBANK Mulia Darma Pratama",
            id: "Juara 1 • STIE & AKUBANK Mulia Darma Pratama",
            zh: "冠军 • STIE & AKUBANK Mulia Darma Pratama"
        },
        badges: {
            en: ["1st Winner", "Religion", "City Level"],
            id: ["Juara 1", "Agama", "Tingkat Kota"],
            zh: ["冠军", "宗教", "市级"]
        },
        desc: {
            en: "Secured 1st Place in the city-wide high school Adzan competition organized by STIE & AKUBANK Mulia Darma Pratama. Participating in this event significantly built my public speaking confidence and vocal projection.",
            id: "Meraih Juara 1 dalam lomba Adzan SMA se-Kota Palembang yang diselenggarakan oleh STIE & AKUBANK Mulia Darma Pratama. Mengikuti acara ini sangat membangun kepercayaan diri saya dalam berbicara di depan umum dan proyeksi vokal.",
            zh: "在 STIE & AKUBANK Mulia Darma Pratama 组织的全市高中唤礼比赛中荣获第一名。参加这项活动极大地增强了我的公众演讲信心和发声技巧。"
        },
        achievements: {
            en: ["1st Place Adzan Competition across Palembang City", "Outperformed dozens of participants from various high schools"],
            id: ["Juara 1 Lomba Adzan se-Kota Palembang", "Mengungguli puluhan peserta dari berbagai SMA"],
            zh: ["巨港全市高中唤礼比赛第一名", "在众多高中参赛者中脱颖而出"]
        },
        image: "" 
    },
    "2nd Place Asmaul Husna": {
        icon: "fa-book-open",
        subtitle: {
            en: "Runner Up • SMAN 7 Palembang",
            id: "Juara 2 • SMAN 7 Palembang",
            zh: "亚军 • SMAN 7 Palembang"
        },
        badges: {
            en: ["2nd Winner", "Religion", "Provincial Level"],
            id: ["Juara 2", "Agama", "Tingkat Provinsi"],
            zh: ["亚军", "宗教", "省级"]
        },
        desc: {
            en: "Achieved 2nd Place in the provincial high school Asmaul Husna competition held at SMAN 7 Palembang. This contest rigorously tested memory, precise pronunciation (tajwid), and mental composure under pressure.",
            id: "Meraih Juara 2 dalam lomba Asmaul Husna tingkat SMA se-Provinsi yang diadakan di SMAN 7 Palembang. Kontes ini menguji dengan ketat daya ingat, pelafalan yang tepat (tajwid), dan ketenangan mental di bawah tekanan.",
            zh: "在 SMAN 7 Palembang 举行的省级高中真主九十九个尊名比赛中获得第二名。这场比赛严格测试了记忆力、准确的发音 (tajwid) 以及压力下的心理素质。"
        },
        achievements: {
            en: ["2nd Place Asmaul Husna Competition in South Sumatra", "Demonstrated strong dedication in memorizing and reciting the Asmaul Husna"],
            id: ["Juara 2 Lomba Asmaul Husna se-Sumatera Selatan", "Menunjukkan dedikasi kuat dalam menghafal dan melafalkan Asmaul Husna"],
            zh: ["南苏门答腊省真主九十九个尊名比赛第二名", "在记忆和背诵真主九十九个尊名方面表现出强烈的专注力"]
        },
        image: ""
    },
    "Top Class Academic Rank": {
        icon: "fa-medal",
        subtitle: {
            en: "Academic Excellence • SMKN 8 Palembang",
            id: "Keunggulan Akademik • SMKN 8 Palembang",
            zh: "学业优异 • SMKN 8 Palembang"
        },
        badges: {
            en: ["Top Rank", "Academic", "Consistent"],
            id: ["Peringkat Atas", "Akademik", "Konsisten"],
            zh: ["名列前茅", "学术", "坚持不懈"]
        },
        desc: {
            en: "Received 4 certificates of excellence in recognition of top academic rankings throughout my studies. This achievement highlights my consistency, discipline, and strong commitment to formal education.",
            id: "Menerima 4 sertifikat keunggulan sebagai pengakuan atas peringkat akademik teratas selama masa studi saya. Pencapaian ini menyoroti konsistensi, kedisiplinan, dan komitmen kuat saya pada pendidikan formal.",
            zh: "在我的学习期间，因学业成绩名列前茅而获得 4 张优秀证书。这一成就凸显了我的坚持、纪律和对正规教育的强烈承诺。"
        },
        achievements: {
            en: ["Awarded a total of 4 class ranking certificates", "Consistently maintained high academic grades throughout high school"],
            id: ["Dianugerahi total 4 sertifikat peringkat kelas", "Secara konsisten mempertahankan nilai akademik tinggi sepanjang masa SMA"],
            zh: ["共获得 4 张班级排名证书", "在高中阶段始终保持优异的学业成绩"]
        },
        image: ""
    },
    "Bawaslu Internship Certificate": {
        icon: "fa-file-signature",
        subtitle: {
            en: "Official Certificate • Bawaslu Prov. Sumsel",
            id: "Sertifikat Resmi • Bawaslu Prov. Sumsel",
            zh: "官方证书 • Bawaslu Prov. Sumsel"
        },
        badges: {
            en: ["Internship", "Government", "Administration"],
            id: ["Magang", "Pemerintahan", "Administrasi"],
            zh: ["实习", "政府机构", "行政管理"]
        },
        desc: {
            en: "An official certificate confirming the successful completion of my internship at the General Election Supervisory Agency (Bawaslu) of South Sumatra. It recognizes my strict discipline and tangible administrative contributions.",
            id: "Sertifikat resmi yang mengonfirmasi penyelesaian sukses magang saya di Badan Pengawas Pemilihan Umum (Bawaslu) Sumatera Selatan. Sertifikat ini mengakui disiplin ketat dan kontribusi administratif nyata saya.",
            zh: "一份官方证书，确认我成功完成了在南苏门答腊省大选监督机构 (Bawaslu) 的实习。它认可了我严格的纪律和实实在在的行政贡献。"
        },
        achievements: {
            en: ["Completed the internship program with highly satisfactory evaluations", "Received special appreciation for meticulous archive management"],
            id: ["Menyelesaikan program magang dengan evaluasi sangat memuaskan", "Mendapat apresiasi khusus atas pengelolaan arsip yang teliti"],
            zh: ["以极高的满意度评价完成实习计划", "因细致的档案管理而获得特别赞赏"]
        },
        image: ""
    },
    "RKU Komputer Internship Certificate": {
        icon: "fa-tools",
        subtitle: {
            en: "Official Certificate • CV. RKU Komputer",
            id: "Sertifikat Resmi • CV. RKU Komputer",
            zh: "官方证书 • CV. RKU Komputer"
        },
        badges: {
            en: ["Internship", "Hardware", "Technical Skill"],
            id: ["Magang", "Hardware", "Skill Teknis"],
            zh: ["实习", "硬件", "技术技能"]
        },
        desc: {
            en: "Certificate of completion for my field internship at CV. RKU Komputer. This credential validates my technical capability to troubleshoot and resolve hardware and software issues within a fast-paced, real-world work environment.",
            id: "Sertifikat penyelesaian untuk praktik kerja lapangan saya di CV. RKU Komputer. Kredensial ini memvalidasi kemampuan teknis saya untuk memecahkan masalah dan menyelesaikan masalah perangkat keras dan perangkat lunak dalam lingkungan kerja dunia nyata yang serba cepat.",
            zh: "我在 CV. RKU Komputer 实地实习的结业证书。该证书验证了我在快节奏的现实工作环境中排除和解决硬件和软件问题的技术能力。"
        },
        achievements: {
            en: ["Recognized for proficiency in handling client hardware issues", "Passed the field practice with excellent performance evaluations"],
            id: ["Diakui karena kecakapannya dalam menangani masalah perangkat keras klien", "Lulus praktik lapangan dengan evaluasi kinerja yang sangat baik"],
            zh: ["因熟练处理客户硬件问题而获得认可", "以优异的绩效评估通过了实地实践"]
        },
        image: ""
    }
};

const skillsData = {
    // ================= EXPERTISE =================
    "UI/UX Design": {
        subtitle: { en: "SPECIALTY DETAILS", id: "DETAIL SPESIALISASI", zh: "专长详情" },
        desc: { en: "The process of designing aesthetic interfaces and ensuring a logical, seamless, and intuitive user experience (UX).", id: "Proses merancang antarmuka yang estetis dan memastikan pengalaman pengguna (UX) yang logis, mulus, dan intuitif.", zh: "设计美观界面并确保合理、无缝和直观的用户体验 (UX) 的过程。" },
        expertise: { en: ["User Research & Wireframing", "Interactive Prototyping", "Design Systems", "Usability & Layouting"], id: ["Riset Pengguna & Wireframing", "Prototyping Interaktif", "Sistem Desain", "Usabilitas & Tata Letak"], zh: ["用户研究与线框图", "交互式原型设计", "设计系统", "可用性与布局"] }
    },
    "Graphic Design": {
        subtitle: { en: "SPECIALTY DETAILS", id: "DETAIL SPESIALISASI", zh: "专长详情" },
        desc: { en: "Creating engaging visual compositions for digital and print media, combining typography, colors, and illustrations.", id: "Menciptakan komposisi visual yang menarik untuk media digital dan cetak, memadukan tipografi, warna, dan ilustrasi.", zh: "结合排版、色彩和插图，为数字和印刷媒体创建引人入胜的视觉作品。" },
        expertise: { en: ["Branding & Identity Design", "Social Media Asset Creation", "Vector Illustration", "Photo Retouching & Editing"], id: ["Desain Identitas & Branding", "Pembuatan Aset Media Sosial", "Ilustrasi Vektor", "Penyuntingan & Retouch Foto"], zh: ["品牌与身份设计", "社交媒体资产创建", "矢量插图", "照片修饰与编辑"] }
    },
    "Hardware Repair": {
        subtitle: { en: "PRACTICAL SKILL", id: "KETERAMPILAN PRAKTIS", zh: "实用技能" },
        desc: { en: "My natural technical talent in diagnosing physical hardware issues and performing component repairs or replacements.", id: "Bakat teknis alami saya dalam mendiagnosis masalah fisik perangkat keras dan melakukan perbaikan atau penggantian komponen.", zh: "我在诊断物理硬件问题和进行组件维修或更换方面的天赋。" },
        expertise: { en: ["PC & Laptop Teardown", "Component Replacement", "Motherboard Diagnostics", "Thermal Paste Application & Maintenance"], id: ["Bongkar Pasang PC & Laptop", "Penggantian Komponen", "Diagnostik Motherboard", "Aplikasi Thermal Paste & Perawatan"], zh: ["台式机和笔记本电脑拆解", "组件更换", "主板诊断", "导热膏涂抹与维护"] }
    },
    "Software Repair": {
        subtitle: { en: "PRACTICAL SKILL", id: "KETERAMPILAN PRAKTIS", zh: "实用技能" },
        desc: { en: "Expertise in analyzing and troubleshooting operating systems or software issues, both on Windows and Linux.", id: "Keahlian dalam menganalisis dan memecahkan masalah sistem operasi atau perangkat lunak, baik di Windows maupun Linux.", zh: "精通分析和排除 Windows 和 Linux 操作系统或软件故障。" },
        expertise: { en: ["OS Troubleshooting & Installation", "Virus Removal & System Restore", "Driver & Software Optimization", "Data Recovery Basics"], id: ["Troubleshooting & Instalasi OS", "Penghapusan Virus & Pemulihan Sistem", "Optimasi Driver & Software", "Dasar Pemulihan Data"], zh: ["操作系统故障排除和安装", "病毒清除与系统还原", "驱动程序和软件优化", "数据恢复基础"] }
    },
    "Web Developer": {
        subtitle: { en: "CORE EXPERTISE", id: "KEAHLIAN UTAMA", zh: "核心专长" },
        desc: { en: "Building and maintaining website structures, from front-end user interfaces to basic logic management.", id: "Membangun dan merawat struktur situs web, mulai dari antarmuka pengguna front-end hingga manajemen logika dasar.", zh: "构建和维护网站结构，从前端用户界面到基本逻辑管理。" },
        expertise: { en: ["Responsive Web Design", "DOM Manipulation", "Modern Layouting (Flexbox/Grid)", "UI Animation Implementation"], id: ["Desain Web Responsif", "Manipulasi DOM", "Tata Letak Modern (Flexbox/Grid)", "Implementasi Animasi UI"], zh: ["响应式网页设计", "DOM 操作", "现代布局（Flexbox/Grid）", "UI 动画实现"] }
    },

    // ================= LANGUAGES & FRAMEWORKS =================
    "HTML": {
        subtitle: { en: "CORE LANGUAGE", id: "BAHASA UTAMA", zh: "核心语言" },
        desc: { en: "The standard markup language for creating the basic structure of a website. I use it as the fundamental stepping stone in my web development journey.", id: "Bahasa markup standar untuk membuat struktur dasar situs web. Saya menggunakannya sebagai batu loncatan mendasar dalam perjalanan pengembangan web saya.", zh: "用于创建网站基本结构的标准标记语言。我把它作为我 Web 开发之旅的基础垫脚石。" },
        expertise: { en: ["Semantic HTML5", "SEO Friendly Structuring", "Web Accessibility", "Form & Input Management"], id: ["HTML5 Semantik", "Penataan Ramah SEO", "Aksesibilitas Web", "Manajemen Form & Input"], zh: ["语义 HTML5", "SEO 友好结构", "Web 可访问性", "表单和输入管理"] }
    },
    "CSS": {
        subtitle: { en: "CORE STYLING", id: "GAYA UTAMA", zh: "核心样式" },
        desc: { en: "The language used to style web interfaces. Essential for crafting layouts, colors, and complex animations (like glassmorphism effects).", id: "Bahasa yang digunakan untuk memberi gaya antarmuka web. Sangat penting untuk membuat tata letak, warna, dan animasi kompleks (seperti efek glassmorphism).", zh: "用于设置 Web 界面样式的语言。对于设计布局、颜色和复杂动画（如玻璃拟态效果）至关重要。" },
        expertise: { en: ["Flexbox & CSS Grid", "Responsive Design (Media Queries)", "CSS Animations & Transitions", "Custom Variables"], id: ["Flexbox & CSS Grid", "Desain Responsif (Media Queries)", "Animasi & Transisi CSS", "Variabel Kustom"], zh: ["Flexbox 和 CSS 网格", "响应式设计（媒体查询）", "CSS 动画和过渡", "自定义变量"] }
    },
    "JavaScript": {
        subtitle: { en: "INTERACTIVE LOGIC", id: "LOGIKA INTERAKTIF", zh: "交互逻辑" },
        desc: { en: "The programming language that brings websites to life, enabling interactive features like modal popups, dynamic filters, and element manipulation.", id: "Bahasa pemrograman yang menghidupkan situs web, memungkinkan fitur interaktif seperti popup modal, filter dinamis, dan manipulasi elemen.", zh: "赋予网站生命的编程语言，可实现模态弹出窗口、动态过滤器和元素操作等交互式功能。" },
        expertise: { en: ["DOM Manipulation", "Event Handling", "Logic & Conditionals", "Asynchronous Basics"], id: ["Manipulasi DOM", "Penanganan Event", "Logika & Kondisional", "Dasar Asynchronous"], zh: ["DOM 操作", "事件处理", "逻辑与条件", "异步基础"] }
    },
    "PHP": {
        subtitle: { en: "BACKEND SCRIPTING", id: "SKRIP BACKEND", zh: "后端脚本" },
        desc: { en: "A server-side scripting language I am exploring to connect static websites with database systems in the future.", id: "Bahasa skrip sisi server yang sedang saya pelajari untuk menghubungkan situs web statis dengan sistem basis data di masa depan.", zh: "我正在探索的一种服务器端脚本语言，以便将来连接静态网站与数据库系统。" },
        expertise: { en: ["Server-side Logic Fundamentals", "Form Data Handling", "Basic Database Connection", "Session Management"], id: ["Dasar Logika Sisi Server", "Penanganan Data Form", "Koneksi Basis Data Dasar", "Manajemen Sesi"], zh: ["服务器端逻辑基础", "表单数据处理", "基本数据库连接", "会话管理"] }
    },
    "SQL": {
        subtitle: { en: "DATABASE MANAGEMENT", id: "MANAJEMEN BASIS DATA", zh: "数据库管理" },
        desc: { en: "The language for managing and manipulating data in relational database systems, essential for dynamic web development.", id: "Bahasa untuk mengelola dan memanipulasi data dalam sistem basis data relasional, penting untuk pengembangan web dinamis.", zh: "用于管理和操作关系数据库系统中的数据的语言，对于动态 Web 开发至关重要。" },
        expertise: { en: ["Data Querying", "Database Structuring", "CRUD Operations", "Table Relational Basics"], id: ["Kueri Data", "Penataan Basis Data", "Operasi CRUD", "Dasar Relasi Tabel"], zh: ["数据查询", "数据库结构", "CRUD 操作", "表关系基础"] }
    },
    "Python": {
        subtitle: { en: "PROGRAMMING LANGUAGE", id: "BAHASA PEMROGRAMAN", zh: "编程语言" },
        desc: { en: "A versatile language with clean syntax that I am currently learning for automation, data analysis, and computational logic.", id: "Bahasa serbaguna dengan sintaks bersih yang saat ini saya pelajari untuk otomatisasi, analisis data, dan logika komputasional.", zh: "一种语法简洁的多功能语言，我目前正在学习将其用于自动化、数据分析和计算逻辑。" },
        expertise: { en: ["Scripting & Automation", "Logic Implementation", "Data Structure Basics", "Problem Solving"], id: ["Skrip & Otomatisasi", "Implementasi Logika", "Dasar Struktur Data", "Pemecahan Masalah"], zh: ["脚本和自动化", "逻辑实现", "数据结构基础", "问题解决"] }
    },
    "C++": {
        subtitle: { en: "PROGRAMMING LANGUAGE", id: "BAHASA PEMROGRAMAN", zh: "编程语言" },
        desc: { en: "A high-performance programming language. Highly ideal for practicing computational logic and managing complex memory structures.", id: "Bahasa pemrograman berperforma tinggi. Sangat ideal untuk melatih logika komputasional dan mengelola struktur memori kompleks.", zh: "一种高性能编程语言。非常适合练习计算逻辑和管理复杂的内存结构。" },
        expertise: { en: ["Object-Oriented Programming (OOP)", "Memory Management", "Algorithm & Data Structures", "Logic Troubleshooting"], id: ["Pemrograman Berorientasi Objek (OOP)", "Manajemen Memori", "Algoritma & Struktur Data", "Troubleshooting Logika"], zh: ["面向对象编程 (OOP)", "内存管理", "算法与数据结构", "逻辑故障排除"] }
    },
    "LaTeX": {
        subtitle: { en: "DOCUMENT PREPARATION", id: "PERSIAPAN DOKUMEN", zh: "文档排版" },
        desc: { en: "A typesetting system I frequently use for creating highly precise academic reports, journals, and technical documents.", id: "Sistem typesetting yang sering saya gunakan untuk membuat laporan akademik, jurnal, dan dokumen teknis yang sangat presisi.", zh: "我经常用来创建高精度学术报告、期刊和技术文档的排版系统。" },
        expertise: { en: ["Academic Report Structuring", "Complex Formula Formatting", "Bibliography & Citations", "Template Customization"], id: ["Penataan Laporan Akademik", "Pemformatan Rumus Kompleks", "Daftar Pustaka & Sitasi", "Kustomisasi Templat"], zh: ["学术报告结构", "复杂公式格式化", "参考书目和引文", "模板定制"] }
    },

    // ================= TOOLS & ENVIRONMENT =================
    "Figma": {
        subtitle: { en: "DESIGN TOOL", id: "ALAT DESAIN", zh: "设计工具" },
        desc: { en: "The primary collaborative UI/UX design tool for crafting modern website and application interfaces.", id: "Alat desain UI/UX kolaboratif utama untuk merancang antarmuka situs web dan aplikasi modern.", zh: "用于制作现代网站和应用程序界面的主要协作 UI/UX 设计工具。" },
        expertise: { en: ["UI/UX Interface Design", "Interactive Prototyping", "Design Systems", "Auto Layout & Components"], id: ["Desain Antarmuka UI/UX", "Prototyping Interaktif", "Sistem Desain", "Auto Layout & Komponen"], zh: ["UI/UX 界面设计", "交互式原型设计", "设计系统", "自动布局和组件"] }
    },
    "Canva": {
        subtitle: { en: "DESIGN TOOL", id: "ALAT DESAIN", zh: "设计工具" },
        desc: { en: "An online graphic design platform for creating presentations, posters, and social media content quickly and efficiently.", id: "Platform desain grafis daring untuk membuat presentasi, poster, dan konten media sosial dengan cepat dan efisien.", zh: "一个在线图形设计平台，用于快速高效地创建演示文稿、海报和社交媒体内容。" },
        expertise: { en: ["Social Media Templates", "Quick Asset Creation", "Presentation Design", "Brand Kit Management"], id: ["Templat Media Sosial", "Pembuatan Aset Cepat", "Desain Presentasi", "Manajemen Brand Kit"], zh: ["社交媒体模板", "快速资产创建", "演示文稿设计", "品牌套件管理"] }
    },
    "Photoshop": {
        subtitle: { en: "DESIGN TOOL", id: "ALAT DESAIN", zh: "设计工具" },
        desc: { en: "The industry-standard software for digital photo manipulation, retouching, and creating bitmap graphic assets.", id: "Perangkat lunak standar industri untuk manipulasi foto digital, retouching, dan pembuatan aset grafis bitmap.", zh: "用于数字照片操作、修饰和创建位图图形资产的行业标准软件。" },
        expertise: { en: ["Photo Retouching", "Layer Masking", "Digital Imaging", "Color Correction"], id: ["Retouching Foto", "Layer Masking", "Digital Imaging", "Koreksi Warna"], zh: ["照片修饰", "图层蒙版", "数字成像", "色彩校正"] }
    },
    "Illustrator": {
        subtitle: { en: "DESIGN TOOL", id: "ALAT DESAIN", zh: "设计工具" },
        desc: { en: "The go-to software for creating scalable vector graphics such as logos, icons, and illustrations.", id: "Perangkat lunak andalan untuk membuat grafik vektor terukur seperti logo, ikon, dan ilustrasi.", zh: "用于创建可缩放矢量图形（如徽标、图标和插图）的首选软件。" },
        expertise: { en: ["Vector Tracing", "Logo Design", "Typography Layouting", "Flat Illustration"], id: ["Tracing Vektor", "Desain Logo", "Penataan Tipografi", "Ilustrasi Datar"], zh: ["矢量追踪", "标志设计", "排版布局", "扁平插画"] }
    },
    "Lightroom": {
        subtitle: { en: "PHOTOGRAPHY TOOL", id: "ALAT FOTOGRAFI", zh: "摄影工具" },
        desc: { en: "Focused on color grading and lighting adjustments to professionally enhance photos in bulk.", id: "Berfokus pada color grading dan penyesuaian pencahayaan untuk meningkatkan foto secara profesional dalam jumlah besar.", zh: "专注于颜色分级和照明调整，以专业方式批量增强照片。" },
        expertise: { en: ["Color Grading", "Exposure Correction", "Preset Management", "Batch Editing"], id: ["Color Grading", "Koreksi Eksposur", "Manajemen Preset", "Pengeditan Massal"], zh: ["色彩分级", "曝光校正", "预设管理", "批量编辑"] }
    },
    "CorelDraw": {
        subtitle: { en: "DESIGN TOOL", id: "ALAT DESAIN", zh: "设计工具" },
        desc: { en: "A robust vector software alternative, often used for print design needs and graphic layouting.", id: "Alternatif perangkat lunak vektor yang tangguh, sering digunakan untuk kebutuhan desain cetak dan penataan grafis.", zh: "强大的矢量软件替代方案，常用于印刷设计需求和图形布局。" },
        expertise: { en: ["Print Design", "Vector Illustration", "Layouting", "Typography Formatting"], id: ["Desain Cetak", "Ilustrasi Vektor", "Penataan Letak", "Pemformatan Tipografi"], zh: ["印刷设计", "矢量插图", "排版", "字体格式化"] }
    },
    "Pixellab": {
        subtitle: { en: "MOBILE DESIGN TOOL", id: "ALAT DESAIN MOBILE", zh: "移动设计工具" },
        desc: { en: "A lightweight and practical design app for creating typography or basic image manipulation directly from a mobile device.", id: "Aplikasi desain ringan dan praktis untuk membuat tipografi atau manipulasi gambar dasar langsung dari perangkat seluler.", zh: "一款轻量级且实用的设计应用程序，可直接从移动设备创建排版或基本图像处理。" },
        expertise: { en: ["Mobile Editing", "Typography Customization", "Quick Asset Creation", "3D Text Effects"], id: ["Pengeditan Seluler", "Kustomisasi Tipografi", "Pembuatan Aset Cepat", "Efek Teks 3D"], zh: ["移动编辑", "排版定制", "快速资产创建", "3D文本效果"] }
    },
    "CapCut": {
        subtitle: { en: "VIDEO EDITING", id: "PENGEDITAN VIDEO", zh: "视频编辑" },
        desc: { en: "A trendy and highly practical video editing tool with ready-to-use transitions, ideal for vertical social media content.", id: "Alat pengeditan video trendi dan sangat praktis dengan transisi siap pakai, ideal untuk konten media sosial vertikal.", zh: "一款时尚且高度实用的视频编辑工具，具有即用型过渡效果，非常适合垂直社交媒体内容。" },
        expertise: { en: ["Short-form Video Editing", "Trendy Transitions", "Audio Syncing", "Auto-Captions"], id: ["Pengeditan Video Pendek", "Transisi Trendi", "Sinkronisasi Audio", "Takarir Otomatis"], zh: ["短视频编辑", "热门转场", "音频同步", "自动字幕"] }
    },
    "Filmora": {
        subtitle: { en: "VIDEO EDITING", id: "PENGEDITAN VIDEO", zh: "视频编辑" },
        desc: { en: "A user-friendly desktop video editing software for cutting, assembling, and applying effects to video projects.", id: "Perangkat lunak pengeditan video desktop yang mudah digunakan untuk memotong, merakit, dan menerapkan efek pada proyek video.", zh: "一款用户友好的桌面视频编辑软件，用于剪切、组装和对视频项目应用效果。" },
        expertise: { en: ["Video Splicing & Timeline", "Effect Application", "Basic Color Correction", "Audio Mixing"], id: ["Penyambungan Video & Linimasa", "Penerapan Efek", "Koreksi Warna Dasar", "Pencampuran Audio"], zh: ["视频拼接和时间线", "效果应用", "基础颜色校正", "混音"] }
    },
    "Clipchamp": {
        subtitle: { en: "VIDEO EDITING", id: "PENGEDITAN VIDEO", zh: "视频编辑" },
        desc: { en: "A fast, integrated web-based video editor for instant video trimming and lightweight content creation.", id: "Editor video berbasis web yang cepat dan terintegrasi untuk pemangkasan video instan dan pembuatan konten ringan.", zh: "一款快速集成的基于 Web 的视频编辑器，用于即时视频修剪和轻量级内容创建。" },
        expertise: { en: ["Quick Web Editing", "Timeline Management", "Export Optimization", "Template Usage"], id: ["Pengeditan Web Cepat", "Manajemen Linimasa", "Optimasi Ekspor", "Penggunaan Templat"], zh: ["快速 Web 编辑", "时间线管理", "导出优化", "模板使用"] }
    },
    "Git": {
        subtitle: { en: "VERSION CONTROL", id: "KONTROL VERSI", zh: "版本控制" },
        desc: { en: "A version control system to track and record every change in the programming code I am working on.", id: "Sistem kontrol versi untuk melacak dan mencatat setiap perubahan dalam kode pemrograman yang saya kerjakan.", zh: "一个版本控制系统，用于跟踪和记录我正在处理的编程代码中的每一项更改。" },
        expertise: { en: ["Code Tracking", "Branch Management", "Version Reverting", "Commit History"], id: ["Pelacakan Kode", "Manajemen Cabang", "Pemulihan Versi", "Riwayat Commit"], zh: ["代码跟踪", "分支管理", "版本还原", "提交历史"] }
    },
    "GitHub": {
        subtitle: { en: "CODE REPOSITORY", id: "REPOSITORI KODE", zh: "代码仓库" },
        desc: { en: "A cloud platform where I store, manage, and showcase my code portfolio and programming project repositories.", id: "Platform cloud tempat saya menyimpan, mengelola, dan memamerkan portofolio kode serta repositori proyek pemrograman saya.", zh: "一个云平台，我在上面存储、管理和展示我的代码组合以及编程项目仓库。" },
        expertise: { en: ["Repository Management", "Open Source Contribution", "Project Hosting", "README Structuring"], id: ["Manajemen Repositori", "Kontribusi Open Source", "Hosting Proyek", "Penataan README"], zh: ["仓库管理", "开源贡献", "项目托管", "README 结构"] }
    },
    "Docker": {
        subtitle: { en: "CONTAINERIZATION", id: "KONTAINERISASI", zh: "容器化" },
        desc: { en: "A platform for packaging applications and all their dependencies into containers, ensuring software runs consistently in any environment.", id: "Platform untuk mengemas aplikasi dan semua dependensinya ke dalam kontainer, memastikan perangkat lunak berjalan konsisten di lingkungan apa pun.", zh: "一个将应用程序及其所有依赖项打包到容器中的平台，确保软件在任何环境中均能一致运行。" },
        expertise: { en: ["Container Management", "Environment Isolation", "Image Building", "Deployment Basics"], id: ["Manajemen Kontainer", "Isolasi Lingkungan", "Pembuatan Image", "Dasar Deployment"], zh: ["容器管理", "环境隔离", "镜像构建", "部署基础"] }
    },
    "VS Code": {
        subtitle: { en: "CODE EDITOR", id: "EDITOR KODE", zh: "代码编辑器" },
        desc: { en: "My primary text editor for writing code, debugging, and programming HTML/CSS/JS. Highly powerful thanks to its extension support.", id: "Editor teks utama saya untuk menulis kode, debugging, dan memprogram HTML/CSS/JS. Sangat tangguh berkat dukungan ekstensinya.", zh: "我主要用来编写代码、调试以及编写 HTML/CSS/JS 的文本编辑器。得益于其扩展支持，功能非常强大。" },
        expertise: { en: ["Code Formatting", "Extension Management", "Integrated Terminal", "Live Server Integration"], id: ["Pemformatan Kode", "Manajemen Ekstensi", "Terminal Terintegrasi", "Integrasi Live Server"], zh: ["代码格式化", "扩展管理", "集成终端", "实时服务器集成"] }
    },
    "Excel": {
        subtitle: { en: "OFFICE TOOL", id: "ALAT KANTOR", zh: "办公工具" },
        desc: { en: "A powerful spreadsheet tool for analyzing data, creating reports, and building calculation formulas.", id: "Alat spreadsheet tangguh untuk menganalisis data, membuat laporan, dan menyusun rumus perhitungan.", zh: "一个强大的电子表格工具，用于分析数据、创建报告和建立计算公式。" },
        expertise: { en: ["Data Entry & Formatting", "Formula & Functions", "Data Visualization (Charts)", "Pivot Tables"], id: ["Entri Data & Pemformatan", "Rumus & Fungsi", "Visualisasi Data (Grafik)", "Pivot Table"], zh: ["数据录入与格式化", "公式与函数", "数据可视化 (图表)", "数据透视表"] }
    },
    "Word": {
        subtitle: { en: "OFFICE TOOL", id: "ALAT KANTOR", zh: "办公工具" },
        desc: { en: "A word processing software for drafting reports, proposals, articles, and various other administrative documents.", id: "Perangkat lunak pengolah kata untuk menyusun laporan, proposal, artikel, dan berbagai dokumen administratif lainnya.", zh: "一款用于起草报告、提案、文章和各种其他行政文档的文字处理软件。" },
        expertise: { en: ["Document Formatting", "Layout Structuring", "Report Generation", "Mail Merge"], id: ["Pemformatan Dokumen", "Penataan Tata Letak", "Pembuatan Laporan", "Mail Merge"], zh: ["文档格式化", "版面结构设计", "报告生成", "邮件合并"] }
    }
};

/* --- 6. MODAL POPUPS (PORTFOLIO & SKILLS) --- */
const modalOverlay = document.getElementById('card-modal');
const modalCloseBtn = document.querySelector('.modal-close');

// Fungsi Utama: Mengisi data dan membuka modal Portfolio
function bukaModalPortofolio(title, data) {
    if (!data) return;
    
    let currentLang = localStorage.getItem('app_lang') || 'en';
    
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-subtitle').innerText = data.subtitle[currentLang] || data.subtitle.en || data.subtitle;
    document.getElementById('modal-desc').innerText = data.desc[currentLang] || data.desc.en || data.desc;
    document.querySelector('.modal-header-icon i').className = `fas ${data.icon}`;
    
    // Inject Badges
    const badgesContainer = document.getElementById('modal-badges');
    badgesContainer.innerHTML = '';
    const currentBadges = data.badges[currentLang] || data.badges.en || data.badges;
    currentBadges.forEach(b => {
        const span = document.createElement('span');
        span.innerText = b;
        badgesContainer.appendChild(span);
    });
    
    // Inject Achievements
    const achList = document.getElementById('modal-achievements-list');
    achList.innerHTML = '';
    const currentAch = data.achievements[currentLang] || data.achievements.en || data.achievements;
    currentAch.forEach(ach => {
        const li = document.createElement('li');
        li.innerText = ach;
        achList.appendChild(li);
    });
    
    // Teks Label Khusus Achievement
    document.querySelector('.modal-achievements h4').innerText = currentLang === 'id' ? "Pencapaian" : (currentLang === 'zh' ? "成就：" : "Achievements");
    
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
        imgBox.querySelector('span').innerText = currentLang === 'id' ? "Foto / Sertifikat" : (currentLang === 'zh' ? "照片/证书" : "Photo / Certificate");
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
            let currentLang = localStorage.getItem('app_lang') || 'en';
            const iconElement = btn.querySelector('i, img');
            
            if (iconElement) {
                document.getElementById('skill-modal-icon').innerHTML = iconElement.outerHTML;
            } else {
                document.getElementById('skill-modal-icon').innerHTML = '<i class="fas fa-star"></i>';
            }
            
            document.getElementById('skill-modal-title').innerText = title;
            document.getElementById('skill-modal-subtitle').innerText = data.subtitle[currentLang] || data.subtitle.en || data.subtitle;
            document.getElementById('skill-modal-desc').innerText = data.desc[currentLang] || data.desc.en || data.desc;

            // Terjemah Label Judul Kompetensi
            document.querySelector('.skill-modal-section-title').innerText = currentLang === 'id' ? "KOMPETENSI UTAMA:" : (currentLang === 'zh' ? "核心专长：" : "CORE EXPERTISE:");

            const listContainer = document.getElementById('skill-modal-list');
            listContainer.innerHTML = '';
            
            const currentExp = data.expertise[currentLang] || data.expertise.en || data.expertise;
            currentExp.forEach(item => {
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