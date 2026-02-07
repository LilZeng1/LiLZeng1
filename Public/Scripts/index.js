document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const audioPlayer = document.getElementById('audioPlayer');
    const volumeSlider = document.getElementById('volumeSlider');

    let isPlaying = false;

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        } else {
            audioPlayer.play().catch(e => console.log("Audio play failed interaction needed"));
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    });

    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    audioPlayer.volume = 0.3;

    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_desc: "Crafting digital experiences with passion and precision. 18 years old, turning caffeine into code since 13.",
            btn_projects: "View My Work",
            about_title: "About Me",
            skill_title: "Tech Stack",
            skill_desc: "Building the web since 13. Nearly Full Stack. Specialized in modern UI/UX, responsive design, and scalable backend solutions.",
            origin_title: "Background",
            origin_desc: "Born in Damascus, thinking globally. 18 years old. I bridge cultures through code and community management.",
            community_title: "Community",
            community_desc: "Owner of Levant Server. Creating safe, non-toxic spaces for gaming, anime, and open discussion.",
            projects_title: "Featured Projects",
            levant_desc: "A friendly gaming server where people from different cultures, religions, and backgrounds come together. Co-founded with Malrimem, Joseph, and SkaiTo. No toxicity, just good vibes.",
            syria_desc: "A public community server representing Syria. I created a fan website for this community to show my support. I am a member here, contributing to the digital presence."
        },
        tr: {
            nav_home: "Anasayfa",
            nav_about: "Hakkımda",
            nav_projects: "Projeler",
            nav_contact: "İletişim",
            hero_desc: "Dijital deneyimleri tutku ve hassasiyetle işliyorum. 18 yaşındayım, 13 yaşımdan beri kahveyi koda dönüştürüyorum.",
            btn_projects: "Projelerimi Gör",
            about_title: "Hakkımda",
            skill_title: "Teknoloji",
            skill_desc: "13 yaşından beri web geliştiriyorum. Neredeyse Full Stack. Modern UI/UX, responsive tasarım ve ölçeklenebilir backend çözümlerinde uzmanım.",
            origin_title: "Arka Plan",
            origin_desc: "Şam doğumlu, global vizyonlu. 18 yaşındayım. Kod ve topluluk yönetimi ile kültürleri birleştiriyorum.",
            community_title: "Topluluk",
            community_desc: "Levant Sunucusu kurucusu. Oyun, anime ve açık tartışma için güvenli, toksik olmayan alanlar yaratıyorum.",
            projects_title: "Öne Çıkan Projeler",
            levant_desc: "Farklı kültürlerden ve inançlardan insanların bir araya geldiği dostane bir oyun sunucusu. Malrimem, Joseph ve SkaiTo ile birlikte kuruldu. Toksiklik yok, sadece iyi hisler.",
            syria_desc: "Suriye'yi temsil eden herkese açık bir topluluk sunucusu. Desteğimi göstermek için bu hayran sitesini yaptım. Burada sadece dijital varlığa katkıda bulunan bir üyeyim."
        },
        ar: {
            nav_home: "الرئيسية",
            nav_about: "حولي",
            nav_projects: "مشاريعي",
            nav_contact: "تواصل",
            hero_desc: "صناعة التجارب الرقمية بشغف ودقة. عمري 18 عاماً، أحول القهوة إلى كود منذ سن 13.",
            btn_projects: "شاهد أعمالي",
            about_title: "من أنا",
            skill_title: "التقنيات",
            skill_desc: "أطور الويب منذ سن 13. تقريباً Full Stack. متخصص في واجهة المستخدم الحديثة والتصميم المتجاوب والحلول الخلفية القابلة للتطوير.",
            origin_title: "الخلفية",
            origin_desc: "مواليد دمشق، بتفكير عالمي. عمري 18 عاماً. أربط بين الثقافات من خلال الكود وإدارة المجتمع.",
            community_title: "المجتمع",
            community_desc: "مالك سيرفر Levant. إنشاء مساحات آمنة وغير سامة للألعاب والأنمي والنقاش المفتوح.",
            projects_title: "مشاريع مميزة",
            levant_desc: "خادم ألعاب ودي حيث يجتمع الناس من مختلف الثقافات والأديان والخلفيات. تأسس بالمشاركة مع Malrimem و Joseph و SkaiTo.",
            syria_desc: "خادم مجتمعي عام يمثل سوريا. قمت بإنشاء موقع معجبين لهذا المجتمع لإظهار دعمي. أنا عضو هنا أساهم في التواجد الرقمي."
        }
    };

    window.changeLang = function (lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.getElementById('currentLang').textContent = lang.toUpperCase();

        if (lang === 'ar') {
            document.body.dir = 'rtl';
            document.body.style.fontFamily = "'Tahoma', sans-serif";
        } else {
            document.body.dir = 'ltr';
            document.body.style.fontFamily = "'Inter', sans-serif";
        }
    };
});
