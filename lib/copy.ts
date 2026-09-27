import type { Locale } from "@/lib/locales"
import type { ActivityInterest, Region } from "@/lib/options"

/*
 * All site copy lives here. Voice and wording rules:
 * .cursor/rules/padeltech-voice.mdc — read it before editing.
 */

const he = {
  meta: {
    title: "PADELTECH ישראל — מועדוני פאדל",
    description:
      "PADELTECH היא רשת מועדוני פאדל בינלאומית שנבנית בתקן אחד. המועדון הראשון בישראל בדרך — שמרו לכם מקום.",
  },
  nav: {
    padel: "לשחק",
    club: "המועדון",
    groups: "קבוצות וארגונים",
    wellness: "הרגע שאחרי",
    story: "הסיפור",
    partners: "שותפים",
    privacy: "מדיניות פרטיות",
    main: "ניווט ראשי",
    openMenu: "פתיחת תפריט",
    closeMenu: "סגירת תפריט",
    language: "EN",
    languageLabel: "English",
  },
  cta: {
    primary: "שמרו לי מקום",
    book: "הזמינו מגרש",
    secondary: "איך זה יעבוד",
  },
  hero: {
    brand: "PADELTECH",
    eyebrow: "PADELTECH ישראל",
    title: "באים לשחק.",
    body: "PADELTECH היא רשת מועדוני פאדל בינלאומית שנבנית בתקן אחד. המועדון הראשון בישראל בדרך.",
  },
  line: "זה לא המקום שבו שוכרים מגרש. זה המקום שבאים אליו לשחק.",
  experience: {
    kicker: "המועדון",
    moments: [
      {
        word: "עיצוב",
        line: "זכוכית, אור וקו נקי.",
        src: "/brand/cinema/experience-design.jpg",
      },
      {
        word: "אורח חיים",
        line: "השעה שמסביב למשחק.",
        src: "/brand/cinema/experience-lifestyle.jpg",
      },
      {
        word: "משחק",
        line: "ארבעה על המגרש.",
        src: "/brand/cinema/experience-play.jpg",
      },
      {
        word: "חברתי",
        line: "זוגות, חברים ועוד נקודה אחת.",
        src: "/brand/cinema/experience-social.jpg",
      },
      {
        word: "פאדל",
        line: "הכדור, הקיר והקצב.",
        src: "/brand/cinema/experience-padel.jpg",
      },
      {
        word: "ערב",
        line: "משחק אחרי שהשמש שוקעת.",
        src: "/brand/cinema/experience-night.jpg",
      },
    ],
  },
  bookStrip: {
    kicker: "איך זה יעבוד",
    title: "מהטלפון למגרש.",
    body: "כך תזמינו ותשחקו כשהמועדון ייפתח.",
    steps: [
      { label: "01", title: "פותחים את האפליקציה", body: "ההרשמה וההזמנות מתבצעות מהטלפון." },
      { label: "02", title: "בוחרים שעה", body: "מגרש, יום ושעה פנויה, בכמה הקשות." },
      { label: "03", title: "מגיעים למועדון", body: "מחבטים וכדורים מחכים במקום למי שצריך." },
      { label: "04", title: "סורקים ומשחקים", body: "סריקה בכניסה למגרש, והמשחק מתחיל." },
    ],
    pending: "האפליקציה תיפתח יחד עם המועדון. עד אז אפשר לשמור מקום ברשימת הפתיחה.",
  },
  courts: {
    kicker: "המגרש",
    title: "מגרש שמרגישים בו את ההבדל.",
    body: "כל מגרש של PADELTECH נבנה לפי תקן הפדרציה הבינלאומית לפאדל (FIP). זה מה שתרגישו במשחק.",
    items: [
      {
        label: "קפיצה צפויה",
        body: "משטח ורשת מתכת לפי התקן, כך שהכדור חוזר בדיוק כמו שציפיתם.",
      },
      {
        label: "אור אחיד",
        body: "תאורה בלי אזורים חשוכים, גם במשחק ערב.",
      },
      {
        label: "מקום ללוב",
        body: "לפחות 6 מטרים פנויים מעל המגרש, כדי שכל לוב יישאר במשחק.",
      },
      {
        label: "זכוכית 12 מ״מ",
        body: "קירות מזכוכית מחוסמת שמחזירים את הכדור באופן אחיד.",
      },
    ],
    more: "לתקן המלא",
  },
  equipment: {
    kicker: "ציוד",
    title: "הציוד.",
    body: "מחבטים, תיקים וכדורים בעיצוב PADELTECH. חלק מהמועדון, לא עוד חנות ציוד.",
    prev: "תמונה קודמת",
    next: "תמונה הבאה",
    slides: [
      {
        src: "/brand/equipment/01-lineup.jpg",
        label: "Speed · Pro · Control",
        alt: "שלושה מחבטי PADELTECH — Speed, Pro ו־Control — עם תיקים, כדורים ובקבוקים",
      },
      {
        src: "/brand/equipment/02-pro.jpg",
        label: "Pro",
        alt: "מחבט PADELTECH Pro על ספסל המגרש לצד תיק, מגבת וכדורים",
      },
      {
        src: "/brand/equipment/03-kit.jpg",
        label: "הסט",
        alt: "מבט מלמעלה על מחבטי PADELTECH, תיקים, כדורים, מגבת ובקבוק",
      },
    ],
  },
  play: {
    kicker: "לשחק",
    title: "איך בא לכם לשחק?",
    intro: "ספרו לנו מה מעניין אתכם, ונעדכן כשהפעילות שמתאימה לכם תיפתח.",
    cta: "זה אני",
    items: [
      {
        interest: "beginner" as const,
        title: "פעם ראשונה?",
        body: "מכירים את המשחק, את החוקים ואת הדרך להתחיל.",
      },
      {
        interest: "social" as const,
        title: "מחפשים עם מי לשחק?",
        body: "משחקים חברתיים הם הדרך למצוא שותפים ברמה שלכם.",
      },
      {
        interest: "training" as const,
        title: "רוצים להשתפר?",
        body: "אימונים לעבודה על טכניקה, על קריאת המשחק ועל ביטחון.",
      },
      {
        interest: "court" as const,
        title: "יש לכם כבר רביעייה?",
        body: "נעדכן אתכם ברגע שאפשר יהיה להזמין מגרש.",
      },
    ],
  },
  wellness: {
    kicker: "הרגע שאחרי",
    title: "יש מקום גם לרגע שאחרי.",
    lines: "להוריד קצב, לנשום, להישאר עוד קצת.",
    body: "המועדון לא נגמר בקו האחורי. אנחנו בונים מקום שנעים להישאר בו אחרי המשחק. השירותים והמתקנים יפורסמו לכל מועדון לקראת פתיחתו.",
    cta: "על הרגע שאחרי",
  },
  groupsHome: {
    kicker: "קבוצות וארגונים",
    title: "מחליפים את חדר הישיבות במגרש.",
    body: "יום צוות, אירוע חברה או רביעייה שהפכה לקבוצה. ספרו לנו על הקבוצה, ונחזור אליכם כשנוכל להציע מועדים.",
    cta: "ספרו לנו על הקבוצה",
  },
  clubsHome: {
    kicker: "המועדון",
    title: "איפה תרצו לשחק?",
    body: "המועדון הראשון של PADELTECH בישראל בדרך. בחרו אזור, ונעדכן אתכם ראשונים כשיהיה מידע עליו.",
    disclaimer: "בחירת אזור מביעה התעניינות בלבד, ואינה מעידה על מועדון מתוכנן באותו אזור.",
  },
  signup: {
    kicker: "רשימת הפתיחה",
    title: "שמרו לכם מקום.",
    body: "השאירו פרטים, ונעדכן אתכם ראשונים על המועדון והפעילות שמעניינים אתכם.",
    name: "שם",
    email: "דוא״ל",
    region: "אזור מועדף",
    interest: "מה מעניין אתכם?",
    submit: "שמרו לי מקום",
    sending: "שומרים…",
    success:
      "תודה, שמרנו לכם מקום. נעדכן אתכם ראשונים כשיהיו פרטים על המועדון באזור שלכם.",
    required: "זהו שדה חובה",
    invalidEmail: "נא להזין כתובת דוא״ל תקינה, למשל name@mail.com",
    error: "לא הצלחנו לשמור את הפרטים. נסו שוב בעוד רגע.",
    wantsReply: "אשמח שיחזרו אליי",
    marketing: "אשמח לקבל עדכונים ודיוור מ־PADELTECH",
    phone: "טלפון (לא חובה)",
    regionPlaceholder: "בחירת אזור",
    privacyNote: "הפרטים נשמרים לפי",
    privacyLink: "מדיניות הפרטיות",
  },
  closer: {
    title: "זה לא המקום שבו שוכרים מגרש.",
    titleLine2: "זה המקום שבאים אליו לשחק.",
  },
  footer: {
    brand: "PADELTECH",
    tagline: "ישראל",
  },
  padelPage: {
    title: "המשחק הבא שלכם מתחיל כאן.",
    lead: "פאדל הוא משחק מחבט שמשחקים בדרך כלל בזוגות, במגרש מוקף קירות שהם חלק מהמשחק. הוא מחבר בין טכניקה, תזמון ועבודת צוות, ובין ארבעה אנשים שנפגשים על המגרש.",
    beginnersTitle: "חדשים במשחק? מתחילים מהבסיס.",
    beginnersBody:
      "לא צריך ניסיון בטניס כדי להתחיל לשחק פאדל. בהתחלה לומדים את ההגשה, את התנועה על המגרש, את העבודה עם בן הזוג ואת השימוש בקירות. המטרה הראשונה היא להבין את המשחק וליהנות ממנו.",
    stagesTitle: "לכל שלב יש את המשחק שלו.",
    stagesBody:
      "למתחילים, למשחק חברתי ולמי שרוצה להתאמן. הרמות, המועדים והפרטים יפורסמו לקראת הפתיחה.",
    cta: "ספרו לנו מה מתאים לכם",
  },
  wellnessPage: {
    title: "זמן לעצמכם הוא חלק מהמשחק.",
    lead: "לפעמים רוצים להוציא אנרגיה, ולפעמים רוצים להוריד קצב. במועדון של PADELTECH יש מקום לשניהם.",
    moveTitle: "תנועה",
    move: "מקום לתנועה גם מעבר למשחק עצמו.",
    recoverTitle: "התאוששות",
    recover: "מה שקורה אחרי המאמץ הוא חלק מחוויית המועדון.",
    spaceTitle: "מרחב",
    space: "מקום שנעים להישאר בו, לפגוש אנשים או לקחת רגע לעצמכם.",
    close:
      "ההיצע המדויק ייקבע לכל מועדון ויפורסם לקראת פתיחתו.",
    cta: "עדכנו אותי על הרגע שאחרי",
  },
  storyPage: {
    title: "יותר ממשחק. מקום להשתייך אליו.",
    body: "זה לא המקום שבו שוכרים מגרש. זה המקום שבאים אליו לשחק.",
    more: "PADELTECH היא רשת בינלאומית של מועדוני פאדל. בכל מקום שבו היא פועלת, המגרשים נבנים לפי אותו תקן, והמועדון בנוי סביב מה שקורה לפני המשחק, במהלכו ואחריו.",
    principles: "לשחק · להתחבר · מועדון · קהילה · ציוד",
  },
  groupsPage: {
    title: "נפגשים מחוץ לשגרה.",
    body: "מתכננים יום צוות, מפגש של הארגון או פעילות לקבוצה? ספרו לנו עליה.",
    more: "כתבו מי אתם, כמה משתתפים צפויים, באיזה אזור ומה מטרת המפגש. נחזור אליכם עם אפשרויות כשמועדי הפתיחה יתבררו.",
    contactName: "שם איש הקשר",
    organization: "שם הארגון או הקבוצה",
    email: "דוא״ל",
    phone: "טלפון",
    participants: "מספר משתתפים משוער",
    region: "אזור מועדף",
    date: "מועד רצוי, אם ידוע",
    message: "כמה מילים על הפעילות",
    submit: "שליחת הפנייה",
    disclaimer: "שליחת הפנייה אינה הזמנה ואינה אישור זמינות.",
    success: "תודה, קיבלנו את הפנייה. נחזור אליכם עם אפשרויות כשמועדי הפתיחה יתבררו.",
  },
  partnersPage: {
    title: "יש לכם מקום?",
    titleLine2: "בואו נבדוק מה אפשר לבנות בו.",
    body: "אנחנו מחפשים שטחים ונכסים שיכולים להתאים למועדוני PADELTECH בישראל.",
    audience:
      "הפנייה מיועדת לבעלי נכסים, ליישובים, לגופים ציבוריים ולשותפים עסקיים.",
    includeTitle: "מה כדאי לצרף?",
    include: [
      "מיקום הנכס",
      "שטח משוער",
      "שטח פתוח או מבנה",
      "גובה פנוי, אם מדובר במבנה",
      "תיאור המצב הקיים",
      "פרטי איש הקשר",
      "קישור לתמונות או לתוכנית, אם יש",
    ],
    location: "מיקום הנכס",
    area: "שטח משוער",
    kind: "שטח פתוח או מבנה",
    height: "גובה פנוי, אם מדובר במבנה",
    description: "תיאור המצב הקיים",
    contactName: "שם איש הקשר",
    email: "דוא״ל",
    phone: "טלפון",
    link: "קישור לתמונות או לתוכנית",
    submit: "הציעו נכס",
    disclaimer:
      "כל הצעה נבחנת לגופה, מבחינה תכנונית, תפעולית וכלכלית.",
    success: "תודה, קיבלנו את פרטי הנכס. נבחן אותם ונחזור אליכם.",
  },
  standard: {
    kicker: "התקן",
    title: "תקן FIP.",
    titleLine2: "בלי סטיות.",
    body: "הפדרציה הבינלאומית לפאדל (FIP) קובעת פרמטרים הנדסיים מחייבים. מגרש נחשב תקני רק אם הוא עומד בכולם, ובמועדוני PADELTECH אלה המידות — במדויק.",
    glass: "הקירות במועדוני PADELTECH עשויים זכוכית מחוסמת בעובי 12 מ״מ.",
    items: [
      {
        label: "מידות נטו",
        value: "10 × 20 מ׳",
        body: "רוחב על אורך, במידות פנים. טולרנס מותר של 0.5% בלבד. הרשת חוצה את המגרש לשניים, וקווי ההגשה נמצאים 6.95 מ׳ ממנה.",
      },
      {
        label: "גובה חופשי",
        value: "6 מ׳ / 8 מ׳",
        body: "המינימום המחייב: 6 מ׳ פנויים מעל כל שטח המגרש, בלי קורות, גופי תאורה, ענפים או גג. במתקנים חדשים ובתחרויות בינלאומיות: 8 מ׳. נתון קריטי בתכנון קירוי לחורף.",
      },
      {
        label: "קירות וזכוכית",
        value: "3 מ׳ + 1 מ׳",
        body: "קיר אחורי בגובה 3 מ׳ (זכוכית מחוסמת או בטון) ומעליו מטר של רשת מתכת — 4 מ׳ בפינות. בקירות הצד, שני המטרים הראשונים הם לרוב זכוכית בגובה 3 מ׳, ואחריהם מדרגה לזכוכית בגובה 2 מ׳.",
      },
      {
        label: "רשת מתכת",
        value: "50×50 – 70.8×50 מ״מ",
        body: "רשת פלסטיק או רשת גמישה אסורות. חובה להשתמש ברשת מתכת מרותכת בעובי חוט של 1.6 עד 3 מ״מ, כדי שהכדור יקפוץ באופן צפוי ולא יעבור או ייתקע.",
      },
      {
        label: "רשת המשחק",
        value: "88 / 92 ס״מ",
        body: "אורך 10 מ׳. גובה 88 ס״מ במרכז ו־92 ס״מ בקצוות. כבל עליון בקוטר של עד 10 מ״מ, מכוסה בסרט לבן ברוחב 5–6.3 ס״מ.",
      },
      {
        label: "תאורה",
        value: "400–500 / 1,000 לוקס",
        body: "למשחק חובבים: 400–500 לוקס בפיזור אחיד. לתחרויות ולשידור: 1,000 לוקס לפחות. העמודים תמיד מחוץ לזכוכית, וגופי התאורה בגובה 6 מ׳ לפחות.",
      },
      {
        label: "משטח",
        value: "ירוק / כחול / טרקוטה",
        body: "הצבעים היחידים שמאשרת FIP לדשא סינתטי. אחרי פיזור והידוק של חול קוורץ, כדור תקני שמופל מגובה 2.54 מ׳ חייב לקפוץ לגובה 135–145 ס״מ.",
      },
    ],
  },
  clubsPage: {
    title: "המועדון הראשון",
    body: "המועדון הראשון של PADELTECH בישראל בדרך. כשנפתח יופיעו כאן המיקום, מספר המגרשים וההזמנה דרך האפליקציה.",
    emptyTitle: "בקרוב",
    formTitle: "בחרו אזור וקבלו עדכונים",
    statusActive: "פתוח",
    statusComing: "בדרך",
    book: "הזמינו מגרש",
    amenities: "מתקנים",
    hours: "שעות",
  },
  bookPage: {
    title: "כך תזמינו מגרש.",
    lead: "ההזמנות ייפתחו יחד עם המועדון הראשון. עד אז, שמרו לכם מקום ונעדכן אתכם כשאפשר יהיה להזמין.",
    formTitle: "שמרו לי מקום",
    openBooking: "המשיכו להזמנה",
  },
  privacyPage: {
    title: "מדיניות פרטיות",
    updated: "עודכן לאחרונה: ספטמבר 2026",
    intro:
      "העמוד הזה מסביר אילו פרטים אנחנו אוספים באתר PADELTECH ישראל, למה, ומה הזכויות שלכם לגביהם.",
    sections: [
      {
        title: "אילו פרטים אנחנו אוספים",
        body: "רק את מה שאתם ממלאים בטפסים: שם, דוא״ל, טלפון (אם מסרתם), אזור מועדף, תחום עניין, ובטפסי קבוצות ונכסים — גם פרטי הארגון או הנכס. איננו אוספים פרטי תשלום.",
      },
      {
        title: "למה",
        body: "כדי לעדכן אתכם על פתיחת המועדון והפעילות שביקשתם, ולחזור אליכם אם ביקשתם מענה. דיוור שיווקי נשלח רק אם סימנתם שאתם מעוניינים בו.",
      },
      {
        title: "איפה הפרטים נשמרים ולכמה זמן",
        body: "הפרטים נשמרים במערכת הפניות של PADELTECH ישראל, והגישה אליהם מוגבלת לצוות. נשמור אותם עד שתבקשו למחוק אותם, או עד שלא יהיה בהם עוד צורך.",
      },
      {
        title: "מסירה לאחרים",
        body: "איננו מוכרים את הפרטים ואיננו מוסרים אותם לצד שלישי לצורכי שיווק.",
      },
      {
        title: "הזכויות שלכם",
        body: "אפשר לבקש לעיין בפרטים, לתקן אותם, למחוק אותם או להפסיק לקבל דיוור בכל עת.",
      },
    ],
    contact: "לכל בקשה בנושא פרטיות אפשר לכתוב לנו לכתובת",
    contactFallback:
      "לכל בקשה בנושא פרטיות אפשר לפנות אלינו דרך אחד הטפסים באתר, ולציין שמדובר בבקשת פרטיות.",
  },
  faqTitle: "שאלות נפוצות",
  sim: "הדמיה",
  interests: {
    beginner: "היכרות עם פאדל",
    social: "משחק חברתי",
    training: "אימונים",
    court: "הזמנת מגרש לרביעייה",
    wellness: "הרגע שאחרי",
  } satisfies Record<ActivityInterest, string>,
  regionLabels: {
    center: "תל אביב והמרכז",
    sharon: "השרון",
    jerusalem: "ירושלים והסביבה",
    north: "חיפה והצפון",
    south: "באר שבע והדרום",
    other: "אזור אחר",
  } satisfies Record<Region, string>,
}

