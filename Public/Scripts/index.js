document.addEventListener('DOMContentLoaded', () => {

    const cursor = document.getElementById('custom-cursor');
    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.getElementById('navbar');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverables = document.querySelectorAll('a, button, [data-tilt], .group');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark/80', 'backdrop-blur-2xl', 'h-20', 'border-b', 'border-white/5');
            navbar.querySelector('.max-w-7xl').classList.replace('h-24', 'h-20');
        } else {
            navbar.classList.remove('bg-dark/80', 'backdrop-blur-2xl', 'h-20', 'border-b', 'border-white/5');
            navbar.querySelector('.max-w-7xl').classList.replace('h-20', 'h-24');
        }
    });

    const typeText = ["Flutter Developer", "Node.js Expert", "Digital Architect", "Founder of Levant"];
    let count = 0, index = 0, isDeleting = false;
    const typeWriterElement = document.getElementById('typewriter');

    function type() {
        const current = typeText[count % typeText.length];
        if (isDeleting) {
            typeWriterElement.textContent = current.substring(0, index--);
        } else {
            typeWriterElement.textContent = current.substring(0, index++);
        }

        let speed = isDeleting ? 50 : 150;

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
    }, { threshold: 0.5 });

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
            about_title: "ABOUT ME", skill_title: "Tech Arsenal", skill_desc: "Mastering the tools of tomorrow.",
            goal_title: "Vision", goal_desc: "Execution is everything.", projects_title: "VENTURES"
        },
        tr: {
            nav_home: "Anasayfa", nav_about: "Hakkımda", nav_projects: "Girişimler", nav_contact: "İletişim",
            about_title: "HAKKIMDA", skill_title: "Teknoloji Cephaneliği", skill_desc: "Yarının araçlarında ustalaşmak.",
            goal_title: "Vizyon", goal_desc: "Uygulama her şeydir.", projects_title: "GİRİŞİMLER"
        },
        ar: {
            nav_home: "الرئيسية", nav_about: "من أنا", nav_projects: "مشاريعي", nav_contact: "تواصل",
            about_title: "من أنا", skill_title: "ترسانة التقنيات", skill_desc: "إتقان أدوات المستقبل.",
            goal_title: "الرؤية", goal_desc: "التنفيذ هو كل شيء.", projects_title: "مشاريعي"
        }
    };

    window.changeLang = function (lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.body.style.fontFamily = lang === 'ar' ? 'Tahoma, sans-serif' : "'Space Grotesk', sans-serif";
    };

    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.1
    });
});
