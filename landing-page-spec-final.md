# OpexGuard Landing Page — FINAL SPECIFICATION
## 30-Round Deep Iteration (Merged from 2 independent creative processes)

**Creative Strategy:** "Intimidation through Mathematical Precision"
The page is a forensic weapon disguised as a website. It must feel like a secure banking terminal crossed with a Tier-1 law firm's evidence room.

---

# FINAL SPECIFICATION

## GLOBAL DESIGN SYSTEM

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-deep` | `#0B1628` | Page background |
| `--bg-card` | `#050B14` | Card surfaces |
| `--border-subtle` | `#1E2D4A` | Card borders, dividers |
| `--accent-blue` | `#3B82F6` | CTAs, links, tech/AI elements |
| `--accent-green` | `#10B981` | Money, savings, success, evidence |
| `--accent-gold` | `#F59E0B` | "Recommended" badge, highlights |
| `--accent-red` | `#EF4444` | Overcharge amounts (what they're being charged) |
| `--text-primary` | `#F8FAFC` | Headlines, primary text |
| `--text-secondary` | `#94A3B8` | Body text, descriptions |
| `--text-muted` | `#64748B` | Microcopy, footnotes |

### Typography
| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Hebrew headlines | Heebo | 700 | H1, H2, CTAs |
| Hebrew body | Heebo | 400 | Paragraphs, descriptions |
| Hebrew light | Heebo | 300 | Subheadlines, secondary |
| Numbers & data | JetBrains Mono | 600 | ALL numbers, currencies, percentages, dates |
| Latin UI | Inter | 500 | English terms (CAPEX, OPEX, etc.) |

**CRITICAL RULE:** Every ₪ symbol, every digit, every percentage on this page MUST use JetBrains Mono. This is the single most important design decision — it creates a subconscious "forensic audit" feel.

### Spacing
- Base unit: 8px
- Section padding: 120px top/bottom (desktop) / 64px (mobile)
- Max content width: 1120px, centered
- Card padding: 32px (desktop) / 20px (mobile)

### Technical Rules
- `dir="rtl"` on `<html lang="he">`
- CSS logical properties only (margin-inline-start, not margin-left)
- All animations: CSS only, respect `prefers-reduced-motion: reduce`
- No external animation libraries
- Target: <2s First Contentful Paint
- Font preloading: Heebo 400/700, JetBrains Mono 600, Inter 500

---

## SECTION 1: HERO

### Purpose
10-second hook. CFO must instantly understand: what this does, why it's credible, and what to do next.

### Layout
Desktop: centered content, max-width 800px. Clean, no split-screen — the scan animation plays behind/around the text.
Mobile: same centered layout, tighter padding.

### Background Animation
Subtle grid of faint monospace numbers (`₪14,200`, `+₪3,800`, `מדד: 104.5`) drifting slowly upward at opacity 0.04. Creates "data being processed" ambient feel without distraction. CSS animation, translateY, infinite loop.
**Mobile:** Disabled for performance.

### Content

**H1 (Heebo 700, 52px desktop / 32px mobile, --text-primary):**
```
המשכיר שלכם גובה יותר מדי.
```

**Subheadline (Heebo 300, 20px / 17px, --text-secondary):**
```
OpexGuard מצליב את חוזה השכירות והחשבוניות שלכם מול נתוני הלמ"ס
ובנק ישראל — ומאתר חיובי CAPEX בלתי חוקיים, פערי מדד, וגילום
שטחים שגוי. אוטומטית.
```
The word `אוטומטית` stands alone at the end. Deliberate — it's the differentiator.

**Money Line (JetBrains Mono 600, 28px, --accent-green):**
```
בממוצע ₪45,000+ בחיובי יתר לכל חוזה, בכל שנה.
```
This line uses the number scrubber animation — digits scramble for 1.2s before locking on `₪45,000+`.

**Primary CTA (Button):**
```
גלו כמה אתם מפסידים ←
```
Solid blue (#3B82F6) background, white text, 18px Heebo 700, 56px height, border-radius 12px.
Hover: brighten + subtle lift (translateY -2px, box-shadow).
Mobile: Full-width.

**Trust Microcopy (12px, --text-muted, below CTA):**
```
מחובר בזמן אמת ללמ"ס ובנק ישראל · ללא התחייבות · אבטחת מידע מלאה
```

### Animations
| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| H1 | Page load | Fade-in + translateY(20px→0) | 0.8s | ease-out |
| Subheadline | Page load | Same, 200ms delay | 0.8s | ease-out |
| Money line | Page load | Number scrubber → lock | 1.2s | linear then snap |
| CTA button | Page load | Same, 600ms delay | 0.6s | ease-out |
| Background grid | Continuous | translateY loop | 30s | linear |

---

## SECTION 2: THE AGITATION (The Accountant's Blindspot)

### Purpose
Create the "why" — explain the specific ways management companies exploit the information gap. This educates the CFO and builds "I had no idea" urgency.

### Content

**H2 (Heebo 700, 36px / 24px):**
```
העיוורון המערכתי של חברות הניהול
```

**Intro (Heebo 400, 17px, --text-secondary):**
```
רואה החשבון שלכם מוודא שהחשבונית תואמת לתשלום. הוא לא מנתח חוזה
בן 80 עמודים מ-2021 מול תשומות הלמ"ס ב-2026. חברות הניהול מנצלות
את הפער הזה:
```

**3 Cards (dark, --bg-card, 1px --border-subtle):**

**Card 1 — Icon: ⚠️ (or CSS shield icon with X)**
**Title (Heebo 700, --accent-red):** `הברחת CAPEX לתוך ה-OPEX`
**Body:** `החלפת מדחסי מיזוג, שיפוץ חזיתות, תיקוני גג — אלו חובת המשכיר. בפועל, הם מגולגלים לדמי הניהול שלכם.`

**Card 2 — Icon: 📉**
**Title (Heebo 700, --accent-red):** `רולטת "המדד הידוע"`
**Body:** `כשהמדד יורד, חברות ניהול "שוכחות" את רצפת המדד שבחוזה וממשיכות לחייב לפי מקדם פיקטיבי.`

**Card 3 — Icon: 📐**
**Title (Heebo 700, --accent-red):** `מלכודת גילום השטחים`
**Body:** `הבניין חצי ריק? נוסחאות שטח מעוותות מאלצות אתכם לסבסד ארנונה וביטוח של משרדים ריקים.`

### Layout
Desktop: 3-column CSS grid, gap 24px.
Mobile: Single column stack.

### Animation
Cards fade-in with 150ms stagger on viewport entry (IntersectionObserver).

---

## SECTION 3: THE ENGINE (How It Works)

### Purpose
Show the process is simple, automated, and deterministic. Kill the "sounds complicated" objection.

### Content

**H2:**
```
מתמטיקה דטרמיניסטית. אפס ניחושים.
```

**4 Steps connected by animated SVG pipeline:**

**Step 1 — Icon: Upload cloud SVG**
**Label:** `סיווג והזנה`
**Desc:** `העלאת חוזי שכירות, דוחות התחשבנות וכרטסות ספקים`

**Step 2 — Icon: Brain/Circuit SVG**
**Label:** `חילוץ משפטי`
**Desc:** `ה-AI מחלץ חוקי הצמדה, החרגות CAPEX ויחסי ברוטו/נטו`

**Step 3 — Icon: Database/Check SVG**
**Label:** `הצלבה רשמית`
**Desc:** `משיכת מדד מחירים לצרכן בזמן אמת והרצת 9 בדיקות מתמטיות`

**Step 4 — Icon: FileCheck SVG**
**Label:** `הפקת ראיות`
**Desc:** `קובץ Excel עם קישורים קריפטוגרפיים למסמכי המקור`

### Pipeline Animation
SVG horizontal line connecting the 4 steps. On viewport entry, the line "fills" with blue color (stroke-dashoffset animation, 2s, cubic-bezier). Each step's icon lights up as the fill reaches it.
Mobile: Vertical pipeline.

---

## SECTION 4: THE EVIDENCE (Cryptographic Admissibility)

### Purpose
This is the "wow" moment. Visual proof that the output is court-ready, not a PDF of guesses.

### Content

**H2:**
```
קביל בבית משפט. לא חוות דעת — ראיות.
```

**Visual: The Cryptographic Link Animation**
This is the centerpiece visual of the entire page.

Left side: CSS mockup of an Excel spreadsheet (3-4 rows, JetBrains Mono):
```
| סעיף          | גבייה    | בפועל   | חריגה    |
| דמי ניהול     | ₪14,500  | ₪12,100 | +₪2,400  |
| הצמדת מדד    | ₪8,200   | ₪7,650  | +₪550    |
| ביטוח מבנה    | ₪3,100   | ₪0      | +₪3,100  |
```
Overcharge column in --accent-red. Total row in --accent-green.

Right side: CSS mockup of a PDF page with Hebrew contract text (blurred/faded) with one paragraph highlighted in a green bounding box.

Between them: An SVG curved line draws itself from the Excel `+₪2,400` cell to the PDF highlighted paragraph. The line is --accent-green, 2px, with a small dot that travels along the path.

**Copy below visual:**
```
כל שקל בדוח מקושר ישירות לפסקה המדויקת בחוזה המקור.
רואה החשבון שלכם יכול לאמת כל ממצא בלחיצה.
```

### Animation
| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Excel rows | Viewport entry | Fade-in, stagger 100ms | 0.5s each |
| SVG trace line | After Excel visible | stroke-dashoffset draw | 1.5s |
| Dot on path | After line draws | Motion along path | 1s |
| PDF highlight | Dot arrives | Glow pulse | 0.5s |

Mobile: Stack vertically (Excel on top, arrow down, PDF below). Simpler straight-line animation.

---

## SECTION 5: BLIND TEASER (Blurred Findings)

### Purpose
Bridge from the physical mailer concept. Show real findings with the smallest one visible and the rest locked. Creates FOMO + demonstrates the product is real.

### Content

**H2:**
```
ממצא לדוגמה מביקורת אמיתית
```

**Visible Finding Card (full detail, green border):**
```
🔓 ממצא חינם
━━━━━━━━━━━━━━━━━━━━━
סוג: הוצאה הונית שחויבה לשוכר
תיאור: החלפת מדחס מיזוג מרכזי — בניין 7
סכום צפוי: ₪0  |  חויב בפועל: ₪4,200
חריגה: +₪4,200
חומרה: בינונית
```

**4 Blurred cards below (progressive blur):**
- Card 2: blur(3px) — almost readable
- Card 3: blur(6px)
- Card 4: blur(10px)
- Card 5: blur(14px)

**Overlay on blurred section:**
```
🔒 4 ממצאים נוספים בשווי ₪41,300
העלו את החוזה שלכם לצפייה בכל הממצאים ←
```
The `₪41,300` is in JetBrains Mono, --accent-green, large (24px).

### Animation
Cards appear sequentially (200ms stagger), each more blurred. The total counter animates: ₪4,200 → ₪12,800 → ₪28,500 → ₪41,300 (scramble effect on each addition).

---

## SECTION 6: ZERO-LIABILITY ARMOR (CFO Objections)

### Purpose
Pre-emptively kill the 3 objections that prevent a CFO from acting. This section makes them feel safe.

### Content

**H2:**
```
אפס חשיפה. אפס סיכון.
```

**3 Accordion toggles (click to expand):**

**Q1:** `"מה אם המשכיר יפעיל את הערבות הבנקאית?"` 
**A1:** `לא יקרה. דמי השכירות משולמים כסדרם. אנחנו תובעים החזר בנפרד — בעילת עשיית עושר. הערבות לא רלוונטית כל עוד אתם משלמים.`

**Q2:** `"יש השלכות מס?"` 
**A2:** `אין. החזרים מוגדרים כפיצוי בגין הפרת חוזה — פטורים ממע"מ לפי הנחיות רשות המיסים. אין פתיחת שנות מס.`

**Q3:** `"זה יהרוס את היחסים עם בעל הנכס?"` 
**A3:** `הידיים שלכם נקיות. התביעה מופנית לרשלנות חברת הניהול, לא למשכיר. ביטוח האחריות המקצועית (E&O) של חברת הניהול מכסה את ההחזר.`

### Layout
Dark cards, click to expand with smooth height transition (max-height + overflow: hidden).
Chevron icon rotates 180° on open.
Desktop: max-width 800px centered.
Mobile: Full-width.

### Animation
Expand: max-height 0→500px, 0.4s, ease-out. Chevron rotate 0.3s.

---

## SECTION 7: PRICING

### Purpose
Make the investment feel like a no-brainer ROI. The price is trivial compared to the recovery.

### Content

**ROI Anchoring Bar (above cards):**
```
ממוצע חיוב יתר: ₪45,000+  ←  עלות ביקורת: ₪1,500  ←  ROI: פי 30
```
All numbers in JetBrains Mono. The `פי 30` pulses once in green on viewport entry.

**H2:**
```
מצאנו את הכסף. איך תרצו לגבות אותו?
```

**Card 1: DIY (--border-subtle border)**
```
המסלול העצמאי
₪1,500 + מע"מ

✅ דוח ביקורת מלא
✅ חבילת ראיות Excel
✅ קישורים קריפטוגרפיים למקור
✅ תבנית מכתב דרישה

[הפק דוח עכשיו →] (navy button)
```

**Card 2: Legal Strike (--accent-green border, glow)**
```
מומלץ
━━━━
תקיפה משפטית
₪2,500 + מע"מ

✅ הכל מהמסלול העצמאי
✅ מכתב התראה משפטי
✅ הצעת פשרה (זיכוי שכר עתידי)
✅ סירוב אישור השתק
✅ ליווי מלא עד לגבייה

[הפעל פרוטוקול תקיפה →] (green button)
```

**Below cards:**
```
💳 תשלום בהעברה בנקאית — כמקובל בעסקאות B2B בישראל
הסריקה הראשונית חינם — תשלום רק אם נמצא כסף.
```

### Layout
Desktop: 2 cards side by side, right card slightly elevated (translateY -8px).
Mobile: Stacked, Legal Strike on top (recommended first).

---

## SECTION 8: FINAL CTA

### Content

**Full-width dark section, gradient top border (blue → green):**

**H2 (Heebo 700, 36px):**
```
כל חודש שעובר — אתם מפסידים עוד כסף.
```

**Desktop CTA:** Large blue button
```
התחילו ביקורת עכשיו ←
```

**Mobile CTA:** Same, but full-width. Also shows:
```
שלחו לי לינק העלאה למייל המשרדי ←
```
(Desktop bridge — captures email for follow-up)

**Contact line (--text-muted):**
```
audit@opexguard.co.il · העלאת מסמכים מאובטחת
```

---

## NAVBAR

Sticky, transparent → glass-morphism (backdrop-filter: blur(16px)) after 100px scroll.
RTL: Logo right, links left.

**Links:** `איך זה עובד` | `ראיות` | `תמחור`
**CTA button:** `התחילו ←` (small blue button)

---

## FOOTER

Minimal single line:
```
© 2026 OpexGuard Enterprise · audit@opexguard.co.il · תנאי שימוש · מדיניות פרטיות
```

---

## MOBILE-SPECIFIC BEHAVIORS

### Desktop Bridge (CRITICAL CONVERSION FEATURE)
On mobile (< 768px), ALL upload/start CTAs change text to:
```
שלחו לי לינק העלאה למייל המשרדי ←
```
Clicking opens a small modal with one email input field. After submission, they receive a link at their work desk where they can upload the PDF.

### Sticky Bottom CTA
After scrolling past hero, a fixed bottom bar appears:
- Height: 64px
- Background: --bg-deep with top border
- Button: `גלו כמה אתם מפסידים ←` (green, full-width minus padding)
- Hides when footer is visible

### Disabled on Mobile
- Background number grid animation
- Number scrubber (show final numbers directly)
- Cryptographic link SVG animation (show static version)
- Parallax effects

---

## SEO

**Title:** `OpexGuard | ביקורת שכירות מסחרית חכמה — איתור חיובי יתר אוטומטי`
**Meta:** `מנוע AI שמצליב חוזי שכירות מסחרית מול נתוני הלמ"ס ובנק ישראל. מזהה חיובי יתר בדמי ניהול, הצמדות שגויות והוצאות הוניות. ראיות קבילות בבית משפט.`

**Keywords:** ביקורת דמי ניהול, חיוב יתר שכירות מסחרית, בדיקת הצמדה למדד, ביקורת חוזה שכירות, OPEX ביקורת, דמי ניהול חיוב יתר, בדיקת חשבוניות שכירות

**Schema.org:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "OpexGuard",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": [
    {"@type": "Offer", "price": "1500", "priceCurrency": "ILS", "name": "ביקורת עצמאית"},
    {"@type": "Offer", "price": "2500", "priceCurrency": "ILS", "name": "תקיפה משפטית"}
  ],
  "description": "מנוע ביקורת AI לאיתור חיובי יתר בשכירות מסחרית"
}
```

**Font Preloading:**
```html
<link rel="preload" href="/fonts/Heebo-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Heebo-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/JetBrainsMono-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
```

---

## 404 PAGE (Bonus)
```
404
הדף הזה לא נמצא.
בדומה לכסף שהמשכיר שלכם גובה ביתר.

[חזרו לדף הבית ←]
```

---

## EMOTIONAL ARC (The Story)
1. **HERO:** Provocation → "You're being robbed"
2. **AGITATION:** Education → "Here's exactly how"
3. **ENGINE:** Relief → "We solve it automatically"
4. **EVIDENCE:** Credibility → "Court-ready, not guesses"
5. **TEASER:** FOMO → "Look what we found... want to see?"
6. **ZERO-LIABILITY:** Safety → "No risk to you"
7. **PRICING:** No-brainer → "₪1,500 to get back ₪45,000"
8. **FINAL CTA:** Urgency → "Every month costs you more"

---

*End of specification. Ready for implementation.*
