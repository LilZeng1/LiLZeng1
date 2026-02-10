document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuContent = document.getElementById('mobileMenuContent');
    const menuOverlay = document.getElementById('mobileMenuOverlay');
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        if (window.scrollY > 20) {
            navbar.classList.add('py-2', 'bg-dark/95', 'shadow-2xl');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2', 'bg-dark/95', 'shadow-2xl');
        }
    });

    const toggleMenu = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        const isRTL = document.body.dir === 'rtl';
        const translateClass = isRTL ? '-translate-x-full' : 'translate-x-full';

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                menuOverlay.classList.replace('opacity-0', 'opacity-100');
                menuContent.classList.remove(translateClass);
            }, 10);
            document.body.style.overflow = 'hidden';
        } else {
            menuOverlay.classList.replace('opacity-100', 'opacity-0');
            menuContent.classList.add(translateClass);
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 500);
        }
    };

    document.getElementById('mobileMenuBtn').onclick = toggleMenu;
    document.getElementById('closeMenuBtn').onclick = toggleMenu;
    document.querySelectorAll('.mobile-link').forEach(link => link.onclick = toggleMenu);

    const translations = {
        en: {
            name_main: "George Arshed", name_short: "George.", nav_sub: "Visionary Dev",
            nav_home: "Home", nav_about: "About", nav_projects: "Ventures", nav_contact: "Contact",
            status_avail: "Available for hire",
            hero_title_1: "Digital", hero_title_2: "Mastery.", hero_im: "I'm", name_first: "George",
            btn_work: "View Work", btn_contact_me: "Contact Me",
            stat_age: "Age", stat_exp: "Years Exp", stat_projects: "Projects", stat_comm: "Communities",
            sec_bio: "Biography", about_title: "The Mind Behind The Code", about_desc: "Architecting digital solutions from the ground up. Focused on high performance, scalability, and futuristic aesthetics.",
            loc_title: "Current Location", loc_city: "Damascus, SY",
            skill_title: "Tech Arsenal",
            goal_title: "Vision", goal_desc: "I don't just ship features; I build digital assets that create leverage.",
            exec_title: "Execution", exec_desc: "Moving at the speed of thought. Raw vision to reality with surgical precision.",
            arch_title: "Architecture", arch_desc: "Crafting robust backend systems that handle scale without breaking a sweat.",
            sel_works: "SELECTED WORKS 2024-2026",
            tag_gaming: "GAMING", sub_digi_comm: "Digital Community", desc_levant: "A massive gaming ecosystem where cross-cultural boundaries disappear.",
            tag_culture: "CULTURE", proj_syria: "Syria", sub_heritage: "Heritage & Grind", desc_syria: "Where ancient Syrian soul meets future-tech chaos. No stiffness.",
            btn_discord: "Join Discord", btn_server: "Join Server", btn_website: "Website",
            status_projects: "Available for Projects", contact_heading: "Ready to build something great?",
            footer_slogan: "Crafting digital empires with code.", footer_rights: "© 2026. DAMASCUS. ALL RIGHTS RESERVED."
        },
        tr: {
            name_main: "George Arshed", name_short: "George.", nav_sub: "Vizyoner Geliştirici",
            nav_home: "Anasayfa", nav_about: "Hakkımda", nav_projects: "Girişimler", nav_contact: "İletişim",
            status_avail: "İş Tekliflerine Açık",
            hero_title_1: "Dijital", hero_title_2: "Ustalık.", hero_im: "Ben", name_first: "George",
            btn_work: "İşleri Gör", btn_contact_me: "Bana Ulaş",
            stat_age: "Yaş", stat_exp: "Yıl Deneyim", stat_projects: "Proje", stat_comm: "Topluluk",
            sec_bio: "Biyografi", about_title: "Kodun Arkasındaki Zihin", about_desc: "Sıfırdan dijital çözümler tasarlıyorum. Yüksek performans, ölçeklenebilirlik ve fütüristik estetiğe odaklanıyorum.",
            loc_title: "Mevcut Konum", loc_city: "Şam, Suriye",
            skill_title: "Teknoloji Cephaneliği",
            goal_title: "Vizyon", goal_desc: "Sadece özellik eklemiyorum; kaldıraç etkisi yaratan dijital varlıklar inşa ediyorum.",
            exec_title: "Uygulama", exec_desc: "Düşünce hızında hareket. Ham vizyonu cerrahi hassasiyetle gerçeğe dönüştürme.",
            arch_title: "Mimari", arch_desc: "Ölçeği terlemeden kaldıran sağlam backend sistemleri işleme.",
            sel_works: "SEÇİLMİŞ İŞLER 2024-2026",
            tag_gaming: "OYUN", sub_digi_comm: "Dijital Topluluk", desc_levant: "Kültürlerarası sınırların yok olduğu devasa bir oyun ekosistemi.",
            tag_culture: "KÜLTÜR", proj_syria: "Suriye", sub_heritage: "Miras & Mücadele", desc_syria: "Kadim Suriye ruhunun gelecek teknolojisiyle buluştuğu yer. Katılık yok.",
            btn_discord: "Discord'a Katıl", btn_server: "Sunucuya Katıl", btn_website: "Web Sitesi",
            status_projects: "Projeler İçin Uygun", contact_heading: "Harika bir şey inşa etmeye hazır mısın?",
            footer_slogan: "Kod ile dijital imparatorluklar inşa ediyor.", footer_rights: "© 2026. ŞAM. TÜM HAKLARI SAKLIDIR."
        },
        ar: {
            name_main: "جورج أرشد", name_short: "جورج.", nav_sub: "مطور رؤيوي",
            nav_home: "الرئيسية", nav_about: "من أنا", nav_projects: "مشاريعي", nav_contact: "تواصل",
            status_avail: "متاح للعمل",
            hero_title_1: "الإتقان", hero_title_2: "الرقمي.", hero_im: "أنا", name_first: "جورج",
            btn_work: "عرض الأعمال", btn_contact_me: "تواصل معي",
            stat_age: "العمر", stat_exp: "سنوات الخبرة", stat_projects: "المشاريع", stat_comm: "المجتمعات",
            sec_bio: "السيرة الذاتية", about_title: "العقل خلف الكود", about_desc: "هندسة الحلول الرقمية من الصفر. التركيز على الأداء العالي، القابلية للتوسع، والجماليات المستقبلية.",
            loc_title: "الموقع الحالي", loc_city: "دمشق، سوريا",
            skill_title: "الترسانة التقنية",
            goal_title: "الرؤية", goal_desc: "أنا لا أضيف ميزات فقط؛ بل أبني أصولاً رقمية تخلق تأثيراً مضاعفاً.",
            exec_title: "التنفيذ", exec_desc: "التحرك بسرعة الفكر. تحويل الرؤية الخام إلى واقع بدقة جراحية.",
            arch_title: "الهندسة", arch_desc: "صياغة أنظمة خلفية قوية تتعامل مع التوسع دون أي عناء.",
            sel_works: "أعمال مختارة 2024-2026",
            tag_gaming: "ألعاب", sub_digi_comm: "مجتمع رقمي", desc_levant: "نظام بيئي ضخم للألعاب حيث تختفي الحدود الثقافية.",
            tag_culture: "ثقافة", proj_syria: "سوريا", sub_heritage: "تراث وكفاح", desc_syria: "حيث تلتقي الروح السورية القديمة بفوضى تكنولوجيا المستقبل.",
            btn_discord: "انضم للديسكورد", btn_server: "انضم للسيرفر", btn_website: "الموقع",
            status_projects: "متاح للمشاريع", contact_heading: "هل أنت مستعد لبناء شيء عظيم؟",
            footer_slogan: "صياغة إمبراطوريات رقمية بالكود.", footer_rights: "© 2026. دمشق. جميع الحقوق محفوظة."
        }
    };

    let currentLang = 'en';
    window.cycleLang = () => {
        const langs = ['en', 'tr', 'ar'];
        let nextIndex = (langs.indexOf(currentLang) + 1) % langs.length;
        currentLang = langs[nextIndex];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
        });

        const display = currentLang.toUpperCase();
        document.getElementById('currentLangDisplay').textContent = display;
        if (document.getElementById('mobileLangDisplay')) document.getElementById('mobileLangDisplay').textContent = display;

        document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    };

    const typeStrings = {
        en: ["Full-Stack Architect", "UI/UX Visionary", "Founder of Levant"],
        tr: ["Full-Stack Mimar", "Vizyoner Tasarımcı", "Levant Kurucusu"],
        ar: ["مهندس برمجيات", "مبدع واجهات", "مؤسس Levant"]
    };

    let charIndex = 0, stringIndex = 0, isDeleting = false;
    function type() {
        const currentArr = typeStrings[currentLang];
        const fullText = currentArr[stringIndex % currentArr.length];
        const typewriterEl = document.getElementById('typewriter');

        if (isDeleting) {
            typewriterEl.textContent = fullText.substring(0, charIndex--);
        } else {
            typewriterEl.textContent = fullText.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 150;
        if (!isDeleting && charIndex === fullText.length + 1) {
            isDeleting = true;
            speed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex++;
            speed = 500;
        }
        setTimeout(type, speed);
    }
    type();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                let count = 0;
                const inc = target / 50;
                const update = () => {
                    if (count < target) {
                        count += inc;
                        entry.target.innerText = Math.ceil(count);
                        requestAnimationFrame(update);
                    } else entry.target.innerText = target;
                };
                update();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.counter').forEach(c => observer.observe(c));

    let clickCount = 0;
    document.getElementById('logoMain').onclick = () => {
        clickCount++;
        if (clickCount === 5) {
            document.documentElement.style.filter = 'hue-rotate(90deg) invert(1)';
            alert("Matrix Mode Activated! 🛠️");
            clickCount = 0;
            setTimeout(() => document.documentElement.style.filter = '', 5000);
        }
    };

    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });
});
