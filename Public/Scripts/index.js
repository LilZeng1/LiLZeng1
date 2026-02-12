document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuContent = document.getElementById('mobileMenuContent');
    const menuOverlay = document.getElementById('mobileMenuOverlay');
    const preloader = document.getElementById('preloader');
    const keyHint = document.getElementById('keyHint');

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            keyHint.classList.remove('opacity-0');
            setTimeout(() => keyHint.classList.add('opacity-0'), 5000);
        }, 500);
    }, 1200);

    const translations = {
        en: {
            name_main: "George Arshed", name_short: "George.", nav_sub: "Visionary Dev",
            nav_home: "Home", nav_about: "About", nav_projects: "Ventures", nav_contact: "Contact",
            hero_title_1: "Digital", hero_title_2: "Mastery.", hero_im: "I'm", name_first: "George",
            btn_work: "View Work", btn_contact_me: "Contact Me",
            stat_age: "Age", stat_exp: "Years Exp", stat_projects: "Projects", stat_comm: "Communities",
            sec_bio: "Biography", about_title: "The Mind Behind The Code", about_desc: "Architecting digital solutions from the ground up. Focused on high performance, scalability, and futuristic aesthetics.",
            skill_title: "Tech Arsenal",
            goal_title: "Vision", goal_desc: "Building digital assets that create leverage.",
            exec_title: "Execution", exec_desc: "Raw vision to reality with surgical precision.",
            arch_title: "Architecture", arch_desc: "Robust backend systems that handle scale.",
            tag_gaming: "GAMING", sub_digi_comm: "Digital Community", desc_levant: "A massive gaming ecosystem where cross-cultural boundaries disappear.",
            tag_culture: "CULTURE", proj_syria: "Syria", sub_heritage: "Heritage & Grind", desc_syria: "Where ancient Syrian soul meets future-tech chaos. No stiffness.",
            contact_heading: "Ready to build something legendary?",
            footer_slogan: "CRAFTING DIGITAL EMPIRES.", footer_rights: "© 2026. DAMASCUS. ALL RIGHTS RESERVED."
        },
        tr: {
            name_main: "George Arshed", name_short: "George.", nav_sub: "Vizyoner Geliştirici",
            nav_home: "Anasayfa", nav_about: "Hakkımda", nav_projects: "Girişimler", nav_contact: "İletişim",
            hero_title_1: "Dijital", hero_title_2: "Ustalık.", hero_im: "Ben", name_first: "George",
            btn_work: "İşleri Gör", btn_contact_me: "Bana Ulaş",
            stat_age: "Yaş", stat_exp: "Yıl Deneyim", stat_projects: "Proje", stat_comm: "Topluluk",
            sec_bio: "Biyografi", about_title: "Kodun Arkasındaki Zihin", about_desc: "Sıfırdan dijital çözümler tasarlıyorum. Yüksek performans, ölçeklenebilirlik ve fütüristik estetiğe odaklanıyorum.",
            skill_title: "Teknoloji Cephaneliği",
            goal_title: "Vizyon", goal_desc: "Kaldıraç etkisi yaratan dijital varlıklar inşa ediyorum.",
            exec_title: "Uygulama", exec_desc: "Ham vizyonu cerrahi hassasiyetle gerçeğe dönüştürme.",
            arch_title: "Mimari", arch_desc: "Ölçeği terlemeden kaldıran sağlam backend sistemleri.",
            tag_gaming: "OYUN", sub_digi_comm: "Dijital Topluluk", desc_levant: "Kültürlerarası sınırların yok olduğu devasa bir oyun ekosistemi.",
            tag_culture: "KÜLTÜR", proj_syria: "Suriye", sub_heritage: "Miras & Mücadele", desc_syria: "Kadim Suriye ruhunun gelecek teknolojisiyle buluştuğu yer.",
            contact_heading: "Efsanevi bir şey inşa etmeye hazır mısın?",
            footer_slogan: "DİJİTAL İMPARATORLUKLAR İNŞA EDİYOR.", footer_rights: "© 2026. ŞAM. TÜM HAKLARI SAKLIDIR."
        },
        ar: {
            name_main: "جورج أرشد", name_short: "جورج.", nav_sub: "مطور رؤيوي",
            nav_home: "الرئيسية", nav_about: "من أنا", nav_projects: "مشاريعي", nav_contact: "تواصل",
            hero_title_1: "الإتقان", hero_title_2: "الرقمي.", hero_im: "أنا", name_first: "جورج",
            btn_work: "عرض الأعمال", btn_contact_me: "تواصل معي",
            stat_age: "العمر", stat_exp: "سنوات الخبرة", stat_projects: "المشاريع", stat_comm: "المجتمعات",
            sec_bio: "السيرة الذاتية", about_title: "العقل خلف الكود", about_desc: "هندسة الحلول الرقمية من الصفر. التركيز على الأداء العالي، القابلية للتوسع، والجماليات المستقبلية.",
            skill_title: "الترسانة التقنية",
            goal_title: "الرؤية", goal_desc: "أبني أصولاً رقمية تخلق تأثيراً مضاعفاً.",
            exec_title: "التنفيذ", exec_desc: "تحويل الرؤية الخام إلى واقع بدقة جراحية.",
            arch_title: "الهندسة", arch_desc: "أنظمة خلفية قوية تتعامل مع التوسع.",
            tag_gaming: "ألعاب", sub_digi_comm: "مجتمع رقمي", desc_levant: "نظام بيئي ضخم للألعاب حيث تختفي الحدود الثقافية.",
            tag_culture: "ثقافة", proj_syria: "سوريا", sub_heritage: "تراث وكفاح", desc_syria: "حيث تلتقي الروح السورية القديمة بفوضى تكنولوجيا المستقبل.",
            contact_heading: "هل أنت مستعد لبناء شيء أسطوري؟",
            footer_slogan: "صياغة إمبراطوريات رقمية بالكود.", footer_rights: "© 2026. دمشق. جميع الحقوق محفوظة."
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function updateLangUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key].replace(/\n/g, '<br>');
            }
        });
        const display = currentLang.toUpperCase();
        document.getElementById('currentLangDisplay').textContent = display;
        if (document.getElementById('mobileLangDisplay')) document.getElementById('mobileLangDisplay').textContent = display;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

        const typeStrings = {
            en: ["Full-Stack Architect", "UI/UX Visionary", "Founder of Levant"],
            tr: ["Full-Stack Mimar", "Vizyoner Tasarımcı", "Levant Kurucusu"],
            ar: ["مهندس برمجيات", "مبدع واجهات", "مؤسس Levant"]
        };

        updateTypewriter(typeStrings[currentLang]);
    }

    window.cycleLang = () => {
        const langs = ['en', 'tr', 'ar'];
        let nextIndex = (langs.indexOf(currentLang) + 1) % langs.length;
        currentLang = langs[nextIndex];
        localStorage.setItem('lang', currentLang);
        updateLangUI();
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.1 },
            colors: isDark ? ['#8b5cf6', '#06b6d4'] : ['#f59e0b', '#ec4899']
        });
    };

    document.getElementById('themeToggle').onclick = toggleTheme;
    document.getElementById('mobileThemeToggle').onclick = toggleTheme;

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        if (window.scrollY > 20) {
            navbar.classList.add('shadow-lg');
            navbar.classList.replace('h-20', 'h-16');
            navbar.classList.replace('md:h-24', 'md:h-20');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.replace('h-16', 'h-20');
            navbar.classList.replace('md:h-20', 'md:h-24');
        }
    });

    const toggleMenu = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        const isRTL = document.documentElement.dir === 'rtl';
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

    let typewriterTimeout;
    function updateTypewriter(strings) {
        clearTimeout(typewriterTimeout);
        let charIndex = 0, stringIndex = 0, isDeleting = false;
        const typewriterEl = document.getElementById('typewriter');

        function type() {
            const currentStr = strings[stringIndex % strings.length];
            if (isDeleting) {
                typewriterEl.textContent = currentStr.substring(0, charIndex--);
            } else {
                typewriterEl.textContent = currentStr.substring(0, charIndex++);
            }

            let speed = isDeleting ? 30 : 100;
            if (!isDeleting && charIndex === currentStr.length + 1) {
                isDeleting = true;
                speed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                stringIndex++;
                speed = 500;
            }
            typewriterTimeout = setTimeout(type, speed);
        }
        type();
    }

    updateLangUI();

    const skills = [
        "JavaScript", "Node.js", "TailwindCSS", "Flutter",
        "MongoDB","Python:"
    ];
    const skillContainer = document.getElementById('skillContainer');
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        span.onclick = () => {
            span.classList.add('scale-125', 'bg-primary', 'text-white');
            setTimeout(() => span.classList.remove('scale-125', 'bg-primary', 'text-white'), 200);
            confetti({
                particleCount: 15,
                spread: 30,
                origin: { x: span.getBoundingClientRect().left / window.innerWidth, y: span.getBoundingClientRect().top / window.innerHeight }
            });
        };
        skillContainer.appendChild(span);
    });

    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.2)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 50; i++) particles.push(new Particle());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    document.addEventListener('click', (e) => {
        const click = document.createElement('div');
        click.className = 'click-effect';
        click.style.left = `${e.clientX}px`;
        click.style.top = `${e.clientY}px`;
        document.body.appendChild(click);
        setTimeout(() => click.remove(), 600);
    });

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key.toLowerCase() === 't') toggleTheme();
        if (e.shiftKey && e.key.toLowerCase() === 'l') window.cycleLang();

        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert('Cheat Code Activated! God Mode ON 🚀');
                document.body.style.transform = 'rotate(180deg)';
                setTimeout(() => document.body.style.transform = 'none', 3000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

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
});
