document.addEventListener('DOMContentLoaded', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.getElementById('navbar');
    const navContainer = document.getElementById('navContainer');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark/80', 'backdrop-blur-3xl', 'border-white/5', 'py-2');
            navContainer.classList.replace('h-24', 'h-16');
        } else {
            navbar.classList.remove('bg-dark/80', 'backdrop-blur-3xl', 'border-white/5', 'py-2');
            navContainer.classList.replace('h-16', 'h-24');
        }
    });

    const typeStrings = {
        en: ["Flutter Developer", "Node.js Architect", "UI/UX Visionary", "Founder of Levant", "Digital Empire Builder"],
        tr: ["Flutter Geliştiricisi", "Node.js Mimarı", "UI/UX Vizyoneri", "Levant Kurucusu", "Dijital İmparatorluk Kurucu"],
        ar: ["مطور فلاتر", "مهندس Node.js", "خبير تجربة المستخدم", "مؤسس Levant", "بناء الإمبراطوريات الرقمية"]
    };

    let currentLang = 'en';
    let count = 0, index = 0, isDeleting = false;
    const typeWriterElement = document.getElementById('typewriter');

    function type() {
        const texts = typeStrings[currentLang];
        const current = texts[count % texts.length];

        if (isDeleting) {
            typeWriterElement.textContent = current.substring(0, index--);
        } else {
            typeWriterElement.textContent = current.substring(0, index++);
        }

        let speed = isDeleting ? 30 : 100;

        if (!isDeleting && index === current.length + 1) {
            isDeleting = true;
            speed = 2000;
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            count++;
            speed = 500;
        }
        setTimeout(type, speed);
    }
    type();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                let current = 0;
                const increment = target / 50;
                const update = () => {
                    if (current < target) {
                        current += increment;
                        entry.target.innerText = Math.ceil(current);
                        requestAnimationFrame(update);
                    } else {
                        entry.target.innerText = target;
                    }
                };
                update();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.counter').forEach(c => observer.observe(c));

    window.toggleMobileMenu = function () {
        const menu = document.getElementById('mobileMenu');
        const content = document.getElementById('mobileMenuContent');
        const overlay = document.getElementById('mobileMenuOverlay');

        if (menu.classList.contains('invisible')) {
            menu.classList.remove('invisible');
            menu.classList.add('pointer-events-auto');
            overlay.classList.replace('opacity-0', 'opacity-100');
            content.classList.replace('translate-x-full', 'translate-x-0');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.replace('opacity-100', 'opacity-0');
            content.classList.replace('translate-x-0', 'translate-x-full');
            setTimeout(() => {
                menu.classList.add('invisible');
                menu.classList.remove('pointer-events-auto');
                document.body.style.overflow = 'auto';
            }, 500);
        }
    };

    document.getElementById('mobileMenuBtn').onclick = toggleMobileMenu;
    document.getElementById('closeMenuBtn').onclick = toggleMobileMenu;
    document.getElementById('mobileMenuOverlay').onclick = toggleMobileMenu;

    const translations = {
        en: {
            nav_home: "Home", nav_about: "About", nav_projects: "Ventures", nav_contact: "Contact", nav_sub: "Visionary Dev",
            hero_title_1: "Digital", hero_title_2: "Mastery.", hero_im: "I'm", btn_work: "View Work",
            stat_age: "Age", stat_exp: "Years Exp", stat_projects: "Projects", stat_comm: "Communities",
            about_tag: "Biography", about_title: "The Mind Behind The Code", about_desc: "Architecting digital solutions from the ground up. Focused on high performance, futuristic aesthetics, and results that actually matter.",
            location_label: "Current Location", location_value: "Damascus, SY", skill_title: "Tech Arsenal",
            goal_title: "Vision", goal_desc: "I don't just ship features; I build digital assets that create leverage and scale globally.",
            exec_title: "Execution", exec_desc: "Moving at the speed of thought. Turning raw vision into reality with surgical precision.",
            projects_title: "Ventures", role_founder: "Co-Founder", project_1_tag: "Digital Community", project_1_desc: "A massive gaming ecosystem where cross-cultural boundaries disappear through digital entertainment.",
            role_member: "Core Member", project_2_tag: "Heritage & Grind", project_2_desc: "Where ancient Syrian soul meets future-tech chaos. No stiffness, just the heritage and the digital grind.",
            btn_discord: "Join Discord", btn_server: "Join Server", btn_web: "Visit Website",
            contact_tag: "Available for Projects", contact_title: "Ready to build something great?", contact_email_label: "Direct Email", contact_discord_label: "Community",
            social_follow: "Follow the Journey", footer_sub: "Crafting digital empires with code and passion.", footer_copy: "© 2026. Made in Damascus."
        },
        tr: {
            nav_home: "Anasayfa", nav_about: "Hakkımda", nav_projects: "Girişimler", nav_contact: "İletişim", nav_sub: "Vizyoner Geliştirici",
            hero_title_1: "Dijital", hero_title_2: "Ustalık.", hero_im: "Ben", btn_work: "Çalışmaları Gör",
            stat_age: "Yaş", stat_exp: "Yıllık Deneyim", stat_projects: "Proje", stat_comm: "Topluluk",
            about_tag: "Biyografi", about_title: "Kodun Arkasındaki Zihin", about_desc: "Dijital çözümleri temelden inşa ediyorum. Yüksek performansa, fütüristik estetiğe ve gerçekten fark yaratan sonuçlara odaklanıyorum.",
            location_label: "Mevcut Konum", location_value: "Şam, Suriye", skill_title: "Teknoloji Cephaneliği",
            goal_title: "Vizyon", goal_desc: "Sadece özellik geliştirmiyorum; küresel ölçekte kaldıraç yaratan dijital varlıklar inşa ediyorum.",
            exec_title: "Uygulama", exec_desc: "Düşünce hızında hareket. Ham vizyonu cerrahi hassasiyetle gerçeğe dönüştürme.",
            projects_title: "Girişimler", role_founder: "Kurucu Ortak", project_1_tag: "Dijital Topluluk", project_1_desc: "Dijital eğlence aracılığıyla kültürlerarası sınırların ortadan kalktığı devasa bir oyun ekosistemi.",
            role_member: "Çekirdek Üye", project_2_tag: "Miras ve Çalışma", project_2_desc: "Kadim Suriye ruhunun gelecek teknolojisi kaosuyla buluştuğu yer. Sadece miras ve dijital çalışma.",
            btn_discord: "Discord'a Katıl", btn_server: "Sunucuya Katıl", btn_web: "Web Sitesini Aç",
            contact_tag: "Projeler İçin Müsait", contact_title: "Harika bir şey inşa etmeye hazır mısın?", contact_email_label: "Doğrudan E-posta", contact_discord_label: "Topluluk",
            social_follow: "Yolculuğu Takip Et", footer_sub: "Dijital imparatorlukları kod ve tutkuyla tasarlıyorum.", footer_copy: "© 2026. Şam'da üretildi."
        },
        ar: {
            nav_home: "الرئيسية", nav_about: "من أنا", nav_projects: "مشاريعي", nav_contact: "تواصل معي", nav_sub: "مطور رؤيوي",
            hero_title_1: "الإتقان", hero_title_2: "الرقمي.", hero_im: "أنا", btn_work: "عرض الأعمال",
            stat_age: "العمر", stat_exp: "سنوات الخبرة", stat_projects: "المشاريع", stat_comm: "المجتمعات",
            about_tag: "السيرة الذاتية", about_title: "العقل المدبر وراء الكود", about_desc: "هندسة الحلول الرقمية من الصفر. التركيز على الأداء العالي، الجماليات المستقبلية، والنتائج التي تهم حقاً.",
            location_label: "الموقع الحالي", location_value: "دمشق، سوريا", skill_title: "ترسانة التقنيات",
            goal_title: "الرؤية", goal_desc: "أنا لا أطلق ميزات فحسب؛ بل أبني أصولاً رقمية تخلق تأثيراً وتتوسع عالمياً.",
            exec_title: "التنفيذ", exec_desc: "التحرك بسرعة الفكر. تحويل الرؤية الخام إلى واقع بدقة جراحية.",
            projects_title: "المشاريع", role_founder: "مؤسس مشارك", project_1_tag: "مجتمع رقمي", project_1_desc: "نظام بيئي ضخم للألعاب حيث تختفي الحدود الثقافية من خلال الترفيه الرقمي.",
            role_member: "عضو أساسي", project_2_tag: "التراث والعمل", project_2_desc: "حيث تلتقي الروح السورية القديمة مع فوضى تكنولوجيا المستقبل. لا رسميات، فقط التراث والعمل الرقمي.",
            btn_discord: "انضم لديسكورد", btn_server: "انضم للسيرفر", btn_web: "زيارة الموقع",
            contact_tag: "متاح للمشاريع", contact_title: "جاهز لبناء شيء عظيم؟", contact_email_label: "البريد المباشر", contact_discord_label: "المجتمع",
            social_follow: "تابع الرحلة", footer_sub: "صناعة الإمبراطوريات الرقمية بالكود والشغف.", footer_copy: "© 2026. صنع في دمشق."
        }
    };

    window.changeLang = function (lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.getElementById('currentLang').textContent = lang.toUpperCase();
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.style.fontFamily = lang === 'ar' ? 'Tahoma, sans-serif' : "'Space Grotesk', sans-serif";

        index = 0;
        count = 0;
    };

    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 5,
        speed: 800,
        glare: true,
        "max-glare": 0.2,
        perspective: 2000,
        scale: 1.02
    });
});
