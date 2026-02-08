document.addEventListener('DOMContentLoaded', () => {

    const scrollProgress = document.getElementById('scrollProgress');
    const navbar = document.getElementById('navbar');

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const totalHeight = document.body.scrollHeight - window.innerHeight;
                const progress = (window.scrollY / totalHeight) * 100;
                scrollProgress.style.width = `${progress}%`;

                if (window.scrollY > 20) {
                    navbar.classList.add('glass-nav');
                } else {
                    navbar.classList.remove('glass-nav');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    const typeText = ["Flutter Developer", "Node.js Expert", "Entrepreneur", "Web Designer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const typeWriterElement = document.getElementById('typewriter');

    (function type() {
        if (count === typeText.length) {
            count = 0;
        }
        currentText = typeText[count];
        letter = currentText.slice(0, ++index);

        typeWriterElement.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    }());

    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const updateCount = () => {
                    const increment = target / 30;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));

    window.toggleMobileMenu = function () {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('translate-x-full');
    };

    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
    document.getElementById('closeMenuBtn').addEventListener('click', toggleMobileMenu);

    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_projects: "Ventures",
            nav_contact: "Contact",
            btn_work: "View Work",
            about_title: "About Me",
            skill_title: "Tech Stack",
            skill_desc: "Building scalable applications with robust technologies.",
            goal_title: "Vision",
            goal_desc: "My goal is financial freedom. I don't just write code; I build businesses.",
            community_title: "Leadership",
            community_desc: "Leading the Levant Server. Managing communities and fostering growth.",
            projects_title: "Ventures",
            levant_desc: "A friendly gaming server where people from different cultures come together.",
            syria_desc: "A public community server representing Syria. Fan website created for support."
        },
        tr: {
            nav_home: "Anasayfa",
            nav_about: "Hakkımda",
            nav_projects: "Girişimler",
            nav_contact: "İletişim",
            btn_work: "İşlerimi Gör",
            about_title: "Hakkımda",
            skill_title: "Teknolojiler",
            skill_desc: "Güçlü teknolojilerle ölçeklenebilir uygulamalar geliştiriyorum.",
            goal_title: "Vizyon",
            goal_desc: "Hedefim finansal özgürlük. Sadece kod yazmıyorum; iş inşa ediyorum.",
            community_title: "Liderlik",
            community_desc: "Levant Sunucusu liderliği. Toplulukları yönetiyor ve büyütüyorum.",
            projects_title: "Girişimler",
            levant_desc: "Farklı kültürlerden insanların bir araya geldiği dostane bir oyun sunucusu.",
            syria_desc: "Suriye'yi temsil eden topluluk sunucusu. Destek amaçlı hayran sitesi."
        },
        ar: {
            nav_home: "الرئيسية",
            nav_about: "حولي",
            nav_projects: "مشاريعي",
            nav_contact: "تواصل",
            btn_work: "أعمالي",
            about_title: "من أنا",
            skill_title: "التقنيات",
            skill_desc: "بناء تطبيقات قابلة للتطوير باستخدام تقنيات قوية.",
            goal_title: "الرؤية",
            goal_desc: "هدفي الحرية المالية. أنا أبني أعمالاً وليس مجرد كود.",
            community_title: "القيادة",
            community_desc: "قيادة سيرفر Levant وإدارة المجتمعات.",
            projects_title: "مشاريعي",
            levant_desc: "خادم ألعاب ودي يجمع ثقافات مختلفة.",
            syria_desc: "خادم مجتمعي يمثل سوريا. موقع داعم للمجتمع."
        }
    };

    window.changeLang = function (lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.childNodes.forEach(node => {
                    if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
                        node.nodeValue = translations[lang][key];
                    }
                });
            }
        });
        document.getElementById('currentLang').textContent = lang.toUpperCase();

        if (lang === 'ar') {
            document.body.dir = 'rtl';
            document.body.style.fontFamily = "'Tahoma', sans-serif";
        } else {
            document.body.dir = 'ltr';
            document.body.style.fontFamily = "'Space Grotesk', sans-serif";
        }
    };
});
