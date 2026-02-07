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
            audioPlayer.play().catch(e => console.log("Interaction needed"));
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
            nav_projects: "Ventures",
            nav_contact: "Contact",
            hero_desc: "18 years old. Transforming ideas into business reality. Mastering Flutter, Node.js, and the Web to achieve financial freedom.",
            btn_work: "Let's Build Something",
            about_title: "About Me",
            skill_title: "Tech Arsenal",
            skill_desc: "Beyond HTML/CSS/JS. Building scalable apps with robust technologies like Flutter, Dart, and Node.js.",
            goal_title: "Vision",
            goal_desc: "My goal is financial freedom. I don't just write code; I build businesses and digital assets. Future company owner.",
            community_title: "Leadership",
            community_desc: "Leading the Levant Server. Managing communities, fostering growth, and connecting people across borders.",
            projects_title: "Ventures",
            levant_desc: "A friendly gaming server where people from different cultures, religions, and backgrounds come together. Co-founded with Malrimem, Joseph, and SkaiTo. No toxicity, just good vibes.",
            syria_desc: "A public community server representing Syria. I created a fan website for this community to show my support. I am a member here, contributing to the digital presence."
        },
        tr: {
            nav_home: "Anasayfa",
            nav_about: "Hakkımda",
            nav_projects: "Girişimler",
            nav_contact: "İletişim",
            hero_desc: "18 yaşında. Fikirleri iş gerçeğine dönüştürüyor. Finansal özgürlük için Flutter, Node.js ve Web teknolojilerinde ustalaşıyor.",
            btn_work: "Birlikte İnşa Edelim",
            about_title: "Hakkımda",
            skill_title: "Teknoloji Deposu",
            skill_desc: "HTML/CSS/JS'nin ötesinde. Flutter, Dart ve Node.js gibi güçlü teknolojilerle ölçeklenebilir uygulamalar geliştiriyorum.",
            goal_title: "Vizyon",
            goal_desc: "Hedefim finansal özgürlük. Sadece kod yazmıyorum; iş ve dijital varlıklar inşa ediyorum. Geleceğin şirket sahibi.",
            community_title: "Liderlik",
            community_desc: "Levant Sunucusu liderliği. Toplulukları yönetiyor, büyümeyi destekliyor ve sınırların ötesindeki insanları birleştiriyorum.",
            projects_title: "Girişimler",
            levant_desc: "Farklı kültürlerden ve inançlardan insanların bir araya geldiği dostane bir oyun sunucusu. Malrimem, Joseph ve SkaiTo ile birlikte kuruldu. Toksiklik yok, sadece iyi hisler.",
            syria_desc: "Suriye'yi temsil eden herkese açık bir topluluk sunucusu. Desteğimi göstermek için bu hayran sitesini yaptım. Burada sadece dijital varlığa katkıda bulunan bir üyeyim."
        },
        ar: {
            nav_home: "الرئيسية",
            nav_about: "حولي",
            nav_projects: "مشاريعي",
            nav_contact: "تواصل",
            hero_desc: "18 عاماً. تحويل الأفكار إلى واقع تجاري. إتقان Flutter و Node.js والويب لتحقيق الحرية المالية.",
            btn_work: "لنبتكر شيئاً",
            about_title: "من أنا",
            skill_title: "الترسانة التقنية",
            skill_desc: "ما وراء HTML/CSS/JS. بناء تطبيقات قابلة للتطوير باستخدام تقنيات قوية مثل Flutter و Dart و Node.js.",
            goal_title: "الرؤية",
            goal_desc: "هدفي هو الحرية المالية. أنا لا أكتب الكود فقط؛ أنا أبني أعمالاً وأصولاً رقمية. صاحب شركة في المستقبل.",
            community_title: "القيادة",
            community_desc: "قيادة سيرفر Levant. إدارة المجتمعات وتعزيز النمو والربط بين الناس عبر الحدود.",
            projects_title: "مشاريعي",
            levant_desc: "خادم ألعاب ودي حيث يجتمع الناس من مختلف الثقافات والأديان والخلفيات. تأسس بالمشاركة مع Malrimem و Joseph و SkaiTo.",
            syria_desc: "خادم مجتمعي عام يمثل سوريا. قمت بإنشاء موقع معجبين لهذا المجتمع لإظهار دعمي. أنا عضو هنا أساهم في التواجد الرقمي."
        }
    };

    window.changeLang = function(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.getElementById('currentLang').textContent = lang.toUpperCase();
        
        if(lang === 'ar') {
            document.body.dir = 'rtl';
            document.body.style.fontFamily = "'Tahoma', sans-serif";
        } else {
            document.body.dir = 'ltr';
            document.body.style.fontFamily = "'Inter', sans-serif";
        }
    };
});
