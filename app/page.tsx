"use client";

import { FormEvent, useMemo, useState } from "react";

type Language = "en" | "he";

const content = {
  en: {
    langLabel: "עברית",
    nav: [
      ["Why Israel", "#why-israel"],
      ["Our Services", "#services"],
      ["How It Works", "#process"],
      ["Our Promise", "#promise"],
    ],
    eyebrow: "ISRAEL REAL ESTATE · END-TO-END ADVISORY",
    title: "Invest in Israel.\nWith clarity, confidence\nand a partner on the ground.",
    heroText:
      "We guide international buyers through every stage of acquiring and managing property in Israel, from finding the right opportunity to years of hands-on ownership support.",
    heroCta: "Start a private conversation",
    heroSecondary: "Explore our approach",
    trust: ["One trusted point of contact", "Remote purchase capability", "Long-term property management"],
    introKicker: "A COMPLETE INVESTMENT PARTNERSHIP",
    introTitle: "More than a property.\nA lasting connection to Israel.",
    introText:
      "For some, investing in Israel is a financial decision. For others, it is deeply personal. We understand both. Our role is to bring disciplined analysis, local expertise and complete peace of mind to one of the most meaningful purchases you may make.",
    servicesKicker: "ONE TEAM. EVERY DETAIL.",
    servicesTitle: "Full-service guidance, from first search to long-term ownership",
    servicesIntro:
      "We coordinate the full professional ecosystem around your investment, so every decision is informed and every detail is handled.",
    services: [
      ["01", "Opportunity sourcing", "Curated properties and investment opportunities matched to your goals."],
      ["02", "Financial analysis", "Clear assessment of economics, risk and value-creation potential."],
      ["03", "Negotiation", "Experienced representation designed to secure the strongest available terms."],
      ["04", "Israeli financing", "A tailored financing strategy developed with banks in Israel."],
      ["05", "Legal & tax coordination", "Access to leading attorneys, accountants, appraisers and tax professionals."],
      ["06", "Banking & bureaucracy", "Support opening a bank account and navigating required administration."],
      ["07", "Remote signing", "Power-of-attorney coordination so you can complete the process without flying to Israel."],
      ["08", "Closing & handover", "Close oversight through final approvals, payment milestones and key collection."],
      ["09", "Tenant placement", "Thoughtful marketing and screening to identify high-quality tenants."],
      ["10", "Ongoing management", "Reliable day-to-day property management after the purchase."],
    ],
    whyKicker: "WHY ISRAEL",
    whyTitle: "A resilient market.\nA meaningful asset.",
    whyText:
      "Israel combines long-term housing demand, limited land in key areas and a dynamic economy. For investors abroad, the opportunity is compelling. Local knowledge and disciplined execution are essential.",
    reasons: [
      ["↗", "Long-term value trend", "Israel has a long history of residential price appreciation across many regions. Past performance does not guarantee future results."],
      ["◇", "Distinctive access", "Urban renewal, pre-sale opportunities, new developments and off-market transactions when available."],
      ["×", "Responsible leverage", "Israeli bank financing may increase return potential on equity, while also increasing risk. Careful planning matters."],
      ["◎", "Simple from anywhere", "A clear, secure and transparent process, even when you live thousands of miles away."],
    ],
    opportunitiesKicker: "SELECTED STRATEGIES",
    opportunitiesTitle: "Access the right opportunity, not simply what is listed",
    opportunities: [
      ["Urban Renewal", "Potential participation in neighborhood transformation and property enhancement."],
      ["Pre-Sale", "Early access to selected projects before completion, subject to project terms and risk review."],
      ["New Developments", "New-build apartments from established developers, assessed project by project."],
      ["Off Market", "Discreet opportunities outside public listings, when genuinely available."],
    ],
    processKicker: "THE JOURNEY",
    processTitle: "One accountable partner, every step of the way",
    process: [
      ["01", "Define", "We clarify your goals, budget, timeline, risk profile and connection to Israel."],
      ["02", "Source & assess", "We find relevant opportunities and examine the financial, legal and practical picture."],
      ["03", "Acquire", "We coordinate negotiation, financing, legal work, taxation and remote execution."],
      ["04", "Manage & enhance", "After the keys are yours, we support tenants, operations and long-term value creation."],
    ],
    promiseKicker: "OUR PROMISE",
    promiseTitle: "Your peace of mind is the real service we provide.",
    promiseText:
      "You are not simply buying an apartment. You are gaining a professional partner who manages the entire investment journey in Israel, from acquisition through long-term management and enhancement.",
    contactKicker: "BEGIN WITH A CONVERSATION",
    contactTitle: "Your Israel investment deserves a local partner.",
    contactText:
      "Tell us what brings you to Israel and what you hope to achieve. We will begin with a discreet, no-obligation conversation.",
    form: { name: "Full name", email: "Email address", phone: "Phone / WhatsApp", message: "What are you looking for?", submit: "Request a private consultation", sending: "Sending...", note: "Your information is treated with discretion.", success: "Thank you. Your message was sent successfully. We’ll be in touch soon.", error: "We could not send your message. Please try again." },
    footer: "Israel Property Partners",
    footerText: "End-to-end real estate advisory for international buyers in Israel.",
    disclaimer:
      "The information on this site is general and does not constitute investment, legal, tax or financial advice. Opportunities, financing and results vary. Real estate values may rise or fall, and no return is guaranteed. Independent professional advice and due diligence are required before any transaction.",
  },
  he: {
    langLabel: "English",
    nav: [["למה ישראל", "#why-israel"], ["השירותים שלנו", "#services"], ["איך זה עובד", "#process"], ["ההבטחה שלנו", "#promise"]],
    eyebrow: "נדל״ן בישראל · ליווי מקצה לקצה",
    title: "משקיעים בישראל.\nבבהירות, בביטחון\nועם שותף מקומי.",
    heroText: "אנחנו מלווים תושבי חוץ בכל שלב של רכישת וניהול נכס בישראל, מאיתור ההזדמנות הנכונה ועד שנים של ניהול וליווי אישי.",
    heroCta: "מתחילים בשיחה אישית",
    heroSecondary: "הגישה שלנו",
    trust: ["נקודת קשר אחת", "אפשרות לרכישה מרחוק", "ניהול נכס לטווח ארוך"],
    introKicker: "שותפות מלאה להשקעה",
    introTitle: "יותר מנכס.\nחיבור ארוך טווח לישראל.",
    introText: "עבור חלק מהמשקיעים, רכישה בישראל היא החלטה כלכלית. עבור אחרים, זו החלטה אישית וציונית. אנחנו מבינים את שני הצדדים. תפקידנו להביא ניתוח מקצועי, מומחיות מקומית ושקט נפשי לאחת הרכישות המשמעותיות בחייכם.",
    servicesKicker: "צוות אחד. כל הפרטים.",
    servicesTitle: "ליווי מלא, מהחיפוש הראשון ועד לניהול הנכס לאורך שנים",
    servicesIntro: "אנחנו מרכזים עבורכם את כל אנשי המקצוע סביב ההשקעה, כדי שכל החלטה תהיה מבוססת וכל פרט יקבל מענה.",
    services: [
      ["01", "איתור הזדמנויות", "נכסים והזדמנויות השקעה נבחרות המותאמות למטרות שלכם."],
      ["02", "ניתוח כלכלי", "בחינה ברורה של כדאיות, סיכונים ופוטנציאל השבחה."],
      ["03", "ניהול משא ומתן", "ייצוג מנוסה להשגת תנאי הרכישה הטובים ביותר שניתן."],
      ["04", "מימון בישראל", "בניית פתרון מימון מותאם באמצעות הבנקים בישראל."],
      ["05", "משפט ומיסוי", "תיאום עם עורכי דין, רואי חשבון, שמאים ואנשי מיסוי מובילים."],
      ["06", "בנקאות ובירוקרטיה", "סיוע בפתיחת חשבון בנק ובכל התהליכים המנהליים הנדרשים."],
      ["07", "חתימה מרחוק", "תיאום ייפוי כוח המאפשר להשלים את התהליך ללא הגעה לישראל."],
      ["08", "סגירה וקבלת מפתח", "ליווי צמוד עד להשלמת האישורים, התשלומים וקבלת המפתח."],
      ["09", "איתור שוכרים", "שיווק וסינון קפדני לאיתור שוכרים איכותיים."],
      ["10", "ניהול שוטף", "ניהול אמין ויום־יומי של הנכס לאחר הרכישה."],
    ],
    whyKicker: "למה ישראל",
    whyTitle: "שוק עמיד.\nנכס בעל משמעות.",
    whyText: "ישראל משלבת ביקוש ארוך טווח לדיור, היצע קרקע מוגבל באזורי ביקוש וכלכלה דינמית. עבור משקיעים מחו״ל זו יכולה להיות הזדמנות משמעותית. ידע מקומי וביצוע מדויק הם חיוניים.",
    reasons: [
      ["↗", "מגמת ערך ארוכת טווח", "לשוק המגורים בישראל היסטוריה ארוכה של עליות מחירים באזורים רבים. ביצועי עבר אינם מבטיחים תוצאות עתידיות."],
      ["◇", "גישה להזדמנויות ייחודיות", "התחדשות עירונית, פריסייל, דירות חדשות מקבלן ועסקאות מחוץ לשוק, כאשר הן זמינות."],
      ["×", "מינוף אחראי", "מימון בנקאי בישראל עשוי להגדיל את פוטנציאל התשואה על ההון, אך גם את הסיכון. תכנון נכון הוא חיוני."],
      ["◎", "פשוט מכל מקום", "תהליך ברור, בטוח ושקוף, גם כשאתם גרים אלפי קילומטרים מישראל."],
    ],
    opportunitiesKicker: "אסטרטגיות נבחרות",
    opportunitiesTitle: "גישה להזדמנות הנכונה, לא רק למה שמפורסם",
    opportunities: [
      ["התחדשות עירונית", "אפשרות להשתתף בשינוי שכונות ובהשבחת נכסים לאורך זמן."],
      ["פריסייל", "גישה מוקדמת לפרויקטים נבחרים לפני השלמתם, בכפוף לתנאי הפרויקט ובחינת הסיכון."],
      ["דירות חדשות", "דירות חדשות מקבלנים מבוססים, לאחר בחינה פרטנית של כל פרויקט."],
      ["Off Market", "הזדמנויות דיסקרטיות מחוץ ללוחות הפומביים, כאשר הן זמינות באמת."],
    ],
    processKicker: "הדרך",
    processTitle: "שותף אחד שלוקח אחריות בכל שלב",
    process: [
      ["01", "מגדירים", "מחדדים מטרות, תקציב, לוחות זמנים, רמת סיכון והחיבור שלכם לישראל."],
      ["02", "מאתרים ובוחנים", "מוצאים הזדמנויות רלוונטיות ובודקים את התמונה הכלכלית, המשפטית והמעשית."],
      ["03", "רוכשים", "מנהלים משא ומתן, מימון, משפט, מיסוי וביצוע מרחוק."],
      ["04", "מנהלים ומשביחים", "אחרי קבלת המפתח, מטפלים בשוכרים, בתפעול ובהשבחה ארוכת טווח."],
    ],
    promiseKicker: "ההבטחה שלנו",
    promiseTitle: "השירות האמיתי שלנו הוא השקט הנפשי שלכם.",
    promiseText: "אתם לא קונים רק דירה. אתם מקבלים שותף מקצועי שמנהל עבורכם את כל מסע ההשקעה בישראל, משלב הרכישה ועד לניהול והשבחת הנכס לאורך זמן.",
    contactKicker: "מתחילים בשיחה",
    contactTitle: "להשקעה שלכם בישראל מגיע שותף מקומי.",
    contactText: "ספרו לנו מה מחבר אתכם לישראל ומה תרצו להשיג. נתחיל בשיחה אישית, דיסקרטית וללא התחייבות.",
    form: { name: "שם מלא", email: "כתובת אימייל", phone: "טלפון / WhatsApp", message: "איזה נכס אתם מחפשים?", submit: "לתיאום שיחה אישית", sending: "שולח...", note: "הפרטים שלכם נשמרים בדיסקרטיות.", success: "תודה. ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.", error: "לא הצלחנו לשלוח את ההודעה. נסו שוב." },
    footer: "Israel Property Partners",
    footerText: "ליווי נדל״ן מקצה לקצה לתושבי חוץ הרוכשים בישראל.",
    disclaimer: "המידע באתר הוא כללי ואינו מהווה ייעוץ השקעות, משפטי, מיסויי או פיננסי. הזדמנויות, מימון ותוצאות משתנים. שווי נכסים עשוי לעלות או לרדת ואין הבטחה לתשואה. לפני כל עסקה נדרשים ייעוץ מקצועי עצמאי ובדיקת נאותות.",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = useMemo(() => content[lang], [lang]);
  const isHe = lang === "he";

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("sending");

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("https://formsubmit.co/ajax/liran12levi@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Form submission failed");
      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main dir={isHe ? "rtl" : "ltr"} className={isHe ? "he" : "en"}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Israel Property Partners home">
          <span className="brand-mark">IPP</span>
          <span>ISRAEL PROPERTY<br />PARTNERS</span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {t.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="lang-switch" onClick={() => { setLang(isHe ? "en" : "he"); setMenuOpen(false); }} aria-label="Change language">
            <span>◉</span> {t.langLabel}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open menu">{menuOpen ? "×" : "☰"}</button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="kicker light">{t.eyebrow}</p>
          <h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-copy">{t.heroText}</p>
          <div className="hero-ctas">
            <a className="button gold" href="#contact">{t.heroCta}<b>→</b></a>
            <a className="text-link" href="#services">{t.heroSecondary}<b>↓</b></a>
          </div>
        </div>
        <div className="trust-strip">
          <div className="wrap trust-inner">
            {t.trust.map((item) => <div key={item}><i>✓</i><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="intro section wrap split">
        <div><p className="kicker">{t.introKicker}</p><h2>{t.introTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
        <div className="intro-side"><p>{t.introText}</p><div className="stone-line"><span>ISRAEL</span><i /></div></div>
      </section>

      <section id="services" className="services section navy">
        <div className="wrap">
          <div className="section-head split">
            <div><p className="kicker light">{t.servicesKicker}</p><h2>{t.servicesTitle}</h2></div>
            <p>{t.servicesIntro}</p>
          </div>
          <div className="service-grid">
            {t.services.map(([num, title, text]) => <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="why-israel" className="why section">
        <div className="wrap why-layout">
          <div className="why-copy"><p className="kicker">{t.whyKicker}</p><h2>{t.whyTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{t.whyText}</p></div>
          <div className="reason-grid">
            {t.reasons.map(([icon, title, text]) => <article key={title}><i>{icon}</i><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="opportunities section sand">
        <div className="wrap">
          <p className="kicker">{t.opportunitiesKicker}</p>
          <h2>{t.opportunitiesTitle}</h2>
          <div className="opportunity-grid">
            {t.opportunities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}
          </div>
        </div>
      </section>

      <section id="process" className="process section">
        <div className="wrap">
          <div className="process-head"><p className="kicker">{t.processKicker}</p><h2>{t.processTitle}</h2></div>
          <div className="process-list">
            {t.process.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="promise" className="promise">
        <div className="promise-image" />
        <div className="promise-shade" />
        <div className="wrap promise-content"><p className="kicker light">{t.promiseKicker}</p><h2>{t.promiseTitle}</h2><p>{t.promiseText}</p><span className="seal">IPP<small>LOCAL<br />PARTNER</small></span></div>
      </section>

      <section id="contact" className="contact section navy">
        <div className="wrap contact-layout">
          <div><p className="kicker light">{t.contactKicker}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
          <form onSubmit={submitForm} className="contact-form">
            <input type="hidden" name="_subject" value="New lead from Israel Property Partners" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_url" value="https://israel-property-partners.vercel.app/#contact" />
            <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="field-row"><label><span>{t.form.name}</span><input required name="name" autoComplete="name" /></label><label><span>{t.form.email}</span><input required type="email" name="email" autoComplete="email" /></label></div>
            <label><span>{t.form.phone}</span><input required name="phone" autoComplete="tel" /></label>
            <label><span>{t.form.message}</span><textarea name="message" rows={3} /></label>
            <button className="button gold" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? t.form.sending : t.form.submit}<b>→</b></button>
            <small role="status">{formStatus === "success" ? t.form.success : formStatus === "error" ? t.form.error : `● ${t.form.note}`}</small>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap footer-top"><div className="brand footer-brand"><span className="brand-mark">IPP</span><span>{t.footer.toUpperCase()}</span></div><p>{t.footerText}</p><a href="#top">↑ TOP</a></div>
        <div className="wrap disclaimer">{t.disclaimer}</div>
      </footer>
    </main>
  );
}
