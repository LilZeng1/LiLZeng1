document.addEventListener('DOMContentLoaded', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.getElementById('navbar');
    const navContainer = document.getElementById('navContainer');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        if (window.scrollY > 80) {
            navbar.classList.add('bg-dark/80', 'backdrop-blur-3xl', 'border-b', 'border-white/5');
            navContainer.classList.replace('h-24', 'h-20');
        } else {
            navbar.classList.remove('bg-dark/80', 'backdrop-blur-3xl', 'border-b', 'border-white/5');
            navContainer.classList.replace('h-20', 'h-24');
        }
    });

    const typeText = ["Flutter Developer", "Node.js Architect", "UI/UX Visionary", "Founder of Levant", "Digital Empire Builder"];
    let count = 0, index = 0, isDeleting = false;
    const typeWriterElement = document.getElementById('typewriter');

    function type() {
        const current = typeText[count % typeText.length];
        if (isDeleting) {
            typeWriterElement.textContent = current.substring(0, index--);
        } else {
            typeWriterElement.textContent = current.substring(0, index++);
        }

        let speed = isDeleting ? 40 : 120;

        if (!isDeleting && index === current.length + 1) {
            isDeleting = true;
            speed = 2500;
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
                const increment = target / 60;
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
        menu.classList.toggle('translate-x-full');
    };

    document.getElementById('mobileMenuBtn').onclick = toggleMobileMenu;
    document.getElementById('closeMenuBtn').onclick = toggleMobileMenu;

    const translations = {
        en: {
            nav_home: "Home", nav_about: "About", nav_projects: "Ventures", nav_contact: "Contact",
            about_title: "ABOUT ME", skill_title: "Tech Arsenal", goal_title: "Vision",
            goal_desc: "Scaling digital presence globally.", projects_title: "VENTURES", btn_work: "View Work"
        },
        tr: {
            nav_home: "Anasayfa", nav_about: "Hakkımda", nav_projects: "Girişimler", nav_contact: "İletişim",
            about_title: "HAKKIMDA", skill_title: "Teknoloji Cephaneliği", goal_title: "Vizyon",
            goal_desc: "Dijital varlığı küresel ölçekte büyütmek.", projects_title: "GİRİŞİMLER", btn_work: "Çalışmaları Gör"
        },
        ar: {
            nav_home: "الرئيسية", nav_about: "من أنا", nav_projects: "مشاريعي", nav_contact: "تواصل",
            about_title: "من أنا", skill_title: "ترسانة التقنيات", goal_title: "الرؤية",
            goal_desc: "توسيع الوجود الرقمي عالمياً.", projects_title: "مشاريعي", btn_work: "عرض أعمالي"
        }
    };

    window.changeLang = function (lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.getElementById('currentLang').textContent = lang.toUpperCase();
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.style.fontFamily = lang === 'ar' ? 'Tahoma, sans-serif' : "'Space Grotesk', sans-serif";
    };

    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 8,
        speed: 600,
        glare: true,
        "max-glare": 0.15,
        perspective: 1500
    });
});
