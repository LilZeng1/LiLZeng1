document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuContent = document.getElementById('mobileMenuContent');
    const menuOverlay = document.getElementById('mobileMenuOverlay');
    const preloader = document.getElementById('preloader');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    if (window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
            
            cursorOutline.animate({
                transform: `translate(${posX - 12.5}px, ${posY - 12.5}px)`
            }, { duration: 500, fill: "forwards" });
        });

        document.querySelectorAll('a, button, .group').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(255,255,255,0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

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
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                menuOverlay.classList.replace('opacity-0', 'opacity-100');
                menuContent.classList.replace('translate-x-full', 'translate-x-0');
            }, 10);
            document.body.style.overflow = 'hidden';
        } else {
            menuOverlay.classList.replace('opacity-100', 'opacity-0');
            menuContent.classList.replace('translate-x-0', 'translate-x-full');
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
            nav_home: "Home", nav_about: "About", nav_projects: "Ventures", nav_contact: "Contact", nav_sub: "Visionary Dev",
            hero_title_1: "Digital", hero_title_2: "Mastery.", hero_im: "I'm", btn_work: "View Work",
            stat_age: "Age", stat_exp: "Years Exp", stat_projects: "Projects", stat_comm: "Communities",
            skill_title: "Tech Arsenal", goal_title: "Vision", goal_desc: "Building digital assets that create leverage and scale globally."
        },
        tr: {
            nav_home: "Anasayfa", nav_about: "Hakkımda", nav_projects: "Girişimler", nav_contact: "İletişim", nav_sub: "Vizyoner Geliştirici",
            hero_title_1: "Dijital", hero_title_2: "Ustalık.", hero_im: "Ben", btn_work: "Çalışmaları Gör",
            stat_age: "Yaş", stat_exp: "Deneyim", stat_projects: "Proje", stat_comm: "Topluluk",
            skill_title: "Teknoloji Cephaneliği", goal_title: "Vizyon", goal_desc: "Küresel ölçekte değer yaratan dijital varlıklar inşa ediyorum."
        },
        ar: {
            nav_home: "الرئيسية", nav_about: "من أنا", nav_projects: "مشاريعي", nav_contact: "تواصل", nav_sub: "مطور رؤيوي",
            hero_title_1: "الإتقان", hero_title_2: "الرقمي.", hero_im: "أنا", btn_work: "عرض الأعمال",
            stat_age: "العمر", stat_exp: "سنوات الخبرة", stat_projects: "المشاريع", stat_comm: "المجتمعات",
            skill_title: "ترسانة التقنيات", goal_title: "الرؤية", goal_desc: "بناء أصول رقمية تتوسع عالمياً."
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
        if(document.getElementById('mobileLangDisplay')) document.getElementById('mobileLangDisplay').textContent = display;
        
        document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.body.style.fontFamily = currentLang === 'ar' ? 'Tahoma, sans-serif' : "'Space Grotesk', sans-serif";
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
    console.log("%c George Arshed %c Built for the future.", "color: #8b5cf6; font-size: 20px; font-weight: bold;", "color: #555;");
    
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });
});
