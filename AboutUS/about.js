document.addEventListener('DOMContentLoaded', () => {
    const enText = {
        title: "About Us",
        historyTitle: "Company History",
        historyParagraph1: "[Your Business Name] was founded in 2003, inspired by a vision to transform lives through customized prosthetics, orthotics, and medical shoes. With clinical locations in Cairo and Giza, we are proud to be the only private facility in Egypt that has a fully certified and licensed team by the Ministry of Health.",
        historyParagraph2: "Our team of highly qualified and certified practitioners represents expertise in all specialties, including advanced lower and upper limb prostheses, lower and upper limb orthotics, spinal orthotics, and pediatric orthotics. We are dedicated to providing unparalleled comfort, functionality, and quality to our patients.",
        missionTitle: "Mission",
        missionParagraph: "\"To transform the lives of our patients, whom we consider family, by providing customized prosthetics, orthotics, and medical shoes with unmatched comfort and quality while spreading knowledge and awareness.\"",
        visionTitle: "Vision",
        visionParagraph: "\"To lead in personalized prosthetic and orthotic care in Egypt, empowering every patient to reclaim their independence and live the life they deserve.\"",
        valuesTitle: "Our Values",
        valuesParagraph: "Our values are deeply rooted in our commitment to our patients, guiding us in every aspect of our care to ensure they receive the highest level of support and comfort.",
        valuesList: [
            "Patient-Centric Care: Our patients are our family, and we prioritize their well-being and happiness above all else.",
            "Customized Solutions: We specialize in providing bespoke prosthetics, orthotics, and medical shoes tailored to each patient's unique needs.",
            "Empowerment: We aim to help our patients regain their lives and independence, ensuring they can live life to the fullest.",
            "Quality: We are committed to using high-quality materials and the latest technology to ensure the best outcomes for our patients.",
            "Comfort: Our designs prioritize comfort to ensure that our patients can wear their prosthetics, orthotics, and medical shoes with ease.",
            "Functionality: We focus on creating solutions that not only fit well but also enhance the functionality and mobility of our patients.",
            "Education and Awareness: We strive to spread knowledge and awareness about prosthetics and orthotics, empowering patients with information about their rights and options.",
            "Continuous Support: Our care doesn't end with the fitting; we provide ongoing support and follow-up to ensure our patients' continued comfort and mobility."
        ]
    };

    const arText = {
        title: "معلومات عنا",
        historyTitle: "تاريخ الشركة",
        historyParagraph1: "[اسم عملك] تأسست في عام 2003، مستلهمة برؤية لتحويل الحياة من خلال الأطراف الصناعية المخصصة والأجهزة التقويمية والأحذية الطبية. مع المواقع السريرية في القاهرة والجيزة، نحن فخورون بكوننا المنشأة الخاصة الوحيدة في مصر التي تضم فريقًا معتمدًا ومرخصًا بالكامل من وزارة الصحة.",
        historyParagraph2: "فريقنا من الممارسين المؤهلين والمعتمدين يمثل خبرة في جميع التخصصات، بما في ذلك الأطراف الصناعية المتقدمة للأطراف السفلية والعلوية، والأجهزة التقويمية للأطراف السفلية والعلوية، والأجهزة التقويمية للعمود الفقري، والأجهزة التقويمية للأطفال. نحن ملتزمون بتوفير الراحة والجودة والوظائف التي لا مثيل لها لمرضانا.",
        missionTitle: "الرسالة",
        missionParagraph: "\"لتحويل حياة مرضانا، الذين نعتبرهم عائلتنا، من خلال تقديم الأطراف الصناعية المخصصة والأجهزة التقويمية والأحذية الطبية مع راحة وجودة لا مثيل لها مع نشر المعرفة والوعي.\"",
        visionTitle: "الرؤية",
        visionParagraph: "\"أن نكون الرائدين في الرعاية الشخصية للأطراف الصناعية والأجهزة التقويمية في مصر، وتمكين كل مريض لاستعادة استقلاله والعيش بالحياة التي يستحقها.\"",
        valuesTitle: "قيمنا",
        valuesParagraph: "قيمنا متجذرة بعمق في التزامنا بمرضانا، مما يوجهنا في كل جانب من جوانب رعايتنا لضمان تلقيهم أعلى مستوى من الدعم والراحة.",
        valuesList: [
            "الرعاية المتمحورة حول المريض: مرضانا هم عائلتنا، ونعطي الأولوية لرفاهيتهم وسعادتهم فوق كل شيء.",
            "الحلول المخصصة: نحن متخصصون في تقديم الأطراف الصناعية والأجهزة التقويمية والأحذية الطبية المصممة وفقًا لاحتياجات كل مريض الفريدة.",
            "التمكين: نسعى لمساعدة مرضانا على استعادة حياتهم واستقلالهم، مما يضمن لهم العيش بأقصى درجات الاستقلال.",
            "الجودة: نحن ملتزمون باستخدام مواد عالية الجودة وأحدث التقنيات لضمان أفضل النتائج لمرضانا.",
            "الراحة: تصاميمنا تعطي الأولوية للراحة لضمان أن مرضانا يمكنهم ارتداء الأطراف الصناعية والأجهزة التقويمية والأحذية الطبية بسهولة.",
            "الوظائف: نحن نركز على إنشاء حلول لا تتناسب جيدًا فحسب، بل تعزز أيضًا وظائف وحركة مرضانا.",
            "التعليم والوعي: نسعى لنشر المعرفة والوعي حول الأطراف الصناعية والأجهزة التقويمية، وتمكين المرضى بمعلومات حول حقوقهم وخياراتهم.",
            "الدعم المستمر: رعايتنا لا تنتهي عند التركيب؛ نحن نقدم الدعم والمتابعة المستمرة لضمان راحة وحركة مرضانا."
        ]
    };

    const switchToLanguage = (lang) => {
        const texts = lang === 'ar' ? arText : enText;
        document.getElementById('page-title').innerText = texts.title;
        document.getElementById('history-title').innerText = texts.historyTitle;
        document.getElementById('history-paragraph-1').innerText = texts.historyParagraph1;
        document.getElementById('history-paragraph-2').innerText = texts.historyParagraph2;
        document.getElementById('mission-title').innerText = texts.missionTitle;
        document.getElementById('mission-paragraph').innerText = texts.missionParagraph;
        document.getElementById('vision-title').innerText = texts.visionTitle;
        document.getElementById('vision-paragraph').innerText = texts.visionParagraph;
        document.getElementById('values-title').innerText = texts.valuesTitle;
        document.getElementById('values-paragraph').innerText = texts.valuesParagraph;
        const valuesList = document.getElementById('values-list');
        valuesList.innerHTML = texts.valuesList.map(value => `<li>${value}</li>`).join('');
        document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
    };

    document.getElementById('english-btn').addEventListener('click', () => switchToLanguage('en'));
    document.getElementById('arabic-btn').addEventListener('click', () => switchToLanguage('ar'));

    // Set default language
    switchToLanguage('en');
});
