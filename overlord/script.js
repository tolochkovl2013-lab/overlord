// =========================================
//  ССЫЛКИ — ЗАМЕНИТЕ НА СВОИ
// =========================================
const LINKS = {
  github:   "https://github.com/tolochkovl2013-lab/overlord",
  releases: "https://github.com/tolochkovl2013-lab/overlord/releases",
  download: "https://github.com/tolochkovl2013-lab/overlord/releases/latest/download/OverlordSetup.exe",
  "rel-v12":     "https://github.com/tolochkovl2013-lab/overlord/releases/tag/v1.2",
  "rel-privacy": "https://github.com/tolochkovl2013-lab/overlord/releases/tag/privacy-1.0",
  "rel-toolkit": "https://github.com/tolochkovl2013-lab/overlord/releases/tag/v0.1-toolkit"
};

// =========================================
//  ПЕРЕВОДЫ
// =========================================
const translations = {
  ru: {
    "nav.programs": "Программы",
    "nav.screens": "Скриншоты",
    "nav.install": "Установка",
    "nav.faq": "FAQ",
    "nav.download": "Скачать",
    "hero.title": "Overlord",
    "hero.lead": "Overlord — это набор из трёх программ для Windows: умный ИИ-ассистент, полностью офлайн-версия для приватной работы и системный Toolkit для диагностики компьютера. Всё ставится одним установщиком и работает локально — ваши данные не уходят в облако.",
    "hero.download": "Скачать Overlord",
    "hero.github": "Исходники на GitHub",
    "hero.note": "Windows 10 / 11 · ~38 МБ · бесплатно",
    "programs.title": "Три программы",
    "programs.sub": "Ставятся вместе через Overlord Hub — лаунчер сам скачает нужное и подтянет модели.",
    "card.v12.title": "Overlord v1.2",
    "card.v12.tag": "Полноценный ИИ-ассистент",
    "card.v12.li1": "4 языка: RU / UK / EN / DE",
    "card.v12.li2": "Работа с Word и PPTX",
    "card.v12.li3": "Cloud Vision — распознавание изображений",
    "card.v12.li4": "DeepThink — режим глубоких рассуждений",
    "card.v12.size": "~350 МБ",
    "card.v12.link": "Скачать ZIP ↗",
    "card.privacy.title": "Overlord Privacy",
    "card.privacy.tag": "Офлайн и приватно",
    "card.privacy.li1": "Работает без интернета",
    "card.privacy.li2": "Украинский язык интерфейса",
    "card.privacy.li3": "Режим Cyber Secure",
    "card.privacy.li4": "Оптимизировано для слабых ноутбуков",
    "card.privacy.size": "~162 МБ",
    "card.privacy.link": "Скачать ZIP ↗",
    "card.toolkit.title": "OVL Toolkit",
    "card.toolkit.tag": "Диагностика системы",
    "card.toolkit.li1": "Автозагрузка и процессы",
    "card.toolkit.li2": "Проверка файла hosts",
    "card.toolkit.li3": "Установленные шрифты",
    "card.toolkit.li4": "Диспетчер с деревом процессов",
    "card.toolkit.size": "~50 МБ",
    "card.toolkit.link": "Скачать EXE ↗",
    "screens.title": "Скриншоты",
    "screens.sub": "Тёмная тема, акцент #7c5cff, шрифт Segoe UI.",
    "screens.cap1": "Overlord Hub — лаунчер и загрузка программ",
    "screens.cap2": "ИИ-ассистент: чат, документы, DeepThink",
    "screens.cap3": "Overlord Privacy — офлайн-режим",
    "screens.toolkitTitle": "OVL Toolkit — три вкладки",
    "screens.cap4": "OVL Toolkit — главный экран",
    "screens.cap5": "OVL Toolkit — автозагрузка и процессы",
    "screens.cap6": "OVL Toolkit — диспетчер с деревом процессов",
    "install.title": "Установка за 4 шага",
    "install.sub": "Ничего настраивать вручную не нужно — хаб всё сделает сам.",
    "install.step1.title": "Скачайте установщик",
    "install.step1.text": "Нажмите кнопку «Скачать Overlord» вверху страницы — файл OverlordSetup.exe (~38 МБ).",
    "install.step2.title": "Запустите и подтвердите",
    "install.step2.text": "Windows покажет синее окно «Защитник Windows». Нажмите «Подробнее» → «Выполнить в любом случае».",
    "install.step3.title": "Дождитесь установки",
    "install.step3.text": "Программа поставится в C:\\Overlord\\, а на рабочем столе появится ярлык Overlord.",
    "install.step4.title": "Запустите хаб",
    "install.step4.text": "Хаб сам проверит Ollama, скачает нужную программу и модели. Первая загрузка моделей требует интернета.",
    "install.download": "Скачать OverlordSetup.exe",
    "install.releases": "Все релизы на GitHub",
    "faq.title": "Частые вопросы",
    "faq.q1": "Антивирус ругается на Trojan:Win32/Wacatac.C!ml. Это вирус?",
    "faq.a1": "<p><b>Нет, это ложное срабатывание.</b> Все программы собраны через PyInstaller, а антивирусы часто помечают такие сборки ML-детектом.</p><p>Проверка на VirusTotal даёт <b>1 из 69</b> срабатываний. Malwarebytes, Kaspersky, ESET, Bitdefender и Avast — чисто.</p><p><b>Что делать:</b> нажмите «Подробнее» → «Выполнить в любом случае». Либо добавьте папку <code>C:\\Overlord\\</code> в исключения.</p>",
    "faq.q2": "Что такое Ollama и зачем она нужна?",
    "faq.a2": "<p><b>Ollama</b> — бесплатная программа, которая запускает языковые модели прямо на вашем компьютере. Именно она «думает» за Overlord.</p><p>Хаб находит Ollama автоматически. Если её нет — предложит скачать и установить. После этого он сам загрузит нужные модели командой <code>ollama pull</code>.</p><p class=\"muted\">Плюс: всё работает локально, ваши тексты никуда не отправляются.</p>",
    "faq.q3": "Какие требования к компьютеру?",
    "faq.a3": "<ul><li><b>ОС:</b> Windows 10 или 11 (64-бит)</li><li><b>ОЗУ:</b> минимум 8 ГБ, комфортно — 16 ГБ</li><li><b>Диск:</b> ~10 ГБ свободно</li><li><b>Интернет:</b> нужен только для первой загрузки моделей</li></ul><p class=\"muted\">Для слабых ноутбуков есть отдельная версия — <b>Overlord Privacy</b>: она легче и работает полностью офлайн.</p>",
    "faq.q4": "Куда отправляются мои данные?",
    "faq.a4": "<p><b>Никуда.</b> Overlord работает на вашем компьютере. Обработка текста и документов идёт локально через Ollama.</p><p>Исключение — функция <b>Cloud Vision</b> в версии v1.2: она по желанию отправляет картинку в облако. Если приватность важнее — используйте <b>Overlord Privacy</b>.</p>",
    "faq.q5": "Нужно ли платить?",
    "faq.a5": "<p>Нет. Проект бесплатный и открытый — исходники лежат на GitHub. Платить нужно только за электричество 🙂</p>",
    "faq.q6": "Как удалить программу?",
    "faq.a6": "<p>Через «Параметры → Приложения → Overlord → Удалить». Отдельную программу из хаба можно убрать так:</p><pre><code>Remove-Item -Recurse -Force \"C:\\OverlordHub\\apps\\privacy\" -ErrorAction SilentlyContinue</code></pre>",
    "footer.desc": "ИИ-ассистент, приватность и системный Toolkit для Windows."
  },

  uk: {
    "nav.programs": "Програми",
    "nav.screens": "Скриншоти",
    "nav.install": "Встановлення",
    "nav.faq": "FAQ",
    "nav.download": "Завантажити",
    "hero.title": "Overlord",
    "hero.lead": "Overlord — це набір із трьох програм для Windows: розумний ШІ-асистент, повністю офлайн-версія для приватної роботи та системний Toolkit для діагностики комп'ютера. Усе встановлюється одним інсталятором і працює локально — ваші дані не йдуть у хмару.",
    "hero.download": "Завантажити Overlord",
    "hero.github": "Джерела на GitHub",
    "hero.note": "Windows 10 / 11 · ~38 МБ · безкоштовно",
    "programs.title": "Три програми",
    "programs.sub": "Встановлюються разом через Overlord Hub — лаунчер сам завантажить потрібне й підтягне моделі.",
    "card.v12.title": "Overlord v1.2",
    "card.v12.tag": "Повноцінний ШІ-асистент",
    "card.v12.li1": "4 мови: RU / UK / EN / DE",
    "card.v12.li2": "Робота з Word і PPTX",
    "card.v12.li3": "Cloud Vision — розпізнавання зображень",
    "card.v12.li4": "DeepThink — режим глибоких роздумів",
    "card.v12.size": "~350 МБ",
    "card.v12.link": "Завантажити ZIP ↗",
    "card.privacy.title": "Overlord Privacy",
    "card.privacy.tag": "Офлайн і приватно",
    "card.privacy.li1": "Працює без інтернету",
    "card.privacy.li2": "Українська мова інтерфейсу",
    "card.privacy.li3": "Режим Cyber Secure",
    "card.privacy.li4": "Оптимізовано для слабких ноутбуків",
    "card.privacy.size": "~162 МБ",
    "card.privacy.link": "Завантажити ZIP ↗",
    "card.toolkit.title": "OVL Toolkit",
    "card.toolkit.tag": "Діагностика системи",
    "card.toolkit.li1": "Автозавантаження та процеси",
    "card.toolkit.li2": "Перевірка файлу hosts",
    "card.toolkit.li3": "Встановлені шрифти",
    "card.toolkit.li4": "Диспетчер із деревом процесів",
    "card.toolkit.size": "~50 МБ",
    "card.toolkit.link": "Завантажити EXE ↗",
    "screens.title": "Скриншоти",
    "screens.sub": "Темна тема, акцент #7c5cff, шрифт Segoe UI.",
    "screens.cap1": "Overlord Hub — лаунчер і завантаження програм",
    "screens.cap2": "ШІ-асистент: чат, документи, DeepThink",
    "screens.cap3": "Overlord Privacy — офлайн-режим",
    "screens.toolkitTitle": "OVL Toolkit — три вкладки",
    "screens.cap4": "OVL Toolkit — головний екран",
    "screens.cap5": "OVL Toolkit — автозавантаження та процеси",
    "screens.cap6": "OVL Toolkit — диспетчер із деревом процесів",
    "install.title": "Встановлення за 4 кроки",
    "install.sub": "Нічого налаштовувати вручну не потрібно — хаб усе зробить сам.",
    "install.step1.title": "Завантажте інсталятор",
    "install.step1.text": "Натисніть кнопку «Завантажити Overlord» вгорі сторінки — файл OverlordSetup.exe (~38 МБ).",
    "install.step2.title": "Запустіть і підтвердьте",
    "install.step2.text": "Windows покаже синє вікно «Захисник Windows». Натисніть «Докладніше» → «Виконати все одно».",
    "install.step3.title": "Дочекайтеся встановлення",
    "install.step3.text": "Програма встановиться в C:\\Overlord\\, а на робочому столі з'явиться ярлик Overlord.",
    "install.step4.title": "Запустіть хаб",
    "install.step4.text": "Хаб сам перевірить Ollama, завантажить потрібну програму та моделі. Перше завантаження моделей потребує інтернету.",
    "install.download": "Завантажити OverlordSetup.exe",
    "install.releases": "Усі релізи на GitHub",
    "faq.title": "Часті питання",
    "faq.q1": "Антивірус скаржиться на Trojan:Win32/Wacatac.C!ml. Це вірус?",
    "faq.a1": "<p><b>Ні, це хибне спрацювання.</b> Усі програми зібрані через PyInstaller, а антивіруси часто позначають такі збірки ML-детектом.</p><p>Перевірка на VirusTotal дає <b>1 з 69</b> спрацювань. Malwarebytes, Kaspersky, ESET, Bitdefender і Avast — чисто.</p><p><b>Що робити:</b> натисніть «Докладніше» → «Виконати все одно». Або додайте папку <code>C:\\Overlord\\</code> у виключення.</p>",
    "faq.q2": "Що таке Ollama і навіщо вона потрібна?",
    "faq.a2": "<p><b>Ollama</b> — безкоштовна програма, яка запускає мовні моделі прямо на вашому комп'ютері. Саме вона «думає» за Overlord.</p><p>Хаб знаходить Ollama автоматично. Якщо її немає — запропонує завантажити й встановити. Після цього він сам завантажить потрібні моделі командою <code>ollama pull</code>.</p><p class=\"muted\">Плюс: усе працює локально, ваші тексти нікуди не надсилаються.</p>",
    "faq.q3": "Які вимоги до комп'ютера?",
    "faq.a3": "<ul><li><b>ОС:</b> Windows 10 або 11 (64-біт)</li><li><b>ОЗП:</b> мінімум 8 ГБ, комфортно — 16 ГБ</li><li><b>Диск:</b> ~10 ГБ вільно</li><li><b>Інтернет:</b> потрібен лише для першого завантаження моделей</li></ul><p class=\"muted\">Для слабких ноутбуків є окрема версія — <b>Overlord Privacy</b>: вона легша й працює повністю офлайн.</p>",
    "faq.q4": "Куди надсилаються мої дані?",
    "faq.a4": "<p><b>Нікуди.</b> Overlord працює на вашому комп'ютері. Обробка тексту й документів відбувається локально через Ollama.</p><p>Виняток — функція <b>Cloud Vision</b> у версії v1.2: вона за бажанням надсилає зображення у хмару. Якщо приватність важливіша — використовуйте <b>Overlord Privacy</b>.</p>",
    "faq.q5": "Чи потрібно платити?",
    "faq.a5": "<p>Ні. Проєкт безкоштовний і відкритий — джерела лежать на GitHub. Платити потрібно лише за електрику 🙂</p>",
    "faq.q6": "Як видалити програму?",
    "faq.a6": "<p>Через «Параметри → Програми → Overlord → Видалити». Окрему програму з хаба можна прибрати так:</p><pre><code>Remove-Item -Recurse -Force \"C:\\OverlordHub\\apps\\privacy\" -ErrorAction SilentlyContinue</code></pre>",
    "footer.desc": "ШІ-асистент, приватність і системний Toolkit для Windows."
  },

  en: {
    "nav.programs": "Programs",
    "nav.screens": "Screenshots",
    "nav.install": "Install",
    "nav.faq": "FAQ",
    "nav.download": "Download",
    "hero.title": "Overlord",
    "hero.lead": "Overlord is a suite of three Windows programs: a smart AI assistant, a fully offline version for private work, and a system Toolkit for computer diagnostics. Everything installs with a single setup and runs locally — your data never leaves your machine.",
    "hero.download": "Download Overlord",
    "hero.github": "Source on GitHub",
    "hero.note": "Windows 10 / 11 · ~38 MB · free",
    "programs.title": "Three programs",
    "programs.sub": "Installed together via Overlord Hub — the launcher downloads everything and pulls models automatically.",
    "card.v12.title": "Overlord v1.2",
    "card.v12.tag": "Full-featured AI assistant",
    "card.v12.li1": "4 languages: RU / UK / EN / DE",
    "card.v12.li2": "Works with Word and PPTX",
    "card.v12.li3": "Cloud Vision — image recognition",
    "card.v12.li4": "DeepThink — deep reasoning mode",
    "card.v12.size": "~350 MB",
    "card.v12.link": "Download ZIP ↗",
    "card.privacy.title": "Overlord Privacy",
    "card.privacy.tag": "Offline and private",
    "card.privacy.li1": "Works without internet",
    "card.privacy.li2": "Ukrainian interface",
    "card.privacy.li3": "Cyber Secure mode",
    "card.privacy.li4": "Optimized for low-end laptops",
    "card.privacy.size": "~162 MB",
    "card.privacy.link": "Download ZIP ↗",
    "card.toolkit.title": "OVL Toolkit",
    "card.toolkit.tag": "System diagnostics",
    "card.toolkit.li1": "Startup and processes",
    "card.toolkit.li2": "Hosts file check",
    "card.toolkit.li3": "Installed fonts",
    "card.toolkit.li4": "Process tree manager",
    "card.toolkit.size": "~50 MB",
    "card.toolkit.link": "Download EXE ↗",
    "screens.title": "Screenshots",
    "screens.sub": "Dark theme, #7c5cff accent, Segoe UI font.",
    "screens.cap1": "Overlord Hub — launcher and downloads",
    "screens.cap2": "AI assistant: chat, documents, DeepThink",
    "screens.cap3": "Overlord Privacy — offline mode",
    "screens.toolkitTitle": "OVL Toolkit — three tabs",
    "screens.cap4": "OVL Toolkit — main screen",
    "screens.cap5": "OVL Toolkit — startup and processes",
    "screens.cap6": "OVL Toolkit — process tree manager",
    "install.title": "Install in 4 steps",
    "install.sub": "No manual setup — the hub does everything for you.",
    "install.step1.title": "Download the installer",
    "install.step1.text": "Click the \"Download Overlord\" button at the top — file OverlordSetup.exe (~38 MB).",
    "install.step2.title": "Run and confirm",
    "install.step2.text": "Windows will show a blue \"Windows Defender\" window. Click \"More info\" → \"Run anyway\".",
    "install.step3.title": "Wait for installation",
    "install.step3.text": "The app installs to C:\\Overlord\\ and creates an Overlord shortcut on your desktop.",
    "install.step4.title": "Launch the hub",
    "install.step4.text": "The hub checks Ollama, downloads the app and models. The first model download requires internet.",
    "install.download": "Download OverlordSetup.exe",
    "install.releases": "All releases on GitHub",
    "faq.title": "Frequently asked questions",
    "faq.q1": "My antivirus flags Trojan:Win32/Wacatac.C!ml. Is it a virus?",
    "faq.a1": "<p><b>No, it's a false positive.</b> All programs are built with PyInstaller, and antivirus software often flags such builds with ML detection.</p><p>VirusTotal shows <b>1 out of 69</b> detections. Malwarebytes, Kaspersky, ESET, Bitdefender and Avast — clean.</p><p><b>What to do:</b> click \"More info\" → \"Run anyway\". Or add <code>C:\\Overlord\\</code> to exclusions.</p>",
    "faq.q2": "What is Ollama and why is it needed?",
    "faq.a2": "<p><b>Ollama</b> is a free program that runs language models directly on your computer. It powers Overlord's thinking.</p><p>The hub finds Ollama automatically. If missing, it offers to download and install it. After that it pulls the needed models with <code>ollama pull</code>.</p><p class=\"muted\">Bonus: everything runs locally — your texts never leave your machine.</p>",
    "faq.q3": "What are the system requirements?",
    "faq.a3": "<ul><li><b>OS:</b> Windows 10 or 11 (64-bit)</li><li><b>RAM:</b> 8 GB minimum, 16 GB comfortable</li><li><b>Disk:</b> ~10 GB free</li><li><b>Internet:</b> only for the first model download</li></ul><p class=\"muted\">For low-end laptops there is a separate version — <b>Overlord Privacy</b>: lighter and fully offline.</p>",
    "faq.q4": "Where is my data sent?",
    "faq.a4": "<p><b>Nowhere.</b> Overlord runs on your computer. Text and document processing happens locally via Ollama.</p><p>The exception is <b>Cloud Vision</b> in v1.2: it optionally sends images to the cloud. If privacy matters more — use <b>Overlord Privacy</b>.</p>",
    "faq.q5": "Do I have to pay?",
    "faq.a5": "<p>No. The project is free and open source — the code is on GitHub. You only pay for electricity 🙂</p>",
    "faq.q6": "How do I uninstall?",
    "faq.a6": "<p>Via \"Settings → Apps → Overlord → Uninstall\". A single program from the hub can be removed like this:</p><pre><code>Remove-Item -Recurse -Force \"C:\\OverlordHub\\apps\\privacy\" -ErrorAction SilentlyContinue</code></pre>",
    "footer.desc": "AI assistant, privacy and system Toolkit for Windows."
  },

  de: {
    "nav.programs": "Programme",
    "nav.screens": "Screenshots",
    "nav.install": "Installation",
    "nav.faq": "FAQ",
    "nav.download": "Herunterladen",
    "hero.title": "Overlord",
    "hero.lead": "Overlord ist eine Sammlung von drei Windows-Programmen: ein intelligenter KI-Assistent, eine vollständig offline-Version für private Arbeit und ein System-Toolkit zur Computerdiagnose. Alles wird mit einem Setup installiert und läuft lokal — Ihre Daten verlassen niemals Ihren Rechner.",
    "hero.download": "Overlord herunterladen",
    "hero.github": "Quellcode auf GitHub",
    "hero.note": "Windows 10 / 11 · ~38 MB · kostenlos",
    "programs.title": "Drei Programme",
    "programs.sub": "Gemeinsam über Overlord Hub installiert — der Launcher lädt alles herunter und bezieht Modelle automatisch.",
    "card.v12.title": "Overlord v1.2",
    "card.v12.tag": "Vollwertiger KI-Assistent",
    "card.v12.li1": "4 Sprachen: RU / UK / EN / DE",
    "card.v12.li2": "Arbeit mit Word und PPTX",
    "card.v12.li3": "Cloud Vision — Bilderkennung",
    "card.v12.li4": "DeepThink — tiefer Denkmodus",
    "card.v12.size": "~350 MB",
    "card.v12.link": "ZIP herunterladen ↗",
    "card.privacy.title": "Overlord Privacy",
    "card.privacy.tag": "Offline und privat",
    "card.privacy.li1": "Funktioniert ohne Internet",
    "card.privacy.li2": "Ukrainische Oberfläche",
    "card.privacy.li3": "Cyber-Secure-Modus",
    "card.privacy.li4": "Optimiert für schwache Laptops",
    "card.privacy.size": "~162 MB",
    "card.privacy.link": "ZIP herunterladen ↗",
    "card.toolkit.title": "OVL Toolkit",
    "card.toolkit.tag": "Systemdiagnose",
    "card.toolkit.li1": "Autostart und Prozesse",
    "card.toolkit.li2": "Hosts-Datei prüfen",
    "card.toolkit.li3": "Installierte Schriftarten",
    "card.toolkit.li4": "Prozessbaum-Manager",
    "card.toolkit.size": "~50 MB",
    "card.toolkit.link": "EXE herunterladen ↗",
    "screens.title": "Screenshots",
    "screens.sub": "Dunkles Design, #7c5cff Akzent, Segoe UI.",
    "screens.cap1": "Overlord Hub — Launcher und Downloads",
    "screens.cap2": "KI-Assistent: Chat, Dokumente, DeepThink",
    "screens.cap3": "Overlord Privacy — Offline-Modus",
    "screens.toolkitTitle": "OVL Toolkit — drei Tabs",
    "screens.cap4": "OVL Toolkit — Hauptbildschirm",
    "screens.cap5": "OVL Toolkit — Autostart und Prozesse",
    "screens.cap6": "OVL Toolkit — Prozessbaum-Manager",
    "install.title": "Installation in 4 Schritten",
    "install.sub": "Keine manuelle Einrichtung — der Hub erledigt alles.",
    "install.step1.title": "Installer herunterladen",
    "install.step1.text": "Klicken Sie oben auf „Overlord herunterladen“ — Datei OverlordSetup.exe (~38 MB).",
    "install.step2.title": "Starten und bestätigen",
    "install.step2.text": "Windows zeigt ein blaues Fenster „Windows Defender“. Klicken Sie „Weitere Informationen“ → „Trotzdem ausführen“.",
    "install.step3.title": "Installation abwarten",
    "install.step3.text": "Das Programm wird nach C:\\Overlord\\ installiert, eine Overlord-Verknüpfung erscheint auf dem Desktop.",
    "install.step4.title": "Hub starten",
    "install.step4.text": "Der Hub prüft Ollama, lädt das Programm und Modelle. Der erste Modelldownload benötigt Internet.",
    "install.download": "OverlordSetup.exe herunterladen",
    "install.releases": "Alle Releases auf GitHub",
    "faq.title": "Häufige Fragen",
    "faq.q1": "Mein Antivirus meldet Trojan:Win32/Wacatac.C!ml. Ist das ein Virus?",
    "faq.a1": "<p><b>Nein, ein Fehlalarm.</b> Alle Programme wurden mit PyInstaller erstellt, und Antivirensoftware meldet solche Builds oft per ML-Erkennung.</p><p>VirusTotal zeigt <b>1 von 69</b> Treffern. Malwarebytes, Kaspersky, ESET, Bitdefender und Avast — sauber.</p><p><b>Was tun:</b> „Weitere Informationen“ → „Trotzdem ausführen“. Oder <code>C:\\Overlord\\</code> zu Ausnahmen hinzufügen.</p>",
    "faq.q2": "Was ist Ollama und wozu dient es?",
    "faq.a2": "<p><b>Ollama</b> ist ein kostenloses Programm, das Sprachmodelle direkt auf Ihrem Computer ausführt. Es ist das „Gehirn“ von Overlord.</p><p>Der Hub findet Ollama automatisch. Falls nicht vorhanden, wird die Installation angeboten. Danach lädt er die benötigten Modelle per <code>ollama pull</code>.</p><p class=\"muted\">Bonus: Alles läuft lokal — Ihre Texte verlassen den Rechner nicht.</p>",
    "faq.q3": "Welche Systemanforderungen gibt es?",
    "faq.a3": "<ul><li><b>OS:</b> Windows 10 oder 11 (64-Bit)</li><li><b>RAM:</b> mindestens 8 GB, komfortabel 16 GB</li><li><b>Festplatte:</b> ~10 GB frei</li><li><b>Internet:</b> nur für den ersten Modelldownload</li></ul><p class=\"muted\">Für schwache Laptops gibt es <b>Overlord Privacy</b>: leichter und vollständig offline.</p>",
    "faq.q4": "Wohin werden meine Daten gesendet?",
    "faq.a4": "<p><b>Nirgendwohin.</b> Overlord läuft auf Ihrem Computer. Text- und Dokumentverarbeitung erfolgt lokal über Ollama.</p><p>Ausnahme: <b>Cloud Vision</b> in v1.2 — optional werden Bilder in die Cloud gesendet. Wenn Privatsphäre wichtiger ist — nutzen Sie <b>Overlord Privacy</b>.</p>",
    "faq.q5": "Muss ich bezahlen?",
    "faq.a5": "<p>Nein. Das Projekt ist kostenlos und Open Source — der Code liegt auf GitHub. Sie zahlen nur den Strom 🙂</p>",
    "faq.q6": "Wie deinstalliere ich das Programm?",
    "faq.a6": "<p>Über „Einstellungen → Apps → Overlord → Deinstallieren“. Ein einzelnes Programm aus dem Hub entfernen Sie so:</p><pre><code>Remove-Item -Recurse -Force \"C:\\OverlordHub\\apps\\privacy\" -ErrorAction SilentlyContinue</code></pre>",
    "footer.desc": "KI-Assistent, Privatsphäre und System-Toolkit für Windows."
  }
};

