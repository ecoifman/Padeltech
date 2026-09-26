import type { Locale } from "@/lib/locales"
import type { ActivityInterest, Region } from "@/lib/options"

const he = {
  meta: {
    title: "PADELTECH ישראל",
    description:
      "נציגות הרשת העולמית PADELTECH בישראל. מגרשי פאדל בתקן אחד — המתחם הראשון בדרך.",
  },
  nav: {
    padel: "לשחק",
    wellness: "החוויה",
    clubs: "ישראל",
    story: "הסיפור",
    groups: "חברים",
    partners: "שותפים",
    experience: "תמונות",
    courts: "המגרשים",
    book: "איך משחקים",
    community: "האנשים",
    gear: "ציוד",
    club: "ישראל",
    cta: "יצירת קשר",
    openMenu: "פתיחת תפריט",
    closeMenu: "סגירת תפריט",
    language: "EN",
  },
  hero: {
    brand: "PADELTECH",
    kicker: "",
    title: "ישראל",
    body: "נציגות הרשת העולמית.",
    primary: "יצירת קשר",
    secondary: "איך משחקים",
  },
  line: "PADELTECH ישראל. אותו תקן, כאן.",
  experience: {
    kicker: "",
    title: "",
    moments: [
      {
        word: "עיצוב",
        line: "זכוכית, אור, קו נקי.",
        src: "/brand/cinema/experience-design.jpg",
      },
      {
        word: "אורח חיים",
        line: "השעה מסביב למשחק.",
        src: "/brand/cinema/experience-lifestyle.jpg",
      },
      {
        word: "משחק",
        line: "ארבעה על המגרש.",
        src: "/brand/cinema/experience-play.jpg",
      },
      {
        word: "חברתי",
        line: "זוגות, חברים, עוד נקודה.",
        src: "/brand/cinema/experience-social.jpg",
      },
      {
        word: "פאדל",
        line: "הכדור, הקיר, הקצב.",
        src: "/brand/cinema/experience-padel.jpg",
      },
      {
        word: "חוויה",
        line: "לילה על המגרש.",
        src: "/brand/cinema/experience-night.jpg",
      },
    ],
  },
  courts: {
    kicker: "המגרשים",
    title: "המגרש.",
    body: "תקן FIP. זכוכית 12 מ״מ. תאורה ומשטח שנבדקים.",
    items: [
      {
        label: "מגרשים מקצועיים",
        body: "מידות FIP: 10 × 20 מ׳. זכוכית מחוסמת 12 מ״מ. קירות וקפיצה לפי התקן.",
      },
      {
        label: "תאורה איכותית",
        body: "פיזור אחיד, בלי כתמים חשוכים. גופים מחוץ לזכוכית, בגובה משחק.",
      },
      {
        label: "משטח משחק איכותי",
        body: "דשא סינתטי בצבע FIP, עם קפיצת כדור שנבדקת אחרי החול.",
      },
      {
        label: "תחזוקה שוטפת",
        body: "המגרש מגיע מוכן למשחק. לא חד־פעמי להשקה.",
      },
      {
        label: "מרווחים נכונים",
        body: "חלל חופשי מעל המגרש לפי FIP — 6 מ׳ מינימום, 8 מ׳ למתקן חדש.",
      },
      {
        label: "ציוד זמין במקום",
        body: "מחבט, כדור, תיק — אפשר להגיע ולשחק בציוד PADELTECH.",
      },
    ],
  },
  bookStrip: {
    kicker: "איך משחקים",
    title: "מהטלפון עד המגרש.",
    body: "כך זה יעבוד בפתיחה.",
    steps: [
      { label: "01", title: "סורקים", body: "פותחים את האפליקציה. לוגו הסריקה על המסך." },
      { label: "02", title: "בוחרים שעה", body: "יומן. מגרש, תאריך, שעה פנויה." },
      { label: "03", title: "מגיעים", body: "למתחם. הציוד במקום." },
      { label: "04", title: "סורקים ומשחקים", body: "סריקה בכניסה למגרש. הנקודה מתחילה." },
    ],
    cta: "רשימת פתיחה",
    pending:
      "האפליקציה נפתחת עם המועדון. בינתיים שומרים מקום ברשימה.",
  },
  membership: {
    kicker: "לשחק יותר",
    title: "המועדון שלכם.",
    body: "בלי מחירים עד שהמודל סגור. כן — מקום שאפשר לחזור אליו.",
    items: [
      {
        label: "משחק בודד",
        body: "נקודה אחת. מגרש, שעה, ארבעה.",
      },
      {
        label: "חבילת משחקים",
        body: "כמה משחקים מראש. פחות לחשוב, יותר לשחק.",
      },
      {
        label: "חברות",
        body: "המגרש הופך להרגל. זה המועדון שלכם.",
      },
    ],
  },
  firstClub: {
    kicker: "ישראל",
    title: "המתחם הראשון",
    coming: "בקרוב",
    body: "נציגות הרשת בישראל. כשנפתח — מיקום, מספר מגרשים, הזמנה מהאפליקציה.",
  },
  closer: {
    title: "ישראל",
    cta: "יצירת קשר",
  },
  bookPage: {
    title: "הזמינו מגרש.",
    lead: "מגרש → שעה → תשלום → משחק",
    court: "בחרו מגרש",
    time: "בחרו שעה",
    pay: "תשלום",
    play: "משחק",
    courts: ["מגרש 01", "מגרש 02", "מגרש 03", "מגרש 04"],
    times: ["07:00", "09:00", "11:00", "16:00", "18:00", "20:00"],
    coming: "בקרוב",
    payNote:
      "התשלום ייפתח עם המועדון. אין חיוב עכשיו.",
    openBooking: "המשיכו להזמנה",
    notify: "שמרו לי מקום בפתיחה",
    selected: "נבחר",
  },
  promise: {
    chapter: "01",
    kicker: "מי אנחנו",
    title: "רשת אחת.",
    titleLine2: "תקן אחד.",
    body: "PADELTECH היא רשת בינלאומית של מתחמי פאדל. הבשורה שלנו היא סטנדרט: לא מגרש בודד, אלא מתחם שלם שנבנה לפי אותם כללים מחמירים — בכל מקום שבו הרשת פועלת.",
    vision:
      "המגרשים מתוכננים בהתאמה לתקני המשחק הבינלאומיים ולדרישות WPT. הזכוכית מחוסמת בעובי 12 מ״מ. הקירות, המידות והחומרים משרתים משחק ברמה הגבוהה ביותר — לחובבים ולמי שמגיעים להתחרות.",
    specs: [
      {
        label: "12 מ״מ",
        body: "זכוכית מחוסמת לקירות המגרש.",
      },
      {
        label: "WPT",
        body: "התאמה לתקני המשחק הבינלאומיים.",
      },
      {
        label: "מתחם",
        body: "מגרשים, שירות ושהייה — לא רק כלוב זכוכית.",
      },
    ],
  },
  standard: {
    chapter: "02",
    kicker: "התקן",
    title: "חוקת FIP.",
    titleLine2: "בלי סטיות.",
    body: "חוקת הפדרציה הבינלאומית לפאדל (FIP) מכתיבה פרמטרים הנדסיים נוקשים. מגרש נחשב תקני רק אם הוא עומד בהם. ב־PADELTECH אלה המידות — במדויק.",
    glass: "במתחמי PADELTECH הקירות מזכוכית מחוסמת בעובי 12 מ״מ.",
    items: [
      {
        label: "מידות נטו",
        value: "10 × 20 מ׳",
        body: "רוחב על אורך, במידות פנים. טולרנס מותר: 0.5% בלבד. המגרש נחצה לשניים על ידי הרשת. קווי ההגשה: 6.95 מ׳ מהרשת.",
      },
      {
        label: "גובה חופשי",
        value: "6 מ׳ / 8 מ׳",
        body: "המינימום המוחלט של ה־FIP: 6 מ׳ חלל פנוי מעל כל שטח המגרש, בלי קורות, גופי תאורה, ענפים או גג. למתקנים חדשים ולתחרויות בינלאומיות רשמיות: 8 מ׳. נתון קריטי בקירוי חורף.",
      },
      {
        label: "קירות וזכוכית",
        value: "3 מ׳ + 1 מ׳",
        body: "קיר אחורי בגובה 3 מ׳ (זכוכית מחוסמת או בטון), ומעליו מטר אחד של רשת מתכת — 4 מ׳ בפינות. קירות הצד: שני המטרים הראשונים לרוב בזכוכית בגובה 3 מ׳, ואז יורדים במדורג לזכוכית בגובה 2 מ׳. רשת המתכת משלימה את הגובה.",
      },
      {
        label: "רשת מתכת",
        value: "50×50 – 70.8×50 מ״מ",
        body: "איסור מוחלט על רשת פלסטיק או רשת גמישה. חובה: רשת מתכת מרותכת. עובי חוט: 1.6 עד 3 מ״מ — כדי שהכדור יקפוץ באופן צפוי, לא יעבור בחור ולא ייתקע.",
      },
      {
        label: "רשת המשחק",
        value: "88 / 92 ס״מ",
        body: "אורך 10 מ׳. גובה 88 ס״מ במרכז (נמשך מטה ברצועה המרכזית) ו־92 ס״מ בקצוות, צמוד לעמודים. כבל מתיחה עליון בקוטר עד 10 מ״מ, מחופה בסרט לבן ברוחב 5 עד 6.3 ס״מ.",
      },
      {
        label: "תאורה",
        value: "400–500 / 1,000 לוקס",
        body: "חובבים והשכרה: 400 עד 500 לוקס, פיזור אחיד בלי אזורים חשוכים. תחרויות בינלאומיות ושידור: 1,000 לוקס לפחות. עמודים תמיד מחוץ לזכוכית. גופי התאורה בגובה 6 מ׳ לפחות.",
      },
      {
        label: "משטח",
        value: "ירוק / כחול / טרקוטה",
        body: "הצבעים המאושרים בלעדית על ידי ה־FIP לדשא סינתטי. אחרי הוספת והידוק חול קוורץ: כדור פאדל תקני שמופל מ־2.54 מ׳ חייב לקפוץ ל־135 עד 145 ס״מ.",
      },
    ],
  },
  equipment: {
    chapter: "03",
    kicker: "ציוד",
    title: "הציוד.",
    titleLine2: "",
    body: "מחבטים, תיקים, כדורים, בקבוקים, מגבות. המותג על המגרש — לא ספק ציוד.",
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
    title: "איך בא לכם לשחק?",
    intro:
      "אנחנו מתכננים פעילות שתיתן מקום לדרכים שונות להיכנס למשחק. ספרו לנו מה מעניין אתכם ונעדכן כשהפעילות הרלוונטית תיפתח.",
    items: [
      {
        interest: "beginner" as const,
        title: "פעם ראשונה?",
        body: "הכירו את המשחק, את הרעיון ואת הדרך להתחיל.",
        cta: "אני רוצה להתחיל",
      },
      {
        interest: "social" as const,
        title: "מחפשים אנשים לשחק איתם?",
        body: "משחקים חברתיים הם דרך להכיר שותפים חדשים ולמצוא את הקצב שמתאים לכם.",
        cta: "מעניין אותי משחק חברתי",
      },
      {
        interest: "training" as const,
        title: "רוצים להתקדם?",
        body: "אימונים הם הזדמנות לעבוד על הטכניקה, להבין את המשחק ולבנות ביטחון על המגרש.",
        cta: "מעניין אותי להתאמן",
      },
      {
        interest: "court" as const,
        title: "כבר יש לכם רביעייה?",
        body: "השאירו פרטים ונעדכן כשאפשר יהיה להזמין מגרש.",
        cta: "עדכנו אותי כשנפתחות ההזמנות",
      },
    ],
  },
  wellness: {
    title: "יש מקום גם לרגע שאחרי.",
    lines: "להוריד קצב. לנשום. להישאר עוד קצת.",
    body: "ב־PADELTECH אנחנו רוצים לתת מקום גם למה שקורה מחוץ למגרש. תחום ההתאוששות נמצא בתכנון, כחלק מחוויית מועדון שמחברת פעילות, מנוחה וזמן לעצמכם.",
    note: "השירותים והמתקנים יפורסמו לכל מועדון לקראת פתיחתו.",
    cta: "להכיר את הרגע שאחרי",
  },
  community: {
    title: "על המגרש.",
    titleLine2: "",
    body: "זוגות, חברים, השעה שלפני ואחרי. מה שיהיה במתחם כשייפתח.",
    vision: "",
    cta: "הזמינו מגרש",
  },
  clubsHome: {
    title: "איפה תרצו לשחק?",
    body: "אנחנו עובדים על הקמת המועדונים הראשונים של PADELTECH בישראל.\nבחרו את האזור שמעניין אתכם, כדי שנוכל לעדכן אתכם כשיהיה מידע רלוונטי.",
    cta: "בחירת אזור וקבלת עדכונים",
    disclaimer:
      "בחירת אזור מביעה התעניינות ואינה מעידה על פתיחת מועדון מתוכננת בו.",
  },
  groupsHome: {
    title: "מחליפים את חדר הישיבות במגרש.",
    body: "מתעניינים בפעילות לצוות, לארגון או לקבוצת חברים?\nאנחנו מרכזים פניות לפעילות קבוצתית עתידית. ספרו לנו על הקבוצה, האזור והמועד הרצוי.",
    cta: "פנייה לפעילות קבוצתית",
  },
  signup: {
    title: "נעדכן כשהמשחק מתחיל.",
    body: "השאירו פרטים לקבלת עדכונים על המועדונים והפעילות שמעניינים אתכם.",
    name: "שם",
    email: "דוא״ל",
    region: "עיר או אזור מועדף",
    interest: "מה מעניין אתכם?",
    submit: "הרשמה לעדכונים",
    sending: "שומרים…",
    success:
      "תודה, הפרטים נשמרו. נעדכן כשיהיה מידע חדש בהתאם לבחירות שלכם.",
    required: "שדה חובה",
    invalidEmail: "כתובת דוא״ל לא תקינה",
    error: "לא הצלחנו לשמור. נסו שוב.",
    wantsReply: "אשמח לקבל מענה לפנייה זו",
    marketing: "אשמח לקבל עדכונים שיווקיים מ־PADELTECH",
    phone: "טלפון (רשות)",
    regionPlaceholder: "בחירת אזור",
  },
  footer: {
    brand: "PADELTECH",
    tagline: "ישראל",
    body: "PADELTECH ישראל. אותו תקן, כאן.",
  },
  padelPage: {
    title: "המשחק הבא שלכם מתחיל כאן.",
    lead: "פאדל הוא משחק מחבט שמשוחק בדרך כלל בזוגות, במגרש מוקף קירות שמשתלבים במשחק. הוא מחבר בין טכניקה, תזמון ועבודת צוות — ובין ארבעה אנשים שנפגשים על המגרש.",
    beginnersTitle: "חדשים במשחק? מתחילים מהבסיס.",
    beginnersBody:
      "לא חייבים להגיע עם ניסיון בטניס כדי להכיר פאדל. בתחילת הדרך לומדים את ההגשה, התנועה, שיתוף הפעולה והשימוש בקירות. המטרה הראשונה היא להבין את המשחק וליהנות ממנו.",
    stagesTitle: "לכל שלב יש את המשחק שלו.",
    stagesBody:
      "אנחנו מתכננים דרכי הצטרפות למתחילים, משחקים חברתיים ואפשרויות אימון. פרטי הפעילות, הרמות והמועדים יפורסמו לקראת הפתיחה.",
    cta: "עדכנו אותי על הפעילות שמתאימה לי",
  },
  wellnessPage: {
    title: "זמן לעצמכם הוא חלק מהמשחק.",
    lead: "לפעמים רוצים להוציא אנרגיה. לפעמים רוצים להוריד קצב. החזון של PADELTECH נותן מקום לשניהם.",
    moveTitle: "תנועה",
    move: "לתת מקום לתנועה גם מעבר למשחק עצמו.",
    recoverTitle: "התאוששות",
    recover: "לחשוב על מה שקורה אחרי המאמץ כחלק מחוויית המועדון.",
    spaceTitle: "מרחב",
    space: "ליצור מקום שנעים להישאר בו, לפגוש אנשים או לקחת רגע לעצמכם.",
    close:
      "תחום ההתאוששות נמצא בתכנון. ההיצע המדויק ייקבע לכל מועדון ויפורסם לקראת פתיחתו.",
    cta: "עדכנו אותי על הרגע שאחרי",
  },
  storyPage: {
    title: "יותר ממשחק. מקום להשתיך אליו.",
    body: "PADELTECH זה לא המקום שבו שוכרים מגרש. זה המקום שבאים אליו לשחק.",
    more: "אנחנו מפעילים מתחמי פאדל פרימיום. המגרש, האנשים, הביטחון בהזמנה.",
    principles:
      "לשחק · להתחבר · חוויה · מועדון · קהילה · ציוד · הזמנה",
    cta: "הזמינו מגרש",
  },
  groupsPage: {
    title: "נפגשים מחוץ לשגרה.",
    body: "מתכננים יום צוות, מפגש ארגוני או פעילות לקבוצה?\nאנחנו בוחנים את תחום הפעילות הקבוצתית כחלק מרשת PADELTECH שבדרך.",
    more: "ספרו לנו מי אתם, כמה משתתפים צפויים, באיזה אזור ומה המטרה של המפגש. פרטי הפעילות והאפשרויות ייבחנו בהתאם למועד פתיחת המועדונים.",
    contactName: "שם איש קשר",
    organization: "שם הארגון או הקבוצה",
    email: "דוא״ל",
    phone: "טלפון",
    participants: "מספר משתתפים משוער",
    region: "אזור מועדף",
    date: "מועד רצוי, אם ידוע",
    message: "כמה מילים על הפעילות",
    submit: "שליחת פנייה",
    disclaimer: "שליחת הפנייה אינה הזמנה או אישור זמינות.",
  },
  partnersPage: {
    title: "יש לכם מקום?",
    titleLine2: "בואו נבחן מה אפשר לבנות בו.",
    body: "במסגרת פיתוח רשת PADELTECH בישראל, נשמח לקבל הצעות לשטחים ולנכסים שעשויים להתאים למועדוני פאדל.",
    audience:
      "הפנייה מיועדת לבעלי נכסים, יישובים, גופים ציבוריים ושותפים עסקיים המעוניינים לבחון אפשרות לשיתוף פעולה.",
    includeTitle: "מה כדאי לצרף?",
    include: [
      "מיקום הנכס",
      "שטח משוער",
      "שטח פתוח או מבנה",
      "גובה פנוי, אם מדובר במבנה",
      "תיאור המצב הקיים",
      "פרטי איש הקשר",
      "קישור לתמונות או לתכנית, אם קיימים",
    ],
    location: "מיקום הנכס",
    area: "שטח משוער",
    kind: "שטח פתוח או מבנה",
    height: "גובה פנוי, אם מדובר במבנה",
    description: "תיאור המצב הקיים",
    contactName: "שם איש קשר",
    email: "דוא״ל",
    phone: "טלפון",
    link: "קישור לתמונות או לתכנית",
    submit: "להצעת נכס או שיתוף פעולה",
    disclaimer:
      "כל הצעה תיבחן לגופה מבחינה תכנונית, תפעולית וכלכלית.",
  },
  clubsPage: {
    title: "המועדון הראשון",
    emptyTitle: "בקרוב",
    emptyBody:
      "מתחם אחד בדרך. כשנפתח — תמונה, מיקום, מספר מגרשים, הזמנה.",
    cta: "בחירת אזור וקבלת עדכונים",
    disclaimer:
      "בחירת אזור מביעה התעניינות ואינה מעידה על פתיחת מועדון מתוכננת בו.",
    statusActive: "פעיל",
    statusComing: "בדרך",
    book: "הזמנת מגרש",
    amenities: "מתקנים",
    hours: "שעות",
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
    title: "PADELTECH Israel",
    description:
      "The global PADELTECH network in Israel. One court standard — first compound on the way.",
  },
  nav: {
    padel: "Play",
    wellness: "Experience",
    clubs: "Israel",
    story: "The story",
    groups: "Friends",
    partners: "Partners",
    experience: "Images",
    courts: "Courts",
    book: "How to play",
    community: "People",
    gear: "Gear",
    club: "Israel",
    cta: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "עב",
  },
  hero: {
    brand: "PADELTECH",
    kicker: "",
    title: "Israel",
    body: "The global network, here.",
    primary: "Contact",
    secondary: "How to play",
  },
  line: "PADELTECH Israel. The same standard, here.",
  experience: {
    kicker: "",
    title: "",
    moments: [
      {
        word: "DESIGN",
        line: "Glass, light, a clean line.",
        src: "/brand/cinema/experience-design.jpg",
      },
      {
        word: "LIFESTYLE",
        line: "The hour around the game.",
        src: "/brand/cinema/experience-lifestyle.jpg",
      },
      {
        word: "PLAY",
        line: "Four on court.",
        src: "/brand/cinema/experience-play.jpg",
      },
      {
        word: "SOCIAL",
        line: "Doubles, friends, one more point.",
        src: "/brand/cinema/experience-social.jpg",
      },
      {
        word: "PADEL",
        line: "The ball, the wall, the pace.",
        src: "/brand/cinema/experience-padel.jpg",
      },
      {
        word: "EXPERIENCE",
        line: "Night on court.",
        src: "/brand/cinema/experience-night.jpg",
      },
    ],
  },
  courts: {
    kicker: "The Courts",
    title: "The court.",
    body: "FIP standard. 12 mm glass. Lighting and surface that are checked.",
    items: [
      {
        label: "Professional courts",
        body: "FIP dimensions: 10 × 20 m. 12 mm tempered glass. Walls and bounce to spec.",
      },
      {
        label: "Quality lighting",
        body: "Even spread, no dark patches. Fixtures outside the glass, at playing height.",
      },
      {
        label: "Quality surface",
        body: "FIP-colour turf, with ball rebound checked after the sand.",
      },
      {
        label: "Ongoing maintenance",
        body: "The court arrives ready to play. Not a one-off for the opening.",
      },
      {
        label: "Proper spacing",
        body: "Clearance above the court per FIP — 6 m minimum, 8 m for a new facility.",
      },
      {
        label: "Gear on site",
        body: "Racket, ball, bag — arrive and play with PADELTECH kit.",
      },
    ],
  },
  bookStrip: {
    kicker: "How to play",
    title: "From the phone to the court.",
    body: "This is how it will work at opening.",
    steps: [
      { label: "01", title: "Scan", body: "Open the app. The scan mark is on screen." },
      { label: "02", title: "Pick a time", body: "A calendar. Court, date, an open hour." },
      { label: "03", title: "Arrive", body: "At the compound. Gear is on site." },
      { label: "04", title: "Scan and play", body: "Scan at the court gate. The point starts." },
    ],
    cta: "Opening list",
    pending:
      "The app opens with the club. Until then we hold a place on the list.",
  },
  membership: {
    kicker: "Play More",
    title: "Your club.",
    body: "No prices until the model is set. Yes — a place you can come back to.",
    items: [
      {
        label: "Single Game",
        body: "One point. A court, an hour, four people.",
      },
      {
        label: "Game Packs",
        body: "Games in advance. Less thinking, more playing.",
      },
      {
        label: "Membership",
        body: "The court becomes a habit. This is your club.",
      },
    ],
  },
  firstClub: {
    kicker: "Israel",
    title: "The first compound",
    coming: "Coming soon",
    body: "The network’s representation in Israel. When we open — a place, court count, booking in the app.",
  },
  closer: {
    title: "Israel",
    cta: "Contact",
  },
  bookPage: {
    title: "Book a court.",
    lead: "Choose Court → Choose Time → Pay → Play",
    court: "Choose Court",
    time: "Choose Time",
    pay: "Pay",
    play: "Play",
    courts: ["Court 01", "Court 02", "Court 03", "Court 04"],
    times: ["07:00", "09:00", "11:00", "16:00", "18:00", "20:00"],
    coming: "Coming soon",
    payNote: "Payment opens with the club. Nothing is charged now.",
    openBooking: "Continue to booking",
    notify: "Hold my place at opening",
    selected: "Selected",
  },
  promise: {
    chapter: "01",
    kicker: "Who we are",
    title: "One network.",
    titleLine2: "One standard.",
    body: "PADELTECH is an international network of padel clubs. Our message is a standard: not a single court, but a full compound built to the same strict rules — wherever the network operates.",
    vision:
      "Courts are designed to international play specifications and WPT requirements. Surrounds use 12 mm tempered glass. Dimensions, walls and materials serve the game at a high level — for social players and for those who come to compete.",
    specs: [
      {
        label: "12 mm",
        body: "Tempered glass for the court walls.",
      },
      {
        label: "WPT",
        body: "Aligned with international play standards.",
      },
      {
        label: "Compound",
        body: "Courts, service and time spent after — not only a glass cage.",
      },
    ],
  },
  standard: {
    chapter: "02",
    kicker: "The standard",
    title: "FIP constitution.",
    titleLine2: "No deviation.",
    body: "The International Padel Federation (FIP) constitution sets rigid engineering parameters. A court is regulation only if it meets them. At PADELTECH these are the dimensions — exactly.",
    glass: "PADELTECH compounds use 12 mm tempered glass for the court walls.",
    items: [
      {
        label: "Court size",
        value: "10 × 20 m",
        body: "Width by length, internal dimensions. Allowed tolerance: 0.5% only. The net bisects the court. Service lines: 6.95 m from the net.",
      },
      {
        label: "Clearance",
        value: "6 m / 8 m",
        body: "FIP absolute minimum: 6 m of unobstructed space above the entire court — no beams, luminaires, branches or roof. New facilities and official international competition: 8 m. Critical when planning a winter cover.",
      },
      {
        label: "Walls & glass",
        value: "3 m + 1 m",
        body: "Back wall 3 m high (tempered glass or concrete), plus 1 m of metal mesh — 4 m at the corners. Side walls: the first two metres typically 3 m glass, then stepped down to 2 m glass. Mesh completes the height.",
      },
      {
        label: "Wire mesh",
        value: "50×50 – 70.8×50 mm",
        body: "Plastic or flexible mesh is forbidden. Required: electro-welded metal mesh. Wire thickness: 1.6 to 3 mm — so the ball rebounds predictably, does not pass through, and does not lodge in the openings.",
      },
      {
        label: "The net",
        value: "88 / 92 cm",
        body: "Length 10 m. Height 88 cm at centre (pulled down by the centre strap) and 92 cm at the posts. Top cable diameter 10 mm maximum, covered by a white band 5 to 6.3 cm wide.",
      },
      {
        label: "Lighting",
        value: "400–500 / 1,000 lux",
        body: "Community and hire play: 400 to 500 lux, even distribution, no dark zones. International competition and broadcast: 1,000 lux minimum. Posts always outside the glass. Luminaires at least 6 m high.",
      },
      {
        label: "Surface",
        value: "Green / blue / terracotta",
        body: "The only FIP-approved colours for synthetic turf. After quartz sand is added and compacted: a regulation padel ball dropped from 2.54 m must rebound to 135–145 cm.",
      },
    ],
  },
  equipment: {
    chapter: "03",
    kicker: "Gear",
    title: "The kit.",
    titleLine2: "",
    body: "Rackets, bags, balls, bottles, towels. The brand on court — not a kit supplier.",
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
        alt: "PADELTECH Pro racket on a court bench with bag, towel and balls",
      },
      {
        src: "/brand/equipment/03-kit.jpg",
        label: "The kit",
        alt: "Overhead view of PADELTECH rackets, bags, balls, towel and bottle",
      },
    ],
  },
  play: {
    title: "How do you want to play?",
    intro:
      "We are planning activity that leaves room for different ways into the game. Tell us what interests you and we will update you when the relevant activity opens.",
    items: [
      {
        interest: "beginner",
        title: "First time?",
        body: "Get to know the game, the idea, and the way to start.",
        cta: "I want to start",
      },
      {
        interest: "social",
        title: "Looking for people to play with?",
        body: "Social games are a way to meet new partners and find a pace that suits you.",
        cta: "Social play interests me",
      },
      {
        interest: "training",
        title: "Want to get better?",
        body: "Training is a chance to work on technique, understand the game, and build confidence on court.",
        cta: "Training interests me",
      },
      {
        interest: "court",
        title: "Already have a four?",
        body: "Leave your details and we will update you when courts can be booked.",
        cta: "Tell me when bookings open",
      },
    ],
  },
  wellness: {
    title: "There is also room for the hour after.",
    lines: "Slow down. Breathe. Stay a little longer.",
    body: "At PADELTECH we also want room for what happens off court. Recovery is in planning, as part of a club experience that joins activity, rest, and time for yourselves.",
    note: "Services and facilities will be published for each club ahead of its opening.",
    cta: "Learn about the hour after",
  },
  community: {
    title: "On court.",
    titleLine2: "",
    body: "Doubles, friends, the hour before and after. What will be at the compound when it opens.",
    vision: "",
    cta: "BOOK A COURT",
  },
  clubsHome: {
    title: "Where do you want to play?",
    body: "We are working on the first PADELTECH clubs in Israel.\nChoose the area that interests you so we can update you when there is relevant information.",
    cta: "Choose a region and get updates",
    disclaimer:
      "Choosing a region expresses interest only. It does not indicate that a club is planned there.",
  },
  groupsHome: {
    title: "Swap the boardroom for a court.",
    body: "Interested in activity for a team, organisation or group of friends?\nWe are collecting inquiries for future group activity. Tell us about the group, the area and the preferred date.",
    cta: "Group activity inquiry",
  },
  signup: {
    title: "We’ll update you when play begins.",
    body: "Leave your details to receive updates on the clubs and activity that interest you.",
    name: "Name",
    email: "Email",
    region: "Preferred city or area",
    interest: "What interests you?",
    submit: "Sign up for updates",
    sending: "Saving…",
    success:
      "Thank you, your details were saved. We will update you when there is news that matches your choices.",
    required: "Required field",
    invalidEmail: "Invalid email address",
    error: "We could not save. Please try again.",
    wantsReply: "I would like a reply to this inquiry",
    marketing: "I would like marketing updates from PADELTECH",
    phone: "Phone (optional)",
    regionPlaceholder: "Choose a region",
  },
  footer: {
    brand: "PADELTECH",
    tagline: "Israel",
    body: "PADELTECH Israel. The same standard, here.",
  },
  padelPage: {
    title: "Your next game starts here.",
    lead: "Padel is a racket sport usually played in pairs, on a court enclosed by walls that take part in the game. It joins technique, timing and teamwork — and four people who meet on court.",
    beginnersTitle: "New to the game? Start from the basics.",
    beginnersBody:
      "You do not need tennis experience to start padel. At the beginning you learn the serve, movement, cooperation and use of the walls. The first aim is to understand the game and enjoy it.",
    stagesTitle: "Every stage has its own game.",
    stagesBody:
      "We are planning ways in for beginners, social games and training. Activity details, levels and dates will be published ahead of opening.",
    cta: "Update me on activity that fits me",
  },
  wellnessPage: {
    title: "Time for yourselves is part of the game.",
    lead: "Sometimes you want to spend energy. Sometimes you want to slow down. The PADELTECH vision leaves room for both.",
    moveTitle: "Move",
    move: "To leave room for movement beyond the match itself.",
    recoverTitle: "Recover",
    recover: "To treat what happens after effort as part of the club experience.",
    spaceTitle: "Space",
    space: "To create a place that is good to stay in, meet people, or take a moment for yourselves.",
    close:
      "The hour after is in planning. The exact offering will be set for each club and published ahead of its opening.",
    cta: "Update me on the hour after",
  },
  storyPage: {
    title: "More than a game. A place to belong.",
    body: "PADELTECH is not where you rent a court. It’s where you come to play.",
    more: "We operate premium padel clubs. The court, the people, the confidence to book.",
    principles:
      "PLAY · CONNECT · EXPERIENCE · CLUB · COMMUNITY · GEAR · BOOK",
    cta: "BOOK A COURT",
  },
  groupsPage: {
    title: "Meet outside the routine.",
    body: "Planning a team day, an organisational gathering or group activity?\nWe are considering group activity as part of the PADELTECH network on the way.",
    more: "Tell us who you are, how many participants are expected, which area, and the purpose of the gathering. Activity details will be considered according to club opening dates.",
    contactName: "Contact name",
    organization: "Organisation or group name",
    email: "Email",
    phone: "Phone",
    participants: "Estimated number of participants",
    region: "Preferred region",
    date: "Preferred date, if known",
    message: "A few words about the activity",
    submit: "Send inquiry",
    disclaimer: "Sending an inquiry is not a booking or a confirmation of availability.",
  },
  partnersPage: {
    title: "Have a site?",
    titleLine2: "Let’s see what can be built there.",
    body: "As PADELTECH develops in Israel, we welcome proposals for sites and properties that may suit padel clubs.",
    audience:
      "This inquiry is for property owners, communities, public bodies and business partners interested in exploring a collaboration.",
    includeTitle: "What to include?",
    include: [
      "Property location",
      "Approximate area",
      "Open land or building",
      "Clear height, if a building",
      "Description of the current state",
      "Contact details",
      "Link to photos or a plan, if available",
    ],
    location: "Property location",
    area: "Approximate area",
    kind: "Open land or building",
    height: "Clear height, if a building",
    description: "Description of the current state",
    contactName: "Contact name",
    email: "Email",
    phone: "Phone",
    link: "Link to photos or a plan",
    submit: "Propose a site or collaboration",
    disclaimer:
      "Each proposal is reviewed on its planning, operational and commercial merits.",
  },
  clubsPage: {
    title: "Our First Club",
    emptyTitle: "Coming Soon",
    emptyBody:
      "One club on the way. When we open — a photo, a place, court count, Book.",
    cta: "Choose a region and get updates",
    disclaimer:
      "Choosing a region expresses interest only. It does not indicate that a club is planned there.",
    statusActive: "Open",
    statusComing: "On the way",
    book: "Book a court",
    amenities: "Facilities",
    hours: "Hours",
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
    center: "Tel Aviv and the center",
    sharon: "Sharon",
    jerusalem: "Jerusalem and surroundings",
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
