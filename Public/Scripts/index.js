document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const audioPlayer = document.getElementById('audioPlayer');
    const volumeSlider = document.getElementById('volumeSlider');
    const visualizer = document.getElementById('visualizer');
    const albumArt = document.getElementById('albumArt');

    let isPlaying = false;
    visualizer.style.opacity = '0';
    albumArt.style.animationPlayState = 'paused';

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            playIcon.style.marginLeft = "2px";
            visualizer.style.opacity = '0';
            albumArt.style.animationPlayState = 'paused';
        } else {
            const playPromise = audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    playIcon.classList.remove('fa-play');
                    playIcon.classList.add('fa-pause');
                    playIcon.style.marginLeft = "0";
                    visualizer.style.opacity = '1';
                    albumArt.style.animationPlayState = 'running';
                }).catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
        }
        isPlaying = !isPlaying;
    });

    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    audioPlayer.volume = 0.3;

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/80', 'backdrop-blur-xl', 'border-white/10');
        } else {
            navbar.classList.remove('bg-black/80', 'backdrop-blur-xl', 'border-white/10');
        }
    });

    const typeText = ["Flutter Developer", "Node.js Expert", "Entrepreneur", "Web Designer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === typeText.length) {
            count = 0;
        }
        currentText = typeText[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typewriter').textContent = letter;
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
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const updateCount = () => {
                    const increment = target / 50;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 40);
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

    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

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
            levant_desc: "A friendly gaming server where people from different cultures come together. Co-founded with Malrimem, Joseph, and SkaiTo.",
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
            levant_desc: "Farklı kültürlerden insanların bir araya geldiği dostane bir oyun sunucusu. Kurucu ortak.",
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
            levant_desc: "خادم ألعاب ودي يجمع ثقافات مختلفة. شريك مؤسس.",
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