// =========================================
//  ОПРЕДЕЛЕНИЕ ЯЗЫКА БРАУЗЕРА
// =========================================
function getBrowserLanguage() {
  const lang = (navigator.language || navigator.userLanguage || 'en')
    .slice(0, 2).toLowerCase();
  const supported = ['ru', 'uk', 'en', 'de'];
  return supported.includes(lang) ? lang : 'en';
}

// =========================================
//  ПОДСТАНОВКА ПЕРЕВОДОВ
// =========================================
function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('overlord-lang', lang);
}

// =========================================
//  ПОДСТАНОВКА ССЫЛОК
// =========================================
function applyLinks() {
  document.querySelectorAll('[data-link]').forEach(el => {
    const key = el.getAttribute('data-link');
    if (LINKS[key]) el.href = LINKS[key];
  });
}

// =========================================
//  АНИМАЦИЯ ПОЯВЛЕНИЯ
// =========================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =========================================
//  КУРСОР-ПРОЖЕКТОР
// =========================================
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow || window.innerWidth < 820) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animate);
  }
  animate();
}

// =========================================
//  ПОЛОСА ПРОГРЕССА СКРОЛЛА
// =========================================
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = p + '%';
  }, { passive: true });
}

// =========================================
//  3D-НАКЛОН КАРТОЧЕК
// =========================================
function initCardTilt() {
  if (window.innerWidth < 820) return;
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      card.style.transform =
        `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;

      // Световое пятно следует за курсором
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty('--mx', mx + '%');
      card.style.setProperty('--my', my + '%');
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// =========================================
//  ИНИЦИАЛИЗАЦИЯ
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('overlord-lang');
  const lang = saved || getBrowserLanguage();

  applyTranslations(lang);
  applyLinks();
  initReveal();
  initCursorGlow();
  initScrollProgress();
  initCardTilt();

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});