const en: typeof he = {
  meta: {
    title: "PADELTECH Israel — Padel clubs",
    description:
      "PADELTECH is an international network of padel clubs built to one standard. The first club in Israel is on its way — save your spot.",
  },
  nav: {
    padel: "Play",
    club: "The club",
    groups: "Teams & groups",
    wellness: "The hour after",
    story: "Story",
    partners: "Partners",
    privacy: "Privacy policy",
    main: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "עב",
    languageLabel: "עברית",
  },
  cta: {
    primary: "Save me a spot",
    book: "Book a court",
    secondary: "How it will work",
  },
  hero: {
    brand: "PADELTECH",
    eyebrow: "PADELTECH Israel",
    title: "Come to play.",
    body: "PADELTECH is an international network of padel clubs built to one standard. The first club in Israel is on its way.",
  },
  line: "Not where you rent a court. Where you come to play.",
  experience: {
    kicker: "The club",
    moments: [
      {
        word: "Design",
        line: "Glass, light and a clean line.",
        src: "/brand/cinema/experience-design.jpg",
      },
      {
        word: "Lifestyle",
        line: "The hour around the game.",
        src: "/brand/cinema/experience-lifestyle.jpg",
      },
      {
        word: "Play",
        line: "Four on court.",
        src: "/brand/cinema/experience-play.jpg",
      },
      {
        word: "Social",
        line: "Doubles, friends and one more point.",
        src: "/brand/cinema/experience-social.jpg",
      },
      {
        word: "Padel",
        line: "The ball, the wall and the pace.",
        src: "/brand/cinema/experience-padel.jpg",
      },
      {
        word: "Evening",
        line: "Playing after sunset.",
        src: "/brand/cinema/experience-night.jpg",
      },
    ],
  },
  bookStrip: {
    kicker: "How it will work",
    title: "From your phone to the court.",
    body: "This is how you will book and play once the club opens.",
    steps: [
      { label: "01", title: "Open the app", body: "Sign-up and bookings happen on your phone." },
      { label: "02", title: "Pick a time", body: "Court, day and a free slot, in a few taps." },
      { label: "03", title: "Arrive at the club", body: "Rackets and balls are waiting for anyone who needs them." },
      { label: "04", title: "Scan and play", body: "Scan at the court gate and the game begins." },
    ],
    pending: "The app opens with the club. Until then, you can save a spot on the opening list.",
  },
  courts: {
    kicker: "The court",
    title: "A court you can feel.",
    body: "Every PADELTECH court is built to the International Padel Federation (FIP) standard. This is what you will notice when you play.",
    items: [
      {
        label: "Predictable bounce",
        body: "Surface and metal mesh to spec, so the ball comes back exactly as you expect.",
      },
      {
        label: "Even light",
        body: "No dark patches, even in an evening game.",
      },
      {
        label: "Room for the lob",
        body: "At least 6 metres of clear height above the court, so every lob stays in play.",
      },
      {
        label: "12 mm glass",
        body: "Tempered glass walls that return the ball consistently.",
      },
    ],
    more: "The full standard",
  },
  equipment: {
    kicker: "Gear",
    title: "The kit.",
    body: "Rackets, bags and balls designed by PADELTECH. Part of the club, not another gear shop.",
    prev: "Previous image",
    next: "Next image",
    slides: [
      {
        src: "/brand/equipment/01-lineup.jpg",
        label: "Speed · Pro · Control",
        alt: "Three PADELTECH rackets — Speed, Pro and Control — with bags, balls and bottles",
      },
      {
        src: "/brand/equipment/02-pro.jpg",
        label: "Pro",
        alt: "PADELTECH Pro racket on a court bench with a bag, towel and balls",
      },
      {
        src: "/brand/equipment/03-kit.jpg",
        label: "The kit",
        alt: "Overhead view of PADELTECH rackets, bags, balls, a towel and a bottle",
      },
    ],
  },
  play: {
    kicker: "Play",
    title: "How do you want to play?",
    intro: "Tell us what interests you, and we will let you know when the right activity opens.",
    cta: "That's me",
    items: [
      {
        interest: "beginner",
        title: "First time?",
        body: "Get to know the game, the rules and how to start.",
      },
      {
        interest: "social",
        title: "Looking for people to play with?",
        body: "Social games are how you find partners at your level.",
      },
      {
        interest: "training",
        title: "Want to improve?",
        body: "Training for technique, reading the game and confidence.",
      },
      {
        interest: "court",
        title: "Already have a four?",
        body: "We will let you know the moment courts can be booked.",
      },
    ],
  },
  wellness: {
    kicker: "The hour after",
    title: "There is room for the hour after.",
    lines: "Slow down, breathe, stay a little longer.",
    body: "The club does not end at the back wall. We are building a place worth staying in after the game. Services and facilities will be announced for each club ahead of its opening.",
    cta: "About the hour after",
  },
  groupsHome: {
    kicker: "Teams & groups",
    title: "Swap the boardroom for a court.",
    body: "A team day, a company event, or a four that grew into a group. Tell us about yours, and we will get back to you when we can offer dates.",
    cta: "Tell us about your group",
  },
  clubsHome: {
    kicker: "The club",
    title: "Where do you want to play?",
    body: "The first PADELTECH club in Israel is on its way. Choose an area, and you will be the first to hear about it.",
    disclaimer: "Choosing an area expresses interest only. It does not mean a club is planned there.",
  },
  signup: {
    kicker: "The opening list",
    title: "Save your spot.",
    body: "Leave your details, and you will be the first to hear about the club and the activity you care about.",
    name: "Name",
    email: "Email",
    region: "Preferred area",
    interest: "What interests you?",
    submit: "Save me a spot",
    sending: "Saving…",
    success:
      "Thank you, your spot is saved. You will be the first to hear when there is news about a club in your area.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address, e.g. name@mail.com",
    error: "We could not save your details. Please try again in a moment.",
    wantsReply: "I would like someone to get back to me",
    marketing: "I would like updates and news from PADELTECH",
    phone: "Phone (optional)",
    regionPlaceholder: "Choose an area",
    privacyNote: "Your details are kept under our",
    privacyLink: "privacy policy",
  },
  closer: {
    title: "Not where you rent a court.",
    titleLine2: "Where you come to play.",
  },
  footer: {
    brand: "PADELTECH",
    tagline: "Israel",
  },
  padelPage: {
    title: "Your next game starts here.",
    lead: "Padel is a racket sport usually played in pairs, on a court enclosed by walls that are part of the game. It brings together technique, timing and teamwork — and four people who meet on court.",
    beginnersTitle: "New to the game? Start with the basics.",
    beginnersBody:
      "You do not need tennis experience to start padel. First you learn the serve, how to move, how to work with your partner and how to use the walls. The first goal is to understand the game and enjoy it.",
    stagesTitle: "Every stage has its own game.",
    stagesBody:
      "For beginners, for social play and for anyone who wants to train. Levels, dates and details will be announced ahead of opening.",
    cta: "Tell us what suits you",
  },
  wellnessPage: {
    title: "Time for yourself is part of the game.",
    lead: "Sometimes you want to burn energy, sometimes you want to slow down. A PADELTECH club has room for both.",
    moveTitle: "Move",
    move: "Room for movement beyond the match itself.",
    recoverTitle: "Recover",
    recover: "What happens after the effort is part of the club.",
    spaceTitle: "Space",
    space: "A place worth staying in, to meet people or take a moment.",
    close:
      "The exact offering will be set for each club and announced ahead of its opening.",
    cta: "Keep me posted on the hour after",
  },
  storyPage: {
    title: "More than a game. A place to belong.",
    body: "Not where you rent a court. Where you come to play.",
    more: "PADELTECH is an international network of padel clubs. Wherever it operates, courts are built to the same standard, and the club is designed around what happens before, during and after the game.",
    principles: "Play · Connect · Club · Community · Gear",
  },
  groupsPage: {
    title: "Meet outside the routine.",
    body: "Planning a team day, a company gathering or a group activity? Tell us about it.",
    more: "Let us know who you are, how many people are coming, which area and what the gathering is for. We will come back to you with options once opening dates are clear.",
    contactName: "Contact name",
    organization: "Organisation or group",
    email: "Email",
    phone: "Phone",
    participants: "Expected number of people",
    region: "Preferred area",
    date: "Preferred date, if known",
    message: "A few words about the activity",
    submit: "Send inquiry",
    disclaimer: "Sending an inquiry is not a booking or a confirmation of availability.",
    success: "Thank you, we have your inquiry. We will come back to you with options once opening dates are clear.",
  },
  partnersPage: {
    title: "Have a site?",
    titleLine2: "Let's see what we can build there.",
    body: "We are looking for land and buildings that could suit PADELTECH clubs in Israel.",
    audience:
      "This page is for property owners, local communities, public bodies and business partners.",
    includeTitle: "What to include",
    include: [
      "Property location",
      "Approximate area",
      "Open land or building",
      "Clear height, if a building",
      "Current condition",
      "Contact details",
      "Link to photos or a plan, if available",
    ],
    location: "Property location",
    area: "Approximate area",
    kind: "Open land or building",
    height: "Clear height, if a building",
    description: "Current condition",
    contactName: "Contact name",
    email: "Email",
    phone: "Phone",
    link: "Link to photos or a plan",
    submit: "Propose a site",
    disclaimer:
      "Every proposal is reviewed on its planning, operational and commercial merits.",
    success: "Thank you, we have the site details. We will review them and get back to you.",
  },
  standard: {
    kicker: "The standard",
    title: "FIP standard.",
    titleLine2: "No deviation.",
    body: "The International Padel Federation (FIP) sets binding engineering parameters. A court is regulation only if it meets all of them — and at PADELTECH clubs, these are the dimensions, exactly.",
    glass: "PADELTECH club walls are 12 mm tempered glass.",
    items: [
      {
        label: "Court size",
        value: "10 × 20 m",
        body: "Width by length, internal dimensions. Allowed tolerance: 0.5% only. The net divides the court in two; service lines sit 6.95 m from it.",
      },
      {
        label: "Clearance",
        value: "6 m / 8 m",
        body: "Binding minimum: 6 m clear above the whole court — no beams, luminaires, branches or roof. New facilities and international competition: 8 m. Critical when planning a winter cover.",
      },
      {
        label: "Walls & glass",
        value: "3 m + 1 m",
        body: "Back wall 3 m high (tempered glass or concrete) with 1 m of metal mesh above — 4 m at the corners. On the side walls, the first two metres are usually 3 m glass, then step down to 2 m glass.",
      },
      {
        label: "Wire mesh",
        value: "50×50 – 70.8×50 mm",
        body: "Plastic or flexible mesh is not allowed. Welded metal mesh with 1.6–3 mm wire is required, so the ball rebounds predictably and never passes through or gets stuck.",
      },
      {
        label: "The net",
        value: "88 / 92 cm",
        body: "10 m long. 88 cm high at the centre and 92 cm at the posts. Top cable up to 10 mm thick, covered with a white band 5–6.3 cm wide.",
      },
      {
        label: "Lighting",
        value: "400–500 / 1,000 lux",
        body: "Club play: 400–500 lux, evenly spread. Competition and broadcast: at least 1,000 lux. Posts always outside the glass; luminaires at least 6 m high.",
      },
      {
        label: "Surface",
        value: "Green / blue / terracotta",
        body: "The only colours FIP approves for synthetic turf. After quartz sand is spread and compacted, a regulation ball dropped from 2.54 m must bounce to 135–145 cm.",
      },
    ],
  },
  clubsPage: {
    title: "The first club",
    body: "The first PADELTECH club in Israel is on its way. When it opens, you will find its location, number of courts and in-app booking here.",
    emptyTitle: "Coming soon",
    formTitle: "Choose an area and get updates",
    statusActive: "Open",
    statusComing: "On the way",
    book: "Book a court",
    amenities: "Facilities",
    hours: "Hours",
  },
  bookPage: {
    title: "How booking will work.",
    lead: "Bookings open with the first club. Until then, save your spot and we will tell you when courts can be booked.",
    formTitle: "Save me a spot",
    openBooking: "Continue to booking",
  },
  privacyPage: {
    title: "Privacy policy",
    updated: "Last updated: September 2026",
    intro:
      "This page explains what information the PADELTECH Israel website collects, why, and what your rights are.",
    sections: [
      {
        title: "What we collect",
        body: "Only what you enter in our forms: name, email, phone (if given), preferred area and interest, and for group and property inquiries, details about the organisation or site. We do not collect payment details.",
      },
      {
        title: "Why",
        body: "To update you about the club opening and the activity you asked about, and to get back to you if you asked for a reply. Marketing emails are sent only if you opted in.",
      },
      {
        title: "Where it is kept and for how long",
        body: "Your details are kept in the PADELTECH Israel inquiry system, with access limited to our team. We keep them until you ask us to delete them, or until they are no longer needed.",
      },
      {
        title: "Sharing",
        body: "We do not sell your details or share them with third parties for marketing.",
      },
      {
        title: "Your rights",
        body: "You can ask to see, correct or delete your details, or stop receiving emails, at any time.",
      },
    ],
    contact: "For any privacy request, write to us at",
    contactFallback:
      "For any privacy request, contact us through any form on this site and mention that it is a privacy request.",
  },
  faqTitle: "Frequently asked questions",
  sim: "Visualization",
  interests: {
    beginner: "Getting to know padel",
    social: "Social play",
    training: "Training",
    court: "Booking a court for a four",
    wellness: "The hour after",
  },
  regionLabels: {
    center: "Tel Aviv and the centre",
    sharon: "Sharon",
    jerusalem: "Jerusalem area",
    north: "Haifa and the north",
    south: "Be’er Sheva and the south",
    other: "Other area",
  },
}

const dictionaries = { he, en }

export type Copy = typeof he

export function getCopy(locale: Locale): Copy {
  return dictionaries[locale]
}